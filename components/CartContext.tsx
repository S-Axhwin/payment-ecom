'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface Product {
  id: number
  name: string
  price: number
}

interface CartContextType {
  cart: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([])

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product])
  }

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

