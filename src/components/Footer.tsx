import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone, Youtube, Instagram } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t py-8 text-xs font-mono transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-[#060911] border-slate-800/80 text-slate-400' 
        : 'bg-slate-100 border-slate-200 text-slate-700'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Details, Social Channels & Back to Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6">
          
          {/* Direct Contact Details */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 font-sans">
            <a 
              href={`mailto:${CONTACT_INFO.email}`} 
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>{CONTACT_INFO.email}</span>
            </a>

            <a 
              href={`tel:${CONTACT_INFO.phone}`} 
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{CONTACT_INFO.phone}</span>
            </a>

            <span className="text-slate-500">
              {CONTACT_INFO.location}
            </span>
          </div>

          {/* Social Channels & Back to Top */}
          <div className="flex items-center gap-4 sm:gap-5 flex-wrap justify-center">
            <div className="flex items-center gap-4">
              <a 
                href={CONTACT_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1 text-slate-700 dark:text-slate-300"
              >
                <Linkedin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>LinkedIn</span>
              </a>

              <span>•</span>

              <a 
                href={CONTACT_INFO.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1 text-slate-700 dark:text-slate-300"
              >
                <Github className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                <span>GitHub</span>
              </a>

              <span>•</span>

              <a 
                href={CONTACT_INFO.youtube} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-red-600 transition-colors flex items-center gap-1 text-slate-700 dark:text-slate-300"
              >
                <Youtube className="w-3.5 h-3.5 text-red-600" />
                <span>YouTube</span>
              </a>

              <span>•</span>

              <a 
                href={CONTACT_INFO.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-pink-600 transition-colors flex items-center gap-1 text-slate-700 dark:text-slate-300"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-600" />
                <span>Instagram</span>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-all cursor-pointer font-semibold ${
                theme === 'dark'
                  ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-800 hover:border-cyan-500/30'
                  : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200 hover:border-cyan-500/40 shadow-xs'
              }`}
              title="Back to top"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className={`pt-4 border-t text-center text-slate-500 text-[11px] ${
          theme === 'dark' ? 'border-slate-800/60' : 'border-slate-200'
        }`}>
          <p>
            © {new Date().getFullYear()} Phinihas Gandi. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
