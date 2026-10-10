import { motion } from 'framer-motion';
import { education } from '../data/education';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 md:px-8 bg-surface-2/30">
      <div className="w-full max-w-[95%] 2xl:max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Education</h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
          <p className="text-text-secondary mt-4 text-lg max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative border-l-2 border-accent/20 ml-4 md:mx-auto">
          {education.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative mb-12 pl-8 md:pl-12 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-surface border-4 border-accent/30 flex items-center justify-center group-hover:border-accent transition-colors shadow-sm">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
              </div>

              {/* Content Card */}
              <div className="bg-surface p-6 md:p-8 rounded-2xl border border-border shadow-md group-hover:shadow-lg group-hover:border-accent/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-xl md:text-2xl font-bold text-text-primary flex items-center gap-3">
                    <GraduationCap className="text-accent" size={24} />
                    {item.degree}
                  </h3>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm w-fit">
                    {item.dateRange}
                  </span>
                </div>
                
                <h4 className="text-lg font-medium text-text-secondary mb-4">
                  {item.institution}
                </h4>
                
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
