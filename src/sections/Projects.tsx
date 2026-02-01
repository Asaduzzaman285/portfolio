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
  stack: string[];
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-accent transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-300"></div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1">{project.category}</p>
            <h3 className="text-xl font-bold text-foreground leading-tight">{project.title}</h3>
          </div>
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-background transition-all group/btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7V17"></path>
            </svg>
          </Link>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.stack.map(tech => (
            <span key={tech} className="text-[10px] font-medium px-2 py-1 bg-background border border-border rounded text-secondary">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false)

  const allProjects: Project[] = [
    {
      id: 1,
      title: "Limited Edition Sneaker Drop",
      category: "Full Stack (Real-time)",
      image: "/images/sneaker-drop.png",
      url: "https://sneaker-drop-frontend.vercel.app",
      stack: ["React", "Node.js", "PostgreSQL", "Socket.io", "Docker"]
    },
    {
      id: 2,
      title: "Lyricist Association Portal",
      category: "Full Stack",
      image: "/images/lyricist_portal.png",
      url: "https://lyricistsassociationbd.com/",
      stack: ["Next.js", "Laravel", "MySQL"]
    },
    {
      id: 3,
      title: "WinText SMS Dashboard",
      category: "Backend",
      image: "/images/wintext_dashboard.png",
      url: "https://portal2.wintextbd.com/",
      stack: ["React", "PHP API", "SMS Integration"]
    },
    {
      id: 4,
      title: "PERP Pilot Exam System",
      category: "LMS",
      image: "/images/perp_lms.png",
      url: "http://mocktest.perppilot.com",
      stack: ["Laravel", "Blade", "Livewire"]
    },
    {
      id: 5,
      title: "LessNever E-commerce",
      category: "E-commerce",
      image: "/images/lessnever_ecommerce.png",
      url: "https://www.lessnever.com/",
      stack: ["Next.js", "Stripe", "Tailwind"]
    },
    {
      id: 6,
      title: "Remote Jobs Aggregator",
      category: "Job Board",
      image: "/images/remote_jobs.png",
      url: "https://github.com/Asaduzzaman285/Remote-jobs",
      stack: ["React", "API Fetching"]
    }
  ];

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 4);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-foreground">Featured Projects</h2>
            <p className="text-secondary max-w-xl">
              Selected works demonstrating expertise in full-stack engineering, performance optimization, and scalable architectures.
            </p>
          </div>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm font-bold text-accent hover:underline flex items-center gap-2"
          >
            {showAll ? 'Show Featured' : 'View All Projects'}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7-7"></path>
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
