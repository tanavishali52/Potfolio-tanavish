import Section from './Section'
import { skills } from '../data/profile'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="The toolkit I work with." skeleton="grid">
      <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div key={s.group} className="bg-ink p-6">
            <h3 className="mb-4 text-sm font-semibold text-fg">{s.group}</h3>
            <ul className="flex flex-wrap gap-2">
              {s.items.map((i) => (
                <li key={i} className="rounded border border-line px-2.5 py-0.5 text-xs text-muted">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
