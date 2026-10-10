import { motion } from 'framer-motion';
import { CheckCircle2, Cpu, Shield, Clock } from 'lucide-react';
import videoFile from '../assets/video.mp4';

export default function WhyMe() {
  const features = [
    { icon: <Cpu size={24} />, title: "Performance Optimized", desc: "Built for efficiency and smooth user experience." },
    { icon: <Shield size={24} />, title: "Secure & Scalable", desc: "Built with best security practices." },
    { icon: <Clock size={24} />, title: "On-Time Delivery", desc: "Strict adherence to project deadlines." },
    { icon: <CheckCircle2 size={24} />, title: "Quality Code", desc: "Clean, maintainable, and well-documented." }
  ];

  return (
    <section id="why-me" className="py-24 px-4 md:px-8">
      <div className="w-full max-w-[95%] 2xl:max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Me?</h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center bg-surface p-6 md:p-10 rounded-3xl border border-border shadow-lg">
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-accent-gradient opacity-20 blur-xl rounded-3xl group-hover:opacity-40 transition-opacity duration-500"></div>
            <video 
              src={videoFile}
              autoPlay 
              loop 
              muted 
              playsInline 
              className="relative z-10 w-full rounded-2xl shadow-2xl border-4 border-surface object-cover aspect-video"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">What Sets My Work Apart</h3>
            <div className="text-text-secondary mb-8 text-lg space-y-4">
              <p>
                When taking on a project, my priority is to deliver a reliable product rather than just completing a checklist of features. I focus on understanding the core requirements first, ensuring that the architecture makes sense before writing any code.
              </p>
              <p>
                Throughout the development cycle, I prioritize clear communication and stick to realistic deadlines. By combining a practical mindset with modern frameworks, I build solutions that are straightforward to use and easy to maintain in the long run.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-5 bg-surface-2 rounded-xl border border-border flex flex-col gap-3 hover:border-accent hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-accent shadow-sm border border-border group-hover:scale-110 transition-transform">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-text-primary">{feat.title}</h4>
                    <p className="text-sm text-text-secondary mt-1">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
