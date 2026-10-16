import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Why Me', href: '#why-me' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme, showLogo }: { theme: string, toggleTheme: () => void, showLogo: boolean }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = '';
      for (const l of links) {
        const el = document.querySelector(l.href) as HTMLElement | null;
        if (el && el.getBoundingClientRect().top <= 140) current = l.href;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bg/85 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}>
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-3">
          {showLogo && <img src={logoImg} alt="Logo" className="h-9 w-9 rounded-full object-cover ring-2 ring-accent" />}
          <span className="font-display font-semibold text-lg">alyan<span className="text-accent">.</span></span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map(l => (
            <a key={l.name} href={l.href} className={`relative mono text-xs uppercase tracking-wider py-1 transition-colors ${active === l.href ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}`}>
              {l.name}
              {active === l.href && (
                <motion.span layoutId="nav-underline" className="absolute -bottom-0.5 left-0 right-0 h-[3px] bg-accent" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} aria-label="Toggle Theme" className="h-10 w-10 grid place-items-center border border-border hover:border-border-strong transition-colors">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="/Alyan_Shahid_Resume.pdf" target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center gap-1.5 h-10 px-4 bg-accent text-accent-ink text-sm font-semibold">
            Resume <ArrowUpRight size={16} />
          </a>
          <button className="lg:hidden h-10 w-10 grid place-items-center" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-bg border-b border-border-strong"
          >
            <div className="container-x py-6 flex flex-col">
              {links.map((l, i) => (
                <a key={l.name} href={l.href} onClick={() => setOpen(false)} className="flex items-baseline gap-4 py-3 border-b border-border font-display text-3xl font-semibold">
                  <span className="mono text-xs text-accent">0{i + 1}</span>{l.name}
                </a>
              ))}
              <div className="flex gap-3 mt-6">
                <a href="/Alyan_Shahid_Resume.pdf" target="_blank" rel="noreferrer" className="btn-ghost flex-1 justify-center">Preview</a>
                <a href="/Alyan_Shahid_Resume.pdf" download="Alyan_Shahid_Resume.pdf" className="btn-accent flex-1 justify-center">Download CV</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
