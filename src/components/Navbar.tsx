'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 py-4 ${
      scrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Asaduzzaman<span className="text-accent">.Asad</span>
          </Link>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-accent transition-colors cursor-pointer">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-accent transition-colors cursor-pointer">About</button>
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-accent transition-colors cursor-pointer">Services</button>
            <button onClick={() => scrollToSection('projects')} className="text-sm font-medium hover:text-accent transition-colors cursor-pointer">Projects</button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-foreground text-background px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 mt-4 bg-card rounded-2xl shadow-xl`}>
          <div className="p-6 space-y-4">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left font-medium">Home</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left font-medium">About</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left font-medium">Services</button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left font-medium">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left font-medium text-accent">Contact</button>
          </div>
        </div>
      </div>
    </nav>
  )
}
