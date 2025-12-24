import { Wrench, ShoppingCart, Lock, Rocket, ExternalLink, Star } from 'lucide-react';

export default function Projects() {
  const projects = [

    {
      icon: Wrench,
      title: 'Kubebuilder Automated Update Action',
      badge: 'Open-Source',
      description:
        'A GitHub Action to automate scaffold updates using 3-way merges, preserving custom operator logic.',
      highlights: 'GitHub Actions, Kubebuilder, YAML patching, CI automation',
      link: '#',
    },
    {
      icon: ShoppingCart,
      title: 'ONDC Shopify Adapter',
      description:
        'ONDC-compliant adapter enabling seller platform integration with automated catalog sync and order management.',
      highlights: 'Fastify, Docker, Shopify API, Microservices',
      link: '#',
    },
    {
      icon: Lock,
      title: 'AWS Cognito LocalStack Auth System',
      description:
        'Local AWS Cognito with Docker Compose + Fastify to support email-password auth and OAuth (coming soon).',
      highlights: 'Cognito, LocalStack, Docker Compose, JWT',
      link: '#',
    },
    {
      icon: Rocket,
      title: 'CI/CD Auto-Deploy Pipeline',
      description:
        'A fully automated pipeline deploying staging environments on push to develop.',
      highlights: 'Docker, Jenkins/GitHub Actions, Kubernetes, Helm',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold italic mb-6">Projects</h1>
        <p className="text-gray-400 text-lg mb-16">
          Building infrastructure and automation tools for modern cloud-native environments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-8 hover:border-cyan-400/50 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-cyan-400">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <a
                    href={project.link}
                    className="text-gray-500 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                {project.badge && (
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                    <Star size={16} />
                    <span>{project.badge}</span>
                  </div>
                )}

                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                <div>
                  <p className="text-gray-500 text-sm mb-2">HIGHLIGHTS:</p>
                  <p className="text-gray-400 text-sm">{project.highlights}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
