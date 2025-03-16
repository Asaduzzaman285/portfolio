export default function Experience() {
    const experiences = [
      {
        company: "Wintel Limited",
        position: "Junior Full Stack Developer",
        period: "December 2024 – Ongoing",
        responsibilities: [
          "Architect and develop scalable web applications using React/Next.js and PHP-Laravel",
          "Design and integrate complex APIs for robust system communication",
          "Collaborate with teams to translate Figma designs into functional interfaces",
          "Optimize application performance and implement best practices",
          "Participate in code reviews and mentor junior developers"
        ]
      },
      {
        company: "SoftBd Ltd.",
        position: "Junior Software Engineer",
        period: "June 2024 – December 2024",
        responsibilities: [
          "Created responsive designs using Bootstrap 5 and React/Next.js",
          "Built efficient applications with Laravel Framework",
          "Developed web applications using PHP, MySQL with Yajra Datatable",
          "Worked with stateless APIs and Laravel's Eloquent ORM",
          "Contributed to 7+ enterprise level Web applications"
        ]
      }
    ]
  
    return (
      <section id="experience" className="py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-2xl font-bold">{exp.position}</h3>
                <h4 className="text-xl text-blue-600 mb-2">{exp.company}</h4>
                <p className="text-gray-600 mb-4">{exp.period}</p>
                <ul className="list-disc list-inside space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-700">{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }