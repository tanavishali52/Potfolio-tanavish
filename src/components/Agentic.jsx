import Section from './Section'
import { agentic } from '../data/profile'

export default function Agentic() {
  return (
    <Section id="ai" eyebrow="AI workflow" title={agentic.title} skeleton="cards">
      <p className="-mt-8 mb-4 text-xl font-semibold text-subtle">{agentic.subtitle}</p>
      <p className="mb-12 max-w-2xl text-lg leading-relaxed text-muted">{agentic.text}</p>
      <ol className="grid gap-5 md:grid-cols-3">
        {agentic.steps.map((s, i) => (
          <li key={s.title} className="rounded-lg border border-line bg-panel p-6">
            <span className="text-sm font-semibold text-accent-fg">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="mt-4 text-lg font-semibold text-fg">{s.title}</h3>
            <p className="mt-2 text-sm text-muted">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
