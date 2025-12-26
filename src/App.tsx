import { useRef } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { Meteors } from './components/Meteors';

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-zinc-950 min-h-screen relative overflow-x-hidden selection:bg-cyan-500/30">
      
{/* Meteor Effect Layer */}
      <div className="absolute inset-0 pointer-events-none">
        <Meteors number={30} />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10">
        <Header 
          onNavigate={scrollToSection} 
          refs={{ homeRef, aboutRef, projectsRef, experienceRef, blogRef, contactRef }} 
        />

        <main>
          <section ref={homeRef}>
            <Home onGetInTouch={() => scrollToSection(contactRef)} />
          </section>

          <section ref={experienceRef}>
            <Experience />
          </section>

          <section ref={projectsRef}>
            <Projects />
          </section>

          <section ref={aboutRef}>
            <About />
          </section>

          <section ref={blogRef}>
            <Blog />
          </section>

          <section ref={contactRef}>
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;