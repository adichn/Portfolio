import { projects } from '../../data/projects'
import { SectionHeading } from '../ui/SectionHeading'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <SectionHeading label="Portfolio" title="Projects" />
        </RevealOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <RevealOnScroll key={project.title} delay={(i % 3) * 0.08}>
              <ProjectCard project={project} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
