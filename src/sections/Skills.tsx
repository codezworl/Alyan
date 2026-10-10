import { motion } from 'framer-motion';
import { skillIcons } from '../data/skillIcons';

export default function Skills() {
  // Duplicate the list for seamless infinite scroll
  const row1 = skillIcons.slice(0, 10);
  const row2 = skillIcons.slice(10);

  return (
    <section id="skills" className="py-24 px-4 md:px-8 overflow-hidden">
      <div className="w-full max-w-[95%] 2xl:max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Skills & Tools</h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
          <p className="text-text-secondary mt-4 text-lg max-w-2xl mx-auto">
            Technologies and frameworks I use to bring ideas to life
          </p>
        </div>
      </div>

      {/* Galaxy Marquee Row 1 - scrolls left */}
      <div className="relative mb-8">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee-left">
          {[...row1, ...row1, ...row1].map((skill, idx) => (
            <motion.div
              key={`r1-${idx}`}
              whileHover={{ scale: 1.15, y: -8 }}
              className="flex-shrink-0 mx-4 flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div 
                className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-surface border-2 border-border flex items-center justify-center text-3xl md:text-4xl shadow-lg group-hover:shadow-xl group-hover:border-accent/50 transition-all duration-300"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              <span className="text-sm font-bold text-text-secondary group-hover:text-accent transition-colors whitespace-nowrap">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Galaxy Marquee Row 2 - scrolls right */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee-right">
          {[...row2, ...row2, ...row2].map((skill, idx) => (
            <motion.div
              key={`r2-${idx}`}
              whileHover={{ scale: 1.15, y: -8 }}
              className="flex-shrink-0 mx-4 flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div 
                className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-surface border-2 border-border flex items-center justify-center text-3xl md:text-4xl shadow-lg group-hover:shadow-xl group-hover:border-accent/50 transition-all duration-300"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              <span className="text-sm font-bold text-text-secondary group-hover:text-accent transition-colors whitespace-nowrap">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
