import { useEffect, useState } from 'react'

export function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#top"
      aria-label="Back to top"
      className={`fixed right-5 bottom-5 z-50 grid h-10 w-10 place-items-center rounded-md border border-line bg-panel text-fg transition-opacity duration-200 hover:border-strong ${
        show ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      ↑
    </a>
  )
}
