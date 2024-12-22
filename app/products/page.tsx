'use client'

import { useCart } from '@/components/CartContext'
import Image from 'next/image'

const products = [
  { id: 1, name: 'SmartPhone X', price: 49999, image: '/placeholder.svg' },
  { id: 2, name: 'Laptop Pro', price: 89999, image: '/placeholder.svg' },
  { id: 3, name: 'Wireless Earbuds', price: 7999, image: '/placeholder.svg' },
  { id: 4, name: 'Smart Watch', price: 15999, image: '/placeholder.svg' },
  { id: 5, name: 'Tablet Ultra', price: 35999, image: '/placeholder.svg' },
  { id: 6, name: 'Bluetooth Speaker', price: 4999, image: '/placeholder.svg' },
]

export default function Products() {
  const { addToCart } = useCart()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow-lg">
            <Image src={product.image} alt={product.name} width={200} height={200} className="mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="mb-4">&apos;{product.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

