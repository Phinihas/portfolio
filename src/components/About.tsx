import React from 'react';
import { 
  BrainCircuit, 
  Server, 
  Layers, 
  Eye, 
  ShieldAlert, 
  Database,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Code2
} from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const About: React.FC = () => {
  const { theme } = useTheme();

  const pillars = [
    {
      title: 'AI/ML & Computer Vision',
      desc: 'Building vector face matching (AdaFace & Qdrant with 98.15% accuracy), signature verification, and OpenCV/YOLO document pipelines.',
      icon: Eye,
      color: 'text-cyan-600 dark:text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20'
    },
    {
      title: 'Enterprise PII Privacy Systems',
      desc: 'Multimodal PII extraction (text, PDFs, images, URLs, audio) with GLiNER zero-shot NER, Presidio, OCR, FasterWhisper, and ChromaDB alongside database scanning across MySQL, Oracle, SQL Server, and PostgreSQL.',
      icon: ShieldAlert,
      color: 'text-emerald-600 dark:text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20'
    },
    {
      title: 'High-Throughput Backends',
      desc: 'Developing asynchronous REST APIs and microservices using Python, FastAPI, Java Spring Boot, and SQLAlchemy, containerized with Docker for reliable low-latency enterprise workloads.',
      icon: Server,
      color: 'text-indigo-600 dark:text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20'
    },
    {
      title: 'Modern Full-Stack Applications',
      desc: 'Engineering reactive, responsive web apps with React.js, TypeScript, Tailwind CSS, Node.js, Express.js, and Firebase (TripPilot AI, CarePlus, CreatorHub).',
      icon: Layers,
      color: 'text-sky-600 dark:text-sky-400',
      bgColor: 'bg-sky-500/10',
      borderColor: 'border-sky-500/20'
    }
  ];

  return (
    <section id="about" className={`py-20 relative border-t transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#090d16]/60 border-slate-800/80' : 'bg-slate-50/70 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineering Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            About Phinihas Gandi
          </h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300 text-base">
            Software Engineer specializing in machine learning systems, privacy compliance architectures, and scalable full-stack products.
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Authoritative Bio Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>Engineering at the Intersection of AI & Robust Systems</span>
              </h3>
              
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                I am a <strong className="text-slate-900 dark:text-white font-semibold">Software Engineer and AI/ML Specialist</strong> with 1+ year of professional experience at <strong className="text-cyan-700 dark:text-cyan-400 font-semibold">Posidex Technologies</strong> in Hyderabad. My work focuses on developing high-accuracy enterprise AI solutions: automated multimodal PII extraction and masking, vector face matching, zero-shot entity recognition, and database scanning workflows.
              </p>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                I graduated with a <strong className="text-slate-900 dark:text-white font-semibold">B.Tech in Computer Science and Engineering from RGUKT Nuzvid</strong> (CGPA 8.05). I hold a deep foundation in object-oriented programming, data structures, algorithms, DBMS, and REST APIs, paired with extensive hands-on experience in <strong className="text-slate-900 dark:text-white font-semibold">Python, Java, Spring Boot, FastAPI, PyTorch, and React</strong>.
              </p>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                From benchmarking face similarity on 6,000 LFW pairs with AdaFace and Qdrant to engineering full-stack platforms like <em className="text-slate-900 dark:text-slate-200">TripPilot</em> and <em className="text-slate-900 dark:text-slate-200">CarePlus Hospital Management System</em>, I focus on measurable accuracy, robust system design, and clean developer workflows.
              </p>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap gap-y-2 gap-x-6 text-xs font-mono text-slate-600 dark:text-slate-400">
                <div>
                  <span className="opacity-80">Focus:</span> <span className="font-semibold text-slate-900 dark:text-slate-200">AI/ML & Enterprise Backends</span>
                </div>
                <div>
                  <span className="opacity-80">Degree:</span> <span className="font-semibold text-slate-900 dark:text-slate-200">B.Tech CSE @ RGUKT</span>
                </div>
                <div>
                  <span className="opacity-80">Location:</span> <span className="font-semibold text-slate-900 dark:text-slate-200">Hyderabad, India</span>
                </div>
              </div>
            </div>

            {/* Metrics Bar with verified metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
              <div className="glass-panel p-4.5 rounded-2xl text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-600 dark:text-cyan-400 font-mono">98.15%</div>
                <div className="text-[11px] text-slate-700 dark:text-slate-400 mt-1 uppercase tracking-wider font-semibold">
                  Face Match Accuracy
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">6,000 LFW Pairs</div>
              </div>

              <div className="glass-panel p-4.5 rounded-2xl text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 font-mono">99.86%</div>
                <div className="text-[11px] text-slate-700 dark:text-slate-400 mt-1 uppercase tracking-wider font-semibold">
                  ROC-AUC Benchmark
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">Vector Search</div>
              </div>

              <div className="glass-panel p-4.5 rounded-2xl text-center col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">11+</div>
                <div className="text-[11px] text-slate-700 dark:text-slate-400 mt-1 uppercase tracking-wider font-semibold">
                  Featured Projects
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">AI & Full-Stack</div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Core Specialization Pillars */}
          <div className="lg:col-span-5 space-y-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="glass-panel p-5 rounded-2xl transition-all duration-200 group hover:scale-[1.01]"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-xl ${pillar.bgColor} ${pillar.borderColor} border flex-shrink-0 mt-0.5`}>
                      <Icon className={`w-5 h-5 ${pillar.color}`} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-1.5 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
