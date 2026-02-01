'use client'
import { useState, useEffect } from 'react'
interface Skill {
  name: string;
  description: string;
}
interface SkillCategoryType {
  title: string;
  skills: Skill[];
}
// Custom hook for rotating through skills in each category
function useSkillRotation(skillsLength: number, interval = 3000) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (skillsLength <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % skillsLength);
    }, interval);

    return () => clearInterval(timer);
  }, [skillsLength, interval]);

  return activeIndex;
}

// Separate component for each skill category
function SkillCategory({ category }: { category: SkillCategoryType }) {
  const activeIndex = useSkillRotation(category.skills.length);

  return (
    <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden border border-gray-100">
      {/* Category Header */}
      <div className="bg-gradient-to-r bg-blue-300 px-4 py-3">
        <h3 className="text-xs font-bold text-white uppercase tracking-wider">{category.title}</h3>
      </div>

      {/* Skills Slider */}
      <div className="p-4 h-40 flex flex-col bg-gray-100">
        {/* Skill Name */}
        <div className="text-center mb-2">
          <span className="text-lg font-semibold text-gray-800 inline-block">
            {category.skills[activeIndex].name}
          </span>
        </div>

        {/* Skill Description */}
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-600 text-center text-xs animate-fadeIn px-2">
            {category.skills[activeIndex].description}
          </p>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-1 mt-2">
          {category.skills.map((_, idx: number) => (
            <span
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex
                  ? 'bg-blue-500 w-3'
                  : 'bg-gray-300 w-1.5'
                }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  // Define skill categories with descriptions for each skill
  const skillCategories: SkillCategoryType[] = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", description: "Strong foundation in C programming with experience in data structures and algorithms." },
        { name: "Javascript", description: "Proficient in modern JavaScript with ES6+ features for dynamic web applications." },
        { name: "SQL", description: "Experienced in database query optimization and complex data retrieval." },
        { name: "PHP", description: "Skilled in server-side scripting and building dynamic web applications." }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML-5", description: "Expert in semantic markup and modern HTML5 features." },
        { name: "CSS-3", description: "Advanced styling with animations, flexbox, and grid layouts." },
        { name: "Bootstrap-5.3", description: "Rapid UI development with the latest Bootstrap framework." },
        { name: "Git", description: "Version control and collaborative development workflows." },
        { name: "GitHub", description: "Project management and code collaboration." },
        { name: "AJAX", description: "Asynchronous data loading for seamless user experiences." },
        { name: "JSON", description: "Data interchange format for APIs and configuration." },
        { name: "Webpack", description: "Module bundling and asset optimization." },
        { name: "jQuery", description: "DOM manipulation and event handling." },
        { name: "Redux", description: "State management for complex React applications." },
        { name: "Wordpress", description: "Content management and custom theme development." }
      ]
    },
    {
      title: "Technologies & Databases",
      skills: [
        { name: "React.js", description: "Building interactive UIs with component-based architecture." },
        { name: "Next.js", description: "Full-stack React framework for production-grade applications." },
        { name: "Node.js", description: "Server-side JavaScript runtime for scalable backend systems." },
        { name: "Laravel", description: "PHP framework for robust and elegant web application development." },
        { name: "PostgreSQL", description: "Advanced open-source relational database for complex queries." },
        { name: "MySQL", description: "Reliable relational database management system." }
      ]
    },
    {
      title: "Interests",
      skills: [
        { name: "Machine Learning", description: "Exploring algorithms and data-driven applications." },
        { name: "DevOps", description: "Continuous integration and deployment automation." },
        { name: "NextJS", description: "Advanced features and optimizations for React applications." },
        { name: "NestJS", description: "Progressive Node.js framework for scalable server-side applications." }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {skillCategories.map((category, catIndex) => (
            <SkillCategory
              key={catIndex}
              category={category}

            />
          ))}
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  )
}