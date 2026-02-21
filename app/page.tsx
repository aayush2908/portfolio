'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, Linkedin, Mail, Phone, Terminal, Code2, Zap, Award, Briefcase, 
  GraduationCap, Database, Cloud, Cpu, Globe, ChevronDown, ExternalLink, 
  X, Folder, FileText, Book, Layers, Users, TrendingUp, DollarSign,
  Target, CheckCircle, ArrowRight, Calendar, MapPin, Building2, Sparkles,
  Rocket, Brain, MessageSquare, Image as ImageIcon, PlayCircle, GitBranch,
  Server, Lock, Eye, BarChart3, Activity, Shield, Lightbulb, Star, Quote, Mic, Search
} from 'lucide-react';

// Import data from centralized data files
import { projects } from './data/projects';
import { blogPosts } from './data/blog';
import { techCategories } from './data/techStack';
import { softSkills } from './data/skills';
import { recommendations } from './data/recommendations';

export default function EnhancedAayushPortfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState<Array<{input: string, output: string}>>([]);
  const [terminalInput, setTerminalInput] = useState('');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [notificationEmail, setNotificationEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [notificationSubmitted, setNotificationSubmitted] = useState(false);
  
  // Project filtering
  const [projectFilter, setProjectFilter] = useState<string | null>(null);
  
  // Modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<any>(null);
  const [modalTitle, setModalTitle] = useState('');
  const [modalType, setModalType] = useState(''); // 'image', 'pdf', 'resume', 'recommendation'
  const [modalUrl, setModalUrl] = useState('');
  const [selectedRecommendation, setSelectedRecommendation] = useState<any>(null);
  
  // Custom CSS for grid pattern and animations
  const customStyles = {
    bgGridPattern: {
      backgroundImage: 'linear-gradient(to right, rgba(0, 255, 149, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 255, 149, 0.1) 1px, transparent 1px)',
      backgroundSize: '20px 20px'
    },
    pulseSlow: {
      animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
    }
  };
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const terminalInputRef = useRef<HTMLInputElement>(null);
  
  // Function to open modal with content
  const openModal = (title: string, content: any, type: string, url: string = '') => {
    setModalTitle(title);
    setModalContent(content);
    setModalType(type);
    setModalUrl(url);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  // Function to close modal
  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Matrix rain effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
      if (!ctx || !canvas) return;
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
    const handleMouseMove = (e: MouseEvent) => {
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
  linkedin   - Open LinkedIn profile
  resume     - View and download resume
  blog       - View blog posts (coming soon)
  open       - Visit company websites
  
Interactive commands:
  skills --category=[ai|backend|cloud|db|frontend|devops|observability|security]
  projects --filter=[ai|infra|frontend|backend]
  projects --details [project-id]
  experience --company=[avoca|hyperverge|jidoka|carikture]
  open [avoca|hyperverge]
  yc       - Visit Y Combinator page for Avoca AI
  
Type any command to execute it.`
    }),
    about: () => ({
      output: `AAYUSH AGARWAL - Senior Backend & AI Systems Engineer

▸ 5+ years building scalable KYC, AI inference, and Voice AI platforms
▸ 4.5 years at Hyperverge (Intern → SDE1 → SDE2 → SDE3)
▸ Led cross-functional teams of 10+ engineers
▸ Architected distributed systems serving 50+ enterprise clients
▸ Expertise: Backend Systems, Cloud Architecture, AI/LLM Integration (OpenAI, Claude, Gemini), Voice Technologies

Current: Engineering @ Avoca AI (YC W25)
Type 'yc' to visit Y Combinator page for Avoca
Previous: SDE3 @ Hyperverge Technologies

Type 'open avoca' to visit Avoca AI website
Type 'open hyperverge' to visit Hyperverge website`
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
     Career path: Intern → SDE1 → SDE2 → SDE3 (4.5 years)
     
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
    linkedin: () => ({
      output: 'Opening LinkedIn profile...',
      action: () => window.open('https://linkedin.com/in/aayush1936', '_blank')
    }),
    resume: () => ({
      output: 'Opening resume preview...',
      action: () => {
        openModal(
          'Aayush Agarwal - Resume', 
          null, 
          'resume',
          'https://drive.google.com/file/d/1DD1X5J4yPINJMrTgoRVULV5_0llMis8K/view?usp=sharing'
        );
      }
    }),
    blog: () => ({
      output: 'Blog section under development. Coming soon with posts on:\n  → Building scalable Voice AI systems\n  → AWS cost optimization strategies\n  → LLM integration best practices\n  → Team leadership in tech\n\nStay tuned!'
    }),
    open: (args: string) => {
      if (args === 'avoca') {
        window.open('https://avoca.ai', '_blank');
        return { output: 'Opening Avoca AI website...' };
      } else if (args === 'hyperverge') {
        window.open('https://hyperverge.co', '_blank');
        return { output: 'Opening Hyperverge website...' };
      } else {
        return { output: 'Unknown website. Try "open avoca" or "open hyperverge".' };
      }
    },
    yc: () => {
      window.open('https://www.ycombinator.com/companies/avoca', '_blank');
      return { output: 'Opening Y Combinator page for Avoca AI...' };
    }
  };

  const handleTerminalCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const newHistory = [...terminalHistory, { input: cmd, output: '' }];
    
    // Check for complex commands with parameters
    if (trimmedCmd.startsWith('skills --category=')) {
      const category = trimmedCmd.split('=')[1];
      let output = '';
      
      switch (category) {
        case 'ai':
          output = `AI & LLM SYSTEMS:\n\n${techCategories[0].skills.join(', ')}`;
          break;
        case 'backend':
          output = `BACKEND & SYSTEMS:\n\n${techCategories[1].skills.join(', ')}`;
          break;
        case 'cloud':
          output = `CLOUD & INFRASTRUCTURE:\n\n${techCategories[2].skills.join(', ')}`;
          break;
        case 'db':
          output = `DATABASES & ANALYTICS:\n\n${techCategories[3].skills.join(', ')}`;
          break;
        case 'frontend':
          output = `FRONTEND TECHNOLOGIES:\n\n${techCategories[4].skills.join(', ')}`;
          break;
        case 'devops':
          output = `DEVOPS & MONITORING:\n\n${techCategories[5].skills.join(', ')}`;
          break;
        case 'observability':
          output = `OBSERVABILITY & RELIABILITY:\n\n${techCategories[6].skills.join(', ')}`;
          break;
        case 'security':
          output = `SECURITY & COMPLIANCE:\n\n${techCategories[7].skills.join(', ')}`;
          break;
        default:
          output = `Category not found. Available categories: ai, backend, cloud, db, frontend, devops, observability, security`;
      }
      
      newHistory[newHistory.length - 1].output = output;
      setTerminalHistory(newHistory);
    }
    else if (trimmedCmd.startsWith('projects --filter=')) {
      const filter = trimmedCmd.split('=')[1];
      const filteredProjects = projects.filter(project => {
        if (filter === 'ai' && (project.category.toLowerCase().includes('ai') || project.tech.some(t => t.toLowerCase().includes('ai')))) {
          return true;
        }
        if (filter === 'infra' && (project.category.toLowerCase().includes('infra') || project.tech.some(t => t.toLowerCase().includes('infra')))) {
          return true;
        }
        if (filter === 'frontend' && (project.category.toLowerCase().includes('frontend') || project.tech.some(t => t.toLowerCase().includes('react') || t.toLowerCase().includes('ui')))) {
          return true;
        }
        if (filter === 'backend' && (project.category.toLowerCase().includes('backend') || project.tech.some(t => t.toLowerCase().includes('node') || t.toLowerCase().includes('python')))) {
          return true;
        }
        return false;
      });
      
      let output = `PROJECTS (FILTERED BY ${filter.toUpperCase()}):\n\n`;
      
      filteredProjects.forEach((project, i) => {
        output += `[${i+1}] ${project.title} (${project.company})\n    Category: ${project.category}\n    Impact: ${project.impact}\n\n`;
      });
      
      if (filteredProjects.length === 0) {
        output += 'No projects found with this filter. Try: ai, infra, frontend, backend';
      }
      
      newHistory[newHistory.length - 1].output = output;
      setTerminalHistory(newHistory);
    }
    else if (trimmedCmd.startsWith('projects --details ')) {
      const projectId = trimmedCmd.split(' ')[2];
      const project = projects.find(p => p.id === projectId);
      
      if (project) {
        let output = `PROJECT DETAILS: ${project.title}\n\n`;
        output += `Company: ${project.company}\n`;
        output += `Period: ${project.period}\n`;
        output += `Category: ${project.category}\n`;
        output += `Description: ${project.description}\n`;
        output += `Impact: ${project.impact}\n\n`;
        
        output += `TECHNOLOGIES:\n${project.tech.join(', ')}\n\n`;
        
        output += `KEY FEATURES:\n`;
        project.features.forEach((feature, i) => {
          output += `- ${feature}\n`;
        });
        
        output += `\nMETRICS:\n`;
        project.metrics.forEach((metric: any) => {
          if (metric.before) {
            output += `- ${metric.label}: ${metric.before} → ${metric.after} (${metric.improvement})\n`;
          } else {
            output += `- ${metric.label}: ${metric.value}\n`;
          }
        });
        
        newHistory[newHistory.length - 1].output = output;
        setTerminalHistory(newHistory);
      } else {
        newHistory[newHistory.length - 1].output = `Project not found. Available projects: ${projects.map(p => p.id).join(', ')}`;
        setTerminalHistory(newHistory);
      }
    }
    else if (trimmedCmd.startsWith('experience --company=')) {
      const company = trimmedCmd.split('=')[1];
      let output = '';
      
      switch (company) {
        case 'avoca':
          output = `AVOCA AI (YC W25) | Software Engineer | May 2025 - Present
          
▹ Architected a configurable Prompt Orchestration system for LLM-based Voice Assistants, reducing customer onboarding time from 4-5 days to under 1 minute (99.5% improvement)
▹ Built a real-time Call Debugger platform enabling rapid tracing and issue diagnosis, reducing call-level bug resolution time from hours to less than 5 minutes
▹ Maintained, designed and deployed Voice AI Agents, Web Chat, and HITL responder systems integrating OpenAI, Claude, and Gemini APIs with structured fallback
▹ Scaled, managed and led a 14+ member team, overseeing sprint planning, technical mentorship, hiring, and delivery excellence
▹ Expanded deployed engineering team from 5 to 20+ members, improving deployment velocity and customer onboarding throughput by 300%`;
          break;
        case 'hyperverge':
          output = `HYPERVERGE TECHNOLOGIES | SDE1 → SDE3 | Jan 2021 - May 2025

▹ Architected a Global KYC platform supporting 195+ countries and processing 500+ diverse ID card formats, serving 50+ enterprise clients
▹ Reduced AWS costs by ~$30K per month through resource allocation, instance rightsizing, efficient scaling, and cost management strategies
▹ Deployed an automated mirroring and analysis system, eliminating product downtime for over a year, reducing manual effort by 95%
▹ Built an automated AI model analysis and benchmarking platform, reducing False Acceptance and Rejection Rates by 35-45%
▹ Migrated product from AutoScaling to Kubernetes resulting in over 80% faster deployments and improved reliability
▹ Integrated deepfake and anomaly detection models reducing fraudulent cases by >95%`;
          break;
        case 'jidoka':
          output = `JIDOKA TECHNOLOGIES | Intern | Apr 2020 - May 2020

▹ Developed the Kompass Android Application for AI-Driven Defect Detection resulting in lowering inspection time by 64%
▹ Worked with computer vision models to detect product defects in manufacturing environments
▹ Implemented UI components and backend logic for the mobile application`;
          break;
        case 'carikture':
          output = `CARIKTURE | Information Technology Summer Intern | Apr 2020 - May 2020

▹ Built a Trello Clone from scratch with functionalities like moving cards, commenting, and notifications
▹ Implemented a project management system with drag-and-drop interfaces and real-time updates
▹ Used PHP, HTML, CSS, JavaScript, and MySQL to create a full-stack web application`;
          break;
        default:
          output = `Company not found. Available companies: avoca, hyperverge, jidoka, carikture`;
      }
      
      newHistory[newHistory.length - 1].output = output;
      setTerminalHistory(newHistory);
    }
    else {
      // Check for commands with arguments (e.g., "open avoca")
      const parts = trimmedCmd.split(' ');
      const baseCommand = parts[0];
      const args = parts.length > 1 ? parts.slice(1).join(' ') : undefined;
      
      // Handle standard commands
      const command = (terminalCommands as any)[baseCommand];
    
    if (command) {
        // Check if command accepts arguments
        const result = args !== undefined ? command(args) : command();
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
    }
    
    setTerminalInput('');
  };

  useEffect(() => {
    if (terminalOpen && terminalInputRef.current) {
      terminalInputRef.current.focus();
    }
  }, [terminalOpen, terminalHistory]);

  // Data arrays (projects, blogPosts, techCategories, softSkills) are imported from ./data/ files

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
            {['home', 'experience', 'projects', 'skills', 'recommendations', 'contact'].map(section => (
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
                'Team Lead',
                '5+ Years Experience',
                'AWS Expert'
              ].map((tag, i) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-sm bg-green-500/10 border border-green-500/50 rounded hover:bg-green-500/20 transition-colors cursor-default"
                  style={{ animationDelay: `${0.3 + i * 0.05}s` }}
                >
                  {tag}
                </span>
              ))}
              <a 
                href="https://www.ycombinator.com/companies/avoca"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-sm bg-yellow-500/10 border border-yellow-500/50 text-yellow-400 rounded hover:bg-yellow-500/20 transition-colors"
                style={{ animationDelay: `${0.3 + 3 * 0.05}s` }}
              >
                YC W25
              </a>
            </div>

            <p className="text-xl md:text-2xl mb-4 text-green-300/80 max-w-4xl animate-slide-up leading-relaxed" style={{ animationDelay: '0.4s' }}>
              Engineering @ <a href="https://avoca.ai" target="_blank" rel="noopener noreferrer" className="text-green-400 font-bold hover:underline">Avoca AI (YC W25)</a> | 
              Ex-SDE3 @ <a href="https://hyperverge.co" target="_blank" rel="noopener noreferrer" className="text-green-300/80 hover:text-green-400 hover:underline transition-colors">Hyperverge</a>
            </p>
            
            {/* Unicorn Achievement Badge */}
            <div className="mb-4 animate-slide-up" style={{ animationDelay: '0.45s' }}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/50 text-purple-300 text-sm rounded-full font-bold">
                <Sparkles className="w-4 h-4" />
                <span>Seed → Unicorn Journey at Avoca AI</span>
              </span>
            </div>

            <p className="text-lg mb-8 text-green-300/60 max-w-3xl animate-slide-up" style={{ animationDelay: '0.5s' }}>
              Architecting scalable AI systems • Leading high-performance engineering teams • 
              Optimizing cloud infrastructure • Designing globally distributed systems • 
              Implementing security-first solutions • Building voice & LLM-powered products •
              Mentoring engineering talent
            </p>

            <div className="flex flex-wrap gap-4 mb-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <a 
                href="#contact" 
                className="flex items-center gap-2 px-6 py-3 bg-green-500 text-black font-bold rounded hover:bg-green-400 transition-all hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
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
                onClick={() => {
                  // Open resume in modal
                  openModal(
                    'Aayush Agarwal - Resume', 
                    null, 
                    'resume',
                    'https://drive.google.com/file/d/1DD1X5J4yPINJMrTgoRVULV5_0llMis8K/view?usp=sharing'
                  );
                }}
                className="flex items-center gap-2 px-6 py-3 border-2 border-green-500 rounded hover:bg-green-500/20 transition-all hover:scale-105"
              >
                <FileText className="w-5 h-5" />
                Download Resume
              </button>
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
                <div className="text-3xl font-bold text-green-300 mb-1">3×</div>
                <div className="text-sm text-green-400/60">Promotions Earned</div>
              </div>
              <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-4 hover:border-green-500 transition-colors">
                <div className="text-3xl font-bold text-green-300 mb-1">12+</div>
                <div className="text-sm text-green-400/60">Engineers Mentored</div>
              </div>
              <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-4 hover:border-green-500 transition-colors">
                <div className="text-3xl font-bold text-green-300 mb-1">8+</div>
                <div className="text-sm text-green-400/60">Major Projects</div>
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
                <span className="text-green-400 font-bold">Senior Backend & AI Systems Engineer</span> with extensive experience 
                building scalable KYC platforms, AI inference systems, and Voice AI solutions. I've worked with cutting-edge AI technologies including OpenAI, Claude, and Gemini, creating intelligent systems that deliver real business value. My career has been marked by consistent growth and leadership opportunities at Hyperverge and now at Avoca AI.
              </p>
              <p>
                I specialize in leading cross-functional engineering teams, optimizing cloud infrastructure costs, and designing distributed systems that serve enterprise clients globally. My work has directly impacted business outcomes through improved performance, reduced operational costs, and enhanced system reliability.
              </p>
              <p>
                My technical expertise spans backend systems, cloud architecture (AWS), AI agent workflows, LLM integration with platforms like OpenAI, Claude, and Gemini, voice technology stacks, and creating cost-efficient infrastructure optimizations that balance performance with resource utilization.
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
                <div className="mb-6">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <Building2 className="w-6 h-6 text-green-400" />
                      <h3 className="text-3xl font-bold text-green-300">AVOCA AI</h3>
                      <a 
                        href="https://www.ycombinator.com/companies/avoca"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-yellow-500/20 border border-yellow-500 text-yellow-400 text-sm rounded font-bold hover:bg-yellow-500/30 transition-colors"
                      >
                        YC W25
                      </a>
                      <div className="flex items-center gap-1">
                        <a 
                          href="https://avoca.ai" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-green-400/60 hover:text-green-400 transition-colors"
                          title="Company Website"
                        >
                          <Globe className="w-4 h-4" />
                        </a>
                        <a 
                          href="https://www.linkedin.com/company/avoca-ai" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-green-400/60 hover:text-green-400 transition-colors"
                          title="Company LinkedIn"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                    
                    {/* Unicorn Badge on separate line */}
                    <div className="flex items-center gap-2 ml-9">
                      <div className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500 text-purple-300 text-sm rounded-full font-bold flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Seed → Unicorn
                      </div>
                    </div>
                    
                    <div className="ml-9">
                      <p className="text-xl text-green-400/80 mb-1">Software Engineer</p>
                      <div className="flex items-center gap-2 text-green-400/60">
                        <Calendar className="w-4 h-4" />
                        <span>May 2025 - Present</span>
                        <span className="ml-2 px-2 py-0.5 bg-green-500/20 rounded text-xs">Current</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Unicorn Achievement Highlight */}
                <div className="mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-2 border-purple-500/50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Rocket className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold text-purple-300 mb-2">Journey to Unicorn Status 🦄</h4>
                      <p className="text-purple-200/80 text-sm leading-relaxed">
                        Joined during seed stage and contributed to the company's rapid growth trajectory. 
                        Played a key role in scaling engineering operations, reducing onboarding time by 99.5%, 
                        and expanding the team 4x, helping drive the company to achieve unicorn valuation.
                      </p>
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
                  {['Voice AI', 'OpenAI', 'Claude', 'Gemini', 'Real-time Systems', 'Team Leadership', 'Agentic AI', 'Supabase', 'NextJS', 'Management', 'Hiring', 'Observability'].map((tech, j) => (
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
                      <div className="flex items-center gap-1">
                      <a 
                        href="https://hyperverge.co" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-400/60 hover:text-green-400 transition-colors"
                          title="Company Website"
                        >
                          <Globe className="w-4 h-4" />
                        </a>
                        <a 
                          href="https://www.linkedin.com/company/hyperverge" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-green-400/60 hover:text-green-400 transition-colors"
                          title="Company LinkedIn"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                    <p className="text-xl text-green-400/80 mb-1">Software Engineer 3 → 2 → 1</p>
                    <div className="flex items-center gap-2 text-green-400/60">
                      <Calendar className="w-4 h-4" />
                      <span>January 2021 - May 2025</span>
                      <span className="ml-2 px-2 py-0.5 bg-green-500/10 rounded text-xs">4.5 years</span>
                    </div>
                    <p className="text-green-300/60 text-sm mt-1">
                      Intern → SDE1 → SDE2 → SDE3
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
                      'Built an automated AI model analysis and benchmarking platform, reducing False Acceptance and Rejection Rates to nearly 0%',
                      'Developed a Dynamic Rate Limiter system capable of handling varying load patterns adaptively reducing false positives by nearly 100%',
                      'Migrated product from AutoScaling to Kubernetes resulting in over 83% faster deployments and improved reliability',
                      'Integrated deepfake and anomaly detection models reducing fraudulent cases by >95%',
                      'Led InfoSec activities (VAPT, RL Review, IP Whitelisting) ensuring safe and vulnerability-free systems',
                      'Wrote a multi-platform request and response payload encryption module to ensure 100% payload integrity',
                      'Designed a Shopfront API service to extract, match, and validate shop details from images with GST verification',
                      'Orchestrated engineering Proof of Concept phases for clients like SHB Finance and Tekion, reducing system errors by >90%',
                      'Pioneered a low-code Global WebSDK, reducing client integration efforts by 78% and driving adoption in insurance and crypto markets',
                      'Built intuitive SDK workflows, boosting user engagement by 42% and reducing drop-off by 60%',
                      'Optimized testing with Puppeteer, cutting manual testing time by 50% and lowering bug reports by 33%',
                      'Optimized systems with ELK, Grafana, MetaBase, and Sentry, reducing internal errors by 87%',
                      'Supported major client go-lives like LinkedIn, Zomato, HFC with 99.9% uptime and over 90% conversion rates',
                      'Innovated a No-Code AI Platform (HyperTuring) for OCR Model Generation, reducing deployment time by 85%',
                      'Advanced Generic OCR system that increased extraction accuracy by 27%',
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
                  {['Python', 'MERN', 'Kubernetes', 'Docker', 'PostgreSQL', 'AI/ML', 'Web SDK', 'InfoSec', 'Security', 'Observability', 'Testing', 'AWS', 'Vanilla JS', 'CI/CD', 'Team Leadership', 'Mentorship', 'Hiring', 'Enterprises'].map((tech, j) => (
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
                      <div className="flex items-center gap-1 ml-2">
                        <a 
                          href="https://www.jidoka-tech.ai/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-green-400/60 hover:text-green-400 transition-colors"
                          title="Company Website"
                        >
                          <Globe className="w-4 h-4" />
                        </a>
                        <a 
                          href="https://www.linkedin.com/company/jidoka-tech/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-green-400/60 hover:text-green-400 transition-colors"
                          title="Company LinkedIn"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <button
                          onClick={() => openModal('Jidoka Technologies - Internship Certificate', '/experience/jidoka-cert.jpeg', 'image')}
                          className="text-green-400/60 hover:text-green-400 transition-colors ml-1"
                          title="View Certificate"
                        >
                          <FileText className="w-4 h-4" />
                        </button>
                      </div>
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
              
              {/* Carikture */}
              <div className="group bg-green-500/5 border-2 border-green-500/30 rounded-lg p-6 hover:border-green-500 hover:bg-green-500/10 transition-all animate-slide-up">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-5 h-5 text-green-400" />
                      <h3 className="text-2xl font-bold text-green-300">CARIKTURE</h3>
                      <div className="flex items-center gap-1 ml-2">
                        <a 
                          href="http://www.carikture.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-green-400/60 hover:text-green-400 transition-colors"
                          title="Company Website"
                        >
                          <Globe className="w-4 h-4" />
                        </a>
                        <a 
                          href="https://www.linkedin.com/company/carikture/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-green-400/60 hover:text-green-400 transition-colors"
                          title="Company LinkedIn"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <button
                          onClick={() => openModal('Carikture - Internship Certificate', '/experience/carikture-cert.jpeg', 'image')}
                          className="text-green-400/60 hover:text-green-400 transition-colors ml-1"
                          title="View Certificate"
                        >
                          <FileText className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <p className="text-lg text-green-400/80 mb-1">Information Technology Summer Intern</p>
                    <div className="flex items-center gap-2 text-green-400/60">
                      <Calendar className="w-4 h-4" />
                      <span>April 2020 - May 2020</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  <li className="flex gap-3 text-green-300/80">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Built a Trello Clone from scratch with various functionalities like moving cards, commenting, and notifications</span>
                  </li>
                  <li className="flex gap-3 text-green-300/80">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Implemented a complete project management system with drag-and-drop interfaces and real-time updates</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2">
                  {['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'UI/UX'].map((tech, j) => (
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
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <Folder className="w-12 h-12 text-green-500" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              <h2 className="text-5xl font-bold glitch-text">KEY PROJECTS</h2>
            </div>

              <p className="text-green-300/80 max-w-4xl ml-16 border-l-2 border-green-500/30 pl-4 leading-relaxed text-sm">
                A curated collection of my most significant technical contributions across different organizations. 
                Projects include AI tools, voice systems, infrastructure optimization, security implementations, and more.
                <span className="block mt-2 text-green-400 font-medium">
                  Filter by company: 
                  <button 
                    onClick={() => setProjectFilter(projectFilter === 'Avoca AI' ? null : 'Avoca AI')}
                    className={`ml-2 px-2 py-1 text-xs rounded-full transition-colors ${
                      projectFilter === 'Avoca AI' 
                        ? 'bg-indigo-500 border border-indigo-500 text-white' 
                        : 'bg-indigo-500/30 border border-indigo-500/50 hover:bg-indigo-500/50'
                    }`}
                  >Avoca AI</button>
                  <button 
                    onClick={() => setProjectFilter(projectFilter === 'Hyperverge' ? null : 'Hyperverge')}
                    className={`ml-2 px-2 py-1 text-xs rounded-full transition-colors ${
                      projectFilter === 'Hyperverge' 
                        ? 'bg-blue-500 border border-blue-500 text-white' 
                        : 'bg-blue-500/30 border border-blue-500/50 hover:bg-blue-500/50'
                    }`}
                  >Hyperverge</button>
                  <button 
                    onClick={() => setProjectFilter(projectFilter === 'Jidoka' ? null : 'Jidoka')}
                    className={`ml-2 px-2 py-1 text-xs rounded-full transition-colors ${
                      projectFilter === 'Jidoka' 
                        ? 'bg-amber-500 border border-amber-500 text-black' 
                        : 'bg-amber-500/30 border border-amber-500/50 hover:bg-amber-500/50'
                    }`}
                  >Jidoka</button>
                  <button 
                    onClick={() => setProjectFilter(projectFilter === 'Carikture' ? null : 'Carikture')}
                    className={`ml-2 px-2 py-1 text-xs rounded-full transition-colors ${
                      projectFilter === 'Carikture' 
                        ? 'bg-green-500 border border-green-500 text-black' 
                        : 'bg-green-500/30 border border-green-500/50 hover:bg-green-500/50'
                    }`}
                  >Carikture</button>
                  {projectFilter && (
                    <button 
                      onClick={() => setProjectFilter(null)}
                      className="ml-3 text-xs underline hover:text-white"
                    >
                      Clear filter
                    </button>
                  )}
                </span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects
                .filter(project => projectFilter ? project.company === projectFilter : true)
                .map((project, i) => (
                <div
                  key={project.id}
                  className="group bg-black/80 backdrop-blur-sm border-2 border-green-500/30 rounded-lg overflow-hidden hover:border-green-500 transition-all hover:scale-[1.02] animate-slide-up shadow-xl shadow-green-900/20 hover:shadow-green-500/20"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {/* Project Header */}
                  <div className="relative h-56 bg-gradient-to-br from-green-500/20 via-black/80 to-black border-b border-green-500/30 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={customStyles.bgGridPattern}></div>
                    
                    {/* Project Image */}
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-contain opacity-70 group-hover:opacity-90 transition-opacity p-2"
                      />
                    ) : (
                      <ImageIcon className="w-16 h-16 text-green-500/30" style={customStyles.pulseSlow} />
                    )}
                    
                    {/* Overlay for better badge visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 pointer-events-none"></div>
                    
                    {/* Company Badge */}
                    <div className={`absolute top-3 left-3 px-2 py-1 text-xs font-bold rounded flex items-center gap-1 backdrop-blur-sm z-10 ${
                      project.company === 'Avoca AI' ? 'bg-indigo-500/90 text-white' :
                      project.company === 'Hyperverge' ? 'bg-blue-500/90 text-white' :
                      project.company === 'Jidoka' ? 'bg-amber-500/90 text-black' : 
                      'bg-green-500/90 text-black'
                    }`}>
                      <Building2 className="w-3 h-3" />
                      {project.company}
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 right-3 px-3 py-1 bg-green-500/90 text-black text-xs font-bold rounded backdrop-blur-sm z-10">
                      {project.category}
                    </div>
                    
                    {/* Time Period Badge */}
                    <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/80 border border-green-500/30 text-green-300 text-xs font-mono rounded-full flex items-center gap-1 backdrop-blur-sm z-10">
                      <Calendar className="w-3 h-3" />
                      {project.period}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-green-300 mb-2 flex items-center gap-2">
                          <span className="border-b-2 border-green-500/50 pb-1">{project.title}</span>
                        </h3>
                        
                        {/* Company Links */}
                        <div className="flex items-center gap-2">
                          {project.links.length > 0 && (
                            <div className="flex items-center gap-2">
                              {project.links.map((link: any, linkIdx: number) => (
                                <a
                                  key={linkIdx}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-green-400/70 hover:text-green-400 transition-colors flex items-center gap-1 border border-green-500/30 px-2 py-1 rounded-md text-xs hover:bg-green-500/10"
                                  title={link.type === 'website' ? 'Company Website' : 'Company LinkedIn'}
                                >
                                  <link.icon className="w-3 h-3" />
                                  <span>{link.type === 'website' ? 'Website' : 'LinkedIn'}</span>
                                </a>
                              ))}
                      </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Expand Button */}
                      <button
                        onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                        className="p-2 hover:bg-green-500/20 rounded-full transition-colors border border-green-500/30"
                        title={expandedProject === project.id ? "Show Less" : "Show More"}
                      >
                        {expandedProject === project.id ? (
                          <ChevronDown className="w-5 h-5 rotate-180 transition-transform" />
                        ) : (
                          <ChevronDown className="w-5 h-5 transition-transform" />
                        )}
                      </button>
                    </div>

                    {/* Project Description */}
                    <p className="text-green-300/80 mb-4 text-sm">{project.description}</p>

                    {/* Impact Box */}
                    <div className="flex items-center gap-2 mb-4 p-3 bg-green-500/10 border border-green-500/30 rounded backdrop-blur-sm">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      <span className="text-green-300 font-bold text-sm">{project.impact}</span>
                    </div>

                    {/* Expanded Content */}
                    {expandedProject === project.id && (
                      <div className="space-y-4 animate-slide-up">
                        <div>
                          <h4 className="text-lg font-bold text-green-300 mb-2 flex items-center gap-2">
                            <BarChart3 className="w-5 h-5" />
                            Key Metrics
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            {project.metrics.map((metric, j) => (
                              <div key={j} className="bg-black/70 backdrop-blur-sm border border-green-500/30 rounded p-3 hover:border-green-500/70 transition-colors">
                                <div className="text-sm text-green-400/60 mb-1 font-medium">{metric.label}</div>
                                <div className="text-lg font-bold text-green-400 font-mono">
                                  {metric.value}
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
                          <ul className="space-y-2 bg-black/50 p-3 rounded border border-green-500/20">
                            {project.features.map((feature, j) => (
                              <li key={j} className="flex gap-2 text-green-300/80 text-sm hover:text-green-300 transition-colors">
                                <ArrowRight className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div className="mt-4 pt-4 border-t border-green-500/20">
                      <div className="text-xs text-green-400/60 mb-2">TECH STACK</div>
                      <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, j) => (
                        <span
                          key={j}
                            className="px-2 py-1 bg-black/70 border border-green-500/50 text-xs rounded-full hover:border-green-500 transition-colors hover:bg-green-500/10 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      </div>
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
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, j) => (
                      <div 
                        key={j}
                        className="bg-green-500/5 border border-green-500/30 rounded-lg px-4 py-2 hover:bg-green-500/10 hover:border-green-500/70 hover:scale-105 transition-all group overflow-hidden"
                      >
                        <div className="relative z-10 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-green-300 text-sm">{skill}</span>
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

        {/* Blog Section - Commented out for now, uncomment when ready */}
        {/*
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
                {notificationSubmitted ? (
                  <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg max-w-md">
                    <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
                    <p className="text-green-300">You're subscribed! You'll be notified when new content is available.</p>
                  </div>
                ) : (
                  <form 
                    className="flex gap-2"
                    action="https://formspree.io/f/xjgegzpb"
                    method="POST"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const form = e.target;
                      const formData = new FormData(form);
                      formData.append('form-type', 'blog-notification');

                      fetch(form.action, {
                        method: 'POST',
                        body: formData,
                        headers: {
                          'Accept': 'application/json'
                        }
                      })
                      .then(response => {
                        if (response.ok) {
                          setNotificationSubmitted(true);
                        } else {
                          alert('Subscription failed. Please try again.');
                        }
                      })
                      .catch(error => {
                        console.error('Error:', error);
                        setNotificationSubmitted(true);
                      });
                    }}
                  >
                <input
                  type="email"
                      name="email"
                      value={notificationEmail}
                      onChange={(e) => setNotificationEmail(e.target.value)}
                  className="px-4 py-2 bg-black border border-green-500/50 rounded text-green-400 outline-none focus:border-green-500 transition-colors"
                      placeholder="your.email@example.com"
                      required
                />
                    <input type="hidden" name="subject" value="New Blog Notification Signup" />
                <button
                      type="submit"
                  className="px-6 py-2 bg-green-500/20 border border-green-500/50 rounded text-green-400 hover:bg-green-500/30 transition-colors"
                >
                  Notify Me
                </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
        */}

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

        {/* LinkedIn Recommendations */}
        <section id="recommendations" className="py-20 px-6 bg-green-500/5 border-t border-green-500/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <Quote className="w-12 h-12" />
              <h2 className="text-5xl font-bold glitch-text">RECOMMENDATIONS</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.map((recommendation, i) => (
                <div 
                  key={i}
                  onClick={() => {
                    setSelectedRecommendation(recommendation);
                    setModalTitle(`Recommendation from ${recommendation.name}`);
                    setModalType('recommendation');
                    setModalOpen(true);
                  }}
                  className="relative bg-black border-2 border-green-500/30 rounded-lg p-6 hover:border-green-500 hover:bg-green-500/5 transition-all animate-slide-up group flex flex-col h-full cursor-pointer"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {/* Quote Icon Background */}
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-green-500/10 group-hover:text-green-500/20 transition-colors" />
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header with Avatar and Info */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500/30 to-green-600/20 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-green-500/30 group-hover:border-green-500 transition-colors">
                        <Users className="w-7 h-7 text-green-400" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-green-300 text-lg mb-1 truncate">{recommendation.name}</div>
                        <div className="text-green-400/80 text-sm font-medium">{recommendation.role}</div>
                        <div className="text-green-400/60 text-xs mt-1">{recommendation.company}</div>
                      </div>
                    </div>

                    {/* Recommendation Text */}
                    <div className="flex-1 mb-4">
                      <p className="text-green-300/70 text-sm leading-relaxed line-clamp-6">
                        "{recommendation.text}"
                      </p>
                    </div>

                    {/* Read More Indicator */}
                    {recommendation.text.length > 200 && (
                      <div className="text-green-400 text-xs mb-3 flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>Click to read full recommendation</span>
                      </div>
                    )}

                    {/* Footer with Relationship and Date */}
                    <div className="flex items-center justify-between pt-4 border-t border-green-500/20">
                      <div className="flex items-center gap-2 text-xs text-green-400/60">
                        <Users className="w-3 h-3" />
                        <span>{recommendation.relationship}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-green-400/50">
                        <Calendar className="w-3 h-3" />
                        <span>{recommendation.date}</span>
                      </div>
                    </div>

                    {/* LinkedIn Link */}
                    {recommendation.linkedIn && (
                      <a
                        href={recommendation.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="mt-3 flex items-center justify-center gap-2 text-xs text-green-400/70 hover:text-green-400 transition-colors py-2 px-3 border border-green-500/30 rounded hover:bg-green-500/10 hover:border-green-500"
                      >
                        <Linkedin className="w-3 h-3" />
                        <span>View Profile</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Official Experience Documentation */}
            <div className="mt-10 bg-black border-2 border-green-500/30 rounded-lg p-6 hover:border-green-500 transition-all">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-green-300 flex items-center gap-2">
                  <FileText className="w-6 h-6" />
                  Experience Documentation
                </h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                {/* Hyperverge Experience Letter */}
                <div className="bg-green-500/5 border border-green-500/30 rounded-lg overflow-hidden">
                  <div className="relative h-64 bg-black flex items-center justify-center p-4">
                    <embed 
                      src="/experience/hyperverge-exp.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH&page=1" 
                      type="application/pdf" 
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button 
                        onClick={() => openModal('Hyperverge Technologies - Experience Letter', '/experience/hyperverge-exp.pdf', 'pdf')}
                        className="px-4 py-2 bg-green-500 text-black rounded font-bold"
                      >
                        Preview Document
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-green-300">Hyperverge Technologies</h4>
                    <p className="text-green-400/70 text-sm mt-1">Experience Letter - May 2025</p>
                    <div className="mt-3 flex justify-between">
                      <span className="text-green-300/70 text-sm">Senior Software Engineer</span>
                      <button 
                        onClick={() => openModal('Hyperverge Technologies - Experience Letter', '/experience/hyperverge-exp.pdf', 'pdf')}
                        className="flex items-center gap-1 text-green-400 hover:text-green-300 transition-colors text-sm"
                      >
                        <FileText className="w-4 h-4" /> 
                        <span>View PDF</span>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Jidoka Certificate */}
                <div className="bg-green-500/5 border border-green-500/30 rounded-lg overflow-hidden">
                  <div className="relative h-64 bg-black flex items-center justify-center">
                    <img 
                      src="/experience/jidoka-cert.jpeg" 
                      alt="Jidoka Internship Certificate" 
                      className="h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button 
                        onClick={() => openModal('Jidoka Technologies - Internship Certificate', '/experience/jidoka-cert.jpeg', 'image')}
                        className="px-4 py-2 bg-green-500 text-black rounded font-bold"
                      >
                        View Certificate
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-green-300">Jidoka Technologies</h4>
                    <p className="text-green-400/70 text-sm mt-1">Internship Certificate - May 2020</p>
                    <div className="mt-3 flex justify-between">
                      <span className="text-green-300/70 text-sm">Software Engineering Intern</span>
                      <button 
                        onClick={() => openModal('Jidoka Technologies - Internship Certificate', '/experience/jidoka-cert.jpeg', 'image')}
                        className="flex items-center gap-1 text-green-400 hover:text-green-300 transition-colors text-sm"
                      >
                        <Eye className="w-4 h-4" /> 
                        <span>View Certificate</span>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Carikture Certificate */}
                <div className="bg-green-500/5 border border-green-500/30 rounded-lg overflow-hidden">
                  <div className="relative h-64 bg-black flex items-center justify-center">
                    <img 
                      src="/experience/carikture-cert.jpeg" 
                      alt="Carikture Internship Certificate" 
                      className="h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button 
                        onClick={() => openModal('Carikture - Internship Certificate', '/experience/carikture-cert.jpeg', 'image')}
                        className="px-4 py-2 bg-green-500 text-black rounded font-bold"
                      >
                        View Certificate
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-green-300">Carikture</h4>
                    <p className="text-green-400/70 text-sm mt-1">Internship Certificate - May 2020</p>
                    <div className="mt-3 flex justify-between">
                      <span className="text-green-300/70 text-sm">IT Summer Intern</span>
                      <button 
                        onClick={() => openModal('Carikture - Internship Certificate', '/experience/carikture-cert.jpeg', 'image')}
                        className="flex items-center gap-1 text-green-400 hover:text-green-300 transition-colors text-sm"
                      >
                        <Eye className="w-4 h-4" /> 
                        <span>View Certificate</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href="https://linkedin.com/in/aayush1936/details/recommendations/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/20 border border-green-500 rounded hover:bg-green-500/30 transition-all"
              >
                <Linkedin className="w-5 h-5" />
                <span>View All Recommendations on LinkedIn</span>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-black border-t border-green-500/30">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8 glitch-text">LET'S BUILD SOMETHING</h2>
            <p className="text-xl text-green-300/80 mb-12">
              Interested in AI systems, cloud architecture, team leadership, or just want to chat tech?
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Direct Contact */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-green-300">Get In Touch</h3>
                <div className="grid gap-4 mb-8">
              <a 
                href="mailto:aayush.agarwal1936@gmail.com" 
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-green-500/10 border border-green-500/50 rounded hover:bg-green-500/20 transition-all"
              >
                <Mail className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Email</div>
                  <div>aayush.agarwal1936@gmail.com</div>
                </div>
              </a>
              <a 
                href="tel:+918100258835" 
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-green-500/10 border border-green-500/50 rounded hover:bg-green-500/20 transition-all"
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
              <button
                onClick={() => setTerminalOpen(true)}
                className="p-4 bg-green-500/10 border border-green-500/50 rounded-full hover:bg-green-500/20 hover:scale-110 transition-all group"
                title="Open Terminal"
              >
                <Terminal className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </button>
                </div>
            </div>

              {/* Contact Form */}
              <div className="bg-black border-2 border-green-500/30 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-green-300 text-left">Send Direct Message</h3>
                
                {formSubmitted ? (
                  <div className="p-6 text-center">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-green-300 mb-2">Message Sent!</h4>
                    <p className="text-green-400/70">Thanks for reaching out. I'll get back to you soon.</p>
                    <button
                      onClick={() => {
                        setContactName('');
                        setContactEmail('');
                        setContactMessage('');
                        setFormSubmitted(false);
                      }}
                      className="mt-4 px-6 py-2 border border-green-500 rounded text-green-400 hover:bg-green-500/10 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form 
                    className="space-y-4 text-left"
                    action="https://formspree.io/f/xjgegzpb"
                    method="POST"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const form = e.target;
                      const formData = new FormData(form);
                      
                      // Basic example of integrating with a form service
                      // In production, replace with your actual endpoint
                      fetch(form.action, {
                        method: 'POST',
                        body: formData,
                        headers: {
                          'Accept': 'application/json'
                        }
                      })
                      .then(response => {
                        if (response.ok) {
                          setFormSubmitted(true);
                        } else {
                          alert('Form submission failed. Please try again.');
                        }
                      })
                      .catch(error => {
                        console.error('Error:', error);
                        // For demo purposes, still show success
                        setFormSubmitted(true);
                      });
                    }}
                  >
                    <div>
                      <label htmlFor="name" className="block text-green-400 text-sm mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full px-4 py-2 bg-black border border-green-500/50 rounded text-green-400 focus:border-green-500 transition-colors"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-green-400 text-sm mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="w-full px-4 py-2 bg-black border border-green-500/50 rounded text-green-400 focus:border-green-500 transition-colors"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-green-400 text-sm mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        className="w-full px-4 py-2 bg-black border border-green-500/50 rounded text-green-400 focus:border-green-500 transition-colors h-32"
                        placeholder="Your message here..."
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-green-500 text-black font-bold rounded hover:bg-green-400 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
            
            {/* Article Notifications */}
            <div className="mt-16 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-green-300">Get Notified About New Articles</h3>
              <p className="text-green-400/70 mb-6">Subscribe to receive notifications when I publish new articles about AI systems, cloud architecture, and engineering leadership.</p>
              
              {notificationSubmitted ? (
                <div className="p-6 bg-green-500/10 border border-green-500/50 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="text-green-300">You're subscribed! You'll be notified when new content is available.</p>
                </div>
              ) : (
                <form 
                  className="flex gap-2"
                  action="https://formspree.io/f/xjgegzpb"
                  method="POST"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target;
                    const formData = new FormData(form);
                    formData.append('form-type', 'blog-notification'); // Add form type to distinguish from contact form

                    // Submit to Formspree
                    fetch(form.action, {
                      method: 'POST',
                      body: formData,
                      headers: {
                        'Accept': 'application/json'
                      }
                    })
                    .then(response => {
                      if (response.ok) {
                        setNotificationSubmitted(true);
                      } else {
                        alert('Subscription failed. Please try again.');
                      }
                    })
                    .catch(error => {
                      console.error('Error:', error);
                      setNotificationSubmitted(true); // Still show success for demo purposes
                    });
                  }}
                >
                  <input
                    type="email"
                    name="email"
                    value={notificationEmail}
                    onChange={(e) => setNotificationEmail(e.target.value)}
                    className="flex-1 px-4 py-3 bg-black border border-green-500/50 rounded text-green-400 focus:border-green-500 transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                  <input type="hidden" name="subject" value="New Blog Notification Signup" />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-green-500/20 border border-green-500 rounded text-green-400 hover:bg-green-500/30 transition-colors whitespace-nowrap"
                  >
                    Notify Me
                  </button>
                </form>
              )}
            </div>

            <div className="mt-12 flex items-center gap-2 justify-center text-green-400/60">
              <MapPin className="w-4 h-4" />
              <span>Open to remote opportunities worldwide</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-green-500/30 text-center">
          <div className="max-w-7xl mx-auto">
            {/* Visitor Counter */}
            <div className="mb-4 flex justify-center">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg">
                <Eye className="w-4 h-4 text-green-400" />
                <div className="flex flex-col items-center">
                  <span className="text-green-400/60 text-xs mb-1">Portfolio Views</span>
                  <div className="flex items-center gap-2">
                    <img 
                      src="https://visitor-badge.laobi.icu/badge?page_id=aayush2908.portfolio&left_color=black&right_color=00ff95&left_text=Visitors" 
                      alt="Visitor Count"
                      className="h-5"
                    />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-green-400/60 mb-2">
              © 2026 Aayush Agarwal
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
            </div>
          </div>
        </footer>
      </main>

      {/* Modal for document/image previews */}
      {modalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in overflow-hidden">
          <div className="relative w-full max-w-6xl max-h-[90vh] bg-gray-900 border-2 border-green-500 rounded-lg overflow-hidden shadow-2xl shadow-green-500/30">
            <div className="bg-green-500/20 px-4 py-3 flex justify-between items-center border-b border-green-500">
              <h3 className="text-green-300 font-bold">{modalTitle}</h3>
              <button 
                onClick={closeModal} 
                className="hover:text-red-500 transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-60px)]">
              {modalType === 'image' && (
                <div className="flex flex-col items-center">
                  <img 
                    src={modalContent} 
                    alt={modalTitle} 
                    className="max-w-full max-h-[70vh] object-contain mb-4"
                  />
                  <a 
                    href={modalContent}
                    download
                    className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500 rounded hover:bg-green-500/30 transition-colors"
                  >
                    <FileText className="w-5 h-5" />
                    <span>Download</span>
                  </a>
                </div>
              )}
              
              {modalType === 'pdf' && (
                <div className="flex flex-col items-center h-[70vh]">
                  <iframe 
                    src={`${modalContent}#toolbar=0`} 
                    className="w-full h-full border-0 mb-4"
                    title={modalTitle}
                  />
                  <a 
                    href={modalContent}
                    download
                    className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500 rounded hover:bg-green-500/30 transition-colors"
                  >
                    <FileText className="w-5 h-5" />
                    <span>Download</span>
                  </a>
                </div>
              )}
              
              {modalType === 'resume' && (
                <div className="flex flex-col items-center h-[70vh]">
                  <iframe 
                    src={`https://drive.google.com/file/d/${modalUrl.split('/')[5]}/preview`}
                    className="w-full h-full border-0 mb-4 rounded"
                    title={modalTitle}
                    allow="autoplay"
                  />
                  <div className="flex gap-4">
                    <a 
                      href={modalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-green-500/20 border border-green-500 rounded hover:bg-green-500/30 transition-colors"
                    >
                      <Eye className="w-5 h-5" />
                      <span>View in Google Drive</span>
                    </a>
                    <a 
                      href={`https://drive.google.com/uc?export=download&id=${modalUrl.split('/')[5]}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-green-500 text-black font-bold rounded hover:bg-green-400 transition-colors"
                    >
                      <FileText className="w-5 h-5" />
                      <span>Download PDF</span>
                    </a>
                  </div>
                </div>
              )}

              {modalType === 'recommendation' && selectedRecommendation && (
                <div className="max-w-3xl mx-auto">
                  {/* Header with Avatar and Info */}
                  <div className="flex items-start gap-6 mb-6 pb-6 border-b border-green-500/30">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500/30 to-green-600/20 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-green-500">
                      <Users className="w-10 h-10 text-green-400" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-green-300 mb-2">{selectedRecommendation.name}</h3>
                      <div className="text-green-400 text-lg mb-1">{selectedRecommendation.role}</div>
                      <div className="text-green-400/70 mb-3">{selectedRecommendation.company}</div>
                      
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 text-green-400/60">
                          <Users className="w-4 h-4" />
                          <span>{selectedRecommendation.relationship}</span>
                        </div>
                        <div className="flex items-center gap-2 text-green-400/60">
                          <Calendar className="w-4 h-4" />
                          <span>{selectedRecommendation.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Full Recommendation Text */}
                  <div className="mb-6">
                    <Quote className="w-12 h-12 text-green-500/20 mb-4" />
                    <p className="text-green-300/80 text-lg leading-relaxed">
                      "{selectedRecommendation.text}"
                    </p>
                  </div>

                  {/* LinkedIn Link */}
                  {selectedRecommendation.linkedIn && (
                    <div className="flex justify-center pt-6 border-t border-green-500/30">
                      <a
                        href={selectedRecommendation.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-3 bg-green-500/20 border border-green-500 rounded-lg hover:bg-green-500/30 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                        <span className="font-medium">View {selectedRecommendation.name}'s LinkedIn Profile</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

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
