import { motion } from 'framer-motion';
import { skillIcons } from '../data/skillIcons';
import SectionLabel from '../components/SectionLabel';

const categories = ['Frontend', 'Backend', 'Databases', 'Design', 'Tools'];

function Band({ reverse = false, yellow = false }: { reverse?: boolean; yellow?: boolean }) {
  const items = [...skillIcons, ...skillIcons];
  return (
    <div className={`py-5 md:py-6 overflow-hidden border-y border-border-strong ${yellow ? 'bg-accent text-accent-ink' : 'bg-[#0B0B0B] text-[#F5F5F0]'}`}>
      <div className={`flex w-max ${reverse ? 'animate-marquee-right' : 'animate-marquee-left'}`}>
        {items.map((s, i) => (
          <span key={i} className="flex items-center gap-6 md:gap-10 px-3 md:px-5 font-display font-semibold text-3xl md:text-5xl uppercase whitespace-nowrap">
            {s.name}
            <span className="text-xl md:text-2xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 overflow-hidden">
      <div className="container-x">
        <SectionLabel index="03" label="Skills & Tools" aside={`${skillIcons.length} technologies`} title={<>The <span className="hl">stack</span> I build with.</>} />
      </div>

      {/* Crossing X tickers */}
      <div className="relative h-56 md:h-72 my-6">
        <div className="absolute inset-x-[-10%] top-1/2 -translate-y-1/2 -rotate-[4deg] z-10 shadow-2xl"><Band yellow /></div>
        <div className="absolute inset-x-[-10%] top-1/2 -translate-y-1/2 rotate-[4deg]"><Band reverse /></div>
      </div>

      {/* Category grid */}
      <div className="container-x mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 border-t border-l border-border-strong">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: ci * 0.08 }}
              className="p-6 border-r border-b border-border-strong"
            >
              <div className="mono text-xs uppercase tracking-widest text-text-secondary mb-5">
                <span className="text-accent">0{ci + 1}</span> / {cat}
              </div>
              <ul className="space-y-3">
                {skillIcons.filter(s => s.category === cat).map(s => (
                  <li key={s.name} className="group flex items-center gap-3 cursor-default">
                    <span className="text-xl transition-all duration-300 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-125" style={{ color: s.color }}>{s.icon}</span>
                    <span className="font-medium group-hover:text-accent transition-colors">{s.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
