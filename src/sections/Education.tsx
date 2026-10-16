import { motion } from 'framer-motion';
import { education } from '../data/education';
import SectionLabel from '../components/SectionLabel';

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32">
      <div className="container-x">
        <SectionLabel index="05" label="Education" aside="Academic journey" title={<>Always <span className="text-outline">learning.</span></>} />

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group relative p-8 bg-surface border border-border-strong flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--accent)]"
            >
              <span className="absolute top-0 left-0 h-1 w-0 bg-accent group-hover:w-full transition-all duration-500" />
              <span className="font-display font-semibold text-6xl md:text-7xl leading-none mb-10 text-accent">
                {item.dateRange.match(/\d{4}/g)?.pop()}
              </span>
              <span className="mono text-xs uppercase tracking-wider text-text-secondary mb-2">{item.dateRange}</span>
              <h3 className="font-display font-semibold text-2xl mb-2 text-text-primary">{item.degree}</h3>
              <p className="font-medium mb-4 text-text-primary">{item.institution}</p>
              <p className="text-sm text-text-secondary leading-relaxed mt-auto">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
