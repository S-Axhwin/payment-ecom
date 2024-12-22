'use client'

import { useCart } from '@/components/CartContext'
import Link from 'next/link'

export default function Cart() {
  const { cart, removeFromCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4 mb-8">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b pb-2">
                <span>{item.name} - ₹{item.price.toFixed(2)}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="text-xl font-bold mb-4">Total: ₹{total.toFixed(2)}</div>
          <Link href="/checkout" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Proceed to Checkout
          </Link>
        </>
      )}
    </div>
  )
}

