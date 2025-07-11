import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import { SKILLS } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="section-container">
        <FadeIn className="text-center mb-16">
          <span className="section-label justify-center">
            <span className="w-6 h-px bg-accent inline-block" /> Skills
          </span>
          <h2 className="section-title">Technologies I work with</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            A curated set of tools and technologies I use to build intelligent, scalable software.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 20px 40px -12px rgba(37,99,235,0.12)' }}
                transition={{ duration: 0.25 }}
                className={`bg-gradient-to-br ${group.color} rounded-2xl p-6 border ${group.border} h-full`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{group.icon}</span>
                  <h3 className="font-sora font-semibold text-gray-900">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(skill => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/80 backdrop-blur-sm text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-xl border border-white/60 shadow-sm cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
