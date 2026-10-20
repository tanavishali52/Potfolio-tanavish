import Section from './Section'
import { about, stats, profile } from '../data/profile'

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="I build web apps people enjoy using." skeleton="about">
      <div className="grid gap-12 md:grid-cols-[1.5fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          {about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p>
            Based in {profile.location}. If you need a developer who can own a feature end to end, I’d be happy to
            connect.
          </p>
        </div>
        <dl className="grid grid-cols-1 gap-4 self-start sm:grid-cols-3 md:grid-cols-1">
          {stats.map((s) => (
            <div key={s.label} className="rounded-lg border border-line bg-panel p-5">
              <dt className="text-sm text-subtle">{s.label}</dt>
              <dd className="mt-1 text-3xl font-bold text-fg">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
