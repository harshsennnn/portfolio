import { useRef } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-zinc-950">
      <Header onNavigate={scrollToSection} refs={{ homeRef, aboutRef, projectsRef, blogRef, contactRef }} />

      <div ref={homeRef}>
        <Home onGetInTouch={() => scrollToSection(contactRef)} />
      </div>

      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={projectsRef}>
        <Projects />
      </div>

      <div ref={blogRef}>
        <Blog />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
