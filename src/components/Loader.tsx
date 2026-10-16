import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Loader() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCount(c => (c >= 100 ? 100 : c + 4)), 60);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#0B0B0B] text-[#F5F5F0] flex flex-col justify-between p-6 md:p-10"
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="mono text-xs uppercase tracking-[0.2em] flex justify-between">
        <span>Alyan Shahid</span>
        <span>Portfolio © {new Date().getFullYear()}</span>
      </div>
      <div className="flex items-end justify-between gap-6">
        <h1 className="font-display font-semibold text-4xl md:text-6xl leading-none">
          Full Stack<br /><span className="text-[#FFD60A]">Developer.</span>
        </h1>
        <span className="font-display font-semibold text-7xl md:text-[10rem] leading-none text-[#FFD60A] tabular-nums">
          {count}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 h-1 bg-[#FFD60A] transition-all duration-75" style={{ width: `${count}%` }} />
    </motion.div>
  );
}
