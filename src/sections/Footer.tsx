import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { SOCIAL } from '../data';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-10">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#2563EB] flex items-center justify-center">
            <span className="text-white font-sora font-bold text-xs">A</span>
          </div>
          <span className="font-sora font-semibold text-gray-800 text-sm">Aryan Kanchan</span>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-xs flex items-center gap-1">
          Designed &amp; Developed with{' '}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#f87171" className="inline"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/></svg>
          {' '}by Aryan Kanchan &nbsp;·&nbsp; © {new Date().getFullYear()} All Rights Reserved
        </p>

        {/* Social */}
        <div className="flex items-center gap-2">
          <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#2563EB] hover:border-blue-200 hover:bg-blue-50 transition-all">
            <GithubIcon size={14} />
          </a>
          <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#2563EB] hover:border-blue-200 hover:bg-blue-50 transition-all">
            <LinkedinIcon size={14} />
          </a>
          <a href={`mailto:${SOCIAL.email}`}
            className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#2563EB] hover:border-blue-200 hover:bg-blue-50 transition-all">
            <Mail size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
