import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Download, ArrowRight } from 'lucide-react'
import cvPdf from '../assets/Elyes_Darouich_CV.pdf'
import './Hero.css'

const TICKER_ITEMS = ['Software Engineer', 'AI Engineer', 'Frontend Dev', 'Flutter Expert', 'iOS Developer', 'LangGraph Builder', 'Full-Stack Dev', 'Problem Solver', 'Open to Work']

const Hero = () => {
  const { t } = useTranslation()
  const tickerDouble = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-inner">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="status-dot" />
          // AVAILABLE FOR OPPORTUNITIES
        </motion.div>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          ELYES<br />
          <span className="hero-name-lime">DAROUICH</span>
        </motion.h1>
      </div>

      {/* Lime ticker — full bleed */}
      <motion.div
        className="hero-ticker-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.4 }}
      >
        <div className="hero-ticker-track marquee-track-right">
          {tickerDouble.map((item, i) => (
            <span key={i} className="hero-ticker-item">
              {item}
              <span className="hero-ticker-sep"> × </span>
            </span>
          ))}
        </div>
      </motion.div>

      <div className="container">
        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-bio-block">
            <p className="hero-bio">{t('hero.description')}</p>
            <div className="hero-actions">
              <a
                href="#projects"
                className="btn btn-lime"
                onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                VIEW WORK <ArrowRight size={14} />
              </a>
              <a href={cvPdf} className="btn btn-outline" download="Elyes_Darouich_CV.pdf">
                <Download size={14} /> CV
              </a>
            </div>
          </div>

          <div className="hero-stats">
            {[
              { num: '4', label: t('hero.stats.years') },
              { num: '10+', label: t('hero.stats.projects') },
              { num: '4', label: t('hero.stats.internships') },
            ].map((s, i) => (
              <div key={i} className="hero-stat">
                <span className="hero-stat-num">{s.num}</span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
            ↓
          </motion.span>
          <span>SCROLL</span>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
