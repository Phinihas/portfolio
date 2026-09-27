export interface Project {
  id: string;
  title: string;
  category: 'AI / Computer Vision' | 'AI / Machine Learning' | 'Full-Stack & Web';
  tagline: string;
  summary: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  technologies: string[];
  metrics?: { label: string; value: string }[];
  pipelineSteps?: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  featuredRank?: number;
  origin: 'resume-new' | 'foundation';
  accentColor: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  domain: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  period: string;
  grade: string;
  gradeLabel: string;
  details?: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: { name: string; tag?: string }[];
}

// Authoritative contact information
export const CONTACT_INFO = {
  name: 'Phinihas Gandi',
  email: 'gandiphinihas7@gmail.com',
  secondaryEmail: 'phinihasgandi@gmail.com',
  phone: '+91 7995802047',
  linkedin: 'https://www.linkedin.com/in/phinihas-gandi',
  github: 'https://github.com/Phinihas',
  youtube: 'https://www.youtube.com/@learnaitoday7',
  instagram: 'https://www.instagram.com/phinihasgandi',
  location: 'Hyderabad, Telangana, India',
  title: 'Software Engineer | AI/ML Engineer | Full-Stack Developer',
  avatar: '/assets/profile.jpg'
};

// Authoritative curated projects array strictly adhering to user instructions
export const PROJECTS_DATA: Project[] = [
  // 1. Face Matching System
  {
    id: 'face-matching-system',
    title: 'Face Matching System',
    category: 'AI / Computer Vision',
    tagline: 'Vector Search Face Verification & Similarity Engine',
    summary: 'AI-based face detection and similarity matching system using vector search. Achieved 98.15% accuracy and 99.86% ROC-AUC on 6,000 LFW pairs.',
    problem: 'Traditional identity verification often suffers from variability in lighting, pose, age, and occlusions, leading to unacceptable false acceptance or rejection rates in enterprise environments.',
    solution: 'Engineered an end-to-end face recognition pipeline utilizing AdaFace for margin-based cosine similarity loss, OpenCV for face detection/alignment, and Qdrant vector database for sub-millisecond similarity search across high-dimensional face embeddings.',
    keyFeatures: [
      'AdaFace loss optimization for deep feature vector embedding',
      'Robust face alignment and normalization resilient to pose variations and lighting changes',
      'High-dimensional vector search via Qdrant indexing with sub-15ms query speed',
      'Benchmarked on 6,000 standard LFW (Labeled Faces in the Wild) evaluation pairs',
      'High-throughput FastAPI microservice with React visual inspection dashboard'
    ],
    technologies: ['Python', 'OpenCV', 'AdaFace', 'Qdrant', 'FastAPI', 'React', 'PyTorch'],
    metrics: [
      { label: 'Evaluation Accuracy', value: '98.15%' },
      { label: 'ROC-AUC Score', value: '99.86%' },
      { label: 'LFW Benchmarked Pairs', value: '6,000' },
      { label: 'Query Latency', value: '<15ms' }
    ],
    pipelineSteps: [
      'Image Upload',
      'Face Detection',
      'Face Alignment',
      'Face Embedding',
      'Similarity Matching',
      'Vector Search',
      'Result'
    ],
    githubUrl: 'https://github.com/Phinihas/face-matching-system',
    featured: true,
    featuredRank: 1,
    origin: 'resume-new',
    accentColor: '#38bdf8'
  },

  // 2. TripPilot
  {
    id: 'trippilot',
    title: 'TripPilot',
    category: 'AI / Machine Learning',
    tagline: 'AI-Powered Travel Planning & Personalized Itinerary Engine',
    summary: 'AI-powered travel planning application that generates personalized itineraries based on destination, budget, duration, and interests.',
    problem: 'Planning a detailed vacation itinerary requires browsing dozens of disparate blogs, map tools, and booking sites to budget time and money efficiently.',
    solution: 'Built a responsive web application leveraging LLMs with structured outputs, generating optimized schedules, hotel recommendations, and budget allocations in seconds.',
    keyFeatures: [
      'Dynamic day-by-day itinerary synthesis factoring in travel time, pace, and interests',
      'Budget estimation and tiered options (Backpacker, Balanced, Luxury)',
      'Firebase Authentication and cloud persistence for saving and sharing trips',
      'Interactive maps with saved locations and real-time itinerary editing'
    ],
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'Firebase'],
    metrics: [
      { label: 'Planning Time', value: '<10 seconds' },
      { label: 'Parameters', value: 'Budget, Pace, Interests' }
    ],
    pipelineSteps: [
      'User Preferences',
      'Constraint Solver & LLM Prompting',
      'Structured JSON Parsing',
      'Map & Itinerary Synthesis',
      'Interactive Customization'
    ],
    githubUrl: 'https://github.com/Phinihas/TripPilot',
    liveUrl: 'https://trip-pilot-roan.vercel.app/',
    featured: true,
    featuredRank: 2,
    origin: 'resume-new',
    accentColor: '#a78bfa'
  },

  // 3. CarePlus
  {
    id: 'careplus',
    title: 'CarePlus',
    category: 'Full-Stack & Web',
    tagline: 'Digital Healthcare Operations & Real-Time OPD Patient Hub',
    summary: 'Full-stack hospital platform with OPD booking, token management, prescriptions, diagnostics, and appointments.',
    problem: 'Fragmented hospital management systems cause prolonged waiting room times, misplaced physical prescriptions, and billing discrepancies.',
    solution: 'Developed an integrated web application streamlining the patient journey from online appointment scheduling to live OPD queue displays and doctor diagnostic notes.',
    keyFeatures: [
      'Live OPD queue and token status board updating in real time',
      'Doctor consultation dashboard with electronic health record (EHR) entries',
      'Digital prescription generation with exportable summaries',
      'Diagnostic test tracking with automated notification hooks'
    ],
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Node.js', 'Express.js'],
    metrics: [
      { label: 'Queue Overhead', value: '40% Reduction' },
      { label: 'Real-time Sync', value: '<100ms' }
    ],
    pipelineSteps: [
      'Patient Registration',
      'Slot Booking',
      'Token Queue Generation',
      'Consultation & EHR',
      'Prescription & Billing'
    ],
    githubUrl: 'https://github.com/Phinihas/careplus',
    liveUrl: 'https://careplus-ten-xi.vercel.app/',
    featured: true,
    featuredRank: 3,
    origin: 'resume-new',
    accentColor: '#2dd4bf'
  },

  // 4. CreatorHub
  {
    id: 'creatorhub',
    title: 'CreatorHub',
    category: 'AI / Machine Learning',
    tagline: 'AI Content Strategy & Scripting Suite for Video Creators',
    summary: 'AI-assisted creator platform for generating video ideas, titles, hooks, descriptions, and scripts.',
    problem: 'Content creators face creative burnout, writer block, and volatile algorithm changes trying to maintain consistent publication cadences.',
    solution: 'Engineered an all-in-one brainstorming and production workspace powered by prompt chains that analyze audience psychology to draft compelling video packages.',
    keyFeatures: [
      'Idea generation engine analyzing trending niches and audience pain points',
      'CTR-optimized title and thumbnail concept generator with A/B variant testing',
      'Psychological hook generator engineered for first 5-second viewer retention',
      'Full video script outlining with timestamp pacing and B-roll callouts'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'Firebase'],
    metrics: [
      { label: 'Ideation Speedup', value: '5x faster' },
      { label: 'Script Styles', value: '20+ templates' }
    ],
    pipelineSteps: [
      'Niche Selection',
      'Audience Persona Modeling',
      'Title & Hook Generation',
      'Script Outline Drafting',
      'Export & Production Plan'
    ],
    githubUrl: 'https://github.com/Phinihas/CreatorHub',
    liveUrl: 'https://creator-hub-gamma.vercel.app/',
    featured: true,
    featuredRank: 4,
    origin: 'resume-new',
    accentColor: '#facc15'
  },

  // 5. Campus Profile
  {
    id: 'campus-profile',
    title: 'Campus Profile',
    category: 'Full-Stack & Web',
    tagline: 'University Academic & Extracurricular Information Portal',
    summary: 'Comprehensive campus information system designed for RGUKT students and faculty to access academic resources, profiles, and campus updates.',
    problem: 'University announcements and student records were scattered across outdated notice boards and multiple uncoordinated web channels.',
    solution: 'Designed and deployed a responsive, centralized web portal that catalogs university departments, student achievements, and academic calendars with intuitive navigation.',
    keyFeatures: [
      'Student and faculty directory with role-based profile visibility',
      'Campus news, announcement banners, and event calendar updates',
      'Mobile-friendly responsive UI with fast search and filtering',
      'Secure user authentication and academic records integration'
    ],
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Node.js'],
    githubUrl: 'https://github.com/Phinihas/CampusProfile',
    featured: false,
    origin: 'foundation',
    accentColor: '#38bdf8'
  },

  // 6. Biryani Junction
  {
    id: 'biryani-junction',
    title: 'Biryani Junction',
    category: 'Full-Stack & Web',
    tagline: 'Online Food Ordering & Table Reservation Platform',
    summary: 'Dynamic culinary ordering web app with interactive menus, customizable food orders, cart calculations, and table booking.',
    problem: 'Local restaurant customers lacked an engaging, seamless digital menu and ordering experience tailored for regional culinary dishes.',
    solution: 'Created an appetizing, visually rich frontend restaurant application offering category filters, spice-level customizations, cart management, and order summary computation.',
    keyFeatures: [
      'Rich dish catalog with high-resolution imagery and allergen indicators',
      'Real-time cart state management with automatic delivery and tax calculation',
      'Table reservation form with automated time-slot verification',
      'Responsive design tested across mobile, tablet, and desktop screens'
    ],
    technologies: ['React.js', 'JavaScript', 'CSS3', 'HTML5', 'LocalStorage'],
    githubUrl: 'https://github.com/Phinihas/BiryaniJunction',
    featured: false,
    origin: 'foundation',
    accentColor: '#f97316'
  },

  // 7. Expense Tracker
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    category: 'Full-Stack & Web',
    tagline: 'Personal Finance & Budget Analytics Web Application',
    summary: 'Intuitive personal budgeting tool providing income/expense logging, category breakdowns, and visual transaction history.',
    problem: 'Tracking personal day-to-day expenditures using messy spreadsheets often leads to unrecorded spending and financial blind spots.',
    solution: 'Crafted a fast financial logging tool with automatic balance calculations, categorized expenditure breakdowns, and historical trends.',
    keyFeatures: [
      'Instant transaction entry with credit/debit categorization',
      'Real-time net balance, total income, and total expenses calculation',
      'Persistent local storage to prevent data loss across page refreshes',
      'Filterable transaction history with delete and search capabilities'
    ],
    technologies: ['React.js', 'JavaScript', 'CSS3', 'State Management'],
    githubUrl: 'https://github.com/Phinihas/expense-tracker',
    featured: false,
    origin: 'foundation',
    accentColor: '#10b981'
  },

  // 8. Image Annotation Tool
  {
    id: 'image-annotation-tool',
    title: 'Image Annotation Tool',
    category: 'AI / Computer Vision',
    tagline: 'Bounding Box & Labeling Workspace for Computer Vision Datasets',
    summary: 'Interactive web-based annotation canvas for bounding-box labeling, object tagging, and exporting dataset coordinates for ML model training.',
    problem: 'Preparing custom object detection datasets often requires costly software or complicated command-line setups for simple labeling jobs.',
    solution: 'Engineered an in-browser canvas labeling tool that allows annotators to upload images, draw bounding boxes with mouse drag, assign class tags, and export annotations in standardized JSON format.',
    keyFeatures: [
      'Interactive HTML5 Canvas engine with smooth drag-to-draw bounding boxes',
      'Dynamic class label assignment with custom color coding',
      'Export annotations in normalized (x, y, w, h) bounding coordinates for YOLO and Pascal VOC',
      'Zoom and pan controls for precision edge labeling'
    ],
    technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Computer Vision Tools'],
    githubUrl: 'https://github.com/Phinihas/Image_Annotation_Tool',
    featured: false,
    origin: 'foundation',
    accentColor: '#e879f9'
  },

  // 9. IPL Dashboard
  {
    id: 'ipl-dashboard',
    title: 'IPL Dashboard',
    category: 'Full-Stack & Web',
    tagline: 'Cricket Analytics Hub with Historical Team Records & Match Breakdowns',
    summary: 'Comprehensive Indian Premier League analytics dashboard presenting match stats, head-to-head records, and team performance metrics.',
    problem: 'Cricket enthusiasts looking for team historical insights had to navigate heavy, ad-cluttered websites to view past tournament statistics.',
    solution: 'Built a clean, stats-focused dashboard fetching team records, match outcomes, venues, and winning margins with team-branded themes.',
    keyFeatures: [
      'Interactive team selectors rendering official franchise color palettes',
      'Comprehensive match history with win/loss indicators and player of the match highlights',
      'REST API data fetching with structured component state trees',
      'Responsive sports analytics UI designed for rapid browsing'
    ],
    technologies: ['React.js', 'React Router', 'REST APIs', 'CSS3'],
    githubUrl: 'https://github.com/Phinihas/ipl-Dashboard',
    featured: false,
    origin: 'foundation',
    accentColor: '#3b82f6'
  },

  // 10. Nxt Trendz
  {
    id: 'nxt-trendz',
    title: 'Nxt Trendz',
    category: 'Full-Stack & Web',
    tagline: 'Modern E-Commerce Application with JWT Auth, Filters & Cart Checkout',
    summary: 'Full-featured online retail shopping application modeled after modern e-commerce standards, complete with authenticated sessions and product sorting.',
    problem: 'Building a robust e-commerce flow requires handling protected client routes, persistent sessions, complex filter combinations, and shopping cart logic.',
    solution: 'Implemented a production-grade e-commerce application featuring JWT authentication cookies, protected routes, rating/category search filters, and active cart checkout.',
    keyFeatures: [
      'Secure login flow with JWT authentication and redirection guards',
      'Multi-parameter product filtering by category, rating, and price sort order',
      'Cart management with quantity incrementation and order total calculation',
      'Resilient failure views and loading spinners for asynchronous network calls'
    ],
    technologies: ['React.js', 'React Router', 'JWT Authentication', 'REST APIs', 'CSS3'],
    githubUrl: 'https://github.com/Phinihas/Nxt-Trendz---Specific-Product-Details',
    featured: false,
    origin: 'foundation',
    accentColor: '#ec4899'
  },

  // 11. Todos Application
  {
    id: 'todos-application',
    title: 'Todos Application',
    category: 'Full-Stack & Web',
    tagline: 'Productivity Task Manager with Local Persistence & Status Tracking',
    summary: 'Sleek task management application engineered for daily productivity, featuring task prioritization, completion toggles, and persistence.',
    problem: 'Everyday task lists become ineffective when apps are overloaded with complex features or lose unsaved state upon browser closure.',
    solution: 'Created an agile, fast task manager supporting instant task creation, strike-through completion, task deletion, and permanent local browser storage.',
    keyFeatures: [
      'Instant item creation and delete actions with zero layout shift',
      'Dynamic strike-through styling to visualize completed task progress',
      'LocalStorage synchronization ensuring tasks persist across sessions',
      'Clean accessibility-focused keyboard controls'
    ],
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
    githubUrl: 'https://github.com/Phinihas/Todo-Application',
    featured: false,
    origin: 'foundation',
    accentColor: '#14b8a6'
  }
];

// Experience data strictly matching the latest resume
export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'posidex-ase-ai',
    role: 'Associate Software Engineer – AI Team',
    company: 'Posidex Technologies',
    location: 'Hyderabad, Telangana, India',
    period: 'Jan 2026 – Present',
    type: 'Full-Time',
    domain: 'Enterprise AI & Vision Systems',
    highlights: [
      'PII Extraction Platform: Built multimodal PII extraction for text, PDFs, images, URLs, and audio with entity validation, deduplication, and batch processing using Python, FastAPI, LLMs, GLiNER, Presidio, OCR, FasterWhisper, and ChromaDB.',
      'PII Database Detection: Built database scanning workflows to identify sensitive information across MySQL, Oracle, SQL Server, and PostgreSQL using LLM-based detection, Regex, Luhn/Verhoeff validation, SQLAlchemy, and FastAPI.',
      'Multi-PII Masking Platform: Built PII detection and masking workflows for documents and images covering Aadhaar, PAN, Passport, Driving License, Voter ID, phone, account, and card data using OCR, YOLO, FastAPI, MySQL, and Docker.',
      'AI-Based Signature Verification: Built signature comparison and verification workflows using PyTorch, CLIP, OpenCV, SIFT, ORB, SSIM, and image-processing techniques.'
    ],
    technologies: [
      'Python',
      'FastAPI',
      'LLMs',
      'GLiNER',
      'Presidio',
      'OCR',
      'FasterWhisper',
      'ChromaDB',
      'SQLAlchemy',
      'MySQL',
      'Oracle',
      'SQL Server',
      'PostgreSQL',
      'YOLO',
      'Docker',
      'PyTorch',
      'CLIP',
      'OpenCV',
      'SIFT',
      'ORB',
      'SSIM'
    ]
  },
  {
    id: 'posidex-trainee-ase',
    role: 'Trainee Associate Software Engineer',
    company: 'Posidex Technologies',
    location: 'Hyderabad, Telangana, India',
    period: 'Jun 2025 – Dec 2025',
    type: 'Full-Time',
    domain: 'Backend Engineering & Synthetic Data',
    highlights: [
      'Developed software components using Python, Java, Spring Boot, MySQL, SQL, and REST APIs.',
      'Created synthetic Personally Identifiable Information (PII) datasets and performed image preprocessing and validation using Python, Pillow, and OpenCV for AI/ML projects.'
    ],
    technologies: [
      'Python',
      'Java',
      'Spring Boot',
      'MySQL',
      'SQL',
      'REST APIs',
      'Pillow',
      'OpenCV',
      'Git'
    ]
  }
];

// Education strictly matching the latest resume
export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'btech-rgukt',
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Rajiv Gandhi University of Knowledge Technologies, Nuzvid',
    location: 'Nuzvid, Andhra Pradesh',
    period: '2021 – 2025',
    grade: '8.05',
    gradeLabel: 'CGPA',
    details: [
      'Core coursework: Data Structures, Algorithms, Operating Systems, Machine Learning, DBMS, API Development, and Computer Networks.',
      'Hands-on technical leadership across university tech symposiums and workshops.'
    ]
  },
  {
    id: 'puc-rgukt',
    degree: 'Pre-University Course',
    institution: 'Rajiv Gandhi University of Knowledge Technologies, Nuzvid',
    location: 'Nuzvid, Andhra Pradesh',
    period: '2019 – 2021',
    grade: '9.46',
    gradeLabel: 'CGPA',
    details: [
      'Rigorous foundation in Mathematics, Physics, Chemistry, and Computing basics.'
    ]
  },
  {
    id: 'ssc-school',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Z.P. High School, G Vemavaram',
    location: 'Andhra Pradesh',
    period: '2019',
    grade: '10.0',
    gradeLabel: 'CGPA',
    details: [
      'Graduated with a perfect 10.0 CGPA score across all academic subjects.'
    ]
  }
];

// Technical skills organized into logical categories requested by user
export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Core languages for AI systems, scalable backend engineering, and web development',
    iconName: 'Code2',
    skills: [
      { name: 'Python', tag: 'Core / Primary' },
      { name: 'Java', tag: 'Enterprise' },
      { name: 'TypeScript', tag: 'Full-Stack' },
      { name: 'JavaScript', tag: 'Web' },
      { name: 'SQL', tag: 'Queries' },
      { name: 'C++', tag: 'Systems' },
      { name: 'C', tag: 'Foundational' }
    ]
  },
  {
    title: 'Backend Development',
    description: 'High-throughput microservices, REST APIs, enterprise frameworks, and ORMs',
    iconName: 'Server',
    skills: [
      { name: 'FastAPI', tag: 'High-Perf AI' },
      { name: 'Spring Boot', tag: 'Enterprise Java' },
      { name: 'Node.js', tag: 'Runtime' },
      { name: 'Express.js', tag: 'REST' },
      { name: 'REST APIs', tag: 'Architecture' },
      { name: 'SQLAlchemy', tag: 'ORM' },
      { name: 'Presidio', tag: 'PII Engine' },
      { name: 'FasterWhisper', tag: 'Audio Transcription' }
    ]
  },
  {
    title: 'AI / Machine Learning',
    description: 'Computer vision, zero-shot entity extraction, LLMs, and deep neural networks',
    iconName: 'BrainCircuit',
    skills: [
      { name: 'LLMs & Prompt Eng', tag: 'Applied' },
      { name: 'NLP', tag: 'Language' },
      { name: 'GLiNER', tag: 'Zero-Shot NER' },
      { name: 'Computer Vision', tag: 'Specialized' },
      { name: 'OCR Engines', tag: 'Document AI' },
      { name: 'PyTorch', tag: 'Deep Learning' },
      { name: 'OpenCV', tag: 'Vision Ops' },
      { name: 'CLIP', tag: 'Multimodal' },
      { name: 'YOLO', tag: 'Object Detection' },
      { name: 'AdaFace', tag: 'Face Embeddings' },
      { name: 'NumPy & Pandas', tag: 'Data Science' }
    ]
  },
  {
    title: 'Databases',
    description: 'Enterprise relational databases and high-dimensional vector search engines',
    iconName: 'Database',
    skills: [
      { name: 'MySQL', tag: 'Relational' },
      { name: 'PostgreSQL', tag: 'Relational' },
      { name: 'Oracle', tag: 'Enterprise' },
      { name: 'SQL Server', tag: 'Enterprise' },
      { name: 'Qdrant', tag: 'Vector Search' },
      { name: 'ChromaDB', tag: 'Vector Store' },
      { name: 'MongoDB', tag: 'Document' },
      { name: 'Firebase Firestore', tag: 'Realtime' },
      { name: 'Supabase', tag: 'Cloud DB' }
    ]
  },
  {
    title: 'DevOps & Cloud',
    description: 'Containerization, CI/CD pipelines, environments, and cloud deployment',
    iconName: 'Cpu',
    skills: [
      { name: 'Docker', tag: 'Containers' },
      { name: 'Git & GitHub', tag: 'Version Control' },
      { name: 'Kubernetes', tag: 'Orchestration' },
      { name: 'Jenkins', tag: 'CI/CD' },
      { name: 'Linux', tag: 'Primary OS' },
      { name: 'Windows', tag: 'OS' },
      { name: 'Vercel', tag: 'Hosting' }
    ]
  },
  {
    title: 'Tools & Technologies',
    description: 'Engineering paradigms, frontend frameworks, algorithms, and core tooling',
    iconName: 'Sparkles',
    skills: [
      { name: 'React.js', tag: 'Frontend' },
      { name: 'Tailwind CSS', tag: 'Styling' },
      { name: 'Next.js & Angular', tag: 'Web Frameworks' },
      { name: 'Object-Oriented Programming (OOP)', tag: 'Architecture' },
      { name: 'Data Structures & Algorithms', tag: 'Foundational' },
      { name: 'DBMS & Query Optimization', tag: 'Database' },
      { name: 'API Development & Integration', tag: 'Backend' },
      { name: 'Problem Solving & Adaptability', tag: 'Analytical' }
    ]
  }
];

export const EXTRA_CURRICULAR_DATA = [
  {
    title: 'YouTube Creator – Learn AI Today (@learnaitoday7)',
    role: 'Creator & Educator',
    description: 'Create content on AI tools and prompt engineering, helping developers and learners harness modern machine learning technologies.',
    tag: 'Content Creation & AI Education',
    icon: 'Video'
  },
  {
    title: 'Club Head, E-Crush RGUKT',
    role: 'Club Head & Organizer',
    description: 'Led and coordinated 10+ technical and cultural events, fostering community engagement, workshops, and student mentorship.',
    tag: 'Leadership & Student Community',
    icon: 'Users'
  }
];
