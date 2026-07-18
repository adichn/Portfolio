import { motion, useReducedMotion } from 'framer-motion'
import { currentFocus } from '../../data/currentFocus'
import { SectionHeading } from '../ui/SectionHeading'
import { RevealOnScroll } from '../ui/RevealOnScroll'

function LiveDot() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <span className="relative flex h-2 w-2">
      {!shouldReduceMotion && (
        <motion.span
          className="absolute inline-flex h-full w-full rounded-full"
          style={{ background: 'var(--accent)' }}
          animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
        />
      )}
      <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: 'var(--accent)' }} />
    </span>
  )
}

export function CurrentlyWorkingOn() {
  return (
    <section id="now" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <SectionHeading label="Right now" title="Currently Working On" />
        </RevealOnScroll>

        <div className="grid gap-6 md:grid-cols-2">
          {currentFocus.map((focus, i) => (
            <RevealOnScroll key={focus.org} delay={i * 0.1}>
              <div
                className="h-full rounded-2xl border p-7"
                style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}
              >
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--accent)' }}>
                  <LiveDot />
                  {focus.since}
                </div>
                <h3 className="mt-4 text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {focus.org}
                </h3>
                <p className="mt-1 text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                  {focus.role} &middot; {focus.location}
                </p>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {focus.blurb}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
