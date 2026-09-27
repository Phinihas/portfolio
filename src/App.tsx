/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './data/portfolioData';
import { downloadResumeFile } from './utils/resumeDownload';

function PortfolioApp() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const { theme } = useTheme();

  // Monitor active scroll section for dynamic navbar highlights
  useEffect(() => {
    const handleScroll = () => {
      // Bottom of page check
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection('contact');
        return;
      }

      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadResume = () => {
    downloadResumeFile();
  };

  return (
    <div className={`min-h-screen selection:bg-cyan-500/20 selection:text-cyan-400 relative transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#080c15] text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      
      {/* Top Fixed Clean Navigation */}
      <Navbar 
        activeSection={activeSection} 
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        onDownloadResume={handleDownloadResume}
      />

      {/* Main Content Sections */}
      <main>
        <Hero 
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onDownloadResume={handleDownloadResume}
        />
        <About />
        <Experience />
        <Skills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Deep-Dive Project Architecture Modal */}
      <ProjectDetailModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Comprehensive Resume Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
