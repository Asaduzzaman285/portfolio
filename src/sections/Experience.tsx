'use client'

export default function Experience() {
  const experiences = [
    {
      company: "Wintel Limited",
      position: "Junior Full Stack Developer",
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

        <div className="relative border-l border-border ml-4 md:ml-0 md:left-1/2 md:-translate-x-px">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 relative">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-background shadow-sm"></div>

              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto md:text-left'}`}>
                <div className="flex flex-col mb-1">
                  <span className="text-accent font-bold text-xs uppercase tracking-widest mb-2">{exp.period}</span>
                  <h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
                  <h4 className="text-secondary font-medium mb-4">{exp.company}</h4>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl hover:border-accent transition-all duration-300">
                  <p className="text-secondary text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <ul className={`text-xs text-foreground/80 space-y-2 ${index % 2 === 0 ? 'md:list-none' : 'list-none'}`}>
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
