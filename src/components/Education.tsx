import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  Video, 
  Users, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { EDUCATION_DATA, EXTRA_CURRICULAR_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Education: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="education" className={`py-20 relative border-t transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#090d16]/70 border-slate-800/80' : 'bg-slate-50/70 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education & Community
          </h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300 text-base">
            Academic achievements from RGUKT Nuzvid alongside leadership in technical content and campus communities.
          </p>
        </div>

        {/* Education Timeline / Cards */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6">
            {EDUCATION_DATA.map((edu) => (
              <div
                key={edu.id}
                className="glass-panel p-6 sm:p-7 rounded-3xl transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200 dark:border-slate-800/60">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <div className="text-sm font-semibold text-cyan-700 dark:text-cyan-400 mt-0.5">
                      {edu.institution}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono gap-1 text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-1.5 font-semibold text-slate-900 dark:text-slate-200">
                      <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                      <span>{edu.period}</span>
                    </div>
                    {edu.location && (
                      <div className="flex items-center gap-1.5 opacity-90">
                        <MapPin className="w-3 h-3" />
                        <span>{edu.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Grade Badge */}
                  <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border w-fit font-mono ${
                    theme === 'dark' 
                      ? 'bg-slate-900 border-cyan-500/30 text-slate-200' 
                      : 'bg-white border-cyan-500/40 text-slate-800 shadow-xs'
                  }`}>
                    <Award className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span className="text-xs">
                      {edu.gradeLabel}: <strong className="text-cyan-700 dark:text-cyan-300 font-bold">{edu.grade}</strong>
                    </span>
                  </div>

                  {/* Details */}
                  {edu.details && (
                    <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed max-w-xl">
                      {edu.details.map((d, dIdx) => (
                        <p key={dIdx}>{d}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extra-Curricular & Brand Leadership */}
        <div className="max-w-4xl mx-auto pt-8 border-t border-slate-200 dark:border-slate-800/80">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-2">
              <Users className="w-5 h-5 text-indigo-500" />
              <span>Leadership & Extracurricular Activities</span>
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              Sharing technical knowledge and leading student communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EXTRA_CURRICULAR_DATA.map((item, idx) => {
              const isVideo = item.icon === 'Video';
              return (
                <div
                  key={idx}
                  className="glass-panel p-6 rounded-3xl transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className={`p-2 rounded-xl ${
                        isVideo ? 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20' : 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20'
                      }`}>
                        {isVideo ? <Video className="w-5 h-5" /> : <Users className="w-5 h-5" />}
                      </div>
                      <span className="text-[10px] font-mono text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20 font-semibold">
                        {item.tag}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>
                    <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
                      {item.role}
                    </div>

                    <p className="text-xs text-slate-700 dark:text-slate-300 mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {isVideo && (
                    <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800">
                      <a
                        href="https://www.youtube.com/@learnaitoday7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                      >
                        <span>Visit @learnaitoday7 on YouTube</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
