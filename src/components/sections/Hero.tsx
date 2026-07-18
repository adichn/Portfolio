import { motion, useReducedMotion } from 'framer-motion'
import { Download, Mail } from 'lucide-react'
import {
  coOpBadge,
  funFact,
  heroDescription,
  heroGreeting,
  heroName,
  typedRoles,
} from '../../data/about'
import { social } from '../../data/social'
import { useTypedText } from '../../hooks/useTypedText'
import { Button } from '../ui/Button'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

export function Hero() {
  const typed = useTypedText(typedRoles)
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full blur-[120px] md:h-[720px] md:w-[720px]"
        style={{ background: 'var(--accent-dim2)' }}
      />

      <motion.div
        variants={shouldReduceMotion ? undefined : container}
        initial={shouldReduceMotion ? undefined : 'hidden'}
        animate={shouldReduceMotion ? undefined : 'visible'}
        className="relative mx-auto w-full max-w-6xl"
      >
        <motion.p
          variants={item}
          className="mb-2 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm"
          style={{ borderColor: 'var(--border-accent)', color: 'var(--accent)' }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: 'var(--accent)' }}
          />
          {coOpBadge}
        </motion.p>

        <motion.p variants={item} className="mt-6 text-lg" style={{ color: 'var(--text-secondary)' }}>
          {heroGreeting}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-2 text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl"
          style={{ color: 'var(--text-primary)' }}
        >
          {heroName}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 text-2xl font-medium sm:text-3xl"
          style={{ color: 'var(--text-secondary)' }}
        >
          I&rsquo;m a <span style={{ color: 'var(--accent)' }}>{typed}</span>
          <span className="ml-0.5 animate-pulse" style={{ color: 'var(--accent)' }}>
            |
          </span>
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
          style={{ color: 'var(--text-secondary)' }}
        >
          {heroDescription}
        </motion.p>

        <motion.p variants={item} className="mt-3 max-w-2xl text-sm italic" style={{ color: 'var(--text-muted)' }}>
          {funFact}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <Button href="#projects" variant="primary">
            View My Work
          </Button>
          <Button href="#contact" variant="outline">
            Get In Touch
          </Button>
          <Button href={social.resumeHref} variant="ghost" download>
            <Download size={16} />
            Resume
          </Button>
        </motion.div>

        <motion.div variants={item} className="mt-10 flex items-center gap-5">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{ color: 'var(--text-secondary)' }}
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ color: 'var(--text-secondary)' }}
          >
            <LinkedinIcon size={20} />
          </a>
          <a href={`mailto:${social.email}`} aria-label="Email" style={{ color: 'var(--text-secondary)' }}>
            <Mail size={20} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
