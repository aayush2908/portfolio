import { Code2, Globe, Server, Cloud, Activity, Database, Brain, Users } from 'lucide-react';

export const techCategories = [
  {
    name: 'Programming Languages & Runtime',
    icon: Code2,
    skills: [
      'JavaScript', 'TypeScript', 'Python', 'Node.js'
    ]
  },
  {
    name: 'Frontend Technologies',
    icon: Globe,
    skills: [
      'React.js', 'Next.js'
    ]
  },
  {
    name: 'Backend & API Frameworks',
    icon: Server,
    skills: [
      'Express.js', 'Socket.io', 'FastAPI'
    ]
  },
  {
    name: 'Cloud & Infrastructure (AWS)',
    icon: Cloud,
    skills: [
      'EC2', 'Lambda', 'API Gateway', 'S3', 'IAM', 
      'SQS', 'DynamoDB', 'RDS', 'Step Functions'
    ]
  },
  {
    name: 'DevOps & Automation',
    icon: Activity,
    skills: [
      'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions',
      'Terraform', 'Serverless Framework', 'Vercel'
    ]
  },
  {
    name: 'Databases & Analytics',
    icon: Database,
    skills: [
      'MongoDB', 'PostgreSQL', 'Supabase'
    ]
  },
  {
    name: 'Observability',
    icon: Activity,
    skills: [
      'ELK', 'Metabase', 'Grafana', 'Sentry', 
      'AWS X-ray', 'Datadog'
    ]
  },
  {
    name: 'AI & LLM Systems',
    icon: Brain,
    skills: [
      'AI Agents', 'OpenAI', 'Gemini', 'Anthropic Claude', 
      'LLM Prompting', 'LangChain', 'Phidata', 'Cursor', 'Claude Code'
    ]
  },
  {
    name: 'Leadership',
    icon: Users,
    skills: [
      'Management', 'Hiring', 'Mentorship', 
      'Team Leadership', 'Project Planning'
    ]
  }
];
