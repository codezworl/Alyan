import { motion } from 'framer-motion';
import { ArrowRight, Mail, Eye, Download } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import profileImg from '../assets/image2.jpg';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 md:px-8">
      <div className="w-full max-w-[95%] 2xl:max-w-[1400px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-accent-gradient">
              Muhammad Alyan Shahid
            </span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-3xl text-text-secondary mb-8 font-medium h-10"
          >
            I am a{' '}
            <span className="text-accent font-bold">
              <Typewriter
                words={['Developer', 'Designer', 'Full Stack Engineer', 'Freelancer']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4"
          >
            <a href="#projects" className="px-8 py-4 rounded-full bg-accent text-white font-medium hover:bg-opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-accent/30">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full bg-surface-2 backdrop-blur-sm text-text-primary border border-border font-medium hover:bg-border hover:shadow-lg transition-all flex items-center gap-2">
              Contact Me <Mail size={18} />
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex justify-center md:justify-end w-full"
        >
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
            <div className="absolute inset-0 bg-accent-gradient rounded-full blur-[80px] opacity-20 animate-pulse"></div>
            <img 
              src={profileImg} 
              alt="Muhammad Alyan Shahid" 
              className="relative z-10 w-full h-full object-cover shadow-2xl border-4 border-surface"
              style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
