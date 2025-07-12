import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ProjectModal from '../components/ProjectModal';
import { GithubIcon } from '../components/SocialIcons';
import { PROJECTS } from '../data';
import type { Project } from '../data';

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: '0 24px 48px -12px rgba(37,99,235,0.15)' }}
      transition={{ duration: 0.3 }}
      className="card overflow-hidden flex flex-col h-full"
    >
      {/* Gradient header */}
      <div className={`bg-gradient-to-br ${project.gradient} p-6 relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -translate-y-8 translate-x-8" />
        <span className="text-4xl relative z-10">{project.icon}</span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-sora font-bold text-gray-900 text-lg mb-2 leading-snug">{project.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{project.shortDesc}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 4).map(t => <span key={t} className="tag text-xs">{t}</span>)}
          {project.tech.length > 4 && (
            <span className="tag text-xs">+{project.tech.length - 4}</span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button onClick={onOpen}
            className="btn-primary flex-1 justify-center text-xs py-2.5">
            View Details <ArrowRight size={14} />
          </button>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:text-accent hover:border-accent/30 hover:bg-blue-50 transition-all shrink-0">
            <GithubIcon size={15} />
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:text-accent hover:border-accent/30 hover:bg-blue-50 transition-all shrink-0">
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-gray-50/50">
      <div className="section-container">
        <FadeIn className="text-center mb-16">
          <span className="section-label justify-center">
            <span className="w-6 h-px bg-accent inline-block" /> Projects
          </span>
          <h2 className="section-title">Featured Work</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            A selection of projects that demonstrate my skills across AI, full-stack development, and IoT.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.08}>
              <ProjectCard project={project} onOpen={() => setSelected(project)} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="text-center mt-12">
          <a href="https://github.com/aryankanchan" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <GithubIcon size={16} /> View All on GitHub
          </a>
        </FadeIn>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
