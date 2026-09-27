import React from 'react';
import { 
  Mail, 
  Phone,
  Github, 
  Linkedin, 
  Youtube,
  Instagram
} from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onOpenResumeModal?: () => void;
  onDownloadResume?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const { theme } = useTheme();

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      
      {/* Background Subtle Tech Matrix & Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        
        {/* Soft Radial Gradient Glows */}
        <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none ${
          theme === 'dark' ? 'bg-cyan-600/10' : 'bg-cyan-400/15'
        }`} />
        <div className={`absolute bottom-10 right-1/4 w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none ${
          theme === 'dark' ? 'bg-indigo-600/10' : 'bg-indigo-300/15'
        }`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Authoritative, Clean Professional Presentation */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-slate-900 dark:text-white">
                Phinihas Gandi
              </h1>
              <div className="mt-3 text-lg sm:text-2xl font-bold bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent font-sans">
                Software Engineer | AI/ML Engineer | Full-Stack Developer
              </div>
            </div>

            {/* Clean Professional Introduction (no specific projects singled out) */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Software Engineer with 1+ year of professional experience at <strong className="text-slate-900 dark:text-white font-semibold">Posidex Technologies</strong>, specializing in AI/ML systems, scalable backend architectures, and modern full-stack development. Experienced in designing and implementing high-throughput REST APIs, machine learning pipelines, and robust enterprise applications with <strong className="text-slate-900 dark:text-white font-semibold">Python, Java, FastAPI, Spring Boot, PyTorch, and React</strong>.
            </p>

            {/* Clean Competency Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs font-mono">
              <span className="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/25 font-semibold">
                • AI & Machine Learning
              </span>
              <span className="px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-800 dark:text-indigo-300 border border-indigo-500/25 font-semibold">
                • Backend Architecture
              </span>
              <span className="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/25 font-semibold">
                • Full-Stack Systems
              </span>
              <span className="px-3 py-1 rounded-lg bg-sky-500/10 text-sky-800 dark:text-sky-300 border border-sky-500/25 font-semibold">
                • REST APIs & Microservices
              </span>
            </div>

            {/* Social Links & Location */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-3 text-xs text-slate-600 dark:text-slate-400 font-mono">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>{CONTACT_INFO.email}</span>
              </a>

              <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">•</span>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-1.5 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>{CONTACT_INFO.phone}</span>
              </a>

              <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">•</span>

              <div className="flex items-center gap-3">
                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors p-1"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                </a>
                <a
                  href={CONTACT_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors p-1"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <Github className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                </a>
                <a
                  href={CONTACT_INFO.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600 transition-colors p-1"
                  aria-label="YouTube Channel"
                  title="YouTube — Learn AI Today"
                >
                  <Youtube className="w-4 h-4 text-red-600" />
                </a>
                <a
                  href={CONTACT_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-600 transition-colors p-1"
                  aria-label="Instagram Profile"
                  title="Instagram — @phinihasgandi"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Portrait Visual — strictly NO text on or around the image */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Subtle Aura Backdrop */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[300px] h-[360px] sm:w-[350px] sm:h-[420px] bg-gradient-to-tr from-cyan-500/15 via-sky-400/10 to-indigo-500/20 rounded-3xl blur-2xl" />
            </div>

            {/* Photo Card Container with pristine frame and zero text overlays */}
            <div className="relative group animate-float-gentle max-w-[340px] sm:max-w-[370px] w-full">
              <div className="p-3 rounded-3xl glass-panel border border-cyan-500/25 shadow-2xl overflow-hidden transition-all duration-300">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900 border border-slate-800/80 shadow-inner">
                  <img
                    src="/assets/profile.jpg"
                    alt="Phinihas Gandi - Software Engineer"
                    className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-103 transition-transform duration-500 ease-out"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
