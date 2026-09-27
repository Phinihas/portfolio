import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Code2
} from 'lucide-react';
import { Project, PROJECTS_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const { theme } = useTheme();

  const filterTabs = [
    { label: 'All Projects', value: 'All', count: PROJECTS_DATA.length },
    { 
      label: 'AI & Computer Vision', 
      value: 'AI / Computer Vision', 
      count: PROJECTS_DATA.filter(p => p.category === 'AI / Computer Vision').length 
    },
    { 
      label: 'AI & Machine Learning', 
      value: 'AI / Machine Learning', 
      count: PROJECTS_DATA.filter(p => p.category === 'AI / Machine Learning').length 
    },
    { 
      label: 'Full-Stack & Web', 
      value: 'Full-Stack & Web', 
      count: PROJECTS_DATA.filter(p => p.category === 'Full-Stack & Web').length 
    },
  ];

  const displayedProjects = activeFilter === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className={`py-24 relative transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#080c15]' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Curated Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-4 text-slate-700 dark:text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            AI/ML systems, computer vision architectures, and responsive full-stack applications built with verifiable results and production reliability.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                activeFilter === tab.value
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/25 scale-[1.02]'
                  : theme === 'dark'
                    ? 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border border-slate-200 shadow-xs'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                activeFilter === tab.value
                  ? 'bg-white/20 text-white'
                  : theme === 'dark'
                    ? 'bg-slate-800 text-slate-400'
                    : 'bg-slate-200 text-slate-600'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Unified Project Grid: AI/ML and Full-Stack together in one harmonious section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {displayedProjects.map((project) => {
            const isAi = project.category.includes('AI');
            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`glass-panel p-6 sm:p-7 rounded-3xl transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:scale-[1.015] hover:shadow-xl relative overflow-hidden border ${
                  theme === 'dark'
                    ? 'border-slate-800/90 hover:border-cyan-500/50'
                    : 'border-slate-200 hover:border-cyan-500'
                }`}
              >
                {/* Top Edge Glow */}
                <div 
                  className={`absolute top-0 left-0 right-0 h-1 transition-opacity ${
                    isAi
                      ? 'bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-70 group-hover:opacity-100'
                      : 'bg-gradient-to-r from-sky-400 to-emerald-400 opacity-60 group-hover:opacity-100'
                  }`}
                />

                <div>
                  {/* Category Pill & Metrics/Origin */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold border ${
                      isAi
                        ? 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/20'
                        : 'bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/20'
                    }`}>
                      {project.category}
                    </span>

                    {project.metrics && project.metrics.length > 0 ? (
                      <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        {project.metrics[0].value}
                      </span>
                    ) : project.featured ? (
                      <span className="text-[10px] font-mono text-indigo-700 dark:text-indigo-400 font-semibold bg-indigo-500/10 px-2 py-0.5 rounded-full">
                        Resume Feature
                      </span>
                    ) : null}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-1" />
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-1 mb-2.5 font-mono line-clamp-1">
                    {project.tagline}
                  </p>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed line-clamp-3 mb-4">
                    {project.summary}
                  </p>

                  {/* Key Features Preview (1-2 points) */}
                  {project.keyFeatures && project.keyFeatures.length > 0 && (
                    <div className="space-y-1.5 mb-4 pt-1">
                      {project.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-medium border ${
                          theme === 'dark'
                            ? 'bg-slate-900 text-slate-300 border-slate-800'
                            : 'bg-slate-100 text-slate-800 border-slate-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono py-0.5">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Bottom Actions: View details + Links */}
                  <div className="flex items-center justify-between pt-3.5 border-t border-slate-200 dark:border-slate-800/80 text-xs">
                    <span 
                      className="text-cyan-600 dark:text-cyan-400 font-bold group-hover:underline flex items-center gap-1 cursor-pointer"
                      onClick={() => onSelectProject(project)}
                    >
                      Architecture & Details &rarr;
                    </span>

                    <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2 rounded-xl border transition-all cursor-pointer ${
                            theme === 'dark'
                              ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border-slate-700'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-800 hover:text-slate-900 border-slate-200 shadow-xs'
                          }`}
                          title="View Source on GitHub"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2 rounded-xl border transition-all cursor-pointer ${
                            theme === 'dark'
                              ? 'bg-slate-800 hover:bg-slate-700 text-cyan-400 hover:text-cyan-300 border-slate-700'
                              : 'bg-cyan-50 hover:bg-cyan-100 text-cyan-700 hover:text-cyan-800 border-cyan-200 shadow-xs'
                          }`}
                          title="Live Demo"
                          aria-label={`View Live Demo for ${project.title}`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
