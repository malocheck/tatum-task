import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Request method Not Allowed' }), { status: 405 })
  }

  try {
    const body = await req.json() // Parse the JSON body
    const { symbol, basePair, btcAmount } = body

    if (!symbol || !basePair || !btcAmount) {
      return new Response(
        JSON.stringify({ error: 'Missing required body parameters: symbol, basePair, btcAmount' }),
        { status: 400 }
      )
    }

    const response = await fetch(
      `https://api.tatum.io//v4/data/rate/symbol?symbol=${symbol}&basePair=${basePair}`,
      {
        method: 'GET',
        headers: {
          'x-api-key': process.env.NEXT_PUBLIC_TATUM_TESTNET_API_KEY!,
        },
      }
    )

    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'Failed to fetch data from external API' }), {
        status: 502,
      })
    }

    const data = await response.json()

    if (!data.value) {
      return new Response(JSON.stringify({ error: 'Data for the target currency not found' }), {
        status: 404,
      })
    }

    //you enter the bitcoin amount and get te amount in CZK

    const oneBTCInCZK = data.value
    const btcInCZK = btcAmount * parseFloat(oneBTCInCZK)

    return new Response(JSON.stringify({ btcInCZK }), { status: 200 })
  } catch (error) {
    console.error('Error parsing request body:', error)
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), { status: 400 })
  }
}
