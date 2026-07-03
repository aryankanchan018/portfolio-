import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import { ACHIEVEMENTS } from '../data';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-white">
      <div className="section-container">
        <FadeIn className="text-center mb-16">
          <span className="section-label justify-center">
            <span className="w-6 h-px bg-accent inline-block" /> Achievements
          </span>
          <h2 className="section-title">Certifications & Awards</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Recognition and credentials earned through learning and competition.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ACHIEVEMENTS.map((a, i) => (
            <FadeIn key={a.title} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.25 }}
                className="card p-6 flex flex-col h-full"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${a.color} flex items-center justify-center text-2xl mb-4 shadow-md`}>
                  {a.icon}
                </div>
                <h3 className="font-sora font-bold text-gray-900 mb-1 leading-snug">{a.title}</h3>
                <p className="text-accent text-xs font-semibold mb-3">{a.org}</p>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{a.desc}</p>
                {a.link && (
                  <a href={a.link} target="_blank" rel="noopener noreferrer"
                    className="mt-4 text-xs font-semibold text-accent hover:underline">
                    View Certificate →
                  </a>
                )}
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
