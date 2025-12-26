import { Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Kubernetes Homelab',
      description: 'Self-hosted, multi-node Kubernetes homelab using Raspberry Pies with production-style networking, CI/CD deployments, monitoring, and hands-on SRE troubleshooting.',
      image: '/src/components/Assets/homelab.png',
      technologies: ['Kubernetes', 'Docker', 'Prometheus', 'Grafana'],
      status: 'All Systems Operational',
      statusColor: 'text-emerald-500',
      dotColor: 'bg-emerald-500',
      links: { demo: '#', github: 'https://github.com/harshsennnn/Homelab-Kubernetes-Cluster-RaspberryPi' }
    },
    {
      title: 'Observability Platform',
      description: 'Designed a full observability stack using OpenTelemetry, Prometheus, Grafana, and ELK to monitor, debug, and respond to production-like incidents.',
      image: '/src/components/Assets/observability.png',
      technologies: ['OpenTelemetry', 'Elasticsearch', 'Kibana', 'Prometheus'],
      status: 'Building',
      statusColor: 'text-red-500', // Fixed to match operational status
      dotColor: 'bg-red-500',
      links: { demo: '#', github: '#' }
    },
    {
      title: 'DevOps Cert Gen',
      description: 'Cloud-native microservices platform with automated CI/CD, Kubernetes deployments, and scalable storage for certificate generation.',
      image: '/src/components/Assets/CICD.png',
      technologies: ['Go', 'React', 'AWS EKS', 'Terraform'],
      status: 'All System Operational',
      statusColor: 'text-emerald-500',
      dotColor: 'bg-emerald-500',
      links: { demo: '#', github: 'https://github.com/harshsennnn/DevOps-Certificate-Generator' }
    }
  ];

  return (
    <div id="projects" className="bg-[#0a0a0a] text-zinc-100 px-6 py-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 sm:mb-12">
          {/* Consistency: Large Italic Heading matching Experience.tsx */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold italic mb-8 sm:mb-16 text-white">
            Projects
          </h1>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-[#111111] border border-zinc-900 rounded-xl overflow-hidden hover:border-zinc-700 transition-all group flex flex-col"
            >
              {/* Image Area */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-3">
                <div className="w-full h-full bg-zinc-900 rounded-md border border-white/5 overflow-hidden shadow-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-white tracking-tight">{project.title}</h3>
                  <div className="flex gap-2 text-zinc-500">
                    {/* <Globe size={16} className="hover:text-white cursor-pointer transition-colors" /> */}
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="hover:text-white cursor-pointer transition-colors" />
                    </a>
                  </div>
                </div>

                <p className="text-zinc-400 text-xs leading-relaxed mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>

                {/* Tech Section */}
                <div className="mb-5">
                  <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider mb-2">Technologies</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, i) => (
                      <div key={i} className="w-6 h-6 bg-zinc-900 rounded border border-zinc-800 flex items-center justify-center p-1" title={tech}>
                        <div className="w-full h-full bg-zinc-700 rounded-[1px] opacity-40" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status and Action Section */}
                <div className="flex items-center justify-between pt-3 border-t border-zinc-900">
                  <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 ${project.statusColor} text-[9px] font-medium`}>
                    <span className={`w-1 h-1 rounded-full ${project.dotColor} animate-pulse`} />
                    {project.status}
                  </div>
                  
                  {/* <button className="flex items-center gap-1 text-zinc-500 text-[11px] font-bold hover:text-white transition-colors group/btn">
                    View Details
                    <ArrowUpRight size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Consistency: Centered Action Button */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          {/* <button className="px-5 py-2.5 bg-[#111111] border border-zinc-800 rounded-lg text-[11px] font-bold text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all uppercase tracking-widest">
            Show all projects
          </button> */}
        </div>
      </div>
    </div>
  );
}