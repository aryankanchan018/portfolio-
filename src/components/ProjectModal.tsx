import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import type { Project } from '../data';
import { GithubIcon } from './SocialIcons';
import { useEffect } from 'react';

interface Props { project: Project | null; onClose: () => void; }

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (project) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-backdrop fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Header gradient */}
            <div className={`bg-gradient-to-br ${project.gradient} p-8 rounded-t-3xl relative`}>
              <button onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                <X size={16} className="text-white" />
              </button>
              <div className="text-4xl mb-3">{project.icon}</div>
              <h2 className="text-2xl font-sora font-bold text-white mb-2">{project.title}</h2>
              <p className="text-white/80 text-sm leading-relaxed">{project.shortDesc}</p>
            </div>

            <div className="p-8 space-y-6">
              {/* Description */}
              <div>
                <h3 className="font-sora font-semibold text-gray-900 mb-2">Overview</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
              </div>

              {/* Problem */}
              <div className="bg-red-50 rounded-2xl p-4 border border-red-100">
                <h3 className="font-sora font-semibold text-red-700 mb-2 text-sm">Problem Statement</h3>
                <p className="text-red-600 text-sm leading-relaxed">{project.problem}</p>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-sora font-semibold text-gray-900 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech */}
              <div>
                <h3 className="font-sora font-semibold text-gray-900 mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100">
                  <h3 className="font-sora font-semibold text-amber-700 mb-2 text-sm">Challenges</h3>
                  <p className="text-amber-600 text-sm leading-relaxed">{project.challenges}</p>
                </div>
                <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
                  <h3 className="font-sora font-semibold text-green-700 mb-2 text-sm">Solutions</h3>
                  <p className="text-green-600 text-sm leading-relaxed">{project.solutions}</p>
                </div>
              </div>

              {/* Future */}
              <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
                <h3 className="font-sora font-semibold text-blue-700 mb-2 text-sm">Future Improvements</h3>
                <p className="text-blue-600 text-sm leading-relaxed">{project.future}</p>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-2">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 justify-center">
                  <GithubIcon size={16} /> GitHub Repository
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-secondary flex-1 justify-center">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
