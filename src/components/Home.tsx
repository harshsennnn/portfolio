import {
  Container,
  Layers,
  Cloud,
  GitBranch,
  Activity,
  Zap,
  Code2,
  Database,
  Infinity,
} from 'lucide-react';

import { SiKubernetes,
         SiGrafana,
         SiPrometheus,
         SiGithubactions,
         SiHelm,
         SiTerraform,
 } from 'react-icons/si';

 import { GrDocker } from "react-icons/gr";
 import { FaAws } from "react-icons/fa";


interface HomeProps {
  onGetInTouch: () => void;
}

export default function Home({ onGetInTouch }: HomeProps) {
  const expertise = [
    'DevOps Engineering',
    // 'MLOps Engineering',
    'Cloud-Native',
    // 'CI/CD Pipelines',
    'Open-Source Contributor',
  ];

  const technologies = [
    { name: 'Docker', icon: GrDocker },
    { name: 'Kubernetes', icon: SiKubernetes },
    { name: 'AWS', icon: FaAws },
    { name: 'CI/CD', icon: Infinity },
    { name: 'GitHub Actions', icon: SiGithubactions },
    { name: 'Helm', icon: SiHelm },
    { name: 'Terraform', icon: SiTerraform },
    { name: 'Prometheus', icon: SiPrometheus },
    { name: 'Grafana', icon: SiGrafana },
    { name: 'Go', icon: Code2 },
    { name: 'React', icon: Code2 },
    { name: 'LocalStack', icon: Database },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 pt-32 pb-32 flex flex-col">
      <div className="max-w-6xl mx-auto flex-1 flex flex-col justify-center">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold italic mb-8">
          Hello, I'm Harsh
          <span className="text-cyan-400">_</span>
        </h1>

        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-12 text-gray-400 italic text-lg">
          {expertise.map((item, index) => (
            <span key={item}>
              {item}
              {index < expertise.length - 1 && <span className="mx-2">|</span>}
            </span>
          ))}
        </div>

        {/* <p className="text-gray-400 italic text-lg mb-16">Open-Source Contributor</p> */}

        <div className="space-y-6 mb-16">
          <h2 className="text-gray-500 uppercase text-sm tracking-wider">
            ENGINEERING WITH
          </h2>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="cursor-pointer px-4 py-2 sm:px-5 sm:py-2.5 bg-zinc-900/50 border border-zinc-800 rounded-full flex items-center gap-2 text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-all text-sm sm:text-base"
                >
                  <Icon size={18} />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={onGetInTouch}
          className="w-fit px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white rounded-full font-medium transition-colors"
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
}
