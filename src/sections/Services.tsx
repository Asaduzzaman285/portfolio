'use client'

export default function Services() {
  const services = [
    {
      icon: "🌐",
      title: "Full Stack Development",
      description: "End-to-end web applications built with modern frameworks like React, Next.js, and Laravel. I focus on performance, scalability, and clean architecture.",
      tags: ["React", "Laravel", "MySQL"]
    },
    {
      icon: "⚡",
      title: "Backend Architecture",
      description: "Designing robust APIs and server-side logic that handle high concurrency and complex data workflows with security at the core.",
      tags: ["PHP", "Next Auth", "REST API"]
    },
    {
      icon: "🎨",
      title: "Frontend Engineering",
      description: "Pixel-perfect, responsive interfaces that prioritize user experience and accessibility, optimized for all devices and browsers.",
      tags: ["Tailwind", "TypeScript", "Framer"]
    },
    {
      icon: "📈",
      title: "Scalable Solutions",
      description: "Consulting on and implementing architectures that grow with your business, from database optimization to cloud deployment strategies.",
      tags: ["Optimization", "AWS", "Vercel"]
    }
  ]

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Core Capabilities</h2>
          <p className="text-secondary text-lg max-w-2xl">
            I provide comprehensive engineering solutions to build, scale, and maintain modern digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-border bg-card hover:border-accent transition-all duration-300 group"
            >
              <div className="flex items-center mb-6 gap-4">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center text-xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
              </div>
              <p className="text-secondary leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/5 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
