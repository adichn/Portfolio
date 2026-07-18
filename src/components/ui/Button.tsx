import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'ghost'

const variantClasses: Record<Variant, string> = {
  primary: 'bg-[var(--accent)] text-[var(--bg-primary)] border border-transparent',
  outline: 'bg-transparent text-[var(--text-primary)] border border-[var(--border)]',
  ghost: 'bg-transparent text-[var(--text-secondary)] border border-transparent',
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200'

interface CommonProps {
  variant?: Variant
  children: ReactNode
  className?: string
}

type AnchorProps = CommonProps & HTMLMotionProps<'a'> & { href: string }
type ButtonProps = CommonProps & HTMLMotionProps<'button'> & { href?: undefined }

export function Button({ variant = 'primary', children, className = '', ...props }: AnchorProps | ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (props.href) {
    const { href, ...rest } = props as AnchorProps
    return (
      <motion.a href={href} {...rest} className={classes} whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button {...(props as ButtonProps)} className={classes} whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
      {children}
    </motion.button>
  )
}
