import { motion } from 'framer-motion';
import { services } from '../data';
import { Monitor, PenTool, Code, Layout, Cpu, Database, MessageSquare } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  "monitor": <Monitor size={32} />,
  "pen-tool": <PenTool size={32} />,
  "code": <Code size={32} />,
  "layout": <Layout size={32} />,
  "cpu": <Cpu size={32} />,
  "database": <Database size={32} />,
  "message-square": <MessageSquare size={32} />
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 md:px-8">
      <div className="w-full max-w-[95%] 2xl:max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My Services</h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
          <p className="text-text-secondary mt-4 text-lg max-w-2xl mx-auto">
            Comprehensive solutions to help you achieve your digital goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface p-8 rounded-3xl border border-border shadow-md hover:border-accent hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-surface-2 border border-border flex items-center justify-center text-accent mb-6 group-hover:bg-accent/10 transition-colors">
                {iconMap[service.icon] || <Monitor size={32} />}
              </div>
              <h3 className="text-xl font-bold mb-4 text-text-primary">{service.title}</h3>
              <p className="text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
