'use client'

import { useState } from 'react'
import { useStockContext } from '../contexts/StockContext'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function AddStockForm() {
  const [symbol, setSymbol] = useState('')
  const { addStock } = useStockContext()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (symbol.trim()) {
      addStock(symbol.toUpperCase())
      setSymbol('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex space-x-2">
        <Input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          placeholder="Enter stock symbol"
          className="flex-grow"
        />
        <Button type="submit">Add</Button>
      </div>
    </form>
  )
}

