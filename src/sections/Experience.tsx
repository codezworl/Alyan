import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { experience } from '../data';
import SectionLabel from '../components/SectionLabel';

export default function Experience() {
  const [open, setOpen] = useState(0);

  return (
    <section id="experience" className="py-24 md:py-32 bg-surface-2">
      <div className="container-x">
        <SectionLabel index="04" label="Experience" aside="Professional journey" title={<>Where I've <span className="hl">worked.</span></>} />

        <div className="border-t border-border-strong">
          {experience.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`relative border-b border-border-strong transition-colors ${isOpen ? 'bg-bg' : ''}`}>
                {isOpen && <motion.span layoutId="exp-bar" className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent" />}
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full grid grid-cols-12 gap-4 items-center text-left py-7 px-4 md:px-8 group"
                >
                  <span className="col-span-12 md:col-span-3 mono text-xs uppercase tracking-wider text-text-secondary">{item.dateRange}</span>
                  <span className="col-span-10 md:col-span-6 font-display font-semibold text-2xl md:text-4xl group-hover:text-accent transition-colors">{item.title}</span>
                  <span className="hidden md:block md:col-span-2 text-text-secondary">{item.company}</span>
                  <span className="col-span-2 md:col-span-1 flex justify-end">
                    <span className={`h-10 w-10 grid place-items-center border border-border-strong transition-all ${isOpen ? 'rotate-45 bg-accent text-accent-ink border-accent' : ''}`}>
                      <Plus size={18} />
                    </span>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-12 gap-4 px-4 md:px-8 pb-8">
                        <div className="col-span-12 md:col-start-4 md:col-span-8">
                          <p className="md:hidden mono text-xs text-accent mb-3">@ {item.company}</p>
                          <ul className="space-y-3">
                            {item.description.map((d, k) => (
                              <li key={k} className="flex gap-3 text-text-secondary leading-relaxed">
                                <span className="text-accent mt-1.5 text-xs">■</span>{d}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
