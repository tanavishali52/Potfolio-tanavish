import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { SectionSkeleton } from './Skeleton'
import { fadeUp, stagger } from './motion'

const LOAD_DELAY_MS = 600

/**
 * Loads its content only when scrolled into view.
 * Until then it shows a skeleton that matches the section's layout.
 */
function useLoadOnScroll() {
  const ref = useRef(null)
  const [state, setState] = useState('idle') // idle -> loading -> ready

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let timer
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        setState('loading')
        timer = setTimeout(() => setState('ready'), LOAD_DELAY_MS)
      },
      { rootMargin: '0px 0px -15% 0px' },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      clearTimeout(timer)
    }
  }, [])

  return [ref, state === 'ready']
}

export function Eyebrow({ children }) {
  return (
    <motion.p variants={fadeUp} className="mb-4 text-xs font-semibold tracking-[0.18em] text-accent-fg uppercase">
      {children}
    </motion.p>
  )
}

export default function Section({ id, eyebrow, title, skeleton = 'cards', children, className = '' }) {
  const [ref, ready] = useLoadOnScroll()

  return (
    <section id={id} ref={ref} className={`border-t border-line ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        {ready ? (
          <motion.div initial="hidden" animate="show" variants={stagger(0.06)}>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            {title && (
              <motion.h2
                variants={fadeUp}
                className="mb-12 max-w-3xl text-3xl font-bold tracking-tight text-fg sm:text-4xl"
              >
                {title}
              </motion.h2>
            )}
            <motion.div variants={fadeUp}>{children}</motion.div>
          </motion.div>
        ) : (
          <SectionSkeleton type={skeleton} />
        )}
      </div>
    </section>
  )
}
