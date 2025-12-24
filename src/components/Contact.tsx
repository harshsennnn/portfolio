import { Github, Linkedin, FileText, Mail } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://linkedin.com',
    },
    {
      icon: FileText,
      label: 'Resume',
      link: '#',
    },
    {
      icon: Mail,
      label: 'Email',
      link: 'mailto:harsh@example.com',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-20 flex flex-col">
      <div className="max-w-5xl mx-auto flex-1 flex flex-col">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold italic mb-6">Get in Touch</h1>
        <p className="text-gray-400 text-lg mb-16">
          Interested in collaboration or just want to say hi? Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-auto">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <a
                key={method.label}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-8 flex items-center gap-4 hover:border-cyan-400/50 hover:bg-zinc-900/70 transition-all group"
              >
                <Icon size={24} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                <span className="text-lg font-medium">{method.label}</span>
              </a>
            );
          })}
        </div>

        <footer className="mt-20 pt-8 border-t border-zinc-800 text-center text-gray-500 text-sm">
          © 2025 Harsh. Built with passion and caffeine.
        </footer>
      </div>
    </div>
  );
}
