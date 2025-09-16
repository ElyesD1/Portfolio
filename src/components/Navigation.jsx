import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Menu, X, Globe, Code, Zap } from 'lucide-react'
import './Navigation.css'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { t, i18n } = useTranslation()

  const navItems = [
    { key: 'about', href: '#about', label: t('nav.about') },
    { key: 'experience', href: '#experience', label: t('nav.experience') },
    { key: 'projects', href: '#projects', label: t('nav.projects') },
    { key: 'skills', href: '#skills', label: t('nav.skills') },
    { key: 'contact', href: '#contact', label: t('nav.contact') }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 50)

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <motion.nav
      className={`nav ${scrolled ? 'nav-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="nav-container">
        {/* Logo */}
        <motion.a
          href="#hero"
          className="nav-logo"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#hero')
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="logo-container">
            <div className="logo-circle-main">
              {/* Animated background rings */}
              <motion.div 
                className="logo-ring logo-ring-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="logo-ring logo-ring-2"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Central logo content */}
              <div className="logo-content">
                <div className="logo-initials">
                  <span className="gradient-text">E</span>
                  <motion.div 
                    className="logo-separator"
                    animate={{ scaleX: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Code size={12} />
                  </motion.div>
                  <span className="gradient-text">D</span>
                </div>
                
                {/* Floating particles */}
                <motion.div 
                  className="logo-particle logo-particle-1"
                  animate={{ 
                    y: [-2, -6, -2],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 0
                  }}
                >
                  <Zap size={8} />
                </motion.div>
                
                <motion.div 
                  className="logo-particle logo-particle-2"
                  animate={{ 
                    x: [2, 6, 2],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <div className="particle-dot" />
                </motion.div>
                
                <motion.div 
                  className="logo-particle logo-particle-3"
                  animate={{ 
                    x: [-2, -6, -2],
                    y: [1, 3, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2.8, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <div className="particle-dot" />
                </motion.div>
              </div>
              
              {/* Hover effect overlay */}
              <motion.div 
                className="logo-glow"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            {/* Logo text */}
            <motion.div 
              className="logo-text"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span>Elyes</span>
            </motion.div>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="nav-links desktop-only">
          {navItems.map((item, index) => (
            <motion.a
              key={item.key}
              href={item.href}
              className={`nav-link ${activeSection === item.key ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.href)
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Language Toggle & Mobile Menu */}
        <div className="nav-actions">
          <motion.button
            className="language-toggle-btn"
            onClick={toggleLanguage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={`Switch to ${i18n.language === 'en' ? 'French' : 'English'}`}
          >
            <Globe size={20} />
            <span>{i18n.language.toUpperCase()}</span>
          </motion.button>

          <motion.button
            className="mobile-menu-btn mobile-only"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mobile-nav-links">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.key}
                    href={item.href}
                    className={`mobile-nav-link ${activeSection === item.key ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation