import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import './i18n'

// Components
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience' 
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import LoadingScreen from './components/LoadingScreen'
import ParticleBackground from './components/ParticleBackground'
import ScrollProgress from './components/ScrollProgress'

// Styles
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const { i18n, t } = useTranslation()

  useEffect(() => {
    // Simulate loading time for smooth entrance
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="main-content"
          >
            {/* Background Elements */}
            <ParticleBackground />
            <ScrollProgress />
            
            {/* Navigation */}
            <Navigation />
            
            {/* Main Sections */}
            <main>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Contact />
            </main>
            
            {/* Footer */}
            <footer className="footer glass">
              <div className="container">
                <div className="footer-content">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    © 2025 {t('common.name')}. {t('common.footer')}
                  </motion.p>
                  
                  <motion.div 
                    className="language-toggle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => i18n.changeLanguage('en')}
                      className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => i18n.changeLanguage('fr')}
                      className={`lang-btn ${i18n.language === 'fr' ? 'active' : ''}`}
                    >
                      FR
                    </button>
                  </motion.div>
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
