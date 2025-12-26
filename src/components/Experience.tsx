import React, { useState } from 'react';
import { Globe, Twitter, Github, ChevronDown, ChevronUp } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Confidential Startup',
      role: 'Founding Frontend Engineer',
      date: 'August 2025 - Present',
      location: 'United States (Remote)',
      isWorking: true,
      technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'React', 'Figma', 'Vercel', 'AWS', 'Postman', 'Bun'],
      description: [
        'Architected and developed the complete frontend infrastructure for the platform, a comprehensive solution for creating and managing promotional campaigns.',
        'Led a comprehensive codebase refactoring initiative that improved maintainability, scalability, and development velocity across the entire platform.',
        'Integrated and optimized backend API connections, implementing efficient data fetching strategies and error handling mechanisms.',
        'Enhanced user experience and interface design through implementation of consistent design systems, accessibility standards, and performance optimizations.',
      ],
    },
    {
      company: 'Upsurge Labs',
      role: 'Backend Developer Intern',
      date: 'June 2025 - July 2025',
      location: 'Bangalore, India (On-Site)',
      technologies: ['NestJS', 'Postman', 'TypeScript', 'Express'], //
      description: [
        'Backend development for Bhindi.io, a flagship product of Upsurge Labs, focusing on core infrastructure and agent development.', //
        'Engineered and deployed multiple high-performance agents, enhancing product capabilities and user experience.', //
        'Testing agent functionality, authentication, automation, and system stability.', //
        'Streamlined development workflows by optimizing internal tools and maintaining detailed technical documentation.', //
      ],
    },
    {
      company: 'Prepeasy',
      role: 'Founding Engineer',
      date: 'April 2025 - June 2025',
      location: 'Remote (India)',
      technologies: ['React', 'Node.js', 'MongoDB'],
      description: ['Developing core features for the ed-tech platform.', 'Managing database architecture and API integrations.'],
    },
    {
      company: 'Expelee',
      role: 'SDE-1 (Full Stack) Intern',
      date: 'Aug 2023 - April 2025',
      location: 'Dubai, UAE (Remote)',
      technologies: ['Next.js', 'PostgreSQL', 'Prisma'],
      description: ['Contributed to full-stack web applications.', 'Collaborated on UI components and backend logic.'],
    }
  ];

  // Initialize with index 0 to expand the latest experience by default
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    // If clicking the already open one, close it; otherwise open the new one
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div id="experience" className="bg-[#0a0a0a] text-zinc-100 px-6 py-24 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold italic mb-16 text-white">
            Experience
          </h1>
        </header>

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndex === index;
            
            return (
              <div key={index} className="border-b border-zinc-900 pb-6 last:border-0">
                {/* Clickable Header Area */}
                <div 
                  className="flex justify-between items-start cursor-pointer group"
                  onClick={() => toggleExpand(index)}
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center border border-zinc-800 shrink-0">
                      <span className="text-[10px] text-zinc-500">LOGO</span>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {exp.company}
                        </h3>
                        <div className="flex gap-1.5 text-zinc-500">
                          <Globe size={14} className="hover:text-white" />
                          <Github size={14} className="hover:text-white" />
                        </div>
                        {exp.isWorking && (
                          <span className="ml-2 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-medium flex items-center gap-1 border border-emerald-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Working
                          </span>
                        )}
                        {/* Toggle Indicator Icon */}
                        <div className="text-zinc-600 ml-2">
                           {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </div>
                      </div>
                      <p className="text-zinc-400">{exp.role}</p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <p className="text-zinc-400 text-sm">{exp.date}</p>
                    <p className="text-zinc-500 text-sm">{exp.location}</p>
                  </div>
                </div>

                {/* Collapsible Content */}
                {isExpanded && (
                  <div className="mt-6 pl-16 transition-all duration-300 ease-in-out">
                    {exp.technologies && (
                      <div className="mb-6">
                        <p className="text-white text-sm font-bold uppercase tracking-wider mb-4">Technologies & Tools</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span key={tech} className="px-3 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded-lg text-sm text-zinc-300 flex items-center gap-2">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <ul className="space-y-3">
                      {exp.description.map((bullet, i) => (
                        <li key={i} className="flex gap-3 text-zinc-400 leading-relaxed text-[15px]">
                          <span className="text-zinc-600 mt-1.5">▪</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}