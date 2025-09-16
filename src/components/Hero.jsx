import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Download, Mail } from 'lucide-react'
import profileImage from '../assets/Elyes Darouich.png'
import './Hero.css'

const Hero = () => {
  const { t } = useTranslation()
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  
  const dynamicWords = [
    'Software Engineer',
    'Mobile Developer',
    'Flutter Expert', 
    'iOS Developer',
    'Full-Stack Developer',
    'Problem Solver'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="floating-shapes">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`floating-shape shape-${i + 1}`}
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: i * 0.5 }}
            />
          ))}
        </div>
      </div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image Placeholder */}
          <motion.div
            className="hero-image"
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="image-placeholder glass">
              <div className="image-ring ring-1"></div>
              <div className="image-ring ring-2"></div>
              <div className="profile-img">
                <img 
                  src={profileImage} 
                  alt="Elyes Darouich" 
                  className="profile-photo"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <span className="gradient-text profile-fallback" style={{ display: 'none' }}>ED</span>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="hero-text">
            <motion.p 
              className="hero-greeting"
              variants={itemVariants}
            >
              {t('hero.greeting')} 👋
            </motion.p>

            <motion.h1 
              className="hero-name"
              variants={itemVariants}
            >
              <span className="gradient-text">{t('hero.name')}</span>
            </motion.h1>

            <motion.div 
              className="hero-title-container"
              variants={itemVariants}
            >
              <h2 className="hero-title">
                <span className="static-text">{t('hero.title')} & </span>
                <motion.span
                  key={currentWordIndex}
                  className="dynamic-text gradient-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {dynamicWords[currentWordIndex]}
                </motion.span>
              </h2>
            </motion.div>

            <motion.p 
              className="hero-description"
              variants={itemVariants}
            >
              {t('hero.description')}
            </motion.p>

            <motion.div 
              className="hero-stats"
              variants={itemVariants}
            >
              <div className="stat">
                <span className="stat-number gradient-text">4</span>
                <span className="stat-label">{t('hero.stats.years')}</span>
              </div>
              <div className="stat">
                <span className="stat-number gradient-text">8+</span>
                <span className="stat-label">{t('hero.stats.projects')}</span>
              </div>
              <div className="stat">
                <span className="stat-number gradient-text">3</span>
                <span className="stat-label">{t('hero.stats.internships')}</span>
              </div>
            </motion.div>

            <motion.div 
              className="hero-actions"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <Mail size={20} />
                {t('hero.cta')}
              </motion.a>

              <motion.a
                href="/cv-elyes-darouich.pdf"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                download
              >
                <Download size={20} />
                {t('hero.downloadCV')}
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero