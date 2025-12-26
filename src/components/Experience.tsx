import { useState } from 'react';
import { Globe, ChevronDown, ChevronUp } from 'lucide-react';

import logo1 from '/src/components/Assets/logo1.png';
import logo2 from '/src/components/Assets/logo2.png';
import logo3 from '/src/components/Assets/logo3.png';

export default function Experience() {
  const experiences = [
    {
      company: 'Self-Employed',
      role: 'DevOps Engineer',
      date: 'Oct 2025 - Present',
      logo: logo1,
      isWorking: true,
      technologies: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'GitHub Actions', 'ArgoCD', 'Prometheus', 'Grafana', 'Nginx Ingress'],
      description: [
        'Architected and automated production-grade cloud infrastructure on AWS (EC2, EKS, RDS, S3, IAM, VPC) using Terraform, Docker, and Kubernetes, enabling scalable and secure workloads.',
        'Engineered multi-node Kubernetes clusters using kubeadm, configuring control plane, worker nodes, CNI networking, ingress, and cluster hardening for microservices environments.',
        'Built CI/CD and GitOps pipelines with GitHub Actions and ArgoCD, enabling automated build, test, deploy workflows and zero-downtime Kubernetes rollouts.',
        'Implemented monitoring and reliability practices using Prometheus and Grafana performed staging/production troubleshooting (pods, networking, CI failures), improving system stability and delivery speed.',
      ],
    },
    {
      company: 'Softinator TechLabs',
      role: 'DevOps Intern',
      date: 'April 2025 - Sept 2025',
      logo: logo2,
      location: 'Indore (On-Site)',
      technologies: ['AWS', 'Terraform', 'GitHub Actions', 'Kubernetes (EKS)'],
      description: [
        'Provisioned scalable AWS infrastructure (EC2, S3, RDS, EKS) using Terraform, establishing a highly consistent Infrastructure-as-Code foundation and ensuring repeatable, fault-tolerant deployments across environments.',
        'Designed end-to-end CI/CD pipelines with GitHub Actions, reducing deployment time by ~55% and improving release reliability.',
        'Configured secure multi-cluster AWS architectures for a fintech platform, ensuring high availability, scalability, and compliance readiness.',
      ],
    },
    {
      company: 'Code For GovTech',
      role: 'DevRel Intern',
      date: 'Oct 2024 - May 2025',
      logo: logo3,
      location: 'Remote (India)',
      technologies: ['Digital Public Infrastructure', 'Digital Public Goods', 'Discord-community'],
      description: [
        'Led DevRel initiatives for national Digital Public Infrastructure programs authored technical blogs/videos reaching 5K+ developers.',
        'Scaled Augtoberfest community 0 - 5,000+ members in 7 days, hosting live Q&A sessions and supporting open-source contributors.'
      ],
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div id="experience" className="bg-[#0a0a0a] text-zinc-100 px-6 py-8 font-sans">
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
                <div 
                  className="flex justify-between items-start cursor-pointer group"
                  onClick={() => toggleExpand(index)}
                >
                  <div className="flex gap-4">
                    {/* FIXED LOGO CONTAINER */}
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-zinc-800 shrink-0 overflow-hidden">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`} 
                        className="w-full h-full object-contain" 
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {exp.company}
                        </h3>
                        <div className="flex gap-1.5 text-zinc-500">
                          <Globe size={14} className="hover:text-white" />
                        </div>
                        {exp.isWorking && (
                          <span className="ml-2 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-medium flex items-center gap-1 border border-emerald-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Working
                          </span>
                        )}
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