import Section from './Section'
import { education } from '../data/profile'

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Learning, put to work." skeleton="single">
      <div className="flex flex-col justify-between gap-4 rounded-lg border border-line bg-panel p-6 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-xl font-semibold text-fg">{education.degree}</h3>
          <p className="mt-1 text-muted">{education.school}</p>
        </div>
        <span className="text-sm text-subtle">{education.period}</span>
      </div>
    </Section>
  )
}
