"use client"
import Link from 'next/link'
import { useCart } from '@/components/CartContext'

export default function Header() {
  const { cart } = useCart()

  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          TechGadgets India
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/cart">Cart ({cart.length})</Link></li>
        </ul>
      </nav>
    </header>
  )
}

