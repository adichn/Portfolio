import type { ExperienceItem } from '../types/content'

export const experience: ExperienceItem[] = [
  {
    company: 'Wilfrid Laurier University',
    role: 'Research Assistant',
    location: 'Waterloo, ON',
    dates: 'June 2026 – Present',
    current: true,
    emphasis: 'primary',
    bullets: [
      'Building a suite of digital tools for the OECS education system under the GPE KIX-funded Full Potential Program, including an LMS with tiered (gold/silver/bronze) certification, a curriculum-aligned lesson bank, and an equity/inclusion survey data dashboard',
      'Owned the full technical build: WordPress infrastructure, custom post types and taxonomies, and plugin integration (Tutor LMS, OAuth/social login)',
      'Managed DNS/hosting configuration and translated non-technical stakeholder requirements into a scalable, low-maintenance platform intended for handoff to a regional education authority',
    ],
  },
  {
    company: 'DataFloat',
    role: 'Co-Founder & Software Developer',
    location: 'Waterloo, ON',
    dates: 'April 2025 – Present',
    current: true,
    emphasis: 'primary',
    bullets: [
      'Developing an AI-powered accounting automation platform using Next.js, TypeScript, Render, and Supabase with multi-agent architecture for intelligent bookkeeping workflows',
      'Designed and implemented backend architecture with PostgreSQL, Row Level Security, and n8n workflow automation for QuickBooks integration and data processing',
      'Implemented multi-provider AI integration (Claude, GPT, Gemini) for document analysis and automated financial categorization',
    ],
  },
  {
    company: 'FGF Brands',
    role: 'Software Developer',
    location: 'North York, ON',
    dates: 'May 2025 – December 2025',
    emphasis: 'primary',
    bullets: [
      'Built automated security testing platform using Python, OWASP ZAP, React, and Claude AI to generate custom scan rules and vulnerability reports, reducing manual testing by 5–8 hours per sprint',
      'Integrated security and load testing tools into Azure DevOps CI/CD pipelines for automated validation across development teams',
      'Developed SmartSortAI using YOLOv11 and OpenCV for real-time foreign material detection on food packaging conveyor belts, achieving 75–90% detection accuracy at 20 FPS',
      'Created SmartMirrorAI gesture-recognition system with MediaPipe and OpenCV for hands-free task display',
    ],
  },
  {
    company: 'LCBO',
    role: 'Customer Service Representative',
    location: 'Aurora, ON',
    dates: 'May 2023 – December 2025',
    emphasis: 'secondary',
    bullets: [
      'Processed cash, credit, and check transactions accurately while providing personalized customer service',
      'Trained and mentored new team members on POS systems and store operations',
    ],
  },
]
