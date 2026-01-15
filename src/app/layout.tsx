import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  variable: '--font-poppins-sans',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'What is your BTC value in CZK? App',
  description:
    'When you enter the bitcoin amount, you get the amount in CZK so you immediately know what is the value of your coins in Czech Crowns.',
  keywords: 'BTC, CZK, cryptocurrency, bitcoin value',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins} antialiased`}>{children}</body>
    </html>
  )
}
