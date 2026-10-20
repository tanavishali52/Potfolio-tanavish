import { motion } from 'motion/react'
import { profile } from '../data/profile'
import { fadeUp, stagger } from './motion'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* one soft, static wash of colour */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_0%,rgba(16,185,129,0.12),transparent_70%)]"
      />

      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger(0.08, 0.05)}
        className="relative mx-auto max-w-6xl px-4 pt-36 pb-24 sm:px-6 md:pt-44 md:pb-28"
      >
        <motion.p
          variants={fadeUp}
          className="mb-8 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-accent-fg uppercase"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {profile.status}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="max-w-4xl text-5xl leading-[1.05] font-extrabold tracking-tight text-fg sm:text-6xl md:text-7xl"
        >
          {profile.headline}
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
          {profile.intro}
        </motion.p>

        <motion.ul variants={fadeUp} className="mt-8 flex flex-wrap gap-2">
          {profile.stack.map((s) => (
            <li key={s} className="rounded-md border border-line bg-panel px-3 py-1 text-xs font-medium text-soft">
              {s}
            </li>
          ))}
        </motion.ul>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-colors hover:bg-lime-300"
          >
            View selected work
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md border border-strong px-5 py-2.5 text-sm font-semibold text-fg transition-colors hover:border-fg"
          >
            Get in touch
          </a>
          <a
            href="/tanavish-ali-cv.txt"
            download
            className="px-2 py-2.5 text-sm font-semibold text-muted underline decoration-line underline-offset-4 transition-colors hover:text-fg"
          >
            Download CV
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
