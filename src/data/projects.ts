import { Workflow, ShieldAlert, Flag, FolderOpen, Brain } from 'lucide-react'
import type { ProjectItem } from '../types/content'

export const projects: ProjectItem[] = [
  {
    title: 'Nexus Point',
    date: 'March 2026',
    description:
      'A multi-agent platform using 6 specialized sub-agents to autonomously decompose complex prompts into dependency-aware execution pipelines. RAG pipeline via Tavily for real-time research and Supabase (pgvector) for semantic search and task verification, with an interactive visual task graph in React Flow to manage DAG execution and real-time status monitoring.',
    tags: ['Next.js', 'Supabase (pgvector)', 'Claude API', 'React Flow', 'Tavily'],
    theme: 'ai',
    icon: Workflow,
  },
  {
    title: 'PhishyURL Detection System',
    date: 'June 2025',
    description:
      'ML-powered phishing URL classifier using KNN with 95%+ accuracy on the UCI phishing dataset. Engineered 30+ features based on URL structure and domain analysis to detect malicious patterns, deployed on a FastAPI/React stack for interactive feature visualization and real-time URL risk assessment.',
    tags: ['Python', 'FastAPI', 'KNN', 'Scikit-learn', 'React'],
    theme: 'security',
    icon: ShieldAlert,
  },
  {
    title: 'Cybersecurity Challenge Platform (LCC)',
    date: 'Feb – March 2025',
    description:
      'Hack-The-Box style educational platform built for the Laurier Cybersecurity Club, featuring SQL injection and password cracking labs. MongoDB backend for secure authentication simulation and a real-time competitive leaderboard.',
    tags: ['HTML', 'CSS', 'JavaScript', 'MongoDB'],
    theme: 'cyber',
    icon: Flag,
  },
  {
    title: 'AI-Powered File Management System',
    date: 'December 2025',
    description:
      'Full-stack platform with AI-powered metadata generation and intelligent folder organization. BetterAuth and PostgreSQL Row Level Security for auth, with Claude, GPT, and Gemini APIs orchestrated through n8n workflow automation.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Claude API', 'n8n'],
    theme: 'ai',
    icon: FolderOpen,
  },
  {
    title: 'Machine Learning Course Projects',
    date: 'Fall 2024',
    description:
      'Student Performance Prediction: an ANN with GRU predicting academic success from life events and study practices. Air Quality Analysis: regression models on sensor data identifying key environmental factors.',
    tags: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas'],
    theme: 'ml',
    icon: Brain,
  },
]
