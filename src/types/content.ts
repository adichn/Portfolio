import type { LucideIcon } from 'lucide-react'

export interface NavItem {
  id: string
  label: string
}

export interface SocialLinks {
  email: string
  github: string
  githubHandle: string
  linkedin: string
  linkedinHandle: string
  resumeHref: string
}

export interface CurrentFocusItem {
  org: string
  role: string
  location: string
  since: string
  blurb: string
}

export interface ExperienceItem {
  company: string
  role: string
  location: string
  dates: string
  current?: boolean
  emphasis: 'primary' | 'secondary'
  bullets: string[]
}

export type ProjectTheme = 'security' | 'ai' | 'cyber' | 'ml'

export interface ProjectItem {
  title: string
  date: string
  description: string
  tags: string[]
  theme: ProjectTheme
  icon: LucideIcon
}

export interface SkillGroup {
  label: string
  tags: string[]
}

export interface ExpertiseCard {
  title: string
  description: string
  icon: LucideIcon
  theme: 'security' | 'ai' | 'fullstack'
}
