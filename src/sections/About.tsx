'use client'
import Image from 'next/image'

export default function About() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'PHP', 'Laravel', 'MySQL', 'Tailwind CSS']

  const education = [
    {
      degree: 'B.Tech in Computer Science',
      school: 'Green University of Bangladesh',
      year: '2019-2023'
    },
    {
      degree: 'Higher Secondary Certificate',
      school: 'Govt. Science College',
      year: '2017-2019'
    }
  ]

  const tools = [
    { name: 'VS Code', icon: '/images/vscode.png' },
    { name: 'React', icon: '/images/react.png' },
    { name: 'Next.js', icon: '/images/nextjs.png' },
    { name: 'Tailwind', icon: '/images/tailwind.png' },
    { name: 'Laravel', icon: '/images/laravel.png' },
    { name: 'MySQL', icon: '/images/mysql.png' },
    { name: 'Postman', icon: '/images/postman.png' }
  ]

  return (
    <section id="about" className="py-24 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-foreground">About Me</h2>
            <div className="space-y-6 text-secondary text-lg leading-relaxed">
              <p>
                I am an experienced Full Stack Developer with 3 years of professional expertise.
                I specialize in building robust, scalable web applications that solve real-world problems.
              </p>
              <p>
                My approach combines clean architecture with modern performance-oriented technologies like Next.js and Laravel,
                ensuring a seamless experience from front to back.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6 text-foreground">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-semibold text-secondary">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Education & Tools */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold mb-8 text-foreground flex items-center gap-2">
                <span className="w-8 h-8 bg-accent/10 text-accent rounded-lg flex items-center justify-center text-sm">🎓</span>
                Education
              </h3>
              <div className="space-y-6">
                {education.map((item, index) => (
                  <div key={index} className="border-l-2 border-accent/20 pl-6 py-1">
                    <h4 className="font-bold text-foreground">{item.degree}</h4>
                    <p className="text-secondary text-sm">{item.school}</p>
                    <p className="text-accent text-xs font-bold mt-1 tracking-wider uppercase">{item.year}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-8 text-foreground flex items-center gap-2">
                <span className="w-8 h-8 bg-accent/10 text-accent rounded-lg flex items-center justify-center text-sm">🛠️</span>
                Professional Stack
              </h3>
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-4">
                {tools.map((tool) => (
                  <div key={tool.name} className="group relative border border-border bg-card p-3 rounded-xl hover:border-accent transition-colors flex items-center justify-center">
                    <Image src={tool.icon} alt={tool.name} width={32} height={32} className="grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100" />
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-accent opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-tighter">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
