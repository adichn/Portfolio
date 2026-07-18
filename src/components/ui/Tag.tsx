interface TagProps {
  children: string
  size?: 'sm' | 'md'
}

export function Tag({ children, size = 'md' }: TagProps) {
  return (
    <span
      className={
        'inline-flex items-center rounded-full border font-medium ' +
        (size === 'sm' ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-sm')
      }
      style={{
        background: 'var(--tag-bg)',
        borderColor: 'var(--tag-border)',
        color: 'var(--text-secondary)',
      }}
    >
      {children}
    </span>
  )
}
