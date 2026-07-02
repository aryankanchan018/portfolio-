import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, Users, BookOpen } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { GithubIcon } from '../components/SocialIcons';

const GITHUB_USER = 'aryankanchan';

interface GHUser { public_repos: number; followers: number; following: number; }
interface GHRepo { id: number; name: string; description: string; stargazers_count: number; forks_count: number; language: string; html_url: string; }

const LANG_COLORS: Record<string, string> = {
  Python: '#3572A5', JavaScript: '#F1E05A', TypeScript: '#2B7489',
  Java: '#B07219', 'C++': '#F34B7D', HTML: '#E34C26', CSS: '#563D7C',
};

export default function GitHubDashboard() {
  const [user, setUser] = useState<GHUser | null>(null);
  const [repos, setRepos] = useState<GHRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USER}`).then(r => r.json()),
      fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=stars&per_page=6`).then(r => r.json()),
    ]).then(([u, r]) => {
      if (u && !u.message) setUser(u);
      if (Array.isArray(r)) setRepos(r);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const langMap: Record<string, number> = {};
  repos.forEach(r => { if (r.language) langMap[r.language] = (langMap[r.language] || 0) + 1; });
  const langs = Object.entries(langMap).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const total = langs.reduce((s, [, n]) => s + n, 0);

  return (
    <section id="github" className="py-24 bg-gray-50/50">
      <div className="section-container">
        <FadeIn className="text-center mb-16">
          <span className="section-label justify-center">
            <span className="w-6 h-px bg-[#2563EB] inline-block" /> GitHub
          </span>
          <h2 className="section-title">Open Source Activity</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Live data from my GitHub profile — repositories, contributions, and language usage.
          </p>
        </FadeIn>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="flex gap-2">
              {[0, 1, 2].map(i => (
                <div key={i} className="loader-dot w-2 h-2 rounded-full bg-[#2563EB]" style={{ animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {user && (
              <FadeIn>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { icon: BookOpen, label: 'Repositories', value: user.public_repos },
                    { icon: Users, label: 'Followers', value: user.followers },
                    { icon: Star, label: 'Stars', value: repos.reduce((s, r) => s + r.stargazers_count, 0) },
                    { icon: GitFork, label: 'Forks', value: repos.reduce((s, r) => s + r.forks_count, 0) },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="card p-5 text-center">
                      <Icon size={20} className="text-[#2563EB] mx-auto mb-2" />
                      <div className="font-sora font-bold text-2xl text-gray-900">{value}</div>
                      <div className="text-xs text-gray-500 font-medium">{label}</div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Repos */}
              <FadeIn delay={0.1} className="lg:col-span-2">
                <div className="card p-6">
                  <h3 className="font-sora font-semibold text-gray-900 mb-4">Top Repositories</h3>
                  <div className="space-y-3">
                    {repos.slice(0, 5).map(repo => (
                      <motion.a
                        key={repo.id}
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 4 }}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <GithubIcon size={16} className="text-gray-400 shrink-0" />
                          <div className="min-w-0">
                            <p className="font-semibold text-gray-900 text-sm group-hover:text-[#2563EB] transition-colors truncate">{repo.name}</p>
                            {repo.description && <p className="text-gray-400 text-xs truncate">{repo.description}</p>}
                          </div>
                        </div>
                        <div className="flex items-center gap-3 shrink-0 ml-3">
                          {repo.language && (
                            <span className="flex items-center gap-1 text-xs text-gray-500">
                              <span className="w-2 h-2 rounded-full" style={{ background: LANG_COLORS[repo.language] || '#ccc' }} />
                              {repo.language}
                            </span>
                          )}
                          <span className="flex items-center gap-1 text-xs text-gray-400">
                            <Star size={12} /> {repo.stargazers_count}
                          </span>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Languages */}
              <FadeIn delay={0.2}>
                <div className="card p-6">
                  <h3 className="font-sora font-semibold text-gray-900 mb-4">Most Used Languages</h3>
                  <div className="space-y-3">
                    {langs.map(([lang, count]) => (
                      <div key={lang}>
                        <div className="flex justify-between text-xs font-medium text-gray-600 mb-1">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full" style={{ background: LANG_COLORS[lang] || '#ccc' }} />
                            {lang}
                          </span>
                          <span>{Math.round((count / total) * 100)}%</span>
                        </div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(count / total) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-full rounded-full"
                            style={{ background: LANG_COLORS[lang] || '#2563EB' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noopener noreferrer"
                    className="btn-secondary w-full justify-center mt-6 text-xs py-2.5">
                    <GithubIcon size={14} /> View Profile
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
