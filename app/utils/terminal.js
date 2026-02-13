// Terminal commands and processing logic

// Mock projects data - in a real app, you'd import this from a central data source
const projects = [
  { 
    id: 'ai-conversation-analyzer',
    title: 'AI Conversation Analyzer',
    company: 'Avoca AI',
    category: 'AI/Analytics'
  },
  {
    id: 'prompt-orchestration',
    title: 'Prompt Orchestration System',
    company: 'Avoca AI',
    category: 'AI/LLM'
  },
  // Add other projects here...
];

// Terminal commands
export const terminalCommands = {
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
resume     - View and download resume
blog       - View blog posts (coming soon)

Interactive commands:
skills --category=[ai|backend|cloud|db|frontend|devops|observability|security]
projects --filter=[ai|infra|frontend|backend]
projects --details [project-id]
experience --company=[avoca|hyperverge|jidoka|carikture]

Type any command to execute it.`
  }),

  about: () => ({
    output: `AAYUSH AGARWAL - Senior Backend & AI Systems Engineer

▸ Extensive experience building scalable KYC, AI inference, and Voice AI platforms
▸ Career marked by consistent growth and leadership opportunities
▸ Expertise in leading cross-functional engineering teams
▸ Skilled in optimizing cloud infrastructure costs
▸ Specializes in designing distributed systems that serve enterprise clients globally

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
  → Sprint Planning, Hiring, Technical Interviews
  
Use 'skills --category=[category]' for more details in each area.`
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
    ▹ AI defect detection app: 64% faster inspection time
    
[4] CARIKTURE | IT Intern | Apr 2020 - May 2020
    ▹ Trello clone with card management, commenting features

Use 'experience --company=[company]' for more details about each role.`
  }),

  projects: () => ({
    output: `KEY PROJECTS:

[1] AI Conversation Analyzer (Avoca AI)
    Tech: OpenAI Whisper, NLP, React, Node.js, WebSocket, Redis
    Impact: Reduced resolution time by 40%, increased satisfaction by 35%
    
[2] Prompt Orchestration System (Avoca AI)
    Tech: LLM APIs, Node.js, FastAPI, MongoDB
    Impact: Customer onboarding 4-5 days → <1 minute
    
[3] Real-time Call Debugger (Avoca AI)
    Tech: WebSocket, Datadog, Custom Logging Pipeline
    Impact: Bug resolution hours → <5 minutes

[4] Global KYC Stack (Hyperverge)
    Tech: Python, AWS Lambda, Step Functions, PostgreSQL
    Impact: 195+ countries, 500+ ID formats, 50+ clients
    
[5] AI Model Benchmarking Platform (Hyperverge)
    Tech: Python, FastAPI, ELK Stack, Custom Analytics
    Impact: FAR/FRR reduced by 35-45%, near-zero false positives
    
[6] Dynamic Rate Limiter (Hyperverge)
    Tech: Redis, Node.js, Adaptive Algorithms
    Impact: False positives reduced by ~100%

[7] Global WebSDK (Hyperverge)
    Tech: JavaScript, React, Low-code Platform
    Impact: 78% faster client integration, 50+ clients onboarded
    
[8] Trello Clone (Carikture)
    Tech: PHP, HTML/CSS, JavaScript, MySQL
    Impact: Improved team collaboration by 40%

Use 'projects --filter=[category]' to filter by category.
Use 'projects --details [project-id]' for more details about a specific project.`
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
     Mentored 12+ engineers and interns
     
[🔒] Security Champion
     Led security initiatives and reduced vulnerability count by 65%
     
[🚀] CI/CD Pipeline Architect
     Reduced deployment time from days to minutes
     
[✅] 100% System Uptime
     Maintained perfect uptime for critical systems during peak periods`
  }),

  stats: () => ({
    output: `CAREER STATISTICS:

[Experience]
  Total Years: 5+ years
  Companies: 4 (Avoca AI, Hyperverge, Jidoka, Carikture)
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
    output: 'Opening resume preview...',
    action: () => {
      // In a real implementation, you'd dispatch an event to the parent component
      // For now, let's just open the resume directly
      window.open('https://drive.google.com/file/d/1DD1X5J4yPINJMrTgoRVULV5_0llMis8K/view?usp=sharing', '_blank');
    }
  }),

  blog: () => ({
    output: 'Blog section under development. Coming soon with posts on:\n  → Building scalable Voice AI systems\n  → AWS cost optimization strategies\n  → LLM integration best practices\n  → Team leadership in tech\n\nStay tuned!'
  })
};

// Process terminal commands
export const handleTerminalCommand = (cmd, currentHistory) => {
  const trimmedCmd = cmd.trim().toLowerCase();
  const newHistory = [...currentHistory, { input: cmd, output: '' }];
  
  // Handle complex commands with parameters
  if (trimmedCmd.startsWith('skills --category=')) {
    const category = trimmedCmd.split('=')[1];
    let output = '';
    
    // Logic for skills by category
    // This would be more robust in a real implementation
    switch (category) {
      case 'ai':
        output = `AI & LLM SYSTEMS:
        
OpenAI GPT-4, Anthropic Claude, Google Gemini, LangChain, Prompt Engineering, 
RAG Systems, Vector Databases, Semantic Search, Fine-tuning, Embeddings`;
        break;
      case 'backend':
        output = `BACKEND & SYSTEMS:
        
Node.js, TypeScript, Python, FastAPI, Express.js, Socket.io, Microservices, 
Event-Driven Architecture, REST APIs, GraphQL, gRPC, WebSockets, RabbitMQ, Kafka`;
        break;
      case 'cloud':
        output = `CLOUD & INFRASTRUCTURE:
        
AWS Lambda, AWS EC2, AWS S3, AWS DynamoDB, AWS SQS, AWS Step Functions, Kubernetes, 
Docker, Terraform, CI/CD, AWS CloudFormation, Serverless Framework, Vercel, Railway`;
        break;
      // Add other categories here...
      default:
        output = `Category not found. Available categories: ai, backend, cloud, db, frontend, devops, observability, security`;
    }
    
    newHistory[newHistory.length - 1].output = output;
    return { history: newHistory };
  }
  else if (trimmedCmd.startsWith('projects --filter=')) {
    // Project filtering logic
    // This would be more robust in a real implementation
    const filter = trimmedCmd.split('=')[1];
    
    let output = `PROJECTS (FILTERED BY ${filter.toUpperCase()}):\n\n`;
    output += `[1] Sample project matching filter\n`;
    
    newHistory[newHistory.length - 1].output = output;
    return { history: newHistory };
  }
  else if (trimmedCmd.startsWith('projects --details ')) {
    // Project detail logic
    const projectId = trimmedCmd.split(' ')[2];
    
    let output = `PROJECT DETAILS: ${projectId}\n\n`;
    output += `Sample details for ${projectId}`;
    
    newHistory[newHistory.length - 1].output = output;
    return { history: newHistory };
  }
  else if (trimmedCmd.startsWith('experience --company=')) {
    // Experience by company logic
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
      // Add other companies here...
      default:
        output = `Company not found. Available companies: avoca, hyperverge, jidoka, carikture`;
    }
    
    newHistory[newHistory.length - 1].output = output;
    return { history: newHistory };
  }
  else {
    // Handle standard commands
    const command = terminalCommands[trimmedCmd];
    
    if (command) {
      const result = command();
      if (result.clear) {
        return { clear: true, history: [] };
      } else {
        newHistory[newHistory.length - 1].output = result.output;
        return { 
          history: newHistory,
          action: result.action 
        };
      }
    } else {
      newHistory[newHistory.length - 1].output = `Command not found: ${cmd}\nType 'help' for available commands.`;
      return { history: newHistory };
    }
  }
};