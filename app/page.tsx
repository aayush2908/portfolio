'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, Linkedin, Mail, Phone, Terminal, Code2, Zap, Award, Briefcase, 
  GraduationCap, Database, Cloud, Cpu, Globe, ChevronDown, ExternalLink, 
  X, Folder, FileText, Book, Layers, Users, TrendingUp, DollarSign,
  Target, CheckCircle, ArrowRight, Calendar, MapPin, Building2, Sparkles,
  Rocket, Brain, MessageSquare, Image as ImageIcon, PlayCircle, GitBranch,
  Server, Lock, Eye, BarChart3, Activity, Shield, Lightbulb
} from 'lucide-react';

export default function EnhancedAayushPortfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState([]);
  const [terminalInput, setTerminalInput] = useState('');
  const [expandedProject, setExpandedProject] = useState(null);
  const canvasRef = useRef(null);
  const terminalInputRef = useRef(null);

  // Matrix rain effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Terminal commands
  const terminalCommands = {
    help: () => ({
      output: `Available commands:
  help       - Show this help message
  about      - Display professional summary
  skills     - List technical skills
  experience - Show work history
  projects   - List key projects
  education  - Display education details
  contact    - Show contact information
  achievements - List honors and awards
  stats      - Show career statistics
  clear      - Clear terminal screen
  github     - Open GitHub profile
  linkedin   - Open LinkedIn profile
  resume     - Download resume (coming soon)
  blog       - View blog posts (coming soon)
  
Type any command to execute it.`
    }),
    about: () => ({
      output: `AAYUSH AGARWAL - Senior Backend & AI Systems Engineer

▸ 5+ years building scalable KYC, AI inference, and Voice AI platforms
▸ Promoted 3 times in 4 years at Hyperverge (Intern → SDE3)
▸ Led cross-functional teams of 10+ engineers
▸ Architected distributed systems serving 50+ enterprise clients
▸ Expertise: Backend Systems, Cloud Architecture, AI Agents, Cost Optimization

Current: Engineering @ Avoca AI (YC W25)
Previous: SDE3 @ Hyperverge Technologies`
    }),
    skills: () => ({
      output: `TECHNICAL SKILLS:

[Backend & Systems]
  → Node.js, TypeScript, Python, FastAPI
  → Distributed Systems, Microservices, Event-Driven Architecture

[Cloud & Infrastructure]
  → AWS: Lambda, EC2, S3, DynamoDB, RDS, SQS, Step Functions
  → Kubernetes, Docker, Terraform, CI/CD (GitHub Actions)

[AI & LLM Systems]
  → OpenAI, Anthropic Claude, Google Gemini
  → Prompt Engineering, LangChain, AI Agents, RAG

[Databases & Analytics]
  → PostgreSQL, MongoDB, DynamoDB
  → ELK Stack, Grafana, Datadog, Sentry

[Frontend]
  → React.js, Next.js, Socket.io

[Leadership]
  → Team Management (14+ members), Mentorship (12+ engineers)
  → Sprint Planning, Hiring, Technical Interviews`
    }),
    experience: () => ({
      output: `WORK EXPERIENCE:

[1] AVOCA AI (YC W25) | Software Engineer | May 2025 - Present
    ▹ Prompt Orchestration system: 4-5 days → <1 min onboarding
    ▹ Real-time Call Debugger: hours → <5 min resolution time
    ▹ Voice AI Agents with OpenAI, Claude, Gemini integration
    ▹ Led & scaled 14+ member team (5 → 20+ deployed engineers)

[2] HYPERVERGE TECHNOLOGIES | SDE1 → SDE3 | Jan 2021 - May 2025
    ▹ Global KYC platform: 195+ countries, 500+ ID formats, 50+ clients
    ▹ Saved $30K/month in AWS costs through optimization
    ▹ Kubernetes migration: 80% faster deployments
    ▹ AI benchmarking: Reduced FAR/FRR by 35-45%
    ▹ Deepfake detection: 90%+ fraud reduction
    ▹ Led POD of 4 engineers, mentored 12+ teammates

[3] JIDOKA TECHNOLOGIES | Intern | Apr 2020 - May 2020
    ▹ AI defect detection app: 64% faster inspection time`
    }),
    projects: () => ({
      output: `KEY PROJECTS:

[1] Prompt Orchestration System (Avoca AI)
    Tech: LLM APIs, Node.js, FastAPI, MongoDB
    Impact: Customer onboarding 4-5 days → <1 minute
    
[2] Real-time Call Debugger (Avoca AI)
    Tech: WebSocket, Datadog, Custom Logging Pipeline
    Impact: Bug resolution hours → <5 minutes

[3] Global KYC Stack (Hyperverge)
    Tech: Python, AWS Lambda, Step Functions, PostgreSQL
    Impact: 195+ countries, 500+ ID formats, 50+ clients
    
[4] AI Model Benchmarking Platform (Hyperverge)
    Tech: Python, FastAPI, ELK Stack, Custom Analytics
    Impact: FAR/FRR reduced by 35-45%, near-zero false positives
    
[5] Dynamic Rate Limiter (Hyperverge)
    Tech: Redis, Node.js, Adaptive Algorithms
    Impact: False positives reduced by ~100%
    
[6] Automated Mirroring System (Hyperverge)
    Tech: AWS, Python, API Testing Framework
    Impact: 0 downtime for 1+ year, 95% less manual effort
    
[7] Global WebSDK (Hyperverge)
    Tech: JavaScript, React, Low-code Platform
    Impact: 78% faster client integration, 50+ clients onboarded

[8] Shopfront API Service (Hyperverge)
    Tech: Computer Vision, OCR, Geolocation APIs
    Impact: GST & location validation for 2+ clients

Type 'projects --details' for expanded information.`
    }),
    education: () => ({
      output: `EDUCATION:

[1] Vellore Institute of Technology (VIT)
    Degree: B.Tech in Computer Science
    Period: 2017 - 2021
    CGPA: 9.15 / 10.0
    
    Notable Courses:
    ▹ Data Structures & Algorithms
    ▹ Database Management Systems
    ▹ Cloud Computing
    ▹ Machine Learning
    ▹ Software Engineering

[2] St. Augustine's Day School
    Higher Secondary: 93.25%
    Secondary: 94.40%`
    }),
    contact: () => ({
      output: `CONTACT INFORMATION:

  Email:    aayush.agarwal1936@gmail.com
  Phone:    +91 8100258835
  LinkedIn: linkedin.com/in/aayush1936
  GitHub:   github.com/aayush1936 (inferred)
  Location: India
  
  Open to: Full-time opportunities, consulting, collaboration
  
Type 'linkedin' or 'github' to open profiles in new tab.`
    }),
    achievements: () => ({
      output: `HONORS & ACHIEVEMENTS:

[🏆] Best Mentor 2024 - Hyperverge Academy
     Recognized for exceptional mentorship and knowledge sharing

[⭐] Exceptional Employee Rating
     Achieved top performance rating for 2 consecutive years (2023-2024)
     
[🎓] ET Campus Star
     Top 200 among 50,000+ candidates in national competition
     
[📈] Career Growth
     Promoted 3 times in 4 years (Intern → SDE1 → SDE2 → SDE3)
     
[💰] Cost Optimization
     Saved $360K+ annually in AWS infrastructure costs
     
[👥] Team Leadership
     Scaled engineering team from 5 to 20+ members
     Mentored 12+ engineers and interns`
    }),
    stats: () => ({
      output: `CAREER STATISTICS:

[Experience]
  Total Years: 5+ years
  Companies: 3 (Avoca AI, Hyperverge, Jidoka)
  Promotions: 3 times in 4 years
  
[Impact]
  Cost Saved: $30K/month ($360K/year)
  Countries Served: 195+
  Clients Onboarded: 50+ enterprise clients
  Team Size Led: 14+ members (expanded 5 → 20+)
  Engineers Mentored: 12+
  
[Technical]
  ID Formats Supported: 500+
  Uptime Achieved: 99.9% for major launches
  Deployment Speed: 80% improvement (Kubernetes migration)
  Fraud Reduction: 90%+ with deepfake detection
  FAR/FRR Reduction: 35-45%
  
[Projects]
  Major Projects: 8+ documented
  Tech Stack Size: 30+ technologies
  Integration Partners: OpenAI, Claude, Gemini, AWS
  
[Code & Architecture]
  Architecture Patterns: Microservices, Serverless, Event-Driven
  Cloud Platforms: AWS (primary), Vercel, Railway
  CI/CD Pipelines: GitHub Actions, Docker, Kubernetes`
    }),
    clear: () => ({
      output: '',
      clear: true
    }),
    github: () => ({
      output: 'Opening GitHub profile...',
      action: () => window.open('https://github.com/aayush1936', '_blank')
    }),
    linkedin: () => ({
      output: 'Opening LinkedIn profile...',
      action: () => window.open('https://linkedin.com/in/aayush1936', '_blank')
    }),
    resume: () => ({
      output: 'Resume download feature coming soon! Contact me directly for the latest version.'
    }),
    blog: () => ({
      output: 'Blog section under development. Coming soon with posts on:\n  → Building scalable Voice AI systems\n  → AWS cost optimization strategies\n  → LLM integration best practices\n  → Team leadership in tech\n\nStay tuned!'
    })
  };

  const handleTerminalCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const command = terminalCommands[trimmedCmd];
    
    const newHistory = [...terminalHistory, { input: cmd, output: '' }];
    
    if (command) {
      const result = command();
      if (result.clear) {
        setTerminalHistory([]);
      } else {
        newHistory[newHistory.length - 1].output = result.output;
        setTerminalHistory(newHistory);
        if (result.action) {
          setTimeout(result.action, 500);
        }
      }
    } else {
      newHistory[newHistory.length - 1].output = `Command not found: ${cmd}\nType 'help' for available commands.`;
      setTerminalHistory(newHistory);
    }
    
    setTerminalInput('');
  };

  useEffect(() => {
    if (terminalOpen && terminalInputRef.current) {
      terminalInputRef.current.focus();
    }
  }, [terminalOpen, terminalHistory]);

  const projects = [
    {
      id: 'prompt-orchestration',
      title: 'Prompt Orchestration System',
      company: 'Avoca AI',
      period: '2025',
      category: 'AI/LLM',
      description: 'Configurable system for LLM-based Voice Assistants with multi-model support',
      impact: 'Reduced customer onboarding from 4-5 days to under 1 minute',
      tech: ['OpenAI', 'Claude', 'Gemini', 'Node.js', 'FastAPI', 'MongoDB', 'Redis'],
      metrics: [
        { label: 'Onboarding Time', before: '4-5 days', after: '<1 min', improvement: '99.5%' },
        { label: 'Configuration Options', value: '50+' },
        { label: 'Models Supported', value: '3 (OpenAI, Claude, Gemini)' }
      ],
      features: [
        'Dynamic prompt templating with variable injection',
        'Multi-model fallback chains',
        'Real-time prompt testing & evaluation',
        'Version control for prompt configurations',
        'A/B testing framework for prompts'
      ],
      image: '/placeholder-orchestration.jpg',
      links: []
    },
    {
      id: 'call-debugger',
      title: 'Real-time Call Debugger',
      company: 'Avoca AI',
      period: '2025',
      category: 'Infrastructure',
      description: 'Real-time debugging platform for Voice AI call analysis and issue diagnosis',
      impact: 'Reduced call-level bug resolution from hours to <5 minutes',
      tech: ['WebSocket', 'Datadog', 'Node.js', 'React', 'ELK Stack', 'Custom Logging'],
      metrics: [
        { label: 'Resolution Time', before: 'Hours', after: '<5 min', improvement: '95%' },
        { label: 'Calls Traced/Day', value: '10,000+' },
        { label: 'Debug Metrics', value: '200+' }
      ],
      features: [
        'Live call tracing with WebSocket streaming',
        'Automated anomaly detection',
        'Call flow visualization',
        'Integrated log search across services',
        'Performance metrics dashboard'
      ],
      image: '/placeholder-debugger.jpg',
      links: []
    },
    {
      id: 'global-kyc',
      title: 'Global KYC Platform',
      company: 'Hyperverge',
      period: '2021-2025',
      category: 'AI/Infrastructure',
      description: 'Enterprise-grade identity verification platform supporting worldwide KYC compliance',
      impact: 'Serving 50+ enterprise clients across 195+ countries',
      tech: ['Python', 'AWS Lambda', 'Step Functions', 'PostgreSQL', 'Computer Vision', 'OCR'],
      metrics: [
        { label: 'Countries Supported', value: '195+' },
        { label: 'ID Formats', value: '500+' },
        { label: 'Enterprise Clients', value: '50+' },
        { label: 'Daily Verifications', value: '100,000+' }
      ],
      features: [
        'Multi-country ID document support',
        'Real-time liveness detection',
        'Fraud detection with deepfake AI',
        'Automated data extraction (OCR)',
        'Compliance reporting dashboard'
      ],
      image: '/placeholder-kyc.jpg',
      links: []
    },
    {
      id: 'ai-benchmarking',
      title: 'AI Model Benchmarking Platform',
      company: 'Hyperverge',
      period: '2023-2025',
      category: 'AI/ML',
      description: 'Automated platform for AI model analysis, evaluation, and performance benchmarking',
      impact: 'Reduced False Acceptance & Rejection Rates by 35-45%',
      tech: ['Python', 'FastAPI', 'TensorFlow', 'ELK Stack', 'Grafana', 'Custom Metrics'],
      metrics: [
        { label: 'FAR/FRR Reduction', value: '35-45%' },
        { label: 'Models Evaluated', value: '100+' },
        { label: 'Test Cases/Model', value: '10,000+' }
      ],
      features: [
        'Automated model testing pipelines',
        'Custom benchmark suite creation',
        'Performance regression detection',
        'Multi-model comparison dashboards',
        'Client-specific benchmarking reports'
      ],
      image: '/placeholder-benchmarking.jpg',
      links: []
    },
    {
      id: 'rate-limiter',
      title: 'Dynamic Rate Limiter',
      company: 'Hyperverge',
      period: '2025',
      category: 'Infrastructure',
      description: 'Adaptive rate limiting system handling varying load patterns',
      impact: 'Reduced false positives by nearly 100%',
      tech: ['Redis', 'Node.js', 'Lua Scripts', 'Adaptive Algorithms', 'Monitoring'],
      metrics: [
        { label: 'False Positives', improvement: '~100%' },
        { label: 'Requests/Second', value: '50,000+' },
        { label: 'Latency Overhead', value: '<2ms' }
      ],
      features: [
        'Token bucket with adaptive refill rates',
        'Client behavior learning',
        'Anomaly-based threshold adjustment',
        'Multi-tier rate limiting',
        'Real-time monitoring & alerts'
      ],
      image: '/placeholder-ratelimiter.jpg',
      links: []
    },
    {
      id: 'global-websdk',
      title: 'Global WebSDK',
      company: 'Hyperverge',
      period: '2021-2023',
      category: 'Frontend/SDK',
      description: 'Low-code SDK streamlining KYC API integration for web applications',
      impact: '78% faster client integration, 50+ clients onboarded',
      tech: ['JavaScript', 'React', 'WebRTC', 'Low-code Platform', 'API Design'],
      metrics: [
        { label: 'Integration Speed', improvement: '78%' },
        { label: 'Clients Onboarded', value: '50+' },
        { label: 'User Engagement', improvement: '+42%' },
        { label: 'Drop-off Rate', improvement: '-60%' }
      ],
      features: [
        'Pre-built UI components',
        'Customizable workflows',
        'Multi-language support',
        'Real-time validation feedback',
        'Mobile & desktop optimized'
      ],
      image: '/placeholder-websdk.jpg',
      links: []
    }
  ];

  const blogPosts = [
    {
      title: 'Building Production-Ready Voice AI Agents',
      excerpt: 'Lessons learned from architecting LLM-based voice assistants at scale',
      date: '2025-02-10',
      category: 'AI/LLM',
      readTime: '8 min',
      tags: ['Voice AI', 'LLM', 'OpenAI', 'Claude', 'Production'],
      status: 'coming-soon'
    },
    {
      title: 'How We Saved $360K/Year in AWS Costs',
      excerpt: 'Practical strategies for cloud cost optimization without compromising performance',
      date: '2025-02-05',
      category: 'Cloud/DevOps',
      readTime: '12 min',
      tags: ['AWS', 'Cost Optimization', 'Infrastructure', 'DevOps'],
      status: 'coming-soon'
    },
    {
      title: 'Migrating to Kubernetes: 80% Faster Deployments',
      excerpt: 'Our journey from AutoScaling to Kubernetes and the lessons learned',
      date: '2025-01-28',
      category: 'Infrastructure',
      readTime: '10 min',
      tags: ['Kubernetes', 'Docker', 'CI/CD', 'DevOps'],
      status: 'coming-soon'
    },
    {
      title: 'Leading Engineering Teams: From 5 to 20+',
      excerpt: 'Practical insights on scaling engineering teams in fast-growing startups',
      date: '2025-01-20',
      category: 'Leadership',
      readTime: '7 min',
      tags: ['Leadership', 'Team Building', 'Management', 'Startups'],
      status: 'coming-soon'
    },
    {
      title: 'AI Fraud Detection: 90% Reduction in Deepfakes',
      excerpt: 'Implementing deepfake detection in production KYC systems',
      date: '2025-01-15',
      category: 'AI/Security',
      readTime: '9 min',
      tags: ['AI', 'Deepfake', 'Security', 'Computer Vision'],
      status: 'coming-soon'
    },
    {
      title: 'Prompt Engineering Best Practices for Production',
      excerpt: 'Strategies for reliable LLM outputs in enterprise applications',
      date: '2025-01-10',
      category: 'AI/LLM',
      readTime: '11 min',
      tags: ['Prompt Engineering', 'LLM', 'Best Practices'],
      status: 'coming-soon'
    }
  ];

  const techCategories = [
    {
      name: 'AI & LLM Systems',
      icon: Brain,
      skills: [
        { name: 'OpenAI GPT-4', level: 95, projects: 5 },
        { name: 'Anthropic Claude', level: 95, projects: 5 },
        { name: 'Google Gemini', level: 90, projects: 3 },
        { name: 'LangChain', level: 85, projects: 4 },
        { name: 'Prompt Engineering', level: 95, projects: 8 },
        { name: 'AI Agents', level: 90, projects: 6 },
        { name: 'RAG Systems', level: 80, projects: 3 }
      ]
    },
    {
      name: 'Backend & Systems',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 95, projects: 15 },
        { name: 'TypeScript', level: 95, projects: 12 },
        { name: 'Python', level: 90, projects: 20 },
        { name: 'FastAPI', level: 85, projects: 8 },
        { name: 'Express.js', level: 95, projects: 10 },
        { name: 'Socket.io', level: 85, projects: 5 },
        { name: 'Microservices', level: 90, projects: 12 }
      ]
    },
    {
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      skills: [
        { name: 'AWS Lambda', level: 95, projects: 15 },
        { name: 'AWS EC2', level: 90, projects: 10 },
        { name: 'AWS S3', level: 95, projects: 20 },
        { name: 'Kubernetes', level: 85, projects: 5 },
        { name: 'Docker', level: 90, projects: 15 },
        { name: 'Terraform', level: 80, projects: 6 },
        { name: 'CI/CD', level: 90, projects: 12 }
      ]
    },
    {
      name: 'Databases & Analytics',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', level: 90, projects: 12 },
        { name: 'MongoDB', level: 85, projects: 10 },
        { name: 'DynamoDB', level: 85, projects: 8 },
        { name: 'Redis', level: 90, projects: 10 },
        { name: 'ELK Stack', level: 85, projects: 8 },
        { name: 'Grafana', level: 80, projects: 6 },
        { name: 'Datadog', level: 85, projects: 5 }
      ]
    },
    {
      name: 'Frontend Technologies',
      icon: Globe,
      skills: [
        { name: 'React.js', level: 90, projects: 15 },
        { name: 'Next.js', level: 85, projects: 8 },
        { name: 'TypeScript', level: 95, projects: 12 },
        { name: 'Tailwind CSS', level: 85, projects: 10 },
        { name: 'WebSocket', level: 85, projects: 5 }
      ]
    },
    {
      name: 'DevOps & Monitoring',
      icon: Activity,
      skills: [
        { name: 'GitHub Actions', level: 90, projects: 12 },
        { name: 'Sentry', level: 85, projects: 8 },
        { name: 'AWS X-Ray', level: 80, projects: 5 },
        { name: 'Metabase', level: 75, projects: 4 },
        { name: 'Load Testing', level: 85, projects: 6 }
      ]
    }
  ];

  const softSkills = [
    { name: 'Team Leadership', icon: Users, description: 'Led 14+ member teams, scaled from 5 to 20+ engineers' },
    { name: 'Technical Mentorship', icon: GraduationCap, description: 'Mentored 12+ engineers and interns' },
    { name: 'System Design', icon: Layers, description: 'Architected distributed systems for 50+ clients' },
    { name: 'Cost Optimization', icon: DollarSign, description: 'Saved $30K/month through infrastructure optimization' },
    { name: 'Stakeholder Management', icon: MessageSquare, description: 'Collaborated with product, sales, and exec teams' },
    { name: 'Hiring & Interviews', icon: Target, description: 'Conducted 50+ technical interviews' }
  ];

  return (
    <div className="relative min-h-screen bg-black text-green-400 font-mono overflow-hidden">
      {/* Matrix Rain Background */}
      <canvas ref={canvasRef} className="fixed inset-0 opacity-20 pointer-events-none" />
      
      {/* Scan Line Effect */}
      <div className="scan-line" />
      
      {/* Floating Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0,255,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,0,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          transform: `perspective(500px) rotateX(60deg) translateZ(-100px) translate(${mousePosition.x}px, ${mousePosition.y}px)`
        }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/80 border-b border-green-500/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 glitch-text">
            <Terminal className="w-6 h-6 animate-pulse" />
            <span className="text-xl font-bold">aayush.dev</span>
          </div>
          <div className="hidden md:flex gap-6">
            {['home', 'experience', 'projects', 'skills', 'blog', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => {
                  setActiveSection(section);
                  document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`uppercase text-sm tracking-wider hover:text-green-300 transition-colors relative group ${
                  activeSection === section ? 'text-green-300' : ''
                }`}
              >
                {section}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <button
              onClick={() => setTerminalOpen(!terminalOpen)}
              className="p-2 hover:bg-green-500/20 rounded transition-colors"
              title="Open Terminal (Interactive)"
            >
              <Code2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Enhanced Terminal Overlay */}
      {terminalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="w-full max-w-5xl bg-gray-900 border-2 border-green-500 rounded-lg overflow-hidden shadow-2xl shadow-green-500/50">
            <div className="bg-green-500/20 px-4 py-2 flex justify-between items-center border-b border-green-500">
              <div className="flex items-center gap-4">
                <span className="text-green-300 font-bold">aayush@portfolio:~$</span>
                <span className="text-green-400/60 text-sm">Interactive Terminal - Type 'help' for commands</span>
              </div>
              <button 
                onClick={() => setTerminalOpen(false)} 
                className="hover:text-red-500 transition-colors"
                title="Close Terminal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 h-[500px] overflow-y-auto font-mono text-sm">
              <div className="mb-4 text-green-300">
                Welcome to Aayush's Interactive Terminal v2.0
                <br />Type 'help' to see available commands.
              </div>
              
              {terminalHistory.map((item, i) => (
                <div key={i} className="mb-4">
                  <div className="flex gap-2 text-green-400">
                    <span className="text-green-500">$</span>
                    <span>{item.input}</span>
                  </div>
                  {item.output && (
                    <pre className="mt-2 text-green-300/90 whitespace-pre-wrap pl-4">
                      {item.output}
                    </pre>
                  )}
                </div>
              ))}
              
              <div className="flex gap-2 items-center">
                <span className="text-green-500">$</span>
                <input
                  ref={terminalInputRef}
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleTerminalCommand(terminalInput);
                    }
                  }}
                  className="flex-1 bg-transparent outline-none text-green-400 caret-green-400"
                  placeholder="Type a command..."
                  autoFocus
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-6 relative">
          <div className="max-w-6xl w-full">
            <div className="mb-8 overflow-hidden">
              <h1 className="text-6xl md:text-8xl font-bold mb-4 glitch-text animate-slide-up">
                AAYUSH
                <br />
                <span className="text-green-300">AGARWAL</span>
              </h1>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {[
                'Senior Backend Engineer',
                'AI Systems Architect', 
                'Cloud Specialist',
                'Team Lead',
                'YC W25',
                '5+ Years Experience',
                'AWS Expert',
                'LLM Integration'
              ].map((tag, i) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-sm bg-green-500/10 border border-green-500/50 rounded hover:bg-green-500/20 transition-colors cursor-default"
                  style={{ animationDelay: `${0.3 + i * 0.05}s` }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-xl md:text-2xl mb-4 text-green-300/80 max-w-4xl animate-slide-up leading-relaxed" style={{ animationDelay: '0.4s' }}>
              Engineering @ <span className="text-green-400 font-bold">Avoca AI (YC W25)</span> | 
              Ex-SDE3 @ Hyperverge
            </p>

            <p className="text-lg mb-8 text-green-300/60 max-w-3xl animate-slide-up" style={{ animationDelay: '0.5s' }}>
              Building scalable AI systems • Leading engineering teams • Optimizing cloud infrastructure • 
              Architecting distributed systems serving 50+ enterprise clients across 195+ countries
            </p>

            <div className="flex flex-wrap gap-4 mb-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <a 
                href="mailto:aayush.agarwal1936@gmail.com" 
                className="flex items-center gap-2 px-6 py-3 bg-green-500 text-black font-bold rounded hover:bg-green-400 transition-all hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
              <a 
                href="https://www.linkedin.com/in/aayush1936" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-6 py-3 border-2 border-green-500 rounded hover:bg-green-500/20 transition-all hover:scale-105"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <button
                onClick={() => setTerminalOpen(true)}
                className="flex items-center gap-2 px-6 py-3 border-2 border-green-500/50 rounded hover:border-green-500 hover:bg-green-500/10 transition-all hover:scale-105"
              >
                <Terminal className="w-5 h-5" />
                Open Terminal
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-slide-up" style={{ animationDelay: '0.7s' }}>
              <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-4 hover:border-green-500 transition-colors">
                <div className="text-3xl font-bold text-green-300 mb-1">5+</div>
                <div className="text-sm text-green-400/60">Years Experience</div>
              </div>
              <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-4 hover:border-green-500 transition-colors">
                <div className="text-3xl font-bold text-green-300 mb-1">$360K</div>
                <div className="text-sm text-green-400/60">Saved Annually</div>
              </div>
              <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-4 hover:border-green-500 transition-colors">
                <div className="text-3xl font-bold text-green-300 mb-1">50+</div>
                <div className="text-sm text-green-400/60">Enterprise Clients</div>
              </div>
              <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-4 hover:border-green-500 transition-colors">
                <div className="text-3xl font-bold text-green-300 mb-1">195+</div>
                <div className="text-sm text-green-400/60">Countries Served</div>
              </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
              <ChevronDown className="w-8 h-8" />
            </div>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="py-20 px-6 bg-green-500/5 border-y border-green-500/30">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Sparkles className="w-8 h-8 text-green-400" />
              <h2 className="text-4xl font-bold glitch-text">Professional Summary</h2>
            </div>
            <div className="text-lg text-green-300/80 space-y-4 leading-relaxed">
              <p>
                <span className="text-green-400 font-bold">Senior Backend & AI Systems Engineer</span> with 5+ years of experience 
                building scalable KYC, AI inference, and Voice AI platforms. Promoted <span className="text-green-400 font-bold">3 times in 4 years</span> at 
                Hyperverge based on performance and leadership impact.
              </p>
              <p>
                Led cross-functional teams of <span className="text-green-400 font-bold">10+ engineers</span>, reduced cloud costs by 
                <span className="text-green-400 font-bold"> $30K/month</span>, and architected distributed systems serving 
                <span className="text-green-400 font-bold"> 50+ enterprise clients</span> across <span className="text-green-400 font-bold">195+ countries</span>.
              </p>
              <p>
                Strong expertise in backend systems, cloud architecture (AWS), AI agent workflows, LLM integration (OpenAI, Claude, Gemini), 
                and cost-efficient infrastructure optimization.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section with Enhanced Details */}
        <section id="experience" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <Briefcase className="w-12 h-12" />
              <h2 className="text-5xl font-bold glitch-text">EXPERIENCE</h2>
            </div>

            <div className="space-y-12">
              {/* Avoca AI */}
              <div className="group bg-green-500/5 border-2 border-green-500/30 rounded-lg p-8 hover:border-green-500 hover:bg-green-500/10 transition-all animate-slide-up">
                <div className="flex flex-wrap justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-6 h-6 text-green-400" />
                      <h3 className="text-3xl font-bold text-green-300">AVOCA AI</h3>
                      <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500 text-yellow-400 text-sm rounded font-bold">
                        YC W25
                      </span>
                      <a 
                        href="https://avoca.ai" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-400/60 hover:text-green-400 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-xl text-green-400/80 mb-1">Software Engineer</p>
                    <div className="flex items-center gap-2 text-green-400/60">
                      <Calendar className="w-4 h-4" />
                      <span>May 2025 - Present</span>
                      <span className="ml-2 px-2 py-0.5 bg-green-500/20 rounded text-xs">Current</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-green-300 mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {[
                      'Architected a configurable Prompt Orchestration system for LLM-based Voice Assistants, reducing customer onboarding time from 4-5 days to under 1 minute (99.5% improvement)',
                      'Built a real-time Call Debugger platform enabling rapid tracing and issue diagnosis, reducing call-level bug resolution time from hours to less than 5 minutes (95% improvement)',
                      'Maintained, designed and deployed Voice AI Agents, Web Chat, and HITL responder systems integrating OpenAI, Claude, and Gemini APIs with structured fallback and evaluation pipelines',
                      'Scaled, managed and led a 14+ member team, overseeing sprint planning, technical mentorship, hiring, and delivery excellence',
                      'Expanded deployed engineering team from 5 to 20+ members, improving deployment velocity and customer onboarding throughput by 300%'
                    ].map((highlight, j) => (
                      <li key={j} className="flex gap-3 text-green-300/80">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-black/50 border border-green-500/30 rounded p-4">
                    <div className="text-2xl font-bold text-green-400 mb-1">99.5%</div>
                    <div className="text-sm text-green-300/60">Onboarding Time Reduction</div>
                  </div>
                  <div className="bg-black/50 border border-green-500/30 rounded p-4">
                    <div className="text-2xl font-bold text-green-400 mb-1">95%</div>
                    <div className="text-sm text-green-300/60">Bug Resolution Improvement</div>
                  </div>
                  <div className="bg-black/50 border border-green-500/30 rounded p-4">
                    <div className="text-2xl font-bold text-green-400 mb-1">300%</div>
                    <div className="text-sm text-green-300/60">Team Growth (5→20+)</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['LLM Integration', 'Voice AI', 'OpenAI', 'Claude', 'Gemini', 'Real-time Systems', 'Team Leadership', 'Node.js', 'FastAPI', 'MongoDB', 'WebSocket'].map((tech, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 bg-black border border-green-500/50 text-xs rounded hover:border-green-500 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hyperverge */}
              <div className="group bg-green-500/5 border-2 border-green-500/30 rounded-lg p-8 hover:border-green-500 hover:bg-green-500/10 transition-all animate-slide-up">
                <div className="flex flex-wrap justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-6 h-6 text-green-400" />
                      <h3 className="text-3xl font-bold text-green-300">HYPERVERGE TECHNOLOGIES</h3>
                      <a 
                        href="https://hyperverge.co" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-400/60 hover:text-green-400 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-xl text-green-400/80 mb-1">Software Engineer 3 → 2 → 1</p>
                    <div className="flex items-center gap-2 text-green-400/60">
                      <Calendar className="w-4 h-4" />
                      <span>January 2021 - May 2025</span>
                      <span className="ml-2 px-2 py-0.5 bg-green-500/10 rounded text-xs">4.5 years</span>
                    </div>
                    <p className="text-green-300/60 text-sm mt-1">
                      Promoted 3 times: Intern → SDE1 → SDE2 → SDE3
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-green-300 mb-3 flex items-center gap-2">
                    <Rocket className="w-5 h-5" />
                    Major Contributions
                  </h4>
                  <ul className="space-y-3">
                    {[
                      'Architected a Global KYC platform supporting 195+ countries and processing 500+ diverse ID card formats, serving 50+ enterprise clients',
                      'Reduced AWS costs by ~$30K per month through resource allocation, instance rightsizing, efficient scaling, and cost management strategies',
                      'Deployed an automated mirroring and analysis system, eliminating product downtime for over a year, reducing manual effort by 95%',
                      'Built an automated AI model analysis and benchmarking platform, reducing False Acceptance and Rejection Rates by 35-45%',
                      'Migrated product from AutoScaling to Kubernetes resulting in over 80% faster deployments and improved reliability',
                      'Integrated deepfake and anomaly detection models reducing fraudulent cases by >95%',
                      'Led InfoSec activities (VAPT, RL Review, IP Whitelisting) ensuring safe and vulnerability-free systems',
                      'Supported major client go-lives like LinkedIn, Zomato, HFC with 99.9% uptime and over 90% conversion rates',
                      'Led a POD of 4 members and mentored ~12 teammates and interns',
                      'Conducted technical interviews for offline campus hiring (VIT, SRM, JIT, IIIT) resulting in 3 high-potential hires'
                    ].map((highlight, j) => (
                      <li key={j} className="flex gap-3 text-green-300/80">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-black/50 border border-green-500/30 rounded p-4">
                    <div className="text-2xl font-bold text-green-400 mb-1">$30K/mo</div>
                    <div className="text-sm text-green-300/60">AWS Cost Saved</div>
                  </div>
                  <div className="bg-black/50 border border-green-500/30 rounded p-4">
                    <div className="text-2xl font-bold text-green-400 mb-1">195+</div>
                    <div className="text-sm text-green-300/60">Countries Supported</div>
                  </div>
                  <div className="bg-black/50 border border-green-500/30 rounded p-4">
                    <div className="text-2xl font-bold text-green-400 mb-1">99.9%</div>
                    <div className="text-sm text-green-300/60">Uptime Achieved</div>
                  </div>
                  <div className="bg-black/50 border border-green-500/30 rounded p-4">
                    <div className="text-2xl font-bold text-green-400 mb-1">95%</div>
                    <div className="text-sm text-green-300/60">Fraud Reduction</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['Python', 'Node.js', 'AWS Lambda', 'Kubernetes', 'Docker', 'PostgreSQL', 'AI/ML', 'Computer Vision', 'FastAPI', 'CI/CD', 'Team Leadership', 'Mentorship'].map((tech, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 bg-black border border-green-500/50 text-xs rounded hover:border-green-500 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Jidoka */}
              <div className="group bg-green-500/5 border-2 border-green-500/30 rounded-lg p-6 hover:border-green-500 hover:bg-green-500/10 transition-all animate-slide-up">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-5 h-5 text-green-400" />
                      <h3 className="text-2xl font-bold text-green-300">JIDOKA TECHNOLOGIES</h3>
                    </div>
                    <p className="text-lg text-green-400/80 mb-1">Software Engineering Intern</p>
                    <div className="flex items-center gap-2 text-green-400/60">
                      <Calendar className="w-4 h-4" />
                      <span>April 2020 - May 2020</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  <li className="flex gap-3 text-green-300/80">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Developed the Kompass Android Application for AI-Driven Defect Detection resulting in lowering inspection time by 64%</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2">
                  {['Android', 'AI/ML', 'Computer Vision', 'Mobile Development'].map((tech, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 bg-black border border-green-500/50 text-xs rounded hover:border-green-500 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section with Expansion */}
        <section id="projects" className="py-20 px-6 bg-green-500/5 border-y border-green-500/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <Folder className="w-12 h-12" />
              <h2 className="text-5xl font-bold glitch-text">KEY PROJECTS</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, i) => (
                <div
                  key={project.id}
                  className="group bg-black border-2 border-green-500/30 rounded-lg overflow-hidden hover:border-green-500 transition-all hover:scale-[1.02] animate-slide-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {/* Project Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-green-500/20 to-black border-b border-green-500/30 flex items-center justify-center overflow-hidden">
                    <ImageIcon className="w-16 h-16 text-green-500/30" />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-green-400 text-sm">Image Coming Soon</span>
                    </div>
                    <div className="absolute top-3 right-3 px-3 py-1 bg-green-500/90 text-black text-xs font-bold rounded">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-green-300 mb-1">{project.title}</h3>
                        <p className="text-green-400/60 text-sm flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          {project.company} • {project.period}
                        </p>
                      </div>
                      <button
                        onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                        className="p-2 hover:bg-green-500/20 rounded transition-colors"
                      >
                        {expandedProject === project.id ? (
                          <ChevronDown className="w-5 h-5 rotate-180 transition-transform" />
                        ) : (
                          <ChevronDown className="w-5 h-5 transition-transform" />
                        )}
                      </button>
                    </div>

                    <p className="text-green-300/80 mb-4">{project.description}</p>

                    <div className="flex items-center gap-2 mb-4 p-3 bg-green-500/10 border border-green-500/30 rounded">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      <span className="text-green-300 font-bold text-sm">{project.impact}</span>
                    </div>

                    {expandedProject === project.id && (
                      <div className="space-y-4 animate-slide-up">
                        <div>
                          <h4 className="text-lg font-bold text-green-300 mb-2 flex items-center gap-2">
                            <BarChart3 className="w-5 h-5" />
                            Metrics
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            {project.metrics.map((metric, j) => (
                              <div key={j} className="bg-black/50 border border-green-500/30 rounded p-3">
                                <div className="text-sm text-green-400/60 mb-1">{metric.label}</div>
                                {metric.before && (
                                  <div className="text-xs text-green-300/60 mb-1">
                                    {metric.before} → {metric.after}
                                  </div>
                                )}
                                <div className="text-lg font-bold text-green-400">
                                  {metric.improvement || metric.value}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-green-300 mb-2 flex items-center gap-2">
                            <Lightbulb className="w-5 h-5" />
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, j) => (
                              <li key={j} className="flex gap-2 text-green-300/80 text-sm">
                                <ArrowRight className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((tech, j) => (
                        <span
                          key={j}
                          className="px-2 py-1 bg-black border border-green-500/50 text-xs rounded hover:border-green-500 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Skills Matrix */}
        <section id="skills" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <Cpu className="w-12 h-12" />
              <h2 className="text-5xl font-bold glitch-text">TECH STACK</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {techCategories.map((category, i) => (
                <div
                  key={category.name}
                  className="bg-black border-2 border-green-500/30 rounded-lg p-6 hover:border-green-500 transition-all hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-green-300 flex items-center gap-2">
                    <category.icon className="w-6 h-6" />
                    {category.name}
                  </h3>
                  <div className="space-y-3">
                    {category.skills.map((skill, j) => (
                      <div key={j}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-green-400/90 text-sm">{skill.name}</span>
                          <span className="text-green-500 text-xs">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-green-500/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-green-500 to-green-300 transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        <div className="text-green-400/50 text-xs mt-1">
                          {skill.projects} projects
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Soft Skills */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold mb-6 text-green-300 flex items-center gap-3">
                <Users className="w-8 h-8" />
                Leadership & Soft Skills
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {softSkills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-green-500/5 border border-green-500/30 rounded-lg p-4 hover:border-green-500 hover:bg-green-500/10 transition-all"
                  >
                    <skill.icon className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-green-300 mb-1">{skill.name}</div>
                      <div className="text-green-400/70 text-sm">{skill.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section (Coming Soon) */}
        <section id="blog" className="py-20 px-6 bg-green-500/5 border-y border-green-500/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <Book className="w-12 h-12" />
              <h2 className="text-5xl font-bold glitch-text">BLOG</h2>
              <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500 text-yellow-400 text-sm rounded">
                Coming Soon
              </span>
            </div>

            <p className="text-lg text-green-300/80 mb-8">
              Technical articles and insights on AI systems, cloud architecture, and engineering leadership.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, i) => (
                <div
                  key={i}
                  className="group bg-black border-2 border-green-500/30 rounded-lg p-6 hover:border-green-500 transition-all hover:scale-[1.02] animate-slide-up relative overflow-hidden"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="absolute top-3 right-3 px-2 py-1 bg-green-500/90 text-black text-xs font-bold rounded">
                    {post.category}
                  </div>

                  <div className="flex items-center gap-2 text-green-400/60 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime} read</span>
                  </div>

                  <h3 className="text-xl font-bold text-green-300 mb-3 group-hover:text-green-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-green-300/80 mb-4 text-sm">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-2 py-1 bg-green-500/10 border border-green-500/30 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-green-400/60 text-sm">
                    <PlayCircle className="w-4 h-4" />
                    <span>Coming Soon</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-green-300/60">
                Subscribe to be notified when new articles are published
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="px-4 py-2 bg-black border border-green-500/50 rounded text-green-400 outline-none focus:border-green-500 transition-colors"
                  disabled
                />
                <button
                  className="px-6 py-2 bg-green-500/20 border border-green-500/50 rounded text-green-400 hover:bg-green-500/30 transition-colors"
                  disabled
                >
                  Notify Me
                </button>
              </div>
              <p className="text-green-400/40 text-sm mt-2">Newsletter feature coming soon</p>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <Award className="w-12 h-12" />
              <h2 className="text-5xl font-bold glitch-text">ACHIEVEMENTS</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  icon: Award, 
                  text: 'Best Mentor 2024 - Hyperverge Academy', 
                  color: 'from-yellow-400 to-orange-500',
                  description: 'Recognized for exceptional mentorship and knowledge sharing'
                },
                { 
                  icon: Zap, 
                  text: 'Exceptional Employee Rating', 
                  color: 'from-purple-400 to-pink-500',
                  description: 'Top performance rating for 2 consecutive years (2023-2024)'
                },
                { 
                  icon: Award, 
                  text: 'ET Campus Star', 
                  color: 'from-blue-400 to-cyan-500',
                  description: 'Top 200 among 50,000+ candidates in national competition'
                },
                {
                  icon: TrendingUp,
                  text: '3x Promotions in 4 Years',
                  color: 'from-green-400 to-emerald-500',
                  description: 'Intern → SDE1 → SDE2 → SDE3 based on performance'
                },
                {
                  icon: DollarSign,
                  text: '$360K Annual Savings',
                  color: 'from-green-400 to-teal-500',
                  description: '$30K/month AWS cost optimization achievements'
                },
                {
                  icon: Users,
                  text: 'Mentored 12+ Engineers',
                  color: 'from-indigo-400 to-purple-500',
                  description: 'Guided junior engineers and interns to success'
                }
              ].map((achievement, i) => (
                <div
                  key={i}
                  className="group relative bg-black border-2 border-green-500/30 rounded-lg p-6 hover:border-green-500 transition-all hover:scale-105 overflow-hidden animate-slide-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <achievement.icon className="w-12 h-12 mb-4 text-green-400 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold text-green-300 mb-2">{achievement.text}</h3>
                  <p className="text-green-300/70 text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-green-500/5 border-t border-green-500/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8 glitch-text">LET'S BUILD SOMETHING</h2>
            <p className="text-xl text-green-300/80 mb-12">
              Interested in AI systems, cloud architecture, team leadership, or just want to chat tech?
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <a 
                href="mailto:aayush.agarwal1936@gmail.com" 
                className="flex items-center justify-center gap-3 px-8 py-4 bg-green-500 text-black font-bold rounded hover:bg-green-400 transition-all hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Email</div>
                  <div>aayush.agarwal1936@gmail.com</div>
                </div>
              </a>
              <a 
                href="tel:+918100258835" 
                className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-green-500 rounded hover:bg-green-500/20 transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Phone</div>
                  <div>+91 8100258835</div>
                </div>
              </a>
            </div>

            <div className="flex gap-6 justify-center mb-8">
              <a 
                href="https://www.linkedin.com/in/aayush1936" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-4 bg-green-500/10 border border-green-500/50 rounded-full hover:bg-green-500/20 hover:scale-110 transition-all group"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </a>
              <a 
                href="https://github.com/aayush1936" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-4 bg-green-500/10 border border-green-500/50 rounded-full hover:bg-green-500/20 hover:scale-110 transition-all group"
                title="GitHub Profile"
              >
                <Github className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </a>
              <a 
                href="mailto:aayush.agarwal1936@gmail.com" 
                className="p-4 bg-green-500/10 border border-green-500/50 rounded-full hover:bg-green-500/20 hover:scale-110 transition-all group"
                title="Email"
              >
                <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </a>
              <button
                onClick={() => setTerminalOpen(true)}
                className="p-4 bg-green-500/10 border border-green-500/50 rounded-full hover:bg-green-500/20 hover:scale-110 transition-all group"
                title="Open Terminal"
              >
                <Terminal className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </button>
            </div>

            <div className="flex items-center gap-2 justify-center text-green-400/60">
              <MapPin className="w-4 h-4" />
              <span>Open to remote opportunities worldwide</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-green-500/30 text-center">
          <div className="max-w-7xl mx-auto">
            <p className="text-green-400/60 mb-2">
              © 2026 Aayush Agarwal. Built with React + Tailwind CSS
            </p>
            <p className="text-green-400/40 text-sm">
              {'>'} System online. Status: Operational. Uptime: 99.9%
            </p>
            <div className="flex justify-center gap-4 mt-4 text-green-400/60 text-sm">
              <button onClick={() => setTerminalOpen(true)} className="hover:text-green-400 transition-colors">
                Open Terminal
              </button>
              <span>•</span>
              <a href="https://linkedin.com/in/aayush1936" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                LinkedIn
              </a>
              <span>•</span>
              <a href="https://github.com/aayush1936" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </main>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');
        
        * {
          font-family: 'JetBrains Mono', monospace;
        }

        .scan-line {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, transparent, #00ff00, transparent);
          animation: scan 8s linear infinite;
          pointer-events: none;
          z-index: 100;
        }

        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(100vh); }
        }

        .glitch-text {
          position: relative;
          animation: glitch 3s infinite;
        }

        @keyframes glitch {
          0%, 90%, 100% {
            transform: translate(0);
          }
          92% {
            transform: translate(-2px, 2px);
          }
          94% {
            transform: translate(2px, -2px);
          }
          96% {
            transform: translate(-2px, -2px);
          }
          98% {
            transform: translate(2px, 2px);
          }
        }

        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #000;
        }

        ::-webkit-scrollbar-thumb {
          background: #00ff00;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #00cc00;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}
