'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { Dialog } from '@headlessui/react'

export default function Services() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentService, setCurrentService] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null)

  const services = [
    {
      icon: "🌐",
      title: "Web design",
      description: "Pixel perfect responsive front-end development using React and Next.js with modern design principles.",
      slides: [
        {
          title: "HTML & CSS Foundation",
          content: "We start with semantic HTML5 and modern CSS3 to build a solid foundation for your web application."
        },
        {
          title: "Responsive Design",
          content: "Using Tailwind CSS, we ensure your website looks perfect on all devices from mobile to desktop."
        },
        {
          title: "React & Next.js",
          content: "Leveraging React and Next.js for dynamic, fast-loading interfaces with excellent SEO capabilities."
        }
      ]
    },
    {
      icon: "⚡",
      title: "Backend development",
      description: "Fast and reliable backend solutions with PHP and Laravel, focusing on performance and security.",
      slides: [
        {
          title: "PHP & Laravel",
          content: "Building robust APIs and backend systems using Laravel's elegant syntax and powerful features."
        },
        {
          title: "Database Design",
          content: "Optimized database architecture for performance and scalability using MySQL or PostgreSQL."
        },
        {
          title: "Security & Performance",
          content: "Implementing best practices for security and performance optimization in all backend systems."
        }
      ]
    },
    {
      icon: "🔄",
      title: "Full stack development",
      description: "Enhancing both frontend and backend seamlessly for a cohesive development experience.",
      slides: [
        {
          title: "End-to-End Solutions",
          content: "Creating seamless experiences by integrating frontend and backend technologies."
        },
        {
          title: "API Development",
          content: "Building RESTful or GraphQL APIs that connect your frontend and backend systems efficiently."
        },
        {
          title: "Full Project Lifecycle",
          content: "Managing the entire development process from planning to deployment and maintenance."
        }
      ]
    },
    {
      icon: "📱",
      title: "Scalable Web Apps",
      description: "Building scalable web applications that grow with your business needs and user demands.",
      slides: [
        {
          title: "Architecture Planning",
          content: "Designing systems that can scale horizontally and vertically as your user base grows."
        },
        {
          title: "Performance Optimization",
          content: "Implementing caching, lazy loading, and other techniques to maintain speed at scale."
        },
        {
          title: "Cloud Deployment",
          content: "Utilizing AWS, Azure, or Google Cloud for reliable, scalable hosting solutions."
        }
      ]
    }
  ]

  const openModal = (index: number) => {
    setCurrentService(index)
    setCurrentSlide(0)
    setIsOpen(true)
  }


  const nextSlide = () => {
    if (currentSlide < services[currentService].slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      setCurrentSlide(0) // Loop back to first slide
    }
    resetSlideTimer()
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    } else {
      setCurrentSlide(services[currentService].slides.length - 1) // Loop to last slide
    }
    resetSlideTimer()
  }

  const resetSlideTimer = useCallback(() => {
    if (slideTimerRef.current) {
      clearTimeout(slideTimerRef.current)
    }
    slideTimerRef.current = setTimeout(() => {
      nextSlide()
    }, 5000) // 5 seconds
  }, [currentService, services]);

  useEffect(() => {
    resetSlideTimer();
    return () => {
      if (slideTimerRef.current) clearTimeout(slideTimerRef.current);
    }
  }, [currentSlide, resetSlideTimer]);

  useEffect(() => {
    if (isOpen) {
      resetSlideTimer()
    }
    
    return () => {
      if (slideTimerRef.current) {
        clearTimeout(slideTimerRef.current)
      }
    }
  }, [isOpen, resetSlideTimer])

  return (
    <section id="services" className="py-20">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-gray-600 mb-4">What I offer</p>
        <h2 className="text-4xl font-normal text-center mb-8">My services</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        I offer full stack development services with a strong focus on Laravel, React.js, and Vue.js. From pixel-perfect frontend design to secure backend systems and scalable web apps, I deliver complete solutions tailored to your needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              onClick={() => openModal(index)}
              className={`p-5 rounded-xl border border-gray-100 hover:shadow-lg transition h-[220px] flex flex-col cursor-pointer transform hover:-translate-y-1 duration-200 ${
                index === 0 ? 'bg-purple-50' : 'bg-white'
              }`}
            >
              <div className="flex items-center mb-3 gap-2">
                <div className="w-8 h-8 bg-pink-500 text-white rounded-lg flex items-center justify-center text-sm flex-shrink-0">
                  {service.icon}
                </div>
                <h3 className="text-base font-medium">{service.title}</h3>
              </div>
              <p className="text-gray-600 text-xs mb-4 flex-grow">
                {service.description}
              </p>
              <div className="text-l flex items-center text-gray-700 hover:text-pink-500 transition mt-auto">
                <span>Read more</span> <span className="ml-1 group-hover:translate-x-0.5 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-xl p-6 max-w-md w-full shadow-xl">
            <Dialog.Title className="text-xl font-medium mb-2 flex justify-between items-center">
              {services[currentService]?.title}
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </button>
            </Dialog.Title>
            
            <div className="bg-amber-50 rounded-lg p-4 mb-4 h-[200px] flex items-center justify-center relative overflow-hidden shadow-inner">
              <div className="absolute inset-0 bg-[url('/images/chalkboard-texture.png')] opacity-10"></div>
              
              <div className="relative z-10 text-center px-4">
                <h4 className="text-lg font-medium mb-2">
                  {services[currentService]?.slides[currentSlide]?.title}
                </h4>
                <p className="text-sm text-gray-700">
                  {services[currentService]?.slides[currentSlide]?.content}
                </p>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex space-x-1">
                {services[currentService]?.slides.map((_, index) => (
                  <div 
                    key={index} 
                    className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-pink-500' : 'bg-gray-300'}`}
                  ></div>
                ))}
              </div>
              
              <div className="flex space-x-2">
                <button 
                  onClick={prevSlide} 
                  className="p-2 rounded-full text-gray-700 hover:bg-gray-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6"></path>
                  </svg>
                </button>
                <button 
                  onClick={nextSlide} 
                  className="p-2 rounded-full text-gray-700 hover:bg-gray-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  )
}