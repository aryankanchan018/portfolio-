import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, GraduationCap, Code2, Brain } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { STATS } from '../data';
import { useCounter } from '../hooks/useCounter';

function StatCard({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  const count = useCounter(value);
  return (
    <div className="text-center p-4">
      <div className="font-sora text-3xl font-bold text-accent mb-1">{count}{suffix}</div>
      <div className="text-sm text-gray-500 font-medium">{label}</div>
    </div>
  );
}

const HIGHLIGHTS = [
  { icon: GraduationCap, label: 'MIT ADT University', sub: 'B.Tech CSE · 2022–2028' },
  { icon: MapPin, label: 'Pune, Maharashtra', sub: 'India' },
  { icon: Code2, label: 'Software Engineer', sub: 'Full Stack & AI' },
  { icon: Brain, label: 'AI Enthusiast', sub: 'ML · CV · NLP' },
];

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-24 bg-gray-50/50">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <FadeIn>
              <span className="section-label">
                <span className="w-6 h-px bg-accent inline-block" /> About Me
              </span>
              <h2 className="section-title mb-6">
                Passionate about building<br />
                <span className="text-accent">intelligent systems</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm <strong className="text-gray-900">Aryan Kanchan</strong>, a Computer Science Engineering student at MIT ADT University, Pune. I'm passionate about the intersection of artificial intelligence and software engineering — building systems that are not just functional, but genuinely useful.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                I enjoy working on projects that solve real problems — from smart home automation using computer vision to medical AI systems for bone age detection. My work spans full-stack web development, machine learning, and IoT.
              </p>
            </FadeIn>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 leading-relaxed mb-4">
                    My journey into technology started with curiosity about how computers think. That curiosity led me to explore machine learning, computer vision, and deep learning — areas where I've built projects ranging from gesture-controlled systems to real-time face recognition attendance systems.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Beyond AI, I'm a full-stack developer comfortable with React, Node.js, Flask, and Firebase. I believe great software is built at the intersection of clean code, thoughtful design, and deep domain understanding.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    My career goal is to work at the frontier of AI research and engineering — contributing to systems that make a meaningful difference in healthcare, education, or accessibility. I'm actively seeking internships and research opportunities where I can grow alongside exceptional teams.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <FadeIn delay={0.2}>
              <button
                onClick={() => setExpanded(e => !e)}
                className="flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all mt-2"
              >
                {expanded ? 'Show Less' : 'Read More'}
                <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown size={16} />
                </motion.div>
              </button>
            </FadeIn>
          </div>

          {/* Right */}
          <div className="space-y-6">
            {/* Highlights */}
            <FadeIn delay={0.15} direction="left">
              <div className="grid grid-cols-2 gap-3">
                {HIGHLIGHTS.map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="card p-4 flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{label}</p>
                      <p className="text-gray-500 text-xs">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={0.25} direction="left">
              <div className="card grid grid-cols-2 divide-x divide-y divide-gray-100">
                {STATS.map(s => <StatCard key={s.label} {...s} />)}
              </div>
            </FadeIn>

            {/* Currently learning */}
            <FadeIn delay={0.3} direction="left">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100">
                <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">Currently Exploring</p>
                <div className="flex flex-wrap gap-2">
                  {['Large Language Models', 'RAG Systems', 'MLOps', 'System Design', 'TypeScript'].map(t => (
                    <span key={t} className="bg-white text-gray-700 text-xs font-medium px-3 py-1 rounded-full border border-blue-100 shadow-sm">{t}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
