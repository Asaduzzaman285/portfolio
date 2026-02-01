'use client'

export default function Experience() {
  const experiences = [
    {
      company: "Wintel Limited",
      position: "Mid Level Full Stack Engineer",
      period: "Dec 2024 – Present",
      description: "Architecting and developing scalable web applications using React/Next.js and PHP-Laravel. Leading API design and integration for robust system communication.",
      achievements: [
        "Architected scalable web applications with Next.js and Laravel.",
        "Designed complex APIs for seamless system communication.",
        "Collaborated with design teams to build pixel-perfect interfaces.",
        "Optimized application performance and implemented CI/CD best practices."
      ]
    },
    {
      company: "SoftBd Ltd.",
      position: "Junior Software Engineer",
      period: "Jun 2024 – Dec 2024",
      description: "Focused on high-impact enterprise applications, implementing efficient backend solutions and responsive frontend interfaces.",
      achievements: [
        "Contributed to 7+ enterprise-level web applications.",
        "Built efficient systems with Laravel, MySQL, and Yajra Datatables.",
        "Developed stateless APIs and optimized database queries using Eloquent ORM.",
        "Refined responsive designs using modern CSS and React."
      ]
    },
    {
      company: "Bangla Drop Shipping",
      position: "Development Intern",
      period: "Jan 2024 – May 2024",
      description: "Gained hands-on experience in full-stack development, mastering modern frontend frameworks and backend logic.",
      achievements: [
        "Built responsive web applications with React and Tailwind CSS.",
        "Implemented secure authentication and CRUD operations in Laravel.",
        "Optimized frontend performance for better user engagement.",
        "Mastered database design and Eloquent ORM fundamentals."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-foreground text-center">Professional Journey</h2>
          <p className="text-secondary text-center max-w-2xl mx-auto">
            A track record of building reliable software and contributing to high-performing engineering teams.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto space-y-12">
          {/* Vertical Guide Line */}
          <div className="absolute left-0 md:left-[180px] top-2 bottom-2 w-px bg-border hidden md:block"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative flex flex-col md:flex-row gap-8 items-start group">

              {/* Date Column */}
              <div className="md:w-[180px] md:text-right flex-shrink-0 md:pr-8 md:pt-1">
                <span className="inline-block px-3 py-1 rounded-full bg-accent/5 text-accent font-bold text-xs tracking-wider border border-accent/10 group-hover:bg-accent group-hover:text-background transition-colors duration-300">
                  {exp.period}
                </span>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-[175px] top-2 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-background hidden md:block z-10 group-hover:scale-125 transition-transform duration-300"></div>

              {/* Content Card */}
              <div className="flex-grow bg-card border border-border p-6 rounded-2xl hover:border-accent/50 hover:shadow-lg transition-all duration-300 w-full">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">{exp.position}</h3>
                    <h4 className="text-secondary font-medium text-sm">{exp.company}</h4>
                  </div>
                </div>

                <p className="text-secondary text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                <ul className="space-y-3">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
