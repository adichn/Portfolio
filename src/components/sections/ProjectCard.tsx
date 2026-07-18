import { motion } from 'framer-motion'
import type { ProjectItem } from '../../types/content'
import { Tag } from '../ui/Tag'

interface ProjectCardProps {
  project: ProjectItem
}

export function ProjectCard({ project }: ProjectCardProps) {
  const Icon = project.icon

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="flex h-full flex-col rounded-2xl border p-6"
      style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}
    >
      <div
        className="flex h-11 w-11 items-center justify-center rounded-xl"
        style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
      >
        <Icon size={20} strokeWidth={1.75} />
      </div>

      <span className="mt-5 text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
        {project.date}
      </span>
      <h3 className="mt-1 text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
        {project.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag} size="sm">
            {tag}
          </Tag>
        ))}
      </div>
    </motion.article>
  )
}
