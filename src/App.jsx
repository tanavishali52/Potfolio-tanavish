import { useEffect, useState } from 'react'
import { MotionConfig, motion } from 'motion/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Agentic from './components/Agentic'
import Education from './components/Education'
import Contact from './components/Contact'
import PageSkeleton from './components/Skeleton'
import { BackToTop } from './components/ScrollExtras'
import useTheme from './hooks/useTheme'

const MIN_LOADING_MS = 900

export default function App() {
  const { theme, toggle } = useTheme()
  const [loading, setLoading] = useState(true)

  // First-load skeleton (waits for fonts + a short minimum)
  useEffect(() => {
    let cancelled = false
    const fonts = document.fonts?.ready ?? Promise.resolve()
    const delay = new Promise((r) => setTimeout(r, MIN_LOADING_MS))
    Promise.all([fonts, delay]).then(() => !cancelled && setLoading(false))
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      {loading ? (
        <PageSkeleton />
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
          <Navbar theme={theme} onToggleTheme={toggle} />
          <main>
            <Hero />
            <Projects />
            {/* Each section below loads its content as you scroll to it */}
            <About />
            <Experience />
            <Skills />
            <Agentic />
            <Education />
            <Contact />
          </main>
          <BackToTop />
        </motion.div>
      )}
    </MotionConfig>
  )
}
