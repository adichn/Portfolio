import { Mail } from 'lucide-react'
import { collabBody, collabHeadline } from '../../data/about'
import { social } from '../../data/social'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import { Button } from '../ui/Button'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <RevealOnScroll>
          <div
            className="rounded-3xl border px-8 py-14 text-center sm:px-14"
            style={{ borderColor: 'var(--border-accent)', background: 'var(--bg-card)' }}
          >
            <span className="text-sm font-medium tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
              Say hi
            </span>
            <h2
              className="mx-auto mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl"
              style={{ color: 'var(--text-primary)' }}
            >
              {collabHeadline}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {collabBody}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href={`mailto:${social.email}`} variant="primary" className="px-8 py-4 text-base">
                <Mail size={18} />
                {social.email}
              </Button>
              <Button
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                className="px-8 py-4 text-base"
              >
                <LinkedinIcon size={18} />
                Connect on LinkedIn
              </Button>
            </div>

            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: 'var(--text-muted)' }}
            >
              <GithubIcon size={16} />
              {social.githubHandle}
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
