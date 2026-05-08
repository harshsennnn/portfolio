import { useState } from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { Github, Linkedin, Menu, X as CloseIcon } from 'lucide-react';

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
    { label: 'Blog', ref: refs.blogRef },
    { label: 'About', ref: refs.aboutRef },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      {/* - w-fit: Ensures the navbar is only as wide as its content
        - gap-8: Provides consistent spacing between logo, links, and icons
      */}
      <nav className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-full px-6 py-3 flex items-center gap-8 w-fit shadow-2xl transition-all">
        
        {/* Logo */}
        <button
          onClick={() => {
            onNavigate(refs.homeRef);
            if (isMenuOpen) setIsMenuOpen(false);
          }}
          className="text-cyan-400 font-bold text-xl hover:text-cyan-300 transition-colors shrink-0"
        >
          H
        </button>

        {/* Desktop Navigation Links + Resume */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => onNavigate(item.ref)}
              className="px-4 py-1.5 rounded-full transition-all text-gray-400 hover:text-white hover:bg-zinc-800 text-sm font-medium"
            >
              {item.label}
            </button>
          ))}
          
          {/* Resume link placed immediately after navigation items */}
          <a
            href="https://drive.google.com/file/d/1TEWmCrNSmcKdohswKY1Jue1W7C9iYeq9/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full transition-all text-gray-400 hover:text-white hover:bg-zinc-800 text-sm font-medium"
          >
            Resume
          </a>
        </div>

        {/* Social Icons - Integrated FaXTwitter */}
        <div className="hidden md:flex items-center gap-4 border-l border-zinc-800 pl-6 ml-2">
          <a href="https://github.com/harshsennnn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/harshsen" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="https://x.com/yupsharsh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaXTwitter size={18} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-400 hover:text-white transition-colors">
            {isMenuOpen ? <CloseIcon size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay and Content */}
      {isMenuOpen && (
        <>
          {/* Background Overlay: Closes menu when clicking anywhere else */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden" 
            onClick={() => setIsMenuOpen(false)} 
          />

          {/* Menu Card */}
          <div className="md:hidden fixed top-24 left-4 right-4 bg-zinc-900/95 backdrop-blur-md border border-zinc-800 rounded-2xl p-6 shadow-2xl z-50">
            <div className="flex flex-col items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    onNavigate(item.ref);
                    setIsMenuOpen(false); // Closes menu after clicking section
                  }}
                  className="text-gray-400 hover:text-white text-lg font-medium"
                >
                  {item.label}
                </button>
              ))}
              
              <a
                href="https://drive.google.com/file/d/1TEWmCrNSmcKdohswKY1Jue1W7C9iYeq9/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)} // Closes menu after clicking resume
                className="text-gray-400 hover:text-white text-lg font-medium"
              >
                Resume
              </a>
              
              <div className="w-full h-px bg-zinc-800" />
              
              {/* Mobile Social Links using FaXTwitter */}
              <div className="flex items-center gap-8">
                <a href="https://github.com/harshsennnn" className="text-gray-400 hover:text-white"><Github size={24} /></a>
                <a href="https://linkedin.com/in/harshsen" className="text-gray-400 hover:text-white"><Linkedin size={24} /></a>
                <a href="https://x.com/yupsharsh" className="text-gray-400 hover:text-white"><FaXTwitter size={24} /></a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}