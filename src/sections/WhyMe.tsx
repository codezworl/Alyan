import { motion } from 'framer-motion';
import videoFile from '../assets/video.mp4';
import SectionLabel from '../components/SectionLabel';

const features = [
  { title: 'Performance Optimized', desc: 'Built for efficiency and a smooth user experience on every device.' },
  { title: 'Secure & Scalable', desc: 'Role-based access, clean APIs, and architecture that grows with you.' },
  { title: 'On-Time Delivery', desc: 'Realistic deadlines, clear communication, no surprises.' },
  { title: 'Quality Code', desc: 'Clean, maintainable, tested and well-documented.' },
];

export default function WhyMe() {
  return (
    <section id="why-me" className="py-24 md:py-32 bg-surface-2">
      <div className="container-x">
        <SectionLabel index="02" label="Why Me" aside="What sets my work apart" title={<>Reliable products,<br />not just <span className="text-outline">checklists.</span></>} />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="relative lg:sticky lg:top-28"
          >
            <div className="absolute -top-3 -left-3 w-full h-full border border-accent" />
            <video src={videoFile} autoPlay loop muted playsInline className="relative w-full aspect-video object-cover border border-border-strong" />
            <p className="mt-6 text-text-secondary text-lg leading-relaxed">
              I focus on understanding the core requirements first and make sure the architecture makes sense before writing any code. Practical mindset plus modern frameworks equals solutions that are easy to use and easy to maintain.
            </p>
          </motion.div>

          <div className="border-t border-border-strong">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group flex gap-6 md:gap-10 py-8 border-b border-border-strong"
              >
                <span className="font-display font-semibold text-5xl md:text-6xl text-accent leading-none w-16 shrink-0">0{i + 1}</span>
                <div>
                  <h3 className="font-display font-semibold text-2xl md:text-3xl mb-2 group-hover:translate-x-2 transition-transform">{f.title}</h3>
                  <p className="text-text-secondary">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
