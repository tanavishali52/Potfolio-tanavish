import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Section from './Section'
import { experience } from '../data/profile'
import { ease } from './motion'

export default function Experience() {
  const [open, setOpen] = useState(0)

  return (
    <Section id="experience" eyebrow="Experience" title="Where I’ve worked" skeleton="list">
      <ul className="border-t border-line">
        {experience.map((job, i) => {
          const isOpen = open === i
          return (
            <li key={job.company} className="border-b border-line">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="group grid w-full grid-cols-[1fr_auto] items-center gap-4 py-6 text-left md:grid-cols-[220px_1fr_auto]"
              >
                <span className="text-sm text-subtle">{job.period}</span>
                <span className="col-span-2 md:col-span-1">
                  <span className="block text-xl font-semibold text-fg md:text-2xl">{job.company}</span>
                  <span className="text-sm text-muted">{job.role}</span>
                </span>
                <span
                  className={`col-start-2 row-start-1 text-lg text-subtle transition-transform duration-200 group-hover:text-fg md:col-auto md:row-auto ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 md:pl-[220px]">
                      <p className="mb-4 text-sm text-subtle">{job.place}</p>
                      <ul className="space-y-3">
                        {job.points.map((p) => (
                          <li key={p} className="flex gap-3 text-soft">
                            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-subtle" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
