import { motion } from 'framer-motion';
import aboutImg from '../assets/image.jpg';
import { MapPin, Briefcase, Calendar, Code2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-surface-2/30">
      <div className="w-full max-w-[95%] 2xl:max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-surface rounded-3xl p-6 md:p-12 border border-border shadow-xl flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-3 bg-accent-gradient opacity-30 rounded-3xl blur-xl group-hover:opacity-50 transition-opacity duration-500"></div>
              <img src={aboutImg} alt="About Alyan" className="relative rounded-3xl shadow-2xl w-full object-cover border-4 border-surface aspect-[4/5]" />
            </div>
          </div>

          <div className="w-full lg:w-3/5">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary">
              Designing & Building <span className="text-accent">Practical Solutions</span>
            </h3>
            <div className="text-text-secondary text-lg mb-8 leading-relaxed font-medium space-y-4">
              <p>
                I am Alyan Shahid, a Full Stack Developer with a genuine interest in building applications that solve actual problems. I enjoy working across the entire stack—from structuring databases to writing clear backend logic and crafting responsive interfaces.
              </p>
              <p>
                Currently, I work at TechScale where I focus on building scalable web applications using the MERN stack. Over time, I have developed a practical approach to development: focus on writing maintainable code, test thoroughly, and always keep the end-user in mind. 
              </p>
              <p>
                I believe in steady improvement and taking things step by step. Working alongside teams, discussing ideas, and troubleshooting real-world challenges is what drives me to keep learning and growing as an engineer.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="flex flex-col gap-3 p-5 bg-surface-2 rounded-2xl border border-border/50 hover:border-accent transition-colors group">
                <div className="w-12 h-12 flex items-center justify-center bg-surface rounded-xl text-accent shadow-sm group-hover:scale-110 transition-transform"><MapPin size={24} /></div>
                <div>
                  <p className="text-xs text-text-secondary uppercase tracking-wider font-bold">Location</p>
                  <p className="font-bold text-text-primary mt-1 text-lg">Pakistan</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 p-5 bg-surface-2 rounded-2xl border border-border/50 hover:border-accent transition-colors group">
                <div className="w-12 h-12 flex items-center justify-center bg-surface rounded-xl text-accent shadow-sm group-hover:scale-110 transition-transform"><Briefcase size={24} /></div>
                <div>
                  <p className="text-xs text-text-secondary uppercase tracking-wider font-bold">Role</p>
                  <p className="font-bold text-text-primary mt-1 text-lg">Full Stack</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 p-5 bg-surface-2 rounded-2xl border border-border/50 hover:border-accent transition-colors group">
                <div className="w-12 h-12 flex items-center justify-center bg-surface rounded-xl text-accent shadow-sm group-hover:scale-110 transition-transform"><Calendar size={24} /></div>
                <div>
                  <p className="text-xs text-text-secondary uppercase tracking-wider font-bold">Experience</p>
                  <p className="font-bold text-text-primary mt-1 text-lg">2+ Years</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 p-5 bg-surface-2 rounded-2xl border border-border/50 hover:border-accent transition-colors group">
                <div className="w-12 h-12 flex items-center justify-center bg-surface rounded-xl text-accent shadow-sm group-hover:scale-110 transition-transform"><Code2 size={24} /></div>
                <div>
                  <p className="text-xs text-text-secondary uppercase tracking-wider font-bold">Projects</p>
                  <p className="font-bold text-text-primary mt-1 text-lg">10+ Done</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
