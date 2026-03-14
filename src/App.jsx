import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Lenis from 'lenis'
import './i18n'

// Components
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'

// Styles
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const { i18n } = useTranslation()
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  // Custom cursor
  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    let ringX = 0, ringY = 0
    let mouseX = 0, mouseY = 0
    let rafId

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dot) {
        dot.style.left = mouseX + 'px'
        dot.style.top = mouseY + 'px'
      }
    }

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ring) {
        ring.style.left = ringX + 'px'
        ring.style.top = ringY + 'px'
      }
      rafId = requestAnimationFrame(animateRing)
    }

    window.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(animateRing)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true })
    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    const id = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(id)
      lenis.destroy()
    }
  }, [])

  // Loading timer
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2800)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="App">
      {/* Custom cursor */}
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />

      {/* Grid background */}
      <div className="grid-bg" aria-hidden="true" />

      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="main-content"
          >
            <ScrollProgress />
            <Navigation />

            <main>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Certificates />
              <Contact />
            </main>

            <footer className="footer">
              <div className="container">
                <div className="footer-inner">
                  <motion.p
                    className="footer-copy"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    © 2025 <span style={{ color: 'var(--lime)' }}>ELYES DAROUICH</span> — CRAFTED WITH INTENTION
                  </motion.p>
                  <div className="lang-pills">
                    {['en', 'fr'].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => i18n.changeLanguage(lang)}
                        className={`lang-pill ${i18n.language === lang ? 'active' : ''}`}
                      >
                        {lang.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
