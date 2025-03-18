'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false) // Close mobile menu when a link is clicked
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed w-full bg-white z-50 py-4 shadow-sm">
      <div className="container-fluid px-4">
        <div className="container mx-auto">
          <div className="flex justify-around items-center">
          <Link href="/" className="text-xl font-medium border-2 border-black px-4 py-2 rounded-md">
              Asaduzzaman Asad<span className="text-red-500">.</span>
            </Link>
            
            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('hero')} className="hover:text-gray-600 cursor-pointer">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-gray-600 cursor-pointer">About me</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-gray-600 cursor-pointer">Services</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-gray-600 cursor-pointer">My work</button>
              <button onClick={() => scrollToSection('experience')} className="hover:text-gray-600 cursor-pointer">Testimonials</button>
              <button 
  onClick={() => scrollToSection('skills')} 
  className="relative w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 group"
>
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
  <div className="absolute top-full mt-2 hidden group-hover:flex flex-col items-center">
    <div className="w-3 h-3 -mb-2 rotate-45 bg-black"></div>
    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg rounded-md w-max">
      Examine the Skills
    </span>
  </div>
</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition flex items-center gap-2 cursor-pointer"
              >
                Connect <span className="text-lg">→</span>
              </button>
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
            <button onClick={() => scrollToSection('hero')} className="block py-2 w-full text-left">Home</button>
            <button onClick={() => scrollToSection('about')} className="block py-2 w-full text-left">About me</button>
            <button onClick={() => scrollToSection('services')} className="block py-2 w-full text-left">Services</button>
            <button onClick={() => scrollToSection('projects')} className="block py-2 w-full text-left">My work</button>
            <button onClick={() => scrollToSection('experience')} className="block py-2 w-full text-left">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="block py-2 w-full text-left">Connect</button>
          </div>
        </div>
      </div>
    </nav>
  )
}