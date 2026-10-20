// Skeleton placeholders: full-page (first load) and per-section (scroll loading).

export function Bone({ className = '', style }) {
  return <div className={`skeleton ${className}`} style={style} aria-hidden />
}

export function ProjectCardSkeleton() {
  return (
    <div className="flex flex-col rounded-lg border border-line bg-panel p-6">
      <Bone className="mb-5 h-3 w-28" />
      <Bone className="h-5 w-40" />
      <Bone className="mt-2 h-3 w-24" />
      <div className="mt-5 space-y-2">
        <Bone className="h-3 w-full" />
        <Bone className="h-3 w-11/12" />
        <Bone className="h-3 w-4/5" />
      </div>
      <div className="mt-6 flex gap-1.5">
        <Bone className="h-6 w-14" />
        <Bone className="h-6 w-16" />
        <Bone className="h-6 w-12" />
      </div>
    </div>
  )
}

function Heading() {
  return (
    <>
      <Bone className="mb-4 h-3 w-24" />
      <Bone className="mb-12 h-9 w-96 max-w-full" />
    </>
  )
}

const bodies = {
  about: () => (
    <div className="grid gap-12 md:grid-cols-[1.5fr_1fr]">
      <div className="space-y-3">
        {[100, 95, 90, 97, 60, 0, 100, 92, 85, 70].map((w, i) =>
          w ? <Bone key={i} className="h-4" style={{ width: `${w}%` }} /> : <div key={i} className="h-3" />,
        )}
      </div>
      <div className="space-y-4">
        {[0, 1, 2].map((i) => (
          <Bone key={i} className="h-24 w-full" />
        ))}
      </div>
    </div>
  ),
  list: () => (
    <div className="border-t border-line">
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex items-center gap-8 border-b border-line py-7">
          <Bone className="hidden h-3 w-28 md:block" />
          <div className="flex-1 space-y-2">
            <Bone className="h-5 w-48" />
            <Bone className="h-3 w-36" />
          </div>
        </div>
      ))}
    </div>
  ),
  cards: () => (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {[0, 1, 2].map((i) => (
        <ProjectCardSkeleton key={i} />
      ))}
    </div>
  ),
  grid: () => (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="rounded-lg border border-line p-6">
          <Bone className="mb-4 h-4 w-24" />
          <div className="flex flex-wrap gap-2">
            {[56, 64, 48, 72, 52].map((w, j) => (
              <Bone key={j} className="h-6" style={{ width: w }} />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  single: () => <Bone className="h-28 w-full" />,
}

export function SectionSkeleton({ type = 'cards' }) {
  const Body = bodies[type] ?? bodies.cards
  return (
    <div role="status" aria-label="Loading section">
      <span className="sr-only">Loading…</span>
      <Heading />
      <Body />
    </div>
  )
}

export default function PageSkeleton() {
  return (
    <div role="status" aria-live="polite" aria-label="Loading portfolio">
      <span className="sr-only">Loading…</span>
      <div className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <Bone className="h-8 w-8" />
            <Bone className="h-4 w-28" />
          </div>
          <div className="hidden items-center gap-8 md:flex">
            {[...Array(5)].map((_, i) => (
              <Bone key={i} className="h-3 w-16" />
            ))}
            <Bone className="h-9 w-9" />
            <Bone className="h-9 w-24" />
          </div>
          <Bone className="h-9 w-9 md:hidden" />
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 pt-36 pb-24 sm:px-6 md:pt-44">
        <Bone className="mb-8 h-3 w-56" />
        <Bone className="h-12 w-full max-w-3xl md:h-16" />
        <Bone className="mt-4 h-12 w-3/4 max-w-2xl md:h-16" />
        <div className="mt-8 max-w-2xl space-y-3">
          <Bone className="h-4 w-full" />
          <Bone className="h-4 w-5/6" />
        </div>
        <div className="mt-10 flex gap-3">
          <Bone className="h-11 w-44" />
          <Bone className="h-11 w-32" />
        </div>
      </div>
    </div>
  )
}
