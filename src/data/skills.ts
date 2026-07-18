import { ShieldHalf, Brain, Layers } from 'lucide-react'
import type { ExpertiseCard, SkillGroup } from '../types/content'

export const expertiseCards: ExpertiseCard[] = [
  {
    title: 'Cybersecurity',
    description:
      'Automated security testing, penetration testing, web security, and OWASP ZAP integration into CI/CD pipelines.',
    icon: ShieldHalf,
    theme: 'security',
  },
  {
    title: 'AI & Machine Learning',
    description:
      'Multi-agent architectures, computer vision (YOLOv11, OpenCV), neural networks, and LLM integrations.',
    icon: Brain,
    theme: 'ai',
  },
  {
    title: 'Full-Stack Development',
    description:
      'React, Next.js, FastAPI, Supabase, PostgreSQL — building products from frontend to cloud deployment.',
    icon: Layers,
    theme: 'fullstack',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    tags: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Java', 'C', 'HTML/CSS'],
  },
  {
    label: 'Frameworks & Libraries',
    tags: [
      'React',
      'Next.js',
      'Node.js',
      'Express',
      'FastAPI',
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'OpenCV',
      'MediaPipe',
      'Pandas',
      'NumPy',
      'Selenium',
      'Playwright',
      'React Flow',
    ],
  },
  {
    label: 'Databases & Cloud',
    tags: ['PostgreSQL', 'Supabase (pgvector)', 'MongoDB', 'Azure DevOps', 'Google Cloud Platform', 'Render'],
  },
  {
    label: 'Developer Tools',
    tags: ['Git', 'VS Code', 'Docker', 'n8n', 'BetterAuth', 'OWASP ZAP', 'Android Studio', 'WordPress'],
  },
  {
    label: 'AI / ML Technologies',
    tags: [
      'Claude API',
      'OpenAI GPT',
      'Google Gemini',
      'Tavily',
      'YOLOv11',
      'KNN',
      'SVM',
      'Random Forest',
      'Neural Networks (ANN/GRU)',
    ],
  },
]
