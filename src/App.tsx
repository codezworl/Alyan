import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import WhyMe from './sections/WhyMe';
import Services from './sections/Services';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import logoImg from './assets/logo.jpeg';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 z-[-1] opacity-[0.02] pointer-events-none" 
        style={{ backgroundImage: `url(${logoImg})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: '50%' }}
      />

      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease-in-out 0.3s' }}>
          <Navbar theme={theme} toggleTheme={toggleTheme} showLogo={!loading} />
          <main>
            <Hero />
            <About />
            <WhyMe />
            <Skills />
            <Experience />
            <Education />
            <Certifications />
            <Projects />
            <Services />
            <Contact />
          </main>
          <footer className="py-12 mt-12 text-center text-text-secondary border-t border-border bg-surface-2/30 flex flex-col items-center justify-center gap-6">
            <div className="flex gap-6">
              <a href="https://github.com/codezworl" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent hover:-translate-y-1 transition-all duration-300">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/alyan-shahid-a1a81a262" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent hover:-translate-y-1 transition-all duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.instagram.com/hafizalyan66/" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent hover:-translate-y-1 transition-all duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.facebook.com/alyan.alyan.98096721" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent hover:-translate-y-1 transition-all duration-300">
                <FaFacebook size={24} />
              </a>
            </div>
            <p className="text-sm font-medium">© {new Date().getFullYear()} Muhammad Alyan Shahid. All rights reserved.</p>
          </footer>
        </div>
    </div>
  );
}

export default App;
