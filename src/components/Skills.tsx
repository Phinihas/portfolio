import React, { useState } from 'react';
import { 
  Code2, 
  BrainCircuit, 
  Server, 
  Database, 
  Cpu, 
  Sparkles,
  Search,
  CheckCircle2,
  Terminal
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { theme } = useTheme();

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return Code2;
      case 'Server': return Server;
      case 'BrainCircuit': return BrainCircuit;
      case 'Database': return Database;
      case 'Cpu': return Cpu;
      case 'Sparkles': return Sparkles;
      default: return Terminal;
    }
  };

  const getCategoryColor = (index: number) => {
    const colors = [
      { text: 'text-cyan-600 dark:text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
      { text: 'text-indigo-600 dark:text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20' },
      { text: 'text-sky-600 dark:text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-500/20' },
      { text: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
      { text: 'text-violet-600 dark:text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/20' },
      { text: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
    ];
    return colors[index % colors.length];
  };

  const categories = ['All', ...SKILLS_DATA.map(c => c.title)];

  const filteredCategories = SKILLS_DATA.filter(category => {
    if (selectedCategory !== 'All' && category.title !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim() === '') return true;

    const query = searchQuery.toLowerCase();
    const hasCategoryMatch = category.title.toLowerCase().includes(query);
    const hasSkillMatch = category.skills.some(s => 
      s.name.toLowerCase().includes(query) || (s.tag && s.tag.toLowerCase().includes(query))
    );
    return hasCategoryMatch || hasSkillMatch;
  });

  return (
    <section id="skills" className={`py-24 relative border-t transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#090d16]/70 border-slate-800/80' : 'bg-slate-50/80 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Technical Stack & Expertise
          </h2>
          <p className="mt-4 text-slate-700 dark:text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Enterprise technologies, machine learning toolkits, and backend systems applied in high-throughput production environments.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills (e.g. Python, Qdrant, FastAPI)..."
                className={`w-full rounded-2xl pl-10 pr-4 py-2.5 text-xs focus:outline-none transition-all font-mono border ${
                  theme === 'dark'
                    ? 'bg-slate-900/90 border-slate-800 text-slate-200 placeholder-slate-500 focus:border-cyan-500/60'
                    : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-500 shadow-sm'
                }`}
              />
            </div>

            {/* Quick Stat */}
            <div className="text-xs text-slate-600 dark:text-slate-400 font-mono hidden sm:flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-500" />
              <span>Verified against production engineering experience</span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/25 scale-[1.02]'
                    : theme === 'dark'
                      ? 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                      : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 shadow-xs'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Visual Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, catIdx) => {
            const Icon = getCategoryIcon(cat.iconName);
            const style = getCategoryColor(catIdx);
            
            const displayedSkills = searchQuery.trim() === ''
              ? cat.skills
              : cat.skills.filter(s => 
                  s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                  (s.tag && s.tag.toLowerCase().includes(searchQuery.toLowerCase()))
                );

            if (displayedSkills.length === 0) return null;

            return (
              <div
                key={cat.title}
                className="glass-panel p-6 sm:p-7 rounded-3xl transition-all duration-300 flex flex-col justify-between group hover:scale-[1.015] hover:shadow-xl relative overflow-hidden"
              >
                {/* Subtle Card Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-2xl ${style.bg} ${style.border} border flex items-center justify-center ${style.text} shadow-sm group-hover:scale-105 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                          {cat.title}
                        </h3>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-1">
                          {cat.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skills Pills with Enhanced Contrast */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {displayedSkills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`group/item flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all duration-200 cursor-default ${
                          theme === 'dark'
                            ? 'bg-slate-900/90 border-slate-800/90 text-slate-200 hover:border-cyan-500/50 hover:bg-slate-800'
                            : 'bg-white border-slate-200 text-slate-900 hover:border-cyan-500 hover:bg-slate-50 shadow-xs'
                        }`}
                      >
                        <span className="group-hover/item:text-cyan-600 dark:group-hover/item:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                        {skill.tag && (
                          <span className={`text-[9px] px-1.5 py-0.5 rounded-md font-mono font-medium ${
                            theme === 'dark'
                              ? 'bg-slate-800 text-slate-400 group-hover/item:bg-cyan-500/10 group-hover/item:text-cyan-400'
                              : 'bg-slate-100 text-slate-600 group-hover/item:bg-cyan-100 group-hover/item:text-cyan-800'
                          }`}>
                            {skill.tag}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom Meta */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/70 flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400 font-mono">
                  <span>{displayedSkills.length} Technologies</span>
                  <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Production Tier
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
