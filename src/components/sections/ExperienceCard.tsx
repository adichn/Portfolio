import clsx from 'clsx'
import type { ExperienceItem } from '../../types/content'

interface ExperienceCardProps {
  item: ExperienceItem
}

export function ExperienceCard({ item }: ExperienceCardProps) {
  const isPrimary = item.emphasis === 'primary'

  return (
    <div
      className={clsx('rounded-2xl border', isPrimary ? 'p-7' : 'p-5 opacity-80')}
      style={{
        borderColor: isPrimary ? 'var(--border)' : 'var(--border)',
        background: isPrimary ? 'var(--bg-card)' : 'transparent',
      }}
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3
            className={isPrimary ? 'text-lg font-semibold' : 'text-base font-medium'}
            style={{ color: isPrimary ? 'var(--text-primary)' : 'var(--text-secondary)' }}
          >
            {item.company}
          </h3>
          <p
            className={isPrimary ? 'text-sm font-medium' : 'text-sm'}
            style={{ color: 'var(--accent)' }}
          >
            {item.role}
          </p>
        </div>
        <div
          className="flex shrink-0 flex-col gap-1 text-xs sm:items-end"
          style={{ color: 'var(--text-muted)' }}
        >
          {item.current && (
            <span
              className="w-fit rounded-full px-2 py-0.5 text-[11px] font-medium"
              style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
            >
              Current
            </span>
          )}
          <span>{item.dates}</span>
          <span>{item.location}</span>
        </div>
      </div>

      <ul className={clsx('mt-4 space-y-2', !isPrimary && 'mt-3 space-y-1.5')}>
        {item.bullets.map((bullet) => (
          <li
            key={bullet}
            className={clsx(
              'flex gap-2.5',
              isPrimary ? 'text-sm leading-relaxed' : 'text-xs leading-relaxed',
            )}
            style={{ color: 'var(--text-secondary)' }}
          >
            <span
              className="mt-2 h-1 w-1 shrink-0 rounded-full"
              style={{ background: 'var(--text-muted)' }}
            />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
