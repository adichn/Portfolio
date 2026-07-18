import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { navItems } from '../../data/nav'

interface MobileMenuProps {
  open: boolean
  activeId: string
  onClose: () => void
}

export function MobileMenu({ open, activeId, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex flex-col md:hidden"
          style={{ background: 'var(--bg-primary)' }}
        >
          <div className="flex items-center justify-end px-6 py-4">
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-9 w-9 items-center justify-center"
              style={{ color: 'var(--text-primary)' }}
            >
              <X size={22} />
            </button>
          </div>

          <motion.nav
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.06 } },
            }}
            className="flex flex-1 flex-col items-center justify-center gap-8"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={onClose}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-2xl font-medium"
                style={{
                  color: activeId === item.id ? 'var(--accent)' : 'var(--text-primary)',
                }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
