import Section from './Section'
import { profile } from '../data/profile'

const year = new Date().getFullYear()

export default function Contact() {
  const btn = 'rounded-md px-5 py-2.5 text-sm font-semibold transition-colors'
  const outline = `${btn} border border-strong text-fg hover:border-fg`
  return (
    <Section id="contact" eyebrow="Contact" skeleton="single">
      <div className="rounded-lg border border-line bg-panel px-6 py-12 sm:px-10 md:py-16">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-fg sm:text-4xl">Let’s build something great.</h2>
        <p className="mt-4 max-w-xl text-lg text-muted">
          Open to full-time roles, freelance projects and collaborations on React, Next.js and Node.js products.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className={`${btn} bg-accent text-on-accent hover:bg-lime-300`}>
            Email me
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className={outline}>
            {profile.phone}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className={outline}>
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className={outline}>
            GitHub
          </a>
        </div>
      </div>
      <footer className="mt-12 flex flex-col justify-between gap-2 text-sm text-subtle sm:flex-row">
        <span className="break-all">
          {profile.email} · {profile.phone}
        </span>
        <span>
          © {year} {profile.name}
        </span>
      </footer>
    </Section>
  )
}
