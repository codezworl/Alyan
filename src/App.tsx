import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useTheme } from './hooks/useTheme';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
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

const socials = [
  { label: 'GitHub', url: 'https://github.com/codezworl', icon: <FaGithub size={18} /> },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/alyan-shahid-a1a81a262', icon: <FaLinkedin size={18} /> },
  { label: 'Instagram', url: 'https://www.instagram.com/hafizalyan66/', icon: <FaInstagram size={18} /> },
  { label: 'Facebook', url: 'https://www.facebook.com/alyan.alyan.98096721', icon: <FaFacebook size={18} /> },
];

function App() {
  const { theme, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative grain">
      <Cursor />
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>

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

      <footer className="border-t border-border-strong pt-16 pb-8 overflow-hidden">
        <div className="container-x">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
            <div className="flex gap-3">
              {socials.map(s => (
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label}
                  className="h-11 w-11 grid place-items-center border border-border hover:bg-accent hover:text-accent-ink hover:border-accent transition-colors">
                  {s.icon}
                </a>
              ))}
            </div>
            <a href="#home" className="mono text-xs uppercase tracking-widest inline-flex items-center gap-2 hover:text-accent self-start">
              Back to top <ArrowUp size={14} />
            </a>
          </div>
          <h2 className="font-display font-bold leading-[0.8] text-[17vw] md:text-[15vw] tracking-tighter select-none">
            ALYAN<span className="text-accent">.</span>
          </h2>
          <div className="mt-8 flex flex-col md:flex-row justify-between gap-2 mono text-xs text-text-secondary uppercase tracking-wider">
            <span>© {new Date().getFullYear()} Muhammad Alyan Shahid</span>
            <span>Lahore, Pakistan — Built with React</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
