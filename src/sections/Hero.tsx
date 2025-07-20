import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen  flex mt-14  flex-col items-center justify-center text-center max-w-4xl mx-auto px-4">
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
      <p className="text-lg mb-4">Hi! I&apos;m Asaduzzaman Asad 👋</p>
      <h1 className="text-5xl md:text-6xl font-normal mb-4 leading-tight">
        An Web Artisan<br />
        based in dhaka.
      </h1>
      <p className="text-gray-600 max-w-2xl mb-8">
        I am a full stack developer from Dhaka, Bangladesh with 2 years of experience in 
        creating cutting-edge software solutions with React, Next.js, PHP, Laravel and other 
        associated technologies. I consider myself a enthusiastic and dedicated developer who is always dreamed to be a Quality Artisan Of Web Apps.
      </p>
      <div className="flex gap-4">
        <a 
          href="#contact" 
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition flex items-center gap-2"
        >
          Connect with Me →
        </a>
        <a 
          href="/assets/ASADUZZAMAN_ASAD.pdf" 
          download="Asaduzzaman_Asad_CV.pdf"
          className="bg-white border border-gray-200 px-6 py-3 rounded-full hover:bg-gray-50 transition flex items-center gap-2"
        >
          My Resume ↓
        </a>
      </div>
    </section>
  )
}