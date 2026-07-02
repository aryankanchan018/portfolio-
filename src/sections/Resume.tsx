import { Download, Eye } from 'lucide-react';
import FadeIn from '../components/FadeIn';

export default function Resume() {
  return (
    <section id="resume" className="py-24 bg-white">
      <div className="section-container">
        <FadeIn className="text-center mb-16">
          <span className="section-label justify-center">
            <span className="w-6 h-px bg-accent inline-block" /> Resume
          </span>
          <h2 className="section-title">My Resume</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            A summary of my education, skills, projects, and experience.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-3xl mx-auto">
            {/* Resume preview card */}
            <div className="card overflow-hidden">
              {/* Mock resume preview */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 p-10 border-b border-gray-100">
                <div className="max-w-lg mx-auto space-y-4">
                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-white font-sora font-bold text-xl shadow-lg shadow-accent/20">A</div>
                    <div>
                      <div className="h-5 w-40 bg-gray-800 rounded-md mb-1.5" />
                      <div className="h-3 w-56 bg-gray-300 rounded-md" />
                    </div>
                  </div>
                  {/* Divider */}
                  <div className="h-px bg-gray-200" />
                  {/* Sections */}
                  {['Education', 'Skills', 'Projects', 'Experience'].map(s => (
                    <div key={s}>
                      <div className="h-3 w-24 bg-accent/40 rounded mb-2" />
                      <div className="space-y-1.5">
                        <div className="h-2.5 bg-gray-200 rounded w-full" />
                        <div className="h-2.5 bg-gray-200 rounded w-4/5" />
                        <div className="h-2.5 bg-gray-200 rounded w-3/5" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 flex flex-col sm:flex-row gap-3 justify-center">
                <a href="/resume.pdf" download className="btn-primary justify-center">
                  <Download size={16} /> Download Resume
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary justify-center">
                  <Eye size={16} /> View Full Resume
                </a>
              </div>
            </div>

            {/* Quick highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              {[
                { label: 'Education', value: 'B.Tech CSE' },
                { label: 'CGPA', value: '8.4 / 10' },
                { label: 'Graduation', value: '2026' },
                { label: 'Location', value: 'Pune, India' },
              ].map(({ label, value }) => (
                <div key={label} className="card p-4 text-center">
                  <p className="font-sora font-bold text-gray-900 text-sm">{value}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
