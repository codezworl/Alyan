import { motion } from 'framer-motion';

interface Props {
  index: string;
  label: string;
  title: React.ReactNode;
  aside?: React.ReactNode;
}

/** Editorial section header: "01 — ABOUT" + big left-aligned title. */
export default function SectionLabel({ index, label, title, aside }: Props) {
  return (
    <div className="mb-14 md:mb-20 border-t border-border-strong pt-6">
      <div className="flex items-center justify-between mono text-xs uppercase tracking-[0.2em] text-text-secondary mb-8">
        <span>
          <span className="text-accent font-bold">{index}</span> — {label}
        </span>
        {aside && <span className="hidden md:block">{aside}</span>}
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="font-display font-semibold text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl"
      >
        {title}
      </motion.h2>
    </div>
  );
}
