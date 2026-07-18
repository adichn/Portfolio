import { GraduationCap } from 'lucide-react'
import { coOpNote } from '../../data/about'
import { education } from '../../data/education'
import { SectionHeading } from '../ui/SectionHeading'
import { RevealOnScroll } from '../ui/RevealOnScroll'

export function Education() {
  return (
    <section id="education" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <RevealOnScroll>
          <SectionHeading label="Background" title="Education" />
        </RevealOnScroll>

        <RevealOnScroll delay={0.05}>
          <div
            className="flex flex-col gap-5 rounded-2xl border p-7 sm:flex-row sm:items-start"
            style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}
          >
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
              style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
            >
              <GraduationCap size={22} strokeWidth={1.75} />
            </div>
            <div>
              <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                {education.school}
              </h3>
              <p className="mt-1 text-sm font-medium" style={{ color: 'var(--accent)' }}>
                {education.degree}
              </p>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs" style={{ color: 'var(--text-muted)' }}>
                <span>{education.dates}</span>
                <span>{education.location}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {coOpNote}
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
