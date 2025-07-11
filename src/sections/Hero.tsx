import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { SOCIAL } from '../data';

// Abstract AI-inspired SVG background
function HeroBg() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 700" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="g1" cx="70%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="g2" cx="20%" cy="80%" r="40%">
          <stop offset="0%" stopColor="#6366F1" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="700" fill="url(#g1)" />
      <rect width="1200" height="700" fill="url(#g2)" />
      {/* Grid lines */}
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="700" stroke="#2563EB" strokeOpacity="0.04" strokeWidth="1" />
      ))}
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 100} x2="1200" y2={i * 100} stroke="#2563EB" strokeOpacity="0.04" strokeWidth="1" />
      ))}
      {/* Floating circles */}
      <circle cx="900" cy="150" r="120" stroke="#2563EB" strokeOpacity="0.07" strokeWidth="1" fill="none" />
      <circle cx="900" cy="150" r="80" stroke="#2563EB" strokeOpacity="0.05" strokeWidth="1" fill="none" />
      <circle cx="200" cy="500" r="90" stroke="#6366F1" strokeOpacity="0.06" strokeWidth="1" fill="none" />
      {/* Dots */}
      {[[950, 100], [850, 200], [1000, 250], [150, 450], [250, 550]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="#2563EB" fillOpacity="0.15" />
      ))}
    </svg>
  );
}

// Avatar placeholder with initials
function Avatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Glow ring */}
      <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-accent/20 to-indigo-400/10 blur-2xl animate-pulse-slow" />
      {/* Avatar circle */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 border-4 border-white shadow-2xl flex items-center justify-center overflow-hidden">
        {/* Abstract AI face illustration */}
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DBEAFE" />
              <stop offset="100%" stopColor="#EEF2FF" />
            </linearGradient>
          </defs>
          <rect width="200" height="200" fill="url(#avatarGrad)" />
          {/* Silhouette */}
          <ellipse cx="100" cy="85" rx="38" ry="42" fill="#BFDBFE" />
          <ellipse cx="100" cy="170" rx="60" ry="50" fill="#BFDBFE" />
          {/* Face details */}
          <circle cx="86" cy="80" r="5" fill="#2563EB" fillOpacity="0.6" />
          <circle cx="114" cy="80" r="5" fill="#2563EB" fillOpacity="0.6" />
          <path d="M88 98 Q100 108 112 98" stroke="#2563EB" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Circuit lines */}
          <line x1="30" y1="100" x2="62" y2="100" stroke="#2563EB" strokeOpacity="0.2" strokeWidth="1" />
          <line x1="138" y1="100" x2="170" y2="100" stroke="#2563EB" strokeOpacity="0.2" strokeWidth="1" />
          <circle cx="30" cy="100" r="3" fill="#2563EB" fillOpacity="0.2" />
          <circle cx="170" cy="100" r="3" fill="#2563EB" fillOpacity="0.2" />
        </svg>
        {/* Initials overlay */}
        <div className="absolute inset-0 flex items-end justify-center pb-8">
          <span className="font-sora font-bold text-5xl text-accent/30">AK</span>
        </div>
      </div>

      {/* Floating badges */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-2 -right-4 glass rounded-2xl px-3 py-2 shadow-lg"
      >
        <span className="text-xs font-semibold text-gray-700">🤖 AI Developer</span>
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -bottom-2 -left-4 glass rounded-2xl px-3 py-2 shadow-lg"
      >
        <span className="text-xs font-semibold text-gray-700">⚡ Open to Work</span>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const scroll = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      <HeroBg />

      <div className="section-container relative z-10 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold text-accent">Available for Internships & Projects</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sora text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4"
            >
              Aryan<br />
              <span className="text-accent">Kanchan</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-500 font-medium text-lg mb-2"
            >
              Computer Science Engineering Student
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {['AI Developer', 'Software Engineer', 'Problem Solver'].map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg"
            >
              I build <strong className="text-gray-900">intelligent software</strong> and{' '}
              <strong className="text-gray-900">AI-powered solutions</strong> that combine clean design with practical innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
                View Projects
              </button>
              <a href="/resume.pdf" download className="btn-secondary">
                <Download size={16} /> Download Resume
              </a>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-secondary">
                <Mail size={16} /> Contact Me
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <span className="text-xs text-gray-400 font-medium">Find me on</span>
              <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:text-accent hover:border-accent/30 hover:bg-blue-50 transition-all">
                <GithubIcon size={16} />
              </a>
              <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:text-accent hover:border-accent/30 hover:bg-blue-50 transition-all">
                <LinkedinIcon size={16} />
              </a>
              <a href={`mailto:${SOCIAL.email}`}
                className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:text-accent hover:border-accent/30 hover:bg-blue-50 transition-all">
                <Mail size={16} />
              </a>
            </motion.div>
          </div>

          {/* Right — avatar */}
          <div className="flex justify-center lg:justify-end">
            <Avatar />
          </div>
        </div>

        {/* Scroll cue */}
        <motion.button
          onClick={scroll}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 hover:text-accent transition-colors"
        >
          <span className="text-xs font-medium">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown size={16} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
