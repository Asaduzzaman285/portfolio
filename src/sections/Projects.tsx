'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  url: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="relative rounded-xl overflow-hidden group bg-white shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] cursor-pointer">
      {/* Card with padding */}
      <div className="p-4">
        {/* Image container with fixed aspect ratio */}
        <div className="rounded-lg overflow-hidden relative">
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={300}
            className="w-full h-auto object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Gradient overlay that appears on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          
          {/* Content Overlay at Bottom - positioned over the image */}
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 flex justify-between items-center shadow-lg border border-white/20 min-h-[60px]">
              <div className="flex-1 pr-3">
                <h3 className="font-semibold text-sm text-gray-800 group-hover:text-gray-900 transition-colors duration-200 truncate leading-tight mb-1">{project.title}</h3>
                <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-200 truncate leading-tight">{project.category}</p>
              </div>
              
              <Link 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-lime-400 to-green-400 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 hover:shadow-lg flex-shrink-0"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="transform group-hover:translate-x-1 transition-transform duration-200">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Shine effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>
        </div>
      </div>

      {/* Animated border that appears on hover */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-lime-400 group-hover:to-green-400 transition-all duration-300"></div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-400/20 to-green-400/20 blur-xl rounded-xl transform scale-105"></div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  
  // Combined all projects into one array
  const allProjects: Project[] = [
    {
      id: 1,
      title: "Frontend Project",
      category: "web design",
      image: "/images/ReactNext.jpg",
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
      image: "/images/ReactNext.jpg",
      url: "http://mocktest.perppilot.com"
    },
    {
      id: 4,
      title: "Scalable Web App",
      category: "admin dashboard",
      image: "/images/ReactNext.jpg",
      url: "http://mocktestadmin.perppilot.com"
    },
    {
      id: 5,
      title: "LessNever Ecommerce Site",
      category: "e-commerce",
      image: "/images/ReactNext.jpg",
      url: "https://www.lessnever.com/"
    },
    {
      id: 6,
      title: "WinText SMS Portal",
      category: "admin portal",
      image: "/images/ReactNext.jpg",
      url: "https://portal2.wintextbd.com/"
    },
    {
      id: 7,
      title: "Housing Management System",
      category: "web application",
      image: "/images/ReactNext.jpg",
      url: "#"
    },
    {
      id: 8,
      title: "Pesticide Management",
      category: "inventory system",
      image: "/images/ReactNext.jpg",
      url: "#"
    },
    {
      id: 9,
      title: "HR Payroll System",
      category: "enterprise solution",
      image: "/images/ReactNext.jpg",
      url: "#"
    },
    {
      id: 10,
      title: "Job Portal Website",
      category: "content management",
      image: "/images/ReactNext.jpg",
      url: "https://github.com/Asaduzzaman285/Remote-jobs"
    }
  ];

  // Show first 4 projects initially, all when showAll is true
  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 4);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-lime-600 font-medium mb-2 tracking-wide uppercase text-sm">My Portfolio</p>
          <h2 className="text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            My Latest Work
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Welcome to my web development portfolio! Explore a collection of projects showcasing
            my expertise in <span className="text-lime-600 font-semibold">Full Stack Development</span>.
          </p>
        </div>
        
        {/* Single project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className="transform transition-all duration-300"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: showAll && index >= 4 ? 'fadeInUp 0.6s ease-out forwards' : undefined
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        
        {/* Show more/less button */}
        <div className="flex justify-center mt-16">
          <button 
            onClick={() => setShowAll(!showAll)} 
            className="group flex items-center gap-3 border-2 border-gray-200 bg-white rounded-full px-8 py-4 text-sm font-medium hover:bg-gradient-to-r hover:from-lime-400 hover:to-green-400 hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            {showAll ? 'Show Less' : 'Show More Projects'} 
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5"
              className={`transition-all duration-300 group-hover:scale-110 ${showAll ? 'rotate-180' : ''}`}
            >
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* CSS for fade-in animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}