'use client'
import { useState } from 'react'
import Link from 'next/link'

const ProjectCard = ({ project }) => {
  return (
    <div className="relative rounded-lg overflow-hidden group bg-gray-50 shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Card with padding */}
      <div className="p-3">
        {/* Image container with fixed aspect ratio */}
        <div className="rounded-lg overflow-hidden relative">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Content Overlay at Bottom - positioned over the image */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="bg-white rounded-lg p-3 flex justify-between items-center shadow-sm">
              <div>
                <h3 className="font-medium text-xs text-gray-800">{project.title}</h3>
                <p className="text-xs text-gray-500">{project.category}</p>
              </div>
              
              <Link 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-lime-400 flex items-center justify-center"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  
  const initialProjects = [
    {
      id: 1,
      title: "Frontend Project",
      category: "web design",
      image: "/images/profile.jpg",
      url: "https://lyricistsassociationbd.com/"
    },
    {
      id: 2,
      title: "Backend Development",
      category: "admin panel",
      image: "/images/ReactNext.jpg",
      url: "https://admin.lyricistsassociationbd.com/"
    },
    {
      id: 3,
      title: "Full Stack Application",
      category: "web development",
      image: "/images/next.png",
      url: "http://mocktest.perppilot.com"
    },
    {
      id: 4,
      title: "Scalable Web App",
      category: "admin dashboard",
      image: "/images/next.png",
      url: "http://mocktestadmin.perppilot.com"
    }
  ]

  const additionalProjects = [
    {
      id: 5,
      title: "Housing Management System",
      category: "web application",
      image: "/images/next.png",
      url: "#"
    },
    {
      id: 6,
      title: "Pesticide Management",
      category: "inventory system",
      image: "/images/next.png",
      url: "#"
    },
    {
      id: 7,
      title: "HR Payroll System",
      category: "enterprise solution",
      image: "/images/next.png",
      url: "#"
    },
    {
      id: 8,
      title: "Job Portal Website",
      category: "content management",
      image: "/images/next.png",
      url: "https://github.com/Asaduzzaman285/Remote-jobs"
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-gray-600 mb-4">My portfolio</p>
        <h2 className="text-4xl font-normal text-center mb-8">My latest work</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Welcome to my web development portfolio! Explore a collection of projects showcasing
          my expertise in front-end development.
        </p>
        
        {/* Initial card-style projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {initialProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* Additional projects with the same design */}
        {showAll && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
        
        <div className="flex justify-center mt-12">
          <button 
            onClick={() => setShowAll(!showAll)} 
            className="flex items-center gap-2 border border-gray-200 bg-white rounded-full px-6 py-2 text-sm hover:bg-gray-50 transition"
          >
            {showAll ? 'Show less' : 'Show more'} 
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className={`transition-transform ${showAll ? 'rotate-180' : ''}`}
            >
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}