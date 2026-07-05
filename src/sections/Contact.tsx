import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../components/SocialIcons';
import { SOCIAL } from '../data';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.match(/^[^@]+@[^@]+\.[^@]+$/)) e.email = 'Valid email required';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (form.message.trim().length < 20) e.message = 'Message must be at least 20 characters';
    return e;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSending(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSent(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : JSON.stringify(err);
      setErrors({ message: `Error: ${msg}` });
    } finally {
      setSending(false);
    }
  };

  const LINKS = [
    { icon: Mail, label: 'Email', value: SOCIAL.email, href: `mailto:${SOCIAL.email}` },
    { icon: LinkedinIcon, label: 'LinkedIn', value: 'linkedin.com/in/aryan-kanchan-47709725b', href: SOCIAL.linkedin },
    { icon: GithubIcon, label: 'GitHub', value: 'github.com/Aryankanchan018', href: SOCIAL.github },
    { icon: InstagramIcon, label: 'Instagram', value: '@aryan_kanchan_18', href: SOCIAL.instagram },
    { icon: MapPin, label: 'Location', value: SOCIAL.location, href: '#' },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50/50">
      <div className="section-container">
        <FadeIn className="text-center mb-16">
          <span className="section-label justify-center">
            <span className="w-6 h-px bg-accent inline-block" /> Contact
          </span>
          <h2 className="section-title">Let's work together</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Open to internships, research collaborations, and freelance projects. Let's build something great.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Left — contact info */}
          <FadeIn className="lg:col-span-2 space-y-4">
            {LINKS.map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="card p-4 flex items-center gap-4 hover:border-accent/20 hover:bg-blue-50/30 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                  <Icon size={18} className="text-accent group-hover:text-white transition-colors" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-400 font-medium">{label}</p>
                  <p className="text-gray-800 text-sm font-semibold truncate">{value}</p>
                </div>
              </a>
            ))}
          </FadeIn>

          {/* Right — form */}
          <FadeIn delay={0.15} className="lg:col-span-3">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card p-10 text-center h-full flex flex-col items-center justify-center"
              >
                <CheckCircle2 size={48} className="text-green-500 mb-4" />
                <h3 className="font-sora font-bold text-gray-900 text-xl mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="btn-secondary mt-6 text-sm">Send Another</button>
              </motion.div>
            ) : (
              <form onSubmit={submit} className="card p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Full Name</label>
                    <input
                      type="text" placeholder="Aryan Kanchan"
                      value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                        errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/10'
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email Address</label>
                    <input
                      type="email" placeholder="you@example.com"
                      value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                        errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/10'
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Subject</label>
                  <input
                    type="text" placeholder="Internship Opportunity / Project Collaboration"
                    value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                      errors.subject ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/10'
                    }`}
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Message</label>
                  <textarea
                    rows={5} placeholder="Tell me about your project or opportunity..."
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all resize-none ${
                      errors.message ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/10'
                    }`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button type="submit" disabled={sending} className="btn-primary w-full justify-center">
                  {sending ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </span>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
