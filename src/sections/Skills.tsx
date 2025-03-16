export default function Skills() {
    const skillCategories = [
      {
        title: "Programming Languages",
        skills: ["C", "Javascript", "SQL", "PHP"]
      },
      {
        title: "Web Technologies",
        skills: ["HTML-5", "CSS-3", "Bootstrap-5.3", "Git", "GitHub", "AJAX", "JSON", "Webpack", "jQuery", "Redux", "Wordpress"]
      },
      {
        title: "Frameworks",
        skills: ["Bootstrap", "React-JS", "Next-JS", "Laravel", "MySQL (RDBMS)"]
      },
      {
        title: "Interests",
        skills: ["Machine Learning", "DevOps", "NextJS", "NestJS"]
      }
    ]
  
    return (
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-blue-600">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {skill}
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