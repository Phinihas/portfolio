import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Terminal, 
  CheckCircle2, 
  Sparkles,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Experience: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="experience" className={`py-20 relative transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#080c15]' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Work Experience
          </h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300 text-base">
            Professional engineering timeline at Posidex Technologies, delivering production AI/ML systems and backend architectures.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Central Line for desktop */}
          <div className="hidden md:block absolute left-[31px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-slate-300 dark:to-slate-800" />

          <div className="space-y-10">
            {EXPERIENCE_DATA.map((exp) => (
              <div 
                key={exp.id} 
                className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start group"
              >
                {/* Timeline Node */}
                <div className="flex md:flex-col items-center">
                  <div className={`z-10 w-16 h-16 rounded-2xl border-2 flex items-center justify-center transition-all duration-300 shadow-lg ${
                    theme === 'dark' 
                      ? 'bg-slate-900 border-cyan-500/60 text-cyan-400 shadow-cyan-500/10 group-hover:scale-110 group-hover:border-cyan-400' 
                      : 'bg-white border-cyan-500 text-cyan-600 shadow-cyan-500/15 group-hover:scale-110 group-hover:border-cyan-600'
                  }`}>
                    <Terminal className="w-7 h-7" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 glass-panel p-6 sm:p-8 rounded-3xl transition-all duration-300 shadow-xl w-full">
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200 dark:border-slate-800/80">
                    <div>
                      <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 text-xs font-semibold mb-2 font-mono">
                        {exp.domain}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-base font-semibold text-slate-800 dark:text-slate-300 mt-0.5">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs sm:text-sm font-mono gap-1 text-slate-600 dark:text-slate-400">
                      <div className="flex items-center gap-1.5 font-semibold text-slate-900 dark:text-slate-200">
                        <Calendar className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 opacity-90">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights / Responsibilities strictly matching resume */}
                  <div className="mt-5 space-y-3">
                    <h4 className="text-xs uppercase tracking-wider font-semibold font-mono text-slate-600 dark:text-slate-400">
                      Key Technical Contributions:
                    </h4>
                    <ul className="space-y-2.5">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-1" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800/80">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-xs font-mono mr-2 text-slate-600 dark:text-slate-400 font-semibold">Stack:</span>
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-900/90 text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
