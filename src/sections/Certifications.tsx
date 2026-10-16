import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { certifications } from '../data';
import SectionLabel from '../components/SectionLabel';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32 bg-surface-2">
      <div className="container-x">
        <SectionLabel index="06" label="Certifications" aside={`${certifications.length} verified`} title={<>Credentials & <span className="hl">badges.</span></>} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.id}
              href={cert.link} target="_blank" rel="noreferrer"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
              className="group relative p-6 md:p-8 bg-bg border border-border-strong min-h-[180px] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--accent)]"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="mono text-[11px] uppercase tracking-widest border border-border-strong px-2 py-1 text-text-secondary">{cert.issuer}</span>
                <span className="h-9 w-9 grid place-items-center border border-border-strong group-hover:bg-accent group-hover:text-accent-ink group-hover:border-accent transition-colors">
                  <ArrowUpRight size={18} />
                </span>
              </div>
              <h3 className="font-display font-semibold text-xl md:text-2xl leading-tight mt-auto text-text-primary">{cert.name}</h3>
              <span className="mono text-[11px] uppercase tracking-wider mt-3 text-text-secondary group-hover:text-accent transition-colors">{cert.isLocal ? 'View certificate →' : 'Verify credential →'}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
