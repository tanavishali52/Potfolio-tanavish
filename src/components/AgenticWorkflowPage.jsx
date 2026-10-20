import { motion } from 'motion/react'
import { agenticWorkflowPage as page } from '../data/profile'
import { Eyebrow } from './Section'
import { fadeUp, stagger } from './motion'

function Heading({ children }) {
  return (
    <motion.h2 variants={fadeUp} className="mt-20 mb-8 text-2xl font-bold tracking-tight text-fg">
      {children}
    </motion.h2>
  )
}

export default function AgenticWorkflowPage() {
  return (
    <main id="agentic-workflow">
      <div className="mx-auto max-w-6xl px-4 pt-32 pb-20 sm:px-6 md:pb-24">
        <motion.div initial="hidden" animate="show" variants={stagger(0.06)}>
          <motion.a
            variants={fadeUp}
            href="#top"
            className="mb-10 inline-block text-sm text-muted transition-colors hover:text-fg"
          >
            ← Back to portfolio
          </motion.a>
          <Eyebrow>{page.eyebrow}</Eyebrow>
          <motion.h1
            variants={fadeUp}
            className="mb-6 max-w-3xl text-4xl font-bold tracking-tight text-fg sm:text-5xl"
          >
            {page.title}
          </motion.h1>
          <motion.p variants={fadeUp} className="max-w-2xl text-lg leading-relaxed text-muted">
            {page.intro}
          </motion.p>

          <Heading>{page.capabilitiesTitle}</Heading>
          <ul className="grid gap-5 md:grid-cols-2">
            {page.capabilities.map((c) => (
              <motion.li key={c.title} variants={fadeUp} className="rounded-lg border border-line bg-panel p-6">
                <h3 className="text-lg font-semibold text-fg">{c.title}</h3>
                <p className="mt-2 text-sm text-muted">{c.text}</p>
              </motion.li>
            ))}
          </ul>

          <Heading>{page.setupTitle}</Heading>
          <motion.div variants={fadeUp} className="rounded-lg border border-line bg-panel p-6 md:p-8">
            <p className="max-w-3xl leading-relaxed text-muted">{page.setupText}</p>
            <dl className="my-8 grid grid-cols-3 gap-4 border-y border-line py-6">
              {page.setupStats.map((s) => (
                <div key={s.label}>
                  <dt className="text-3xl font-bold text-fg">{s.value}</dt>
                  <dd className="mt-1 text-sm text-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
            <ul className="space-y-3 text-sm text-muted">
              {page.setupPoints.map((p) => (
                <li key={p} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>
            <a
              href={page.setupLink.url}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block text-sm font-semibold text-fg underline underline-offset-4 hover:opacity-80"
            >
              {page.setupLink.label} ↗
            </a>
          </motion.div>

          <Heading>{page.processTitle}</Heading>
          <ol className="grid gap-5 md:grid-cols-4">
            {page.process.map((p, i) => (
              <motion.li key={p.title} variants={fadeUp} className="rounded-lg border border-line bg-panel p-6">
                <span className="text-sm font-semibold text-accent-fg">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 text-lg font-semibold text-fg">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.text}</p>
              </motion.li>
            ))}
          </ol>

          <Heading>{page.appliedTitle}</Heading>
          <ul className="grid gap-5 md:grid-cols-3">
            {page.applied.map((a) => (
              <motion.li key={a.title} variants={fadeUp} className="rounded-lg border border-line bg-panel p-6">
                <p className="text-xs font-semibold tracking-wide text-subtle uppercase">{a.org}</p>
                <h3 className="mt-2 text-lg font-semibold text-fg">{a.title}</h3>
                <p className="mt-2 text-sm text-muted">{a.text}</p>
              </motion.li>
            ))}
          </ul>

          <Heading>{page.toolsTitle}</Heading>
          <motion.ul variants={fadeUp} className="flex flex-wrap gap-2">
            {page.tools.map((t) => (
              <li key={t} className="rounded-md border border-line px-3 py-1.5 text-sm text-muted">
                {t}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </main>
  )
}
