import { ipAddress, next } from '@vercel/functions'
import { NextRequest } from 'next/server'

const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

export const config = {
  matcher: '/api/:path*',
}

export default async function proxy(request: NextRequest) {
  const ip = ipAddress(request) || '127.0.0.1'

  const currentTime = Date.now()

  // Get or initialize the rate limit data for the IP
  const rateLimitData = rateLimitMap.get(ip) || { count: 0, resetTime: currentTime + 10 * 1000 }

  if (currentTime > rateLimitData.resetTime) {
    // Reset the rate limit window
    rateLimitData.count = 0
    rateLimitData.resetTime = currentTime + 10 * 1000
  }

  rateLimitData.count += 1

  if (rateLimitData.count > 5) {
    // Exceeded the limit
    return new Response(JSON.stringify({ error: 'Too many requests. Please try again later.' }), {
      status: 429,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  // Update the rate limit data
  rateLimitMap.set(ip, rateLimitData)

  return next()
}
