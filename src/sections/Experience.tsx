'use client'
import { useState, useEffect, useRef } from 'react'

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const experiences = [
    {
      company: "Wintel Limited",
      position: "Junior Full Stack Developer",
      period: "December 2024 – Ongoing",
      description: "Working as a full-stack developer, I build scalable web applications using modern technologies and collaborate with cross-functional teams to deliver high-quality solutions.",
      responsibilities: [
        "Architect and develop scalable web applications using React/Next.js and PHP-Laravel",
        "Design and integrate complex APIs for robust system communication",
        "Collaborate with teams to translate Figma designs into functional interfaces",
        "Optimize application performance and implement best practices",
        "Participate in code reviews and mentor junior developers"
      ],
      keywords: ["React", "Next.js", "Laravel", "APIs", "Figma"]
    },
    {
      company: "SoftBd Ltd.",
      position: "Junior Software Engineer",
      period: "June 2024 – December 2024",
      description: "At SoftBd Ltd., I focused on creating responsive web applications and implementing efficient backend solutions using Laravel and PHP.",
      responsibilities: [
        "Created responsive designs using Bootstrap 5 and React/Next.js",
        "Built efficient applications with Laravel Framework",
        "Developed web applications using PHP, MySQL with Yajra Datatable",
        "Worked with stateless APIs and Laravel's Eloquent ORM",
        "Contributed to 7+ enterprise level Web applications"
      ],
      keywords: ["Bootstrap", "Laravel", "PHP", "MySQL", "APIs"]
    },
    {
      company: "Bangla Drop Shipping",
      position: "Intern",
      period: "January 2024 – May 2024",
      description: "During my internship at Bangla Drop Shipping, I honed my skills in front-end development and took my first steps into backend development, working towards becoming a full-stack developer.",
      responsibilities: [
        "Mastered HTML, CSS, Bootstrap, Tailwind CSS, and React.js",
        "Built responsive and interactive web applications",
        "Optimized performance and enhanced user experience",
        "Explored backend development with PHP Laravel",
        "Worked with MySQL and Eloquent ORM, implementing authentication and CRUD operations"
      ],
      keywords: ["HTML", "CSS", "React.js", "Tailwind", "Laravel"]
    }
  ];
  // Auto-rotate experiences every 10 seconds if autoRotate is true
  useEffect(() => {
    if (autoRotate) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % experiences.length);
      }, 10000);
    }
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoRotate, experiences.length]);
  
  // Handle manual selection
  const handleSelectExperience = (index:number) => {
    setActiveIndex(index);
    setAutoRotate(false); // Stop auto-rotation when user interacts
    
    // Clear existing timer
    if (timerRef.current) clearInterval(timerRef.current);
  };
  


  // Function to highlight keywords in text
  const highlightKeywords = (text: string, keywords: string[]) => {
    let highlightedText = text;
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      highlightedText = highlightedText.replace(regex, `<span class="text-blue-600 font-medium">${keyword}</span>`);
    });
    return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side - Experience details */}
          <div className="lg:w-1/2 flex items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-700 w-full h-[450px] overflow-auto">
              <div className="animate-fadeIn h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-2 h-16 bg-blue-600 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{experiences[activeIndex].position}</h3>
                    <h4 className="text-lg text-blue-600">{experiences[activeIndex].company}</h4>
                  </div>
                </div> 
                
                <p className="text-gray-600 mb-6 text-sm border-l-2 border-gray-200 pl-3 italic">
                  {experiences[activeIndex].period}
                </p>
                
                <h5 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wider">Key Responsibilities:</h5>
                <ul className="space-y-3 text-sm flex-grow">
                  {experiences[activeIndex].responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span className="text-gray-700">{highlightKeywords(resp, experiences[activeIndex].keywords)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Right side - Experience cards that look like books/documents */}
          <div className="lg:w-1/2 relative h-[500px] flex items-center justify-center">
            <div className="relative w-full h-[450px]">
              {experiences.map((exp, index) => {
                // Calculate position based on active index
                const position = (index - activeIndex + experiences.length) % experiences.length;
                
                // Different styles based on position
                let zIndex, transform, opacity, shadow;
                
                if (position === 0) {
                  // Front book
                  zIndex = 30;
                  transform = 'translateY(0) rotateZ(0deg) scale(1)';
                  opacity = 1;
                  shadow = 'shadow-2xl';
                } else if (position === 1) {
                  // Middle book
                  zIndex = 20;
                  transform = 'translateY(40px) translateX(30px) rotateZ(6deg) scale(0.95)';
                  opacity = 0.8;
                  shadow = 'shadow-xl';
                } else {
                  // Back book
                  zIndex = 10;
                  transform = 'translateY(80px) translateX(60px) rotateZ(12deg) scale(0.9)';
                  opacity = 0.6;
                  shadow = 'shadow-lg';
                }
                
                return (
                  <div
                    key={index}
                    className={`absolute top-0 left-0 w-full bg-white rounded-lg ${shadow} transition-all duration-700 cursor-pointer overflow-hidden hover:brightness-105`}
                    style={{
                      zIndex,
                      transform,
                      opacity,
                    }}
                    onClick={() => handleSelectExperience(index)}
                  >
                    <div className="h-[450px] flex flex-col">
                      {/* Book/document design with a colored header */}
                      <div className="h-32 bg-gradient-to-r from-red-500 to-red-600 flex items-end p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-x-10 -translate-y-10"></div>
                        <h3 className="text-white font-bold text-2xl relative z-10">{exp.company}</h3>
                      </div>
                      
                      <div className="flex-1 p-6">
                        <h4 className="font-semibold text-lg mb-3">{exp.position}</h4>
                        <p className="text-sm text-gray-600 mb-4 border-l-2 border-red-300 pl-3">{exp.period}</p>
                        <p className="text-sm line-clamp-6 leading-relaxed">{exp.description}</p>
                        
                        {/* Page corner fold effect */}
                        <div className="absolute bottom-0 right-0 w-16 h-16 bg-gray-100 shadow-inner" 
                          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}>
                        </div>
                      </div>
                    </div>
                    
                    {/* Visual indicator for active book */}
                    {position === 0 && (
                      <div className="absolute top-4 right-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center animate-pulse shadow-md">
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* Navigation controls - improved for better user understanding */}
            <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center pb-4">
              <p className="text-sm text-gray-500 mb-2">Click to view experience</p>
              <div className="flex justify-center gap-4">
                {experiences.map((exp, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelectExperience(index)}
                    className={`transition-all duration-300 px-3 py-1 rounded-full ${
                      index === activeIndex 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                    aria-label={`View experience at ${exp.company}`}
                  >
                    <span className="text-xs">{index + 1}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add keyframe animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  )
}