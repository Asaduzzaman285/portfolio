import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex mt-5 flex-col items-center justify-center text-center max-w-4xl mx-auto px-4">
      <div className="relative w-32 h-32 mb-6">
        <Image
          src="/images/profile.jpg"
          alt="Asaduzzaman Asad"
          fill
          sizes="(max-width: 768px) 128px, 128px"
          className="rounded-full object-cover"
          priority
        />
      </div>
      <p className="text-lg mb-4">Hi! I'm Asaduzzaman Asad 👋</p>
      <h1 className="text-5xl md:text-6xl font-normal mb-4 leading-tight">
        frontend web developer<br />
        based in london.
      </h1>
      <p className="text-gray-600 max-w-2xl mb-8">
        I am a frontend developer from California, USA with 10 years of experience in multiple 
        companies like Microsoft, Tesla and Apple.
      </p>
      <div className="flex gap-4">
        <a 
          href="#contact" 
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition flex items-center gap-2"
        >
          connect with me →
        </a>
        <a 
          href="/assets/ASADUZZAMAN_ASAD.pdf" 
          download="Asaduzzaman_Asad_CV.pdf"
          className="bg-white border border-gray-200 px-6 py-3 rounded-full hover:bg-gray-50 transition flex items-center gap-2"
        >
          my resume ↓
        </a>
      </div>
    </section>
  )
}