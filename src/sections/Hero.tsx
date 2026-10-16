import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import profileImg from '../assets/image2.jpg';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col pt-28 md:pt-32 pb-10">
      <div className="container-x flex-1 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Text */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.1 }}
            className="inline-flex items-center gap-2 mono text-xs uppercase tracking-widest border border-border px-3 py-1.5 mb-8"
          >
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" /> Available for work
          </motion.div>

          <h1 className="font-display font-semibold leading-[0.92] text-[13vw] sm:text-7xl md:text-8xl xl:text-[7.5rem]">
            {['Muhammad', 'Alyan', 'Shahid'].map((w, i) => (
              <span key={w} className="block overflow-hidden">
                <motion.span
                  className={`block ${i === 1 ? 'text-accent' : ''}`}
                  initial={{ y: '110%' }} animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 2.0 + i * 0.1, ease }}
                >
                  {w}{i === 2 && <span className="text-accent">.</span>}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.4, duration: 0.6 }}
            className="mt-8 max-w-xl"
          >
            <p className="mono text-sm md:text-base text-text-secondary mb-8">
              <span className="text-accent">&gt;</span> I am a{' '}
              <span className="text-text-primary font-bold">
                <Typewriter words={['Full Stack Engineer', 'MERN Developer', 'UI Designer', 'AI Integrator', 'Freelancer']} loop={0} cursor cursorStyle="█" typeSpeed={70} deleteSpeed={40} delaySpeed={1600} />
              </span>
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-accent">View Projects <ArrowUpRight size={18} /></a>
              <a href="#contact" className="btn-ghost">Let's Talk</a>
            </div>
          </motion.div>
        </div>

        {/* Photo — B&W with yellow offset block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.1, duration: 0.8, ease }}
          className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 sm:w-80 lg:w-full max-w-[420px] aspect-[4/5] group" data-cursor>
            <div className="absolute inset-0 translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 bg-accent transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="absolute inset-0 border border-border-strong translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 -z-0 pointer-events-none" />
            <img
              src={profileImg}
              alt="Muhammad Alyan Shahid"
              className="relative w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 border border-border-strong"
            />
            <div className="absolute -left-3 md:-left-6 bottom-8 bg-bg border border-border-strong px-4 py-3 mono text-xs uppercase tracking-wider">
              <div className="text-accent font-bold text-lg font-display normal-case">2+ yrs</div>
              Development experience
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="container-x mt-12">
        <div className="flex items-center justify-between border-t border-border pt-5 mono text-xs uppercase tracking-widest text-text-secondary">
          <span>Based in Lahore, PK</span>
          <a href="#about" className="flex items-center gap-2 hover:text-accent">Scroll <ArrowDown size={14} className="animate-bounce" /></a>
          <span className="hidden sm:block">React · Node · NestJS · AI</span>
        </div>
      </div>
    </section>
  );
}
