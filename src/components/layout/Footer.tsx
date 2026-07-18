import { social } from '../../data/social'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'

export function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          Designed &amp; built by{' '}
          <span style={{ color: 'var(--text-primary)' }}>Aditya Chauhan</span>
        </p>
        <div className="flex items-center gap-4">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{ color: 'var(--text-secondary)' }}
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ color: 'var(--text-secondary)' }}
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
