import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { ProjectCardSkeleton } from './Skeleton'
import Section from './Section'
import { projects, projectCategories } from '../data/profile'
import { ease } from './motion'

const PAGE_SIZE = 3
const LOAD_MS = 600

function ProjectCard({ p }) {
  const Tag = p.url ? 'a' : 'div'
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease }}
      className="h-full"
    >
      <Tag
        {...(p.url ? { href: p.url, target: '_blank', rel: 'noreferrer' } : {})}
        className="group flex h-full flex-col rounded-lg border border-line bg-panel p-6 transition-colors hover:border-strong"
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <span className="text-[11px] font-semibold tracking-[0.16em] text-accent-fg uppercase">{p.label}</span>
          {p.url && <span className="text-subtle transition-colors group-hover:text-fg">↗</span>}
        </div>
        <h3 className="text-lg font-semibold text-fg group-hover:underline group-hover:underline-offset-4">{p.title}</h3>
        <p className="mt-1 text-sm text-subtle">{p.org}</p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
        <ul className="mt-6 flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <li key={t} className="rounded bg-fg/5 px-2 py-0.5 text-xs text-soft">
              {t}
            </li>
          ))}
        </ul>
      </Tag>
    </motion.div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [count, setCount] = useState(PAGE_SIZE)
  const [loadingMore, setLoadingMore] = useState(false)
  // callback ref: the sentinel only exists once the section has loaded
  const [sentinel, setSentinel] = useState(null)

  const list = filter === 'All' ? projects : projects.filter((p) => p.category === filter)
  const visible = list.slice(0, count)
  const hasMore = count < list.length

  // Infinite scroll: load the next batch when the bottom of the grid comes into view
  useEffect(() => {
    if (!hasMore || loadingMore) return
    const el = sentinel
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setLoadingMore(true)
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [sentinel, hasMore, loadingMore, count, filter])

  useEffect(() => {
    if (!loadingMore) return
    const t = setTimeout(() => {
      setCount((c) => c + PAGE_SIZE)
      setLoadingMore(false)
    }, LOAD_MS)
    return () => clearTimeout(t)
  }, [loadingMore])

  const changeFilter = (c) => {
    if (c === filter) return
    setFilter(c)
    setCount(PAGE_SIZE)
    setLoadingMore(false)
  }

  const pending = loadingMore ? Math.min(PAGE_SIZE, list.length - count) : 0

  return (
    <Section id="projects" eyebrow="Selected work" title="Projects, in practice." skeleton="cards">
      <p className="-mt-6 mb-8 text-muted">Production apps and personal builds across AI, SaaS and CRM.</p>

      <div className="mb-8 flex flex-wrap gap-2" role="tablist">
        {projectCategories.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={filter === c}
            onClick={() => changeFilter(c)}
            className={`rounded-md px-3.5 py-1.5 text-sm font-medium transition-colors ${
              filter === c ? 'bg-fg text-ink' : 'border border-line text-muted hover:border-strong hover:text-fg'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <ProjectCard key={filter + p.title} p={p} />
        ))}
        {[...Array(pending)].map((_, i) => (
          <ProjectCardSkeleton key={'s' + i} />
        ))}
      </div>

      <div ref={setSentinel} className="h-px" aria-hidden />
      <p className="mt-6 text-sm text-subtle" aria-live="polite">
        Showing {Math.min(count, list.length)} of {list.length} projects
        {hasMore && !loadingMore && ' — scroll for more'}
        {loadingMore && ' — loading…'}
      </p>
    </Section>
  )
}
