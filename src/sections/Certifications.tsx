import { motion } from 'framer-motion';
import { certifications } from '../data';
import { Award, ExternalLink, Download } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6 bg-surface-2/30">
      <div className="w-full max-w-[95%] 2xl:max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-surface p-6 rounded-2xl border border-border shadow-sm flex flex-col h-full hover:border-accent transition-colors group"
            >
              <div className="mb-4 text-accent group-hover:scale-110 transition-transform"><Award size={32} /></div>
              <h3 className="text-lg font-bold mb-2 flex-grow">{cert.name}</h3>
              <p className="text-text-secondary text-sm mb-6">{cert.issuer}</p>
              
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-2 transition-colors mt-auto"
              >
                {cert.isLocal ? (
                  <>View Certificate <Download size={16} /></>
                ) : (
                  <>Verify Certificate <ExternalLink size={16} /></>
                )}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
