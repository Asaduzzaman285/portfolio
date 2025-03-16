export default function Projects() {
    const projects = [
      {
        title: "Housing Management System",
        description: "A system for managing tenant details, rental payments, and property records. Developed using Laravel for Backend APIs and Next.js for the frontend. Includes automated payment reminders and tenant reports.",
        tech: ["Laravel", "Next.js", "API", "MySQL"]
      },
      {
        title: "Pesticide and Dealer Management System",
        description: "An inventory and dealer tracking system for pesticide distribution. Built with Laravel Blade and Yajra Datatables for dynamic data management.",
        tech: ["Laravel", "Blade", "Yajra Datatables"]
      },
      {
        title: "HR Payroll System",
        description: "A platform to automate payroll and attendance management. Currently transitioning from Voyager views to Laravel's static logic for better performance and flexibility.",
        tech: ["Laravel", "Voyager", "MySQL"]
      },
      {
        title: "Bangladesh Lyricist Association",
        description: "A comprehensive platform for lyrical content management with both public and admin interfaces.",
        tech: ["Next.js", "Laravel", "API"],
        links: {
          live: "https://bangladeshlyricistassociation.com",
          admin: "https://admin.bangladeshlyricistassociation.com"
        }
      }
    ]
  
    return (
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.links && (
                  <div className="flex gap-4">
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" 
                      className="text-blue-600 hover:text-blue-800">
                      View Live
                    </a>
                    <a href={project.links.admin} target="_blank" rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800">
                      Admin Panel
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }