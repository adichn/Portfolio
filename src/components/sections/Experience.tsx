import { experience } from '../../data/experience'
import { SectionHeading } from '../ui/SectionHeading'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import { ExperienceCard } from './ExperienceCard'

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <RevealOnScroll>
          <SectionHeading label="Work" title="Experience" />
        </RevealOnScroll>

        <div className="space-y-5">
          {experience.map((item, i) => (
            <RevealOnScroll key={item.company + item.role} delay={Math.min(i, 3) * 0.06}>
              <ExperienceCard item={item} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
