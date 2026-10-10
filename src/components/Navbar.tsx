import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Download, Eye } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';

export default function Navbar({ theme, toggleTheme, showLogo }: { theme: string, toggleTheme: () => void, showLogo: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpin(true);
      setTimeout(() => setSpin(false), 1000);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Why Me', href: '#why-me' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/70 backdrop-blur-xl border-b border-border py-3 transition-all duration-300 shadow-sm">
      <div className="w-full max-w-[95%] 2xl:max-w-[1400px] mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group" id="navbar-logo-slot">
          <div className="relative h-12 w-12 flex items-center justify-center">
            <AnimatePresence>
              {showLogo && (
                <motion.img 
                  src={logoImg} 
                  alt="Logo" 
                  className="absolute inset-0 h-12 w-12 rounded-full border-2 border-accent object-cover shadow-md"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    rotate: spin ? 360 : 0 
                  }}
                  transition={spin ? { duration: 1, ease: "easeInOut" } : { duration: 0.5 }}
                />
              )}
            </AnimatePresence>
          </div>
          <span className="text-xl font-bold tracking-tight hidden sm:block">Alyan Shahid</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a key={link.name} href={link.href} className="text-sm font-semibold text-text-secondary hover:text-accent transition-colors">
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 border-l border-border pl-6">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-surface-2 text-text-secondary hover:text-accent transition-colors" aria-label="Toggle Theme">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="/Alyan_Shahid_Resume.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-surface-2 text-text-primary border border-border rounded-full text-sm font-medium hover:bg-border transition-all shadow-sm">
              Preview <Eye size={16} />
            </a>
            <a href="/Alyan_Shahid_Resume.pdf" download="Alyan_Shahid_Resume.pdf" className="flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-full text-sm font-medium hover:bg-opacity-90 transition-all shadow-md shadow-accent/20">
              Download <Download size={16} />
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-text-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-b border-border overflow-hidden absolute top-full left-0 right-0 shadow-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map(link => (
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium text-text-secondary hover:text-accent transition-colors">
                  {link.name}
                </a>
              ))}
              <div className="flex items-center justify-between pt-6 border-t border-border mt-2">
                <button onClick={toggleTheme} className="flex items-center gap-3 p-3 rounded-xl bg-surface-2 text-text-primary transition-colors w-full">
                  {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                  <span className="font-medium">Toggle Theme</span>
                </button>
              </div>
              <div className="flex flex-col gap-3">
                <a href="/Alyan_Shahid_Resume.pdf" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-surface-2 text-text-primary border border-border rounded-xl text-lg font-medium shadow-sm">
                  Preview Resume <Eye size={20} />
                </a>
                <a href="/Alyan_Shahid_Resume.pdf" download="Alyan_Shahid_Resume.pdf" className="flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white rounded-xl text-lg font-medium shadow-md shadow-accent/20">
                  Download Resume <Download size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
