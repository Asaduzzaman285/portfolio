'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'

export default function About() {
  const [isOpen, setIsOpen] = useState({
    languages: false,
    education: false,
    projects: false
  })
  
  const projectSliderRef = useRef<HTMLDivElement>(null)
  const [currentProject, setCurrentProject] = useState(0)

  const languages = {
    title: 'Languages',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'PHP', 'Laravel']
  }

  const education = {
    title: 'Education',
    items: [
      {
        degree: 'B.Tech in Computer Science',
        school: 'Green University of Bangladesh',
        year: '2019-2023'
      },
      {
        degree: 'Higher Secondary Certificate',
        school: 'Govt. Science College',
        year: '2017-2019'
      },
      {
        degree: 'Secondary School Certificate',
        school: 'Ideal School and College',
        year: '2015-2017'
      }
    ]
  }

  const projects = {
    title: 'Projects',
    items: [
      {
        name: 'Lyricists Association BD',
        description: 'Official website for Bangladesh Lyricists Association with member management and content features.',
        image: '/images/projects/lyricist.jpg',
        liveLink: 'https://lyricistsassociationbd.com/',
        github: 'https://github.com/username/lyricist'
      },
      {
        name: 'Landing Page',
        description: 'Modern responsive landing page design with animations and interactive elements.',
        image: '/images/projects/landing.jpg',
        liveLink: 'https://asaduzzaman285.github.io/landing-Page-01/',
        github: 'https://github.com/asaduzzaman285/landing-Page-01'
      }
    ]
  }

  const handleNextProject = () => {
    if (currentProject < projects.items.length - 1) {
      setCurrentProject(currentProject + 1)
      projectSliderRef.current?.scrollTo({
        left: (currentProject + 1) * projectSliderRef.current.offsetWidth,
        behavior: 'smooth'
      })
    }
  }

  const handlePrevProject = () => {
    if (currentProject > 0) {
      setCurrentProject(currentProject - 1)
      projectSliderRef.current?.scrollTo({
        left: (currentProject - 1) * projectSliderRef.current.offsetWidth,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-center text-gray-600 mb-4">Introduction</p>
        <h2 className="text-4xl font-normal text-center mb-12">About me</h2>
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="md:w-1/3 md:h-full">
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              width={400}
              height={600}
              className="rounded-2xl object-cover w-full h-full"
              style={{ objectPosition: 'center top' }}
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-gray-600 text-sm mb-8">
              I am an experienced Frontend Developer with over a decade of professional expertise in 
              the field. Throughout my career, I have had the privilege of collaborating with prestigious 
              organizations, contributing to their success and growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                          {/* Languages Card */}
                          <button
                onClick={() => setIsOpen({ ...isOpen, languages: true })}
                className="p-4 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-md transition text-left flex flex-col justify-center h-[150px]"
              >
                <div className="text-lg mb-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-50">
                  <span>💻</span>
                </div>
                <h3 className="font-medium text-sm mb-1">Languages</h3>
                <p className="text-xs text-gray-600 line-clamp-2">HTML, CSS, JavaScript, React.js, Next.js</p>
              </button>
              
              {/* Education Card */}
              <button
                onClick={() => setIsOpen({ ...isOpen, education: true })}
                className="p-4 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-md transition text-left flex flex-col justify-center h-[150px]"
              >
                <div className="text-lg mb-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-50">
                  <span>🎓</span>
                </div>
                <h3 className="font-medium text-sm mb-1">Education</h3>
                <p className="text-xs text-gray-600 line-clamp-2">B.Tech in Computer Science</p>
              </button>

              {/* Projects Card */}
              <button
                onClick={() => setIsOpen({ ...isOpen, projects: true })}
                className="p-4 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-md transition text-left flex flex-col justify-center h-[150px]"
              >
                <div className="text-lg mb-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-50">
                  <span>💼</span>
                </div>
                <h3 className="font-medium text-sm mb-1">Projects</h3>
                <p className="text-xs text-gray-600 line-clamp-2">Built more than 5 projects</p>
              </button>
            </div>

        
          </div>
        </div>
        <div>
              <h3 className="text-lg font-medium text-center mb-4">Tools I use</h3>
              <div className="flex flex-wrap gap-5">
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
                  <Image src="/images/vscode.png" alt="VS Code" width={32} height={32} />
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
                  <Image src="/images/react.png" alt="React" width={32} height={32} />
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
                  <Image src="/images/nextjs.png" alt="Next.js" width={32} height={32} />
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
                  <Image src="/images/tailwind.png" alt="Tailwind CSS" width={32} height={32} />
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
                  <Image src="/images/laravel.png" alt="Laravel" width={32} height={32} />
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
                  <Image src="/images/mysql.png" alt="Laravel" width={32} height={32} />
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
                  <Image src="/images/next.png" alt="Laravel" width={32} height={32} />
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
                  <Image src="/images/postman.png" alt="Laravel" width={32} height={32} />
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
                  <Image src="/images/kaggle.png" alt="Laravel" width={32} height={32} />
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
                  <Image src="/images/redux.png" alt="Laravel" width={32} height={32} />
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
                  <Image src="/images/rabbit.png" alt="Laravel" width={32} height={32} />
                </div>
              </div>
            </div>
 

        {/* Languages Modal */}
        <Dialog open={isOpen.languages} onClose={() => setIsOpen({ ...isOpen, languages: false })} className="relative z-50">
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white rounded-2xl p-8 max-w-lg w-full">
              <Dialog.Title className="text-2xl font-medium mb-4">Languages & Skills</Dialog.Title>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {languages.items.map((lang, index) => (
                  <div key={index} className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                    <p className="font-medium">{lang}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setIsOpen({ ...isOpen, languages: false })}
                className="mt-6 px-4 py-2 rounded-full bg-black text-white"
              >
                Close
              </button>
            </Dialog.Panel>
          </div>
        </Dialog>

        {/* Education Modal */}
        <Dialog open={isOpen.education} onClose={() => setIsOpen({ ...isOpen, education: false })} className="relative z-50">
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white rounded-2xl p-8 max-w-4xl w-full">
              <Dialog.Title className="text-2xl font-medium mb-4">Education</Dialog.Title>
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
                {education.items.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex-none w-80 p-6 rounded-xl bg-gray-50 snap-center hover:bg-gray-100 transition"
                  >
                    <h3 className="font-medium text-xl mb-2">{item.degree}</h3>
                    <p className="text-gray-600">{item.school}</p>
                    <p className="text-gray-500">{item.year}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setIsOpen({ ...isOpen, education: false })}
                className="mt-6 px-4 py-2 rounded-full bg-black text-white"
              >
                Close
              </button>
            </Dialog.Panel>
          </div>
        </Dialog>

             {/* Projects Modal */}
             <Dialog open={isOpen.projects} onClose={() => setIsOpen({ ...isOpen, projects: false })} className="relative z-50">
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white rounded-2xl p-6 max-w-3xl w-full">
              <Dialog.Title className="text-2xl font-medium mb-4">Projects</Dialog.Title>
              
              <div 
                ref={projectSliderRef}
                className="overflow-hidden"
              >
                <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentProject * 100}%)` }}>
                  {projects.items.map((project, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="rounded-xl overflow-hidden border border-gray-200">
                        <div className="relative h-[250px]">
                          <iframe
                            src={project.liveLink}
                            title={project.name}
                            className="w-full h-full border-0"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-lg mb-2">{project.name}</h3>
                          <p className="text-gray-600 mb-3 text-sm">{project.description}</p>
                          <div className="flex gap-3">
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-1.5 text-sm rounded-full bg-black text-white"
                            >
                              Open in New Tab
                            </a>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-1.5 text-sm rounded-full border border-gray-200"
                            >
                              GitHub
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between mt-4">
                <button
                  onClick={handlePrevProject}
                  disabled={currentProject === 0}
                  className="px-3 py-1.5 text-sm rounded-full bg-gray-100 disabled:opacity-50"
                >
                  ← Previous
                </button>
                <div className="flex gap-2">
                  {projects.items.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentProject(index)
                        projectSliderRef.current?.scrollTo({
                          left: index * projectSliderRef.current.offsetWidth,
                          behavior: 'smooth'
                        })
                      }}
                      className={`w-2 h-2 rounded-full ${currentProject === index ? 'bg-black' : 'bg-gray-300'}`}
                      aria-label={`Go to project ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNextProject}
                  disabled={currentProject === projects.items.length - 1}
                  className="px-3 py-1.5 text-sm rounded-full bg-gray-100 disabled:opacity-50"
                >
                  Next →
                </button>
              </div>
              
              <button
                onClick={() => setIsOpen({ ...isOpen, projects: false })}
                className="mt-4 px-3 py-1.5 text-sm rounded-full bg-black text-white"
              >
                Close
              </button>
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </section>
  )
}