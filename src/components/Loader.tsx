import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import logo from '../assets/logo.jpeg';

export default function Loader() {
  return (
    <motion.div
      key="loader-overlay"
      className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
    >
      {/* Background fading out */}
      <motion.div 
        className="absolute inset-0 bg-bg pointer-events-auto"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      />
      
      <div className="relative flex flex-col items-center">
        {/* Glow */}
        <motion.div 
          className="absolute w-56 h-56 bg-accent blur-3xl opacity-20 rounded-full animate-pulse"
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Logo container wrapper for size */}
        <motion.div 
          className="relative z-10 w-48 h-48 flex items-center justify-center"
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          
          {/* Spinning Frame - Fades out on exit */}
          <motion.div
            className="absolute inset-0 rounded-full border-[4px] border-transparent border-t-accent border-r-accent-2 shadow-[0_0_40px_rgba(59,130,246,0.3)]"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
          
          {/* Static Image */}
          <img 
            src={logo} 
            alt="Logo" 
            className="w-[90%] h-[90%] rounded-full object-cover z-10 border-2 border-surface" 
          />
        </motion.div>
        
        {/* Name typewriter */}
        <motion.div 
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="mt-8 text-3xl font-bold tracking-[0.2em] text-transparent bg-clip-text bg-accent-gradient h-10 flex items-center"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          <Typewriter
            words={['ALYAN SHAHID']}
            loop={1}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            delaySpeed={1000}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
