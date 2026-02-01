import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-6 pt-20">
      <div className="relative w-32 h-32 mb-8 ring-4 ring-accent/10 rounded-full p-1">
        <Image
          src="/images/profile.jpg"
          alt="Asaduzzaman Asad"
          fill
          sizes="(max-width: 768px) 128px, 128px"
          className="rounded-full object-cover"
          priority
        />
      </div>

      <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-4">Mid-Level Full Stack Engineer</p>

      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-foreground">
        Building Scalable <br className="hidden md:block" />
        <span className="text-accent">Digital Solutions.</span>
      </h1>

      <p className="text-secondary text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-medium">
        I am a dedicated Full Stack Engineer from Dhaka, specialized in architecting high-performance applications with React, Next.js, Node.js, and Laravel.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#contact"
          className="bg-foreground text-background px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-accent/20 transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 group"
        >
          Work Together
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
        <a
          href="/assets/asaduzzaman_resume.pdf"
          download="asaduzzaman_resume.pdf"
          className="bg-card border border-border text-foreground px-8 py-4 rounded-full font-bold hover:bg-border transition-all flex items-center justify-center gap-2"
        >
          Download CV
          <span className="text-sm">↓</span>
        </a>
      </div>
    </section>
  )
}