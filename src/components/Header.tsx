import { useState } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (ref: React.RefObject<HTMLDivElement>) => void;
  refs: {
    homeRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    experienceRef: React.RefObject<HTMLDivElement>;
    blogRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
  };
}

export default function Header({ onNavigate, refs }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Work', ref: refs.experienceRef },
    { label: 'Projects', ref: refs.projectsRef },
    { label: 'Experience', ref: refs.experienceRef },
    { label: 'Blog', ref: refs.blogRef },
    { label: 'About', ref: refs.aboutRef },

  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <nav className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-full px-6 py-3 flex items-center gap-6 w-full max-w-3xl">
        <button
          onClick={() => onNavigate(refs.homeRef)}
          className="text-cyan-400 font-bold text-xl hover:text-cyan-300 transition-colors"
        >
          H
        </button>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => onNavigate(item.ref)}
              className="px-4 py-1.5 rounded-full transition-all text-gray-400 hover:text-white hover:bg-zinc-800"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3 ml-auto">
          <a
            href="https://github.com/harshsennnn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/harshsen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://drive.google.com/file/d/1TEWmCrNSmcKdohswKY1Jue1W7C9iYeq9/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors px-4 py-1.5 rounded-full text-sm border border-zinc-700 hover:border-cyan-400/50"
          >
            Resume
          </a>
        </div>

        <div className="md:hidden flex items-center ml-auto">
          <button onClick={toggleMenu} className="text-gray-400 hover:text-white transition-colors">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden fixed top-24 left-4 right-4 bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-lg p-4">
          <div className="flex flex-col items-center gap-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  onNavigate(item.ref);
                  toggleMenu();
                }}
                className="px-4 py-2 rounded-full transition-all text-gray-400 hover:text-white hover:bg-zinc-800 w-full text-center"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
            <a
              href="https://drive.google.com/file/d/1TEWmCrNSmcKdohswKY1Jue1W7C9iYeq9/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-full text-sm border border-zinc-700 hover:border-cyan-400/50 mt-2 w-full text-center"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
