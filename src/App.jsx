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
import AgenticWorkflowPage from './components/AgenticWorkflowPage'
import PageSkeleton from './components/Skeleton'
import { BackToTop } from './components/ScrollExtras'
import useTheme from './hooks/useTheme'

const MIN_LOADING_MS = 900

const WORKFLOW_ROUTE = '#/agentic-workflow'

function useRoute() {
  const [route, setRoute] = useState(window.location.hash)
  useEffect(() => {
    const onChange = () => setRoute(window.location.hash)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}

export default function App() {
  const { theme, toggle } = useTheme()
  const [loading, setLoading] = useState(true)
  const route = useRoute()
  const onWorkflowPage = route === WORKFLOW_ROUTE

  // Sections only exist on the home route, so scroll to them after switching routes.
  useEffect(() => {
    if (loading) return
    if (onWorkflowPage) {
      window.scrollTo(0, 0)
      return
    }
    if (route.length > 1) document.querySelector(route)?.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [onWorkflowPage, route, loading])

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
          <Navbar theme={theme} onToggleTheme={toggle} onWorkflowPage={onWorkflowPage} />
          {onWorkflowPage ? (
            <AgenticWorkflowPage />
          ) : (
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
          )}
          <BackToTop />
        </motion.div>
      )}
    </MotionConfig>
  )
}
