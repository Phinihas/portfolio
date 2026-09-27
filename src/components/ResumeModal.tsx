import React, { useState } from 'react';
import { 
  X, 
  Download, 
  FileText, 
  ExternalLink,
  Printer,
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  Award,
  Sparkles,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Code2
} from 'lucide-react';
import { CONTACT_INFO, EXPERIENCE_DATA, EDUCATION_DATA, SKILLS_DATA, PROJECTS_DATA } from '../data/portfolioData';
import { downloadResumeFile } from '../utils/resumeDownload';
import { useTheme } from '../context/ThemeContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<'document' | 'pdf'>('document');
  const [isDownloading, setIsDownloading] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      await downloadResumeFile();
    } finally {
      setTimeout(() => setIsDownloading(false), 800);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className={`relative w-full max-w-5xl border rounded-3xl shadow-2xl overflow-hidden my-4 max-h-[94vh] flex flex-col ${
        theme === 'dark' ? 'bg-[#0c1220] border-slate-700 text-slate-100' : 'bg-white border-slate-300 text-slate-900'
      }`}>
        
        {/* Sticky Action Header */}
        <div className={`sticky top-0 z-20 flex flex-wrap items-center justify-between gap-3 p-4 sm:px-6 backdrop-blur-md border-b ${
          theme === 'dark' ? 'bg-[#0c1220]/95 border-slate-800' : 'bg-white/95 border-slate-200 shadow-xs'
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold font-mono text-slate-900 dark:text-white flex items-center gap-2">
                <span>Phinihas Gandi — Curriculum Vitae</span>
              </h2>
              <span className="text-[11px] text-slate-600 dark:text-slate-400 font-sans">
                Software Engineer | AI/ML Engineer • Posidex Technologies
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* View Mode Toggle */}
            <div className={`flex items-center p-0.5 rounded-xl border text-xs font-semibold ${
              theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'
            }`}>
              <button
                type="button"
                onClick={() => setActiveTab('document')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'document'
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-xs font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume View</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('pdf')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'pdf'
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-xs font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>PDF Embed</span>
              </button>
            </div>

            {/* Print / Save PDF Button */}
            <button
              type="button"
              onClick={handlePrint}
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-colors cursor-pointer ${
                theme === 'dark'
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                  : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300 shadow-xs'
              }`}
              title="Print document or save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Print</span>
            </button>

            {/* Download PDF Button */}
            <button
              type="button"
              onClick={handleDownload}
              disabled={isDownloading}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs transition-all shadow-md shadow-cyan-500/20 cursor-pointer active:scale-95 disabled:opacity-50"
              title="Download official PDF resume file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isDownloading ? 'Downloading...' : 'Download PDF'}</span>
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className={`p-1.5 rounded-xl border transition-colors cursor-pointer ${
                theme === 'dark'
                  ? 'bg-slate-800 text-slate-400 hover:text-white border-slate-700'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 border-slate-200'
              }`}
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === 'document' ? (
            /* Executive A4 Document View: 100% visible, fully interactive, immune to iframe restrictions */
            <div className={`p-4 sm:p-8 md:p-12 transition-colors ${
              theme === 'dark' ? 'bg-[#090d16]' : 'bg-slate-100'
            }`}>
              
              {/* Paper Card */}
              <div className={`max-w-4xl mx-auto rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl border transition-all ${
                theme === 'dark'
                  ? 'bg-[#0d1424] border-slate-800 text-slate-100'
                  : 'bg-white border-slate-200 text-slate-900'
              }`}>
                
                {/* Header */}
                <div className="border-b border-slate-200 dark:border-slate-800 pb-6 mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                        Phinihas Gandi
                      </h1>
                      <p className="text-base font-bold bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent mt-1">
                        Software Engineer | AI/ML Engineer | Full-Stack Developer
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs font-mono gap-1 text-slate-600 dark:text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                        <a href={`mailto:${CONTACT_INFO.email}`} className="hover:underline font-semibold text-slate-800 dark:text-slate-200">{CONTACT_INFO.email}</a>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span>{CONTACT_INFO.phone}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                        <span>{CONTACT_INFO.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/60 flex flex-wrap gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
                    <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 dark:hover:text-cyan-400 flex items-center gap-1 font-semibold">
                      <Linkedin className="w-3.5 h-3.5 text-cyan-600" />
                      <span>linkedin.com/in/phinihas-gandi</span>
                    </a>
                    <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 dark:hover:text-cyan-400 flex items-center gap-1 font-semibold">
                      <Github className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                      <span>github.com/Phinihas</span>
                    </a>
                    <a href={CONTACT_INFO.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-red-600 flex items-center gap-1 font-semibold">
                      <span>YouTube: @learnaitoday7</span>
                    </a>
                  </div>
                </div>

                {/* Section: Professional Summary */}
                <div className="mb-8">
                  <h2 className="text-xs uppercase tracking-wider font-bold font-mono text-cyan-700 dark:text-cyan-400 mb-2.5 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Professional Summary</span>
                  </h2>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                    Software Engineer with 1+ year of experience at Posidex Technologies, specializing in AI/ML application development, backend engineering, and full-stack development. Strong foundation in software engineering, object-oriented programming, database management, SQL, REST APIs, and problem-solving, with hands-on experience developing enterprise applications and AI-powered solutions. Proven ability to understand business requirements, design and implement reliable solutions, troubleshoot technical issues, and collaborate effectively in a team environment.
                  </p>
                </div>

                {/* Section: Work Experience */}
                <div className="mb-8">
                  <h2 className="text-xs uppercase tracking-wider font-bold font-mono text-cyan-700 dark:text-cyan-400 mb-4 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    <span>Work Experience</span>
                  </h2>
                  <div className="space-y-6">
                    {EXPERIENCE_DATA.map((exp) => (
                      <div key={exp.id} className="border-l-2 border-cyan-500/50 pl-4 sm:pl-5 space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <div>
                            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                              {exp.role}
                            </h3>
                            <div className="text-sm font-semibold text-slate-800 dark:text-slate-300">
                              {exp.company} • <span className="font-normal opacity-80">{exp.location}</span>
                            </div>
                          </div>
                          <span className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full w-fit">
                            {exp.period}
                          </span>
                        </div>

                        <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 pt-1">
                          {exp.highlights.map((hl, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2.5">
                              <span className="text-cyan-600 dark:text-cyan-400 font-bold mt-0.5">•</span>
                              <span className="leading-relaxed">{hl}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="pt-2 flex flex-wrap gap-1.5 text-[11px] font-mono">
                          {exp.technologies.map((t) => (
                            <span key={t} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section: Technical Stack */}
                <div className="mb-8">
                  <h2 className="text-xs uppercase tracking-wider font-bold font-mono text-cyan-700 dark:text-cyan-400 mb-3.5 flex items-center gap-2">
                    <Code2 className="w-4 h-4" />
                    <span>Technical Capabilities</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {SKILLS_DATA.map((cat) => (
                      <div key={cat.title} className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60">
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1.5">{cat.title}</h4>
                        <p className="text-xs text-slate-700 dark:text-slate-300 font-mono leading-relaxed">
                          {cat.skills.map((s) => s.name).join(', ')}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section: Education */}
                <div className="mb-6">
                  <h2 className="text-xs uppercase tracking-wider font-bold font-mono text-cyan-700 dark:text-cyan-400 mb-3.5 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    <span>Education Background</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    {EDUCATION_DATA.map((edu) => (
                      <div key={edu.id} className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 flex flex-col justify-between">
                        <div>
                          <div className="text-xs font-bold text-slate-900 dark:text-white">{edu.degree}</div>
                          <div className="text-xs text-cyan-700 dark:text-cyan-400 font-semibold mt-1">{edu.institution}</div>
                          <div className="text-[10px] font-mono text-slate-500 mt-1">{edu.period}</div>
                        </div>
                        <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-800 text-xs font-bold font-mono text-slate-800 dark:text-slate-200">
                          {edu.gradeLabel}: <span className="text-cyan-700 dark:text-cyan-300">{edu.grade}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ) : (
            /* PDF Direct View Mode */
            <div className="w-full h-full min-h-[75vh] flex flex-col bg-slate-900/10">
              <iframe
                src="/Phinihas_Gandi_Resume.pdf#toolbar=1&navpanes=0&view=FitH"
                title="Phinihas Gandi Official Resume PDF"
                className="w-full flex-1 min-h-[76vh] border-0 bg-white"
              />
              <div className={`p-4 text-center text-xs font-mono border-t flex flex-wrap items-center justify-between gap-3 px-6 ${
                theme === 'dark' ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
              }`}>
                <span>File: Phinihas_Gandi_Resume.pdf (A4 Format)</span>
                <div className="flex items-center gap-4">
                  <a 
                    href="/Phinihas_Gandi_Resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>Open in new window</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button 
                    type="button"
                    onClick={handleDownload}
                    className="text-cyan-600 dark:text-cyan-400 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Download file directly</span>
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
