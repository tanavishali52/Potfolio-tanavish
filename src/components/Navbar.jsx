import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#ai', label: 'AI Workflow' },
  { href: '#/agentic-workflow', label: 'Agentic Workflow', page: true },
]

const ids = [...links.filter((l) => !l.page).map((l) => l.href), '#top', '#education', '#contact']

function useActiveSection(enabled) {
  const [active, setActive] = useState('')
  useEffect(() => {
    if (!enabled) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive('#' + e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.querySelector(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [enabled])
  return active
}

export default function Navbar({ theme, onToggleTheme, onWorkflowPage }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const sectionActive = useActiveSection(!onWorkflowPage)
  const active = onWorkflowPage ? '#/agentic-workflow' : sectionActive

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled || open ? 'border-b border-line bg-ink/90 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-accent text-xs font-extrabold text-on-accent">
            {profile.initials}
          </span>
          <span className="text-sm font-semibold text-fg">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`border-b py-1 text-sm transition-colors ${
                active === l.href ? 'border-fg text-fg' : 'border-transparent text-muted hover:text-fg'
              }`}
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a
            href="#contact"
            className="rounded-md bg-fg px-4 py-2 text-sm font-semibold text-ink transition-opacity hover:opacity-85"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-md border border-line"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-4">
              <span className={`absolute left-0 h-0.5 w-4 bg-fg transition ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
              <span className={`absolute top-1.5 left-0 h-0.5 w-4 bg-fg transition ${open ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 h-0.5 w-4 bg-fg transition ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line px-4 pb-4 md:hidden">
          {[...links, { href: '#contact', label: 'Contact' }].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block border-b border-line py-3 ${active === l.href ? 'text-fg' : 'text-muted'}`}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
