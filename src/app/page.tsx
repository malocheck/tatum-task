'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Home() {
  const [btcAmount, setBtcAmount] = useState('')
  const [czkRate, setCzkRate] = useState('')
  const [error, setError] = useState('')

  const handleExchange = async (symbol: string, basePair: string, amount: string) => {
    if (!amount || parseFloat(amount) <= 0) {
      setError('Please enter a valid BTC amount greater than 0.')
      return
    }
    setError('')

    try {
      const response = await fetch('/api/btc-amount-in-czk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ symbol, basePair, btcAmount: amount }),
      })
      const data = await response.json()
      switch (response.status) {
        case 400:
        case 405:
        case 404:
        case 502:
          setError(data.error)
      }
      setCzkRate(data.btcInCZK.toFixed(2))
    } catch (error) {
      console.error('Error fetching exchange rates:', error)
    }
  }

  return (
    <div className="p-4 w-full max-w-md mx-auto flex flex-col justify-center">
      <h1 className="text-2xl font-bold mb-4">What is your BTC value in CZK?</h1>
      <form
        onSubmit={e => {
          e.preventDefault()
          handleExchange('BTC', 'CZK', btcAmount)
        }}
        className="space-y-4"
      >
        <div>
          <label htmlFor="btcAmount" className="block text-sm font-medium mb-1">
            BTC Amount:
          </label>
          <Input
            className="w-full"
            type="number"
            id="btcAmount"
            value={btcAmount}
            onChange={e => setBtcAmount(e.target.value)}
            placeholder="Enter BTC amount"
          />
        </div>
        <Button className="w-full cursor-pointer font-bold" type="submit">
          Get My BTC Value in CZK
        </Button>
      </form>
      {czkRate && !error && (
        <div className="mt-4">
          <p className="text-2xl font-bold text-center">Your BTC amount in CZK</p>
          <p className="text-3xl font-bold text-center">{czkRate} Kč</p>
        </div>
      )}
      {error && (
        <div className="mt-4 text-red-500 text-2xl text-center">
          <p>{error}</p>
        </div>
      )}
    </div>
  )
}
