import Navbar from '@/components/Navbar'
import About from '@/sections/About'
import Contact from '@/sections/Contact'
import Experience from '@/sections/Experience'
import Hero from '@/sections/Hero'
import Projects from '@/sections/Projects'
import Services from '@/sections/Services'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  )
}