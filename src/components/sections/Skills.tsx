import { expertiseCards, skillGroups } from '../../data/skills'
import { SectionHeading } from '../ui/SectionHeading'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import { Tag } from '../ui/Tag'

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <SectionHeading label="Abilities" title="Skills" />
        </RevealOnScroll>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          {expertiseCards.map((card, i) => {
            const Icon = card.icon
            return (
              <RevealOnScroll key={card.title} delay={i * 0.08}>
                <div
                  className="h-full rounded-2xl border p-6"
                  style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}
                >
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
                  >
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {card.description}
                  </p>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>

        <div className="space-y-6">
          {skillGroups.map((group, i) => (
            <RevealOnScroll key={group.label} delay={i * 0.05}>
              <div className="flex flex-col gap-3 border-t pt-6 sm:flex-row sm:gap-8" style={{ borderColor: 'var(--border)' }}>
                <span
                  className="w-full shrink-0 text-sm font-medium sm:w-44"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {group.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <Tag key={tag} size="sm">
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
