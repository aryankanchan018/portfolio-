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
              {/* PDF preview */}
              <div className="border-b border-gray-100">
                <iframe
                  src="/resume.pdf"
                  className="w-full h-[500px]"
                  title="Aryan Kanchan Resume"
                />
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
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { label: 'Education', value: 'B.Tech CSE' },
                { label: 'Graduation', value: '2028' },
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
