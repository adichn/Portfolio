interface SectionHeadingProps {
  label: string
  title: string
}

export function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <span className="text-sm font-medium tracking-widest uppercase text-[var(--accent)]">{label}</span>
      <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
        {title}
      </h2>
    </div>
  )
}
