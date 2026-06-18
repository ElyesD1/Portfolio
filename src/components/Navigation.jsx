import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { X, AlignRight, ArrowUpRight } from 'lucide-react'
import './Navigation.css'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { t, i18n } = useTranslation()

  const navItems = [
    { key: 'about', href: '#about', num: '01', label: t('nav.about') },
    { key: 'experience', href: '#experience', num: '02', label: t('nav.experience') },
    { key: 'projects', href: '#projects', num: '03', label: t('nav.projects') },
    { key: 'skills', href: '#skills', num: '04', label: t('nav.skills') },
    { key: 'certificates', href: '#certificates', num: '05', label: t('nav.certificates') },
    { key: 'contact', href: '#contact', num: '06', label: t('nav.contact') },
  ]

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'certificates', 'contact']
      const current = sections.find((s) => {
        const el = document.getElementById(s)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 120 && rect.bottom >= 120
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        className={`nav ${scrolled ? 'nav-scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="nav-inner">
          <a
            href="#hero"
            className="nav-logo"
            onClick={(e) => { e.preventDefault(); scrollTo('#hero') }}
          >
            <span className="nav-logo-mark">ED</span>
            <span className="nav-logo-reg" aria-hidden="true" />
            <span className="nav-logo-meta">PORTFOLIO<br />SPECIMEN</span>
          </a>

          <div className="nav-links">
            <span className="nav-contents">CONTENTS</span>
            {navItems.map((item, i) => (
              <motion.a
                key={item.key}
                href={item.href}
                className={`nav-link ${activeSection === item.key ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollTo(item.href) }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.05 * i + 0.3 }}
              >
                <span className="nav-link-num">{item.num}</span>
                <span className="nav-link-label">{item.label}</span>
              </motion.a>
            ))}
          </div>

          <div className="nav-right">
            <div className="nav-lang" role="group" aria-label="Language">
              {['en', 'fr'].map((lng) => (
                <button
                  key={lng}
                  className={`nav-lang-btn ${i18n.language?.startsWith(lng) ? 'active' : ''}`}
                  onClick={() => i18n.changeLanguage(lng)}
                >
                  {lng.toUpperCase()}
                </button>
              ))}
            </div>

            <a
              href="#contact"
              className="nav-enquire desktop-only"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}
            >
              ENQUIRE <ArrowUpRight size={13} />
            </a>

            <button
              className="nav-hamburger"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <AlignRight size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-head">
              <span className="kicker">TABLE OF CONTENTS</span>
              <button className="mobile-close-btn" onClick={() => setIsOpen(false)} aria-label="Close menu">
                <X size={18} />
              </button>
            </div>
            <div className="mobile-nav-inner">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  className="mobile-nav-item"
                  onClick={(e) => { e.preventDefault(); scrollTo(item.href) }}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <span className="mobile-nav-num">§ {item.num}</span>
                  <span className="mobile-nav-label">{item.label}</span>
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="mobile-hire"
                onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.42 }}
              >
                ENQUIRE <ArrowUpRight size={15} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
