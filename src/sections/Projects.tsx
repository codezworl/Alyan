import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data';
import { ExternalLink, X, Eye, Download } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import * as Dialog from '@radix-ui/react-dialog';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="w-full max-w-[95%] 2xl:max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-surface rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col cursor-pointer group hover:border-accent transition-colors p-6"
              onClick={() => setSelectedProject(project)}
            >
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-text-secondary text-sm mb-4 flex-grow line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techTags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-surface-2 text-text-secondary rounded-md">{tag}</span>
                  ))}
                  {project.techTags.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-surface-2 text-text-secondary rounded-md">+{project.techTags.length - 3}</span>
                  )}
                </div>
                <div className="text-accent text-sm font-medium">View Details &rarr;</div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
          <a href="/Alyan_Shahid_Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-surface-2 backdrop-blur-sm text-text-primary border border-border font-medium hover:bg-border hover:shadow-lg transition-all flex items-center gap-2">
            Preview Resume <Eye size={18} />
          </a>
          <a href="/Alyan_Shahid_Resume.pdf" download="Alyan_Shahid_Resume.pdf" className="px-8 py-4 rounded-full bg-accent text-white font-medium hover:bg-opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-accent/30">
            Download Resume <Download size={18} />
          </a>
        </div>

        <Dialog.Root open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <AnimatePresence>
            {selectedProject && (
              <Dialog.Portal forceMount>
                <Dialog.Overlay asChild>
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }} 
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                  />
                </Dialog.Overlay>
                <Dialog.Content asChild>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: '20%' }} 
                    animate={{ opacity: 1, scale: 1, y: '-50%' }} 
                    exit={{ opacity: 0, scale: 0.95, y: '20%' }} 
                    className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-2xl max-h-[85vh] bg-surface border border-border shadow-2xl rounded-3xl z-50 overflow-hidden flex flex-col"
                  >
                    <div className="h-48 md:h-64 bg-surface-2 relative flex-shrink-0">
                       <div className="w-full h-full flex items-center justify-center text-text-secondary">
                          <span className="font-display font-bold text-4xl opacity-50">{selectedProject.title.substring(0, 2)}</span>
                       </div>
                       <Dialog.Close className="absolute top-4 right-4 p-2 bg-black/40 text-white rounded-full hover:bg-black/60 transition-colors">
                          <X size={20} />
                       </Dialog.Close>
                    </div>
                    <div className="p-6 md:p-8 overflow-y-auto">
                      <Dialog.Title className="text-2xl md:text-3xl font-bold mb-4">{selectedProject.title}</Dialog.Title>
                      <Dialog.Description className="text-text-secondary text-base leading-relaxed mb-6">
                        {selectedProject.description}
                      </Dialog.Description>
                      
                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.techTags.map(tag => (
                            <span key={tag} className="text-sm px-3 py-1 bg-surface-2 text-text-secondary rounded-lg border border-border/50">{tag}</span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-border">
                        {selectedProject.liveLink && (
                          <a href={selectedProject.liveLink} target="_blank" rel="noreferrer" className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 bg-accent text-white rounded-xl font-medium hover:bg-opacity-90 transition-all shadow-sm">
                            Live Demo <ExternalLink size={18} />
                          </a>
                        )}
                        {selectedProject.githubLink && (
                          <a href={selectedProject.githubLink} target="_blank" rel="noreferrer" className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 bg-surface-2 text-text-primary border border-border rounded-xl font-medium hover:bg-border transition-all">
                            GitHub <FaGithub size={18} />
                          </a>
                        )}
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
