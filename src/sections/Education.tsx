import FadeIn from '../components/FadeIn';
import { EDUCATION } from '../data';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-gray-50/50">
      <div className="section-container">
        <FadeIn className="text-center mb-16">
          <span className="section-label justify-center">
            <span className="w-6 h-px bg-accent inline-block" /> Education
          </span>
          <h2 className="section-title">Academic Background</h2>
        </FadeIn>

        <div className="max-w-3xl mx-auto space-y-5">
          {EDUCATION.map((edu, i) => (
            <FadeIn key={edu.institution} delay={i * 0.1}>
              <div className="card p-6 flex gap-5 items-start">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-2xl shrink-0 shadow-lg`}>
                  {edu.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="font-sora font-bold text-gray-900">{edu.degree}</h3>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${
                      edu.status === 'Current Student'
                        ? 'bg-green-50 text-green-700 border border-green-100'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-accent font-semibold text-sm mb-1">{edu.institution}</p>
                  <p className="text-gray-500 text-sm">{edu.field}</p>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="text-xs text-gray-400 font-medium">📅 {edu.period}</span>
                    {edu.grade && (
                      <span className="text-xs font-semibold text-gray-700 bg-gray-100 px-2.5 py-1 rounded-full">
                        {edu.grade}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
