import { motion } from 'framer-motion';
import aboutImg from '../assets/image.jpg';
import SectionLabel from '../components/SectionLabel';
import { projects, certifications } from '../data';

const stats = [
  { value: '2+', label: 'Years experience' },
  { value: `${projects.length}+`, label: 'Development' },
  { value: `${certifications.length}`, label: 'Certifications' },
  { value: '60+', label: 'HRMS users served' },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-x">
        <SectionLabel index="01" label="About" aside="Who I am" title={<>Designing & building <span className="hl">practical</span> solutions.</>} />

        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="relative aspect-[4/5] overflow-hidden border border-border-strong group">
              <img src={aboutImg} alt="About Alyan" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              <span className="absolute top-3 left-3 bg-accent text-accent-ink mono text-[10px] uppercase tracking-widest px-2 py-1">Lahore, PK</span>
            </div>
          </motion.div>

          <div className="lg:col-span-8 lg:pl-8">
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-text-secondary">
              <p className="text-text-primary text-2xl md:text-3xl font-display font-medium leading-snug">
                I'm Alyan — a Full Stack Developer who enjoys building applications that solve actual problems.
              </p>
              <p>
                I work across the entire stack, from structuring databases to writing clear backend logic and crafting responsive interfaces. Currently at <span className="text-text-primary font-semibold">TechScale</span>, I build scalable web apps with the MERN stack and NestJS.
              </p>
              <p>
                My approach is practical: write maintainable code, test thoroughly, and keep the end-user in mind. Working with teams and troubleshooting real-world challenges is what keeps me learning.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 mt-14 border-t border-l border-border">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="p-5 md:p-6 border-r border-b border-border group hover:bg-surface-2 transition-colors"
                >
                  <div className="font-display font-semibold text-5xl md:text-6xl group-hover:text-accent transition-colors">{s.value}</div>
                  <div className="mono text-[11px] uppercase tracking-wider mt-2 opacity-70">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
