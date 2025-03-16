'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white z-50 py-4">
      <div className="container-fluid px-4">
        <div className="container mx-auto">
          <div className="flex justify-around items-center">
            <Link href="/" className="text-xl font-medium">
              William<span className="text-red-500">.</span>
            </Link>
            
            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="hover:text-gray-600">Home</Link>
              <Link href="/about" className="hover:text-gray-600">About me</Link>
              <Link href="/services" className="hover:text-gray-600">Services</Link>
              <Link href="/work" className="hover:text-gray-600">My work</Link>
              <Link href="/testimonials" className="hover:text-gray-600">Testimonials</Link>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </button>
              <Link 
                href="/contact" 
                className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition flex items-center gap-2"
              >
                Connect <span className="text-lg">→</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} py-4`}>
            <Link href="/" className="block py-2">Home</Link>
            <Link href="/about" className="block py-2">About me</Link>
            <Link href="/services" className="block py-2">Services</Link>
            <Link href="/work" className="block py-2">My work</Link>
            <Link href="/testimonials" className="block py-2">Testimonials</Link>
            <Link href="/contact" className="block py-2">Connect</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}