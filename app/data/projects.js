export const projects = [
  {
    id: 'dynamic-rate-limiter',
    title: 'Dynamic Rate Limiter',
    company: 'Hyperverge',
    period: '2023',
    category: 'Infrastructure',
    description: 'Intelligent rate limiting system with customizable and dynamic request thresholds',
    impact: 'Reduced false positives by 100% with fully customizable rate limits',
    tech: ['NodeJS', 'Rate Limiting', 'AWS', 'Redis'],
    metrics: [
      { label: 'False Positives Reduction', value: '-100%' },
      { label: 'Customizable RPS', value: 'Dynamic' },
      { label: 'Latency Overhead', value: '<2ms' }
    ],
    features: [
      'Formula-based calculation tracking request history',
      'Client behavior pattern learning',
      'Automatic threshold adjustments',
      'Custom rate limit policies per client',
      'Real-time monitoring and alerts'
    ],
    image: '/placeholder-rate-limiter.jpg',
    links: []
  },
  {
    id: 'voice-assistant-flow',
    title: 'Responder (Voice Assistant Flow)',
    company: 'Avoca AI',
    period: '2025',
    category: 'Voice AI',
    description: 'End-to-end voice assistant platform with dynamic flows and multi-model orchestration',
    impact: 'Processed 30,000+ daily conversations with 99.5% completion rate',
    tech: ['NextJS', 'Supabase', 'OpenAI', 'Gemini', 'Vercel', 'Claude', 'MapBox', 'VAPI', 'Webhooks', 'Agentic AI', 'Voice AI', 'Deepgram', 'Analytics'],
    metrics: [
      { label: 'Daily Conversations', value: '30000' },
      { label: 'Completion Rate (%)', value: '99.5' },
      { label: 'Avg. Resolution Time (min)', value: '2.5' }
    ],
    features: [
      'Multi-model AI orchestration (OpenAI, Gemini, Claude)',
      'Custom voice flow builder',
      'CRM integrations with real-time syncing',
      'Location-based services via MapBox',
      'Advanced analytics and conversation insights'
    ],
    image: '/placeholder-voice-assistant.jpg',
    links: []
  },
  {
    id: 'global-kyc-web-sdk',
    title: 'Global KYC Web SDK',
    company: 'Hyperverge',
    period: '2021',
    category: 'Frontend SDK',
    description: 'Low-code SDK for seamless integration of KYC capabilities into web applications',
    impact: 'Reduced client integration time by 78%, onboarded 50+ clients across markets',
    tech: ['Vanilla JS', 'AWS', 'Postgres', 'NodeJS'],
    metrics: [
      { label: 'Integration Time Reduction (%)', value: '78' },
      { label: 'Clients Onboarded', value: '50' },
      { label: 'User Engagement Increase (%)', value: '42' }
    ],
    features: [
      'One-line integration capability',
      'Customizable UI components and themes',
      'Document capture optimization',
      'Cross-browser compatibility',
      'Real-time validation feedback'
    ],
    image: '/placeholder-web-sdk.jpg',
    links: []
  },
  {
    id: 'global-kyc-stack',
    title: 'Global KYC Stack',
    company: 'Hyperverge',
    period: '2021-2022',
    category: 'Identity Verification',
    description: 'Comprehensive KYC platform supporting identity verification across 185+ countries',
    impact: 'Processing 500+ document types for 50+ enterprise clients globally',
    tech: ['NodeJS', 'ExpressJS', 'Postgres', 'LLM', 'AWS', 'CI/CD', 'K8s', 'Webhooks', 'Python', 'Redis'],
    metrics: [
      { label: 'Countries Supported', value: '185+' },
      { label: 'Document Types', value: '500+' },
      { label: 'Manual Review Reduction (%)', value: '90%' }
    ],
    features: [
      'Supporting 195+ countries and 500+ diverse ID cards',
      'Real-time actionable insights reducing manual review effort by 90%',
      'AWS deployment with CI/CD pipelines and Docker containers',
      'Reduced deployment times by 40%',
      'Rapid development-to-production transitions'
    ],
    image: '/placeholder-kyc-stack.jpg',
    links: []
  },
  {
    id: 'ocr-platform',
    title: 'No-Code AI Platform for OCR',
    company: 'Hyperverge',
    period: '2021',
    category: 'No Code Platform',
    description: 'No-code platform enabling rapid deployment of custom OCR models',
    impact: 'Reduced model deployment time by 85% and democratized OCR technology',
    tech: ['NodeJS', 'ExpressJS', 'ReactJS', 'MongoDB', 'LLMs'],
    metrics: [
      { label: 'Deployment Time Reduction (%)', value: '85' },
      { label: 'Technical Expertise Reduction (%)', value: '90' }
    ],
    features: [
      'Train and deploy models live within minutes for any country document or card',
      'Real-time benchmarking and annotation capabilities',
      'Instant testable deployment with cURL support',
      'Streamlined workflow: Upload → Train → Inference → Use',
      'Zero-code model configuration and optimization'
    ],
    image: '/placeholder-ocr-platform.jpg',
    links: []
  },
  {
    id: 'ai-model-analysis',
    title: 'Automated AI Model Analysis',
    company: 'Hyperverge',
    period: '2022',
    category: 'AI/ML',
    description: 'Comprehensive platform for benchmarking, analyzing and improving AI model performance',
    impact: 'Reduced False Acceptance & Rejection Rates to nearly 0% across multiple models',
    tech: ['AWS', 'CI', 'CD', 'ReactJS', 'Label Studio', 'ELK', 'Python', 'FastAPI'],
    metrics: [
      { label: 'FAR/FRR Reduction (%)', value: '99.9' },
      { label: 'Analysis Time Reduction (%)', value: '75' }
    ],
    features: [
      'Automated model evaluation pipelines',
      'Interactive visualization dashboard',
      'Custom benchmarking suite creation',
      'Error pattern detection and classification',
      'Integration with model training workflows'
    ],
    image: '/placeholder-ai-analysis.jpg',
    links: []
  },
  {
    id: 'aws-cost-optimization',
    title: 'AWS Cost Optimization',
    company: 'Hyperverge',
    period: '2022',
    category: 'Cloud Infrastructure',
    description: 'Strategic initiative to optimize AWS resource utilization and reduce operational costs',
    impact: 'Saved $360K+ annually while maintaining or improving system performance',
    tech: ['AWS', 'EC2', 'Lambda', 'CloudWatch', 'Resource Allocation', 'Instance Rightsizing'],
    metrics: [
      { label: 'Annual Savings ($K)', value: '360' },
      { label: 'Resource Efficiency Increase (%)', value: '60' },
      { label: 'Performance Degradation (%)', value: '0' }
    ],
    features: [
      'Comprehensive resource utilization analysis',
      'Automated instance rightsizing recommendations',
      'Reserved instance optimization strategy',
      'Serverless transformation for appropriate workloads',
      'Continuous monitoring and cost management'
    ],
    image: '/placeholder-aws-cost.jpg',
    links: []
  },
  {
    id: 'web-chat',
    title: 'Web Chat',
    company: 'Avoca AI',
    period: '2025',
    category: 'Chat Bot',
    description: 'Embeddable agentic AI chat widget for websites with CRM integration capabilities',
    impact: 'Increased customer conversion by 35% and reduced support ticket volume by 45%',
    tech: ['NextJS', 'OpenAI', 'Agentic AI', 'JavaScript', 'Supabase', 'CRMs', 'Vercel'],
    metrics: [
      { label: 'Conversion Rate Increase (%)', value: '35' },
      { label: 'Support Tickets Reduction (%)', value: '45' },
      { label: 'Customer Satisfaction (%)', value: '94' }
    ],
    features: [
      'One-line embed script for any website',
      'Customizable AI chat personalities',
      'Real-time CRM data synchronization',
      'Conversation continuation across sessions',
      'Contextual response generation'
    ],
    image: '/placeholder-web-chat.jpg',
    links: []
  },
  {
    id: 'prompt-builder',
    title: 'Prompt Builder',
    company: 'Avoca AI',
    period: '2025',
    category: 'AI Tools',
    description: 'Enterprise-grade platform for creating, managing, and deploying LLM prompts with advanced templating',
    impact: 'Reduced prompt engineering time by 85% and improved response quality by 40%',
    tech: ['NextJS', 'Supabase', 'VAPI', 'OpenAI', 'Vercel'],
    metrics: [
      { label: 'Engineering Time Reduction (%)', value: '85' },
      { label: 'Response Quality Increase (%)', value: '40' },
      { label: 'Template Variants', value: '10' }
    ],
    features: [
      'Advanced template configuration with customizable parameters',
      'Template-driven prompt generation for consistent outputs',
      'Flexible override and customization capabilities',
      'AI-powered formatting and optimization engine',
      'Team-level config-driven dynamic templating',
      'Streamlined one-click deployment to production',
      'Multi-language prompt support and localization',
      'Version control with historical comparison and tracking',
      'Quick actions and shortcuts for rapid iteration'
    ],
    image: '/placeholder-prompt-builder.jpg',
    links: []
  },
  {
    id: 'automated-mirroring',
    title: 'Automated Mirroring Pipeline',
    company: 'Hyperverge',
    period: '2022',
    category: 'DevOps',
    description: 'End-to-end CI/CD pipeline for automated testing, mirroring, and deployment of services',
    impact: 'Eliminated product downtime for over a year and reduced manual effort by 95%',
    tech: ['AWS', 'NodeJS', 'Step Functions', 'CI', 'CD', 'Monitoring'],
    metrics: [
      { label: 'Downtime Reduction (%)', value: '100' },
      { label: 'Manual Effort Reduction (%)', value: '95' },
      { label: 'Deployment Time Reduction (%)', value: '80' }
    ],
    features: [
      'Automated test environment provisioning',
      'Real-time mirroring of production traffic',
      'Comprehensive pre-deployment validation',
      'Intelligent rollback mechanisms',
      'Monitoring and alerting integration'
    ],
    image: '/placeholder-mirroring.jpg',
    links: []
  },
  {
    id: 'advanced-ocr',
    title: 'Advanced Generic OCR',
    company: 'Hyperverge',
    period: '2021',
    category: 'AI/ML',
    description: 'State-of-the-art OCR system with advanced document understanding capabilities',
    impact: 'Increased extraction accuracy by 27% across diverse document types',
    tech: ['LayoutLM', 'NodeJS', 'ExpressJS', 'Python'],
    metrics: [
      { label: 'Extraction Accuracy Increase (%)', value: '27' },
    ],
    features: [
      'Layout-aware text extraction',
      'Document classification and sorting',
      'Key-value pair identification',
      'Table structure recognition',
      'Multi-language support'
    ],
    image: '/placeholder-advanced-ocr.jpg',
    links: []
  },
  {
    id: 'payload-encryptor',
    title: 'Request Response Payload Encryptor',
    company: 'Hyperverge',
    period: '2022',
    category: 'Security',
    description: 'Multi-platform encryption module ensuring complete data integrity for API communications',
    impact: 'Achieved 100% data integrity and protection for sensitive information across all platforms',
    tech: ['NodeJS', 'OpenPGP', 'AES', 'Vanilla JS'],
    metrics: [
      { label: 'Data Integrity (%)', value: '100' },
      { label: 'Platforms Supported', value: '5' },
      { label: 'Performance Overhead (ms)', value: '5' }
    ],
    features: [
      'End-to-end encryption for API payloads',
      'Cross-platform implementation (web, mobile, server)',
      'Key rotation and management system',
      'Minimal performance impact',
      'Compliance with financial security standards'
    ],
    image: '/placeholder-encryptor.jpg',
    links: []
  },
  {
    id: 'shopfront-apis',
    title: 'Shopfront APIs',
    company: 'Hyperverge',
    period: '2022',
    category: 'AI Services',
    description: 'Advanced API service extracting and validating shop details from images with AI',
    impact: 'Supporting 2+ major clients with 95% accuracy in information extraction',
    tech: ['NodeJS', 'GPT', 'BERT', 'AWS', 'Postgres'],
    metrics: [
      { label: 'Extraction Accuracy (%)', value: '95' },
      { label: 'Enterprise Clients', value: '2' }
    ],
    features: [
      'Automated GST number extraction and verification',
      'Location validation and geocoding',
      'Business name and category recognition',
      'Integration with business verification systems'
    ],
    image: '/placeholder-shopfront.jpg',
    links: []
  },
  {
    id: 'kompass',
    title: 'Kompass',
    company: 'Jidoka',
    period: '2020',
    category: 'Mobile/AI',
    description: 'Android application for AI-driven defect detection in manufacturing processes',
    impact: 'Reduced inspection time by 64% and improved quality control accuracy',
    tech: ['Android Studio', 'TensorFlow', 'Java'],
    metrics: [
      { label: 'Inspection Time Reduction (%)', value: '64' },
      { label: 'Defect Detection Increase (%)', value: '45' },
    ],
    features: [
      'Real-time defect detection',
      'Camera integration for live analysis',
      'Offline model execution',
      'Defect classification and categorization',
      'Inspection report generation'
    ],
    image: '/placeholder-kompass.jpg',
    links: []
  },
  {
    id: 'trello-clone',
    title: 'Trello Clone',
    company: 'Carikture',
    period: '2020',
    category: 'Web Development',
    description: 'Full-featured project management application with drag-and-drop interfaces',
    impact: 'Improved team collaboration and project tracking efficiency by 40%',
    tech: ['PHP', 'HTML/CSS', 'JavaScript', 'MySQL'],
    metrics: [
      { label: 'Task Management Increase (%)', value: '40' },
      { label: 'User Features', value: '15' },
    ],
    features: [
      'Drag-and-drop card management',
      'Real-time commenting system',
      'Notification center',
      'Task assignment and tracking',
      'Responsive design for mobile access'
    ],
    image: '/placeholder-trello.jpg',
    links: []
  }
];
