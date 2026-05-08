import {
  SiKubernetes, SiGrafana, SiPrometheus, SiGithubactions,
  SiHelm, SiTerraform, SiArchlinux, SiRaspberrypi,
  SiJavascript, SiPostgresql, SiArgo, SiOpentelemetry, SiNginx, SiRancher, SiK3S, SiJenkins,
} from 'react-icons/si';
import { GrDocker, GrMysql } from "react-icons/gr";
import { FaAws, FaReact, FaInfinity } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";

interface HomeProps {
  onGetInTouch: () => void;
}

export default function Home({ onGetInTouch }: HomeProps) {
  const expertise = ['DevOps Engineering', 'FreeLancer', 'Open-Source Contributor'];

  // Tech array with brand colors
  const technologies = [
    { name: 'AWS', icon: FaAws, color: '#FF9900' },
    { name: 'Docker', icon: GrDocker, color: '#2496ED' },
    { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
    { name: 'KubeADM', icon: FaAws, color: '#FF9900' },
    { name: 'Rancher', icon: SiRancher, color: '#1876faff' },
    { name: 'K3s', icon: SiK3S, color: '#FF9900' },
    { name: 'CI/CD', icon: FaInfinity, color: '#007ACC' },
    { name: 'Jenkins', icon: SiJenkins, color: '#faececff' },
    { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
    { name: 'Helm', icon: SiHelm, color: '#0F1689' },
    { name: 'Terraform', icon: SiTerraform, color: '#7B42BC' },
    { name: 'Prometheus', icon: SiPrometheus, color: '#E6522C' },
    { name: 'Grafana', icon: SiGrafana, color: '#F46800' },
    { name: 'Go', icon: FaGolang, color: '#00ADD8' },
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Arch Linux', icon: SiArchlinux, color: '#1793D1' },
    { name: 'Raspberry Pi', icon: SiRaspberrypi, color: '#C51A4A' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'MySQL', icon: GrMysql, color: '#4479A1' },
    { name: 'ArgoCD', icon: SiArgo, color: '#EF7B4D' },
    { name: 'OpenTelemetry', icon: SiOpentelemetry, color: '#FFFFFF' },
    { name: 'Nginx', icon: SiNginx, color: '#009639' },
  ];

  const categories = [
    { label: "CLOUD & INFRASTRUCTURE", items: ["AWS", "Terraform", "Kubernetes", "Docker", "Rancher", "K3s", "Helm"] },
    { label: "AUTOMATION & GITOPS", items: ["CI/CD", "GitHub Actions","Jenkins", "ArgoCD", "Nginx"] },
    { label: "MONITORING & DATA", items: ["Prometheus", "Grafana", "OpenTelemetry", "PostgreSQL", "MySQL"] },
    { label: "DEVELOPMENT & TOOLS", items: ["Go", "React", "JavaScript", "Arch Linux", "Raspberry Pi"] }
  ];

  return (
    <div className="bg-zinc-950 text-white px-6 pt-32 pb-12 flex flex-col">
      <div className="max-w-6xl mx-auto flex-1 flex flex-col justify-center">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold italic mb-8">
          Hello, I'm HARSH<span className="text-cyan-400">_</span>
        </h1>

        <div className="flex flex-col sm:flex-row flex-wrap gap-x-4 gap-y-2 mb-12 text-gray-400 italic text-lg border-l-2 border-cyan-400/30 pl-4">
          {expertise.map((item, index) => (
            <span key={item}>
              {item}{index < expertise.length - 1 && <span className="hidden sm:inline mx-2 text-zinc-800">|</span>}
            </span>
          ))}
        </div>

        {/* Persistent Subheading */}
        <div className="space-y-10 mb-16">
          <h2 className="text-gray-500 uppercase text-sm tracking-[0.2em] font-medium">
            ENGINEERING WITH
          </h2>

          {/* Categories Stacked Vertically (One on One) */}
          <div className="flex flex-col gap-10">
            {categories.map((cat) => (
              <div key={cat.label} className="space-y-4">
                <h3 className="text-zinc-600 uppercase text-[10px] font-bold tracking-widest">
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {technologies
                    .filter(t => cat.items.includes(t.name))
                    .map((tech) => {
                      const Icon = tech.icon;
                      return (
                        <div
                          key={tech.name}
                          className="px-4 py-2 bg-zinc-900/40 border border-zinc-800 rounded-full flex items-center gap-2 text-gray-400 hover:border-cyan-400/50 hover:text-white transition-all cursor-default"
                        >
                          {/* brand color applied */}
                          <Icon size={16} style={{ color: tech.color }} />
                          <span className="text-xs font-medium">{tech.name}</span>
                        </div>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={onGetInTouch}
          className="w-fit px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white rounded-full font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-105 active:scale-95"
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
}