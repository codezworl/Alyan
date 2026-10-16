import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data';
import { ArrowUpRight, X, Eye, Download, LayoutGrid, List, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import * as Dialog from '@radix-ui/react-dialog';
import SectionLabel from '../components/SectionLabel';

type Project = typeof projects[0];

function Links({ p }: { p: Project }) {
  return (
    <div className="flex gap-2" onClick={e => e.stopPropagation()}>
      {p.liveLink && (
        <a href={p.liveLink} target="_blank" rel="noreferrer" aria-label="Live demo" title="Live demo"
          className="h-9 w-9 grid place-items-center border border-border-strong hover:bg-accent hover:text-accent-ink hover:border-accent transition-colors">
          <ExternalLink size={16} />
        </a>
      )}
      {p.githubLink && (
        <a href={p.githubLink} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"
          className="h-9 w-9 grid place-items-center border border-border-strong hover:bg-accent hover:text-accent-ink hover:border-accent transition-colors">
          <FaGithub size={16} />
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const toggle = (
    <div className="inline-flex border border-border-strong">
      {(['grid', 'list'] as const).map(v => (
        <button key={v} onClick={() => setView(v)} aria-label={`${v} view`}
          className={`flex items-center gap-2 px-4 h-10 mono text-xs uppercase tracking-wider transition-colors ${view === v ? 'bg-accent text-accent-ink' : 'text-text-secondary hover:text-text-primary'}`}>
          {v === 'grid' ? <LayoutGrid size={15} /> : <List size={15} />} {v}
        </button>
      ))}
    </div>
  );

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container-x">
        <SectionLabel index="07" label="Selected Work" aside={`${projects.length} projects`} title={<>Things I've <span className="hl">built.</span></>} />

        <div className="flex justify-between items-center mb-8">
          <span className="mono text-xs uppercase tracking-widest text-text-secondary">View as</span>
          {toggle}
        </div>

        <AnimatePresence mode="wait">
          {view === 'grid' ? (
            <motion.div key="grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map((p, i) => (
                <motion.div
                  key={p.id}
                  onClick={() => setSelected(p)}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.08 }}
                  className="group relative cursor-pointer bg-surface border border-border-strong p-6 md:p-7 flex flex-col min-h-[300px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--accent)]"
                >
                  <span className="absolute top-0 left-0 h-1 w-0 bg-accent group-hover:w-full transition-all duration-500" />
                  <div className="flex justify-between items-start mb-8">
                    <span className="font-display font-semibold text-5xl leading-none text-accent">{String(i + 1).padStart(2, '0')}</span>
                    <Links p={p} />
                  </div>
                  <h3 className="font-display font-semibold text-2xl leading-tight mb-3 text-text-primary">{p.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed line-clamp-3 mb-6">{p.description}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {p.techTags.slice(0, 3).map(t => <span key={t} className="mono text-[11px] px-2 py-1 border border-border text-text-secondary">{t}</span>)}
                    {p.techTags.length > 3 && <span className="mono text-[11px] px-2 py-1 border border-border text-text-secondary">+{p.techTags.length - 3}</span>}
                  </div>
                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between mono text-xs uppercase tracking-wider text-text-secondary group-hover:text-accent transition-colors">
                    View details <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="border-t border-border-strong">
              {projects.map((p, i) => (
                <div
                  key={p.id}
                  onClick={() => setSelected(p)}
                  className="group relative cursor-pointer grid grid-cols-12 gap-4 items-center py-6 border-b border-border-strong hover:bg-surface-2 transition-colors"
                >
                  <span className="absolute left-0 top-0 bottom-0 w-0 bg-accent group-hover:w-1.5 transition-all" />
                  <span className="col-span-2 md:col-span-1 mono text-sm text-accent pl-3">{String(i + 1).padStart(2, '0')}</span>
                  <span className="col-span-10 md:col-span-5 font-display font-semibold text-xl md:text-2xl text-text-primary group-hover:translate-x-2 transition-transform">{p.title}</span>
                  <span className="hidden md:block md:col-span-4 mono text-xs uppercase tracking-wider text-text-secondary truncate">{p.techTags.join(' · ')}</span>
                  <span className="col-span-10 col-start-3 md:col-start-auto md:col-span-2 flex justify-start md:justify-end pr-3"><Links p={p} /></span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-16 flex flex-wrap gap-4">
          <a href="/Alyan_Shahid_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">Preview Resume <Eye size={18} /></a>
          <a href="/Alyan_Shahid_Resume.pdf" download="Alyan_Shahid_Resume.pdf" className="btn-accent">Download Resume <Download size={18} /></a>
        </div>

        <Dialog.Root open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
          <AnimatePresence>
            {selected && (
              <Dialog.Portal forceMount>
                <Dialog.Overlay asChild>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[80]" />
                </Dialog.Overlay>
                <Dialog.Content asChild>
                  <motion.div
                    initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed top-0 right-0 h-full w-full max-w-2xl bg-bg border-l border-border-strong z-[90] overflow-y-auto"
                  >
                    <div className="sticky top-0 flex justify-between items-center px-6 md:px-10 h-16 bg-bg border-b border-border mono text-xs uppercase tracking-widest z-10">
                      <span className="text-accent">Project</span>
                      <Dialog.Close className="h-10 w-10 grid place-items-center border border-border-strong hover:bg-accent hover:text-accent-ink hover:border-accent transition-colors"><X size={18} /></Dialog.Close>
                    </div>
                    <div className="p-6 md:p-10">
                      <Dialog.Title className="font-display font-semibold text-3xl md:text-5xl leading-tight mb-6">{selected.title}</Dialog.Title>
                      <Dialog.Description className="text-text-secondary text-lg leading-relaxed mb-8">{selected.description}</Dialog.Description>
                      <div className="mono text-xs uppercase tracking-widest text-text-secondary mb-3">Stack</div>
                      <div className="flex flex-wrap gap-2 mb-10">
                        {selected.techTags.map(t => <span key={t} className="mono text-xs px-3 py-1.5 border border-border-strong">{t}</span>)}
                      </div>
                      <div className="flex flex-wrap gap-4">
                        {selected.liveLink && <a href={selected.liveLink} target="_blank" rel="noreferrer" className="btn-accent">Live Demo <ArrowUpRight size={18} /></a>}
                        {selected.githubLink && <a href={selected.githubLink} target="_blank" rel="noreferrer" className="btn-ghost">GitHub <FaGithub size={18} /></a>}
                      </div>
                    </div>
                  </motion.div>
                </Dialog.Content>
              </Dialog.Portal>
            )}
          </AnimatePresence>
        </Dialog.Root>
      </div>
    </section>
  );
}
