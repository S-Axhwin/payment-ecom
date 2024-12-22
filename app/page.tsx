import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to TechGadgets India</h1>
      <p className="mb-8 text-xl">Your one-stop shop for cutting-edge electronics and gadgets in India.</p>
      <div className="mb-8">
        <Image src="/placeholder.svg" alt="Featured Product" width={400} height={300} className="mx-auto rounded-lg shadow-lg" />
      </div>
      <p className="mb-8">Discover our wide range of products, from smartphones to smart home devices, all at competitive prices.</p>
      <Link href="/products" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        View Our Products
      </Link>
    </div>
  )
}

