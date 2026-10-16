import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { services } from '../data';
import SectionLabel from '../components/SectionLabel';

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-surface-2">
      <div className="container-x">
        <SectionLabel index="08" label="Services" aside="What I can do for you" title={<>How I can <span className="hl">help.</span></>} />

        <div className="border-t border-border-strong">
          {services.map((s, i) => (
            <motion.a
              href="#contact"
              key={s.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="group relative grid grid-cols-12 gap-4 items-center py-8 md:py-10 border-b border-border-strong overflow-hidden"
            >
              <span className="absolute inset-0 bg-accent origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <span className="relative col-span-2 md:col-span-1 mono text-sm text-accent group-hover:text-accent-ink pl-0 md:pl-4 transition-colors">0{i + 1}</span>
              <h3 className="relative col-span-10 md:col-span-5 font-display font-semibold text-3xl md:text-5xl group-hover:text-accent-ink transition-colors">{s.title}</h3>
              <p className="relative col-span-10 col-start-3 md:col-start-auto md:col-span-5 text-text-secondary group-hover:text-accent-ink transition-colors">{s.description}</p>
              <span className="relative hidden md:flex md:col-span-1 justify-end pr-4 group-hover:text-accent-ink">
                <ArrowUpRight size={32} className="group-hover:rotate-45 transition-transform duration-300" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
