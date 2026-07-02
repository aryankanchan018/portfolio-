import FadeIn from '../components/FadeIn';
import { EXPERIENCE } from '../data';
import { Briefcase } from 'lucide-react';

const TYPE_COLORS: Record<string, string> = {
  Internship: 'bg-blue-50 text-blue-700 border-blue-100',
  Freelance: 'bg-purple-50 text-purple-700 border-purple-100',
  'Open Source': 'bg-green-50 text-green-700 border-green-100',
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="section-container">
        <FadeIn className="text-center mb-16">
          <span className="section-label justify-center">
            <span className="w-6 h-px bg-accent inline-block" /> Experience
          </span>
          <h2 className="section-title">Work & Contributions</h2>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-accent/10 to-transparent" />

            <div className="space-y-8">
              {EXPERIENCE.map((exp, i) => (
                <FadeIn key={exp.role} delay={i * 0.1}>
                  <div className="flex gap-6">
                    {/* Dot */}
                    <div className="relative shrink-0">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 border-2 border-white shadow-md flex items-center justify-center z-10 relative">
                        <Briefcase size={18} className="text-accent" />
                      </div>
                    </div>

                    {/* Card */}
                    <div className="card p-6 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="font-sora font-bold text-gray-900">{exp.role}</h3>
                          <p className="text-accent font-semibold text-sm">{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${TYPE_COLORS[exp.type]}`}>
                            {exp.type}
                          </span>
                          <span className="text-xs text-gray-400 font-medium">{exp.period}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map(h => <span key={h} className="tag text-xs">{h}</span>)}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
