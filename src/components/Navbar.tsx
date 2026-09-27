import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Terminal, 
  FileText, 
  Sun,
  Moon,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  activeSection: string;
  onOpenResumeModal: () => void;
  onDownloadResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeSection, 
  onOpenResumeModal, 
  onDownloadResume 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Tech Stack', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', href);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? theme === 'dark'
            ? 'bg-[#080c15]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/25 py-2.5' 
            : 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-md shadow-slate-900/5 py-2.5'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group focus:outline-none rounded-lg"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-200">
              <Terminal className="w-4 h-4 text-white" />
            </div>
            <span className={`font-bold text-base tracking-tight font-mono ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              phinihas<span className="text-cyan-600 dark:text-cyan-500 font-extrabold">.gandi</span>
            </span>
          </a>

          {/* Desktop Nav Items with smooth animated sliding indicator */}
          <nav className={`hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border shadow-xs ${
            theme === 'dark' 
              ? 'bg-slate-900/80 border-slate-800/80 backdrop-blur-md' 
              : 'bg-slate-100/90 border-slate-200 backdrop-blur-md'
          }`}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 ${
                    isActive
                      ? theme === 'dark'
                        ? 'text-cyan-300 font-bold'
                        : 'text-cyan-800 font-bold'
                      : theme === 'dark'
                        ? 'text-slate-400 hover:text-slate-200'
                        : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {/* Smooth sliding pill indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className={`absolute inset-0 rounded-full shadow-xs -z-10 ${
                        theme === 'dark'
                          ? 'bg-cyan-500/20 border border-cyan-500/40'
                          : 'bg-white border border-slate-300'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions: Theme Toggle + Resume Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className={`p-2 rounded-xl transition-all duration-200 border cursor-pointer active:scale-95 ${
                theme === 'dark'
                  ? 'bg-slate-800/90 text-yellow-400 hover:text-yellow-300 border-slate-700/80 hover:border-yellow-400/40'
                  : 'bg-slate-100 text-slate-800 hover:text-slate-950 border-slate-300 hover:border-cyan-500/50'
              }`}
              title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              aria-label="Toggle dark/light theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            {/* View Resume Button */}
            <button
              type="button"
              onClick={onOpenResumeModal}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all duration-200 shadow-xs cursor-pointer active:scale-95 ${
                theme === 'dark'
                  ? 'bg-slate-800 hover:bg-slate-700/80 text-slate-200 border-slate-700 hover:border-cyan-500/40'
                  : 'bg-white hover:bg-slate-50 text-slate-900 border-slate-300 hover:border-cyan-500/60'
              }`}
              title="View Interactive Resume Document"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className={`p-2 rounded-lg border text-xs cursor-pointer ${
                theme === 'dark' 
                  ? 'bg-slate-800 text-yellow-400 border-slate-700' 
                  : 'bg-slate-100 text-slate-800 border-slate-300'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={onOpenResumeModal}
              className={`p-2 rounded-lg border cursor-pointer ${
                theme === 'dark' 
                  ? 'bg-slate-800 text-cyan-400 border-slate-700' 
                  : 'bg-slate-100 text-cyan-700 border-slate-300'
              }`}
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border focus:outline-none cursor-pointer ${
                theme === 'dark'
                  ? 'bg-slate-900 text-slate-300 hover:text-white border-slate-800'
                  : 'bg-white text-slate-800 hover:text-slate-950 border-slate-300'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer with smooth Framer Motion animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={`md:hidden px-4 pt-3 pb-6 space-y-3 mt-2 border-b shadow-2xl ${
              theme === 'dark'
                ? 'bg-[#0d1322] border-slate-800 text-slate-200'
                : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? theme === 'dark'
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold'
                          : 'bg-cyan-50 text-cyan-800 border border-cyan-200 font-bold'
                        : theme === 'dark'
                          ? 'text-slate-300 hover:bg-slate-800/80'
                          : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                  </a>
                );
              })}
            </div>

            <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30 font-bold text-xs cursor-pointer active:scale-95"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
