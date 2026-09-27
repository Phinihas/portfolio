import React from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Workflow
} from 'lucide-react';
import { Project } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const { theme } = useTheme();
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className={`relative w-full max-w-4xl border rounded-3xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col ${
        theme === 'dark'
          ? 'bg-[#0d1322] border-slate-700/80 text-slate-100'
          : 'bg-white border-slate-300 text-slate-900'
      }`}>
        
        {/* Modal Header */}
        <div className={`sticky top-0 z-20 flex items-start justify-between p-6 backdrop-blur-md border-b ${
          theme === 'dark'
            ? 'bg-[#0d1322]/95 border-slate-800'
            : 'bg-white/95 border-slate-200 shadow-xs'
        }`}>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 font-mono">
                {project.category}
              </span>
              {project.featured && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 font-mono font-medium">
                  Resume Featured System
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {project.title}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-xl border transition-colors focus:outline-none cursor-pointer ${
              theme === 'dark'
                ? 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 border-slate-700'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 border-slate-200'
            }`}
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
          
          {/* Documented Evaluation Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-wider font-semibold font-mono mb-3 flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                <TrendingUp className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Documented Metrics & Evaluation Benchmarks</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((m, idx) => (
                  <div 
                    key={idx} 
                    className={`rounded-2xl p-3.5 text-center border ${
                      theme === 'dark'
                        ? 'bg-slate-900/90 border-slate-800'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="text-xl sm:text-2xl font-extrabold text-cyan-600 dark:text-cyan-400 font-mono">
                      {m.value}
                    </div>
                    <div className="text-[11px] text-slate-700 dark:text-slate-400 font-medium mt-1">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pipeline Diagram */}
          {project.pipelineSteps && project.pipelineSteps.length > 0 && (
            <div className={`border rounded-2xl p-5 sm:p-6 ${
              theme === 'dark'
                ? 'bg-slate-900/60 border-cyan-500/20'
                : 'bg-cyan-50/50 border-cyan-200'
            }`}>
              <h3 className="text-xs uppercase tracking-wider text-cyan-800 dark:text-cyan-300 font-semibold font-mono mb-4 flex items-center gap-2">
                <Workflow className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>System Execution Pipeline & Data Flow</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-2 items-center">
                {project.pipelineSteps.map((step, sIdx) => (
                  <React.Fragment key={sIdx}>
                    <div className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-colors ${
                      theme === 'dark'
                        ? 'bg-slate-950/80 border-slate-800 text-slate-200'
                        : 'bg-white border-slate-200 text-slate-800 shadow-xs'
                    }`}>
                      <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-mono font-bold">0{sIdx + 1}</span>
                      <span className="text-xs font-semibold mt-1">{step}</span>
                    </div>
                    {sIdx < project.pipelineSteps!.length - 1 && (
                      <div className="hidden md:flex justify-center text-slate-400 dark:text-slate-600">
                        <ArrowRight className="w-4 h-4 text-cyan-500/60" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {/* Problem & Solution Dual Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-5 rounded-2xl border ${
              theme === 'dark'
                ? 'border-red-500/20 bg-red-950/10'
                : 'border-red-200 bg-red-50/70'
            }`}>
              <h4 className="text-sm font-bold text-red-700 dark:text-red-300 font-mono uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                The Engineering Problem
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className={`p-5 rounded-2xl border ${
              theme === 'dark'
                ? 'border-emerald-500/20 bg-emerald-950/10'
                : 'border-emerald-200 bg-emerald-50/70'
            }`}>
              <h4 className="text-sm font-bold text-emerald-700 dark:text-emerald-300 font-mono uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                The Architecture Solution
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features List */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold font-mono mb-3 text-slate-600 dark:text-slate-400">
              Core Capabilities & Implementation Details:
            </h3>
            <div className="space-y-2.5">
              {project.keyFeatures.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-1" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Stack */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold font-mono mb-3 text-slate-600 dark:text-slate-400">
              Technologies & Frameworks:
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className={`px-3 py-1 rounded-xl text-xs font-semibold font-mono border ${
                    theme === 'dark'
                      ? 'bg-slate-900 text-cyan-300 border-slate-700'
                      : 'bg-slate-100 text-slate-800 border-slate-300'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className={`sticky bottom-0 z-20 flex flex-wrap items-center justify-between gap-3 p-5 backdrop-blur-md border-t ${
          theme === 'dark'
            ? 'bg-[#0d1322]/95 border-slate-800'
            : 'bg-white/95 border-slate-200'
        }`}>
          <div className="text-xs text-slate-600 dark:text-slate-400 font-mono">
            System: <span className="text-cyan-600 dark:text-cyan-400 font-semibold">{project.title}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-colors ${
                  theme === 'dark'
                    ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border-slate-700'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800 hover:text-slate-900 border-slate-300'
                }`}
              >
                <Github className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-semibold shadow-md shadow-cyan-500/20 transition-all"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={onClose}
              className={`px-4 py-2 rounded-xl text-xs font-medium border cursor-pointer ${
                theme === 'dark'
                  ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
              }`}
            >
              Close
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
