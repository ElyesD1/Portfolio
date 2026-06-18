import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Download, ArrowRight, ArrowDown } from 'lucide-react'
import cvPdf from '../assets/Elyes_Darouich_CV.pdf'
import './Hero.css'

const ROLE_STRIP = [
  'AGENTIC AI', 'MULTI-AGENT SYSTEMS', 'RAG / LLM PIPELINES', 'MCP',
  'CLAUDE AGENT SDK', 'ZERO-KNOWLEDGE', 'FULL-STACK', 'REACT', 'FASTAPI', 'PRODUCT ENGINEERING',
]

// clip-path line reveal — the single motion primitive of the dossier
const lineReveal = (delay = 0) => ({
  initial: { clipPath: 'inset(-2% 0 100% 0)', y: '0.36em' },
  animate: { clipPath: 'inset(-12% 0 -14% 0)', y: 0 },
  transition: { duration: 0.95, delay, ease: [0.22, 1, 0.36, 1] },
})

const fade = (delay = 0, y = 14) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

const Hero = () => {
  const { t } = useTranslation()
  const strip = [...ROLE_STRIP, ...ROLE_STRIP]

  const findings = [
    { k: 'YEARS @ ESPRIT', v: '05' },
    { k: 'PROJECTS SHIPPED', v: '14' },
    { k: 'INTERNSHIPS', v: '05' },
  ]

  return (
    <section id="hero" className="hero-section">
      {/* Print crop marks — frame the cover as a specimen sheet */}
      <span className="hero-crop hero-crop-tl" aria-hidden="true" />
      <span className="hero-crop hero-crop-tr" aria-hidden="true" />
      <span className="hero-crop hero-crop-bl" aria-hidden="true" />
      <span className="hero-crop hero-crop-br" aria-hidden="true" />

      <div className="spec hero-spec">
        {/* Clause rail — document spine with measurement ruler */}
        <div className="clause-rail">
          <div className="clause-rail-sticky">
            <span className="clause-num">§ 00</span>
            <span className="clause-ruler" aria-hidden="true">
              {Array.from({ length: 7 }).map((_, i) => (
                <span key={i} className={`clause-ruler-tick${i % 2 === 0 ? ' is-major' : ''}`} />
              ))}
            </span>
            <span className="clause-name">COVER</span>
          </div>
        </div>

        {/* Main column */}
        <div className="hero-main">
          {/* Top register line */}
          <motion.div className="hero-register" {...fade(0.05)}>
            <span className="kicker">PORTFOLIO&nbsp;SPECIMEN</span>
            <span className="hero-register-rule" />
            <span className="kicker">REF.&nbsp;ED—2026 · TUNIS, TN</span>
          </motion.div>

          {/* Masthead */}
          <div className="hero-masthead">
            <motion.span className="hero-kicker" {...fade(0.15)}>
              <span className="hero-reg-mark" aria-hidden="true" />
              {t('hero.title')} — {t('hero.subtitle')}
            </motion.span>

            <h1 className="hero-name" aria-label="Elyes Darouich">
              <span className="hero-name-line">
                <motion.span className="hero-name-inner" {...lineReveal(0.22)}>ELYES</motion.span>
              </span>
              <span className="hero-name-line">
                <motion.span className="hero-name-inner hero-name-outline" {...lineReveal(0.34)}>
                  DAROUICH
                </motion.span>
              </span>
            </h1>

            {/* Certified plate mark */}
            <motion.span className="hero-plate" {...fade(0.46)} aria-hidden="true">
              <span className="hero-plate-check">✓</span>
              <span className="hero-plate-txt">CERTIFIED<br />PLATE&nbsp;N°01</span>
            </motion.span>
          </div>

          <motion.div
            className="rule hero-rule"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Lower register: brief + findings */}
          <div className="hero-lower">
            <motion.div className="hero-brief" {...fade(0.6)}>
              <p className="prose hero-bio">{t('hero.description')}</p>
              <div className="hero-actions">
                <a
                  href="#projects"
                  className="btn btn-lime"
                  onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                >
                  VIEW EXHIBITS <ArrowRight size={13} />
                </a>
                <a href={cvPdf} className="btn btn-outline" download="Elyes_Darouich_CV.pdf">
                  <Download size={13} /> CV
                </a>
              </div>
            </motion.div>

            {/* FINDINGS — audit summary of the subject */}
            <motion.div className="hero-findings" {...fade(0.7)}>
              <span className="hero-find-bracket tl" aria-hidden="true" />
              <span className="hero-find-bracket tr" aria-hidden="true" />
              <span className="hero-find-bracket bl" aria-hidden="true" />
              <span className="hero-find-bracket br" aria-hidden="true" />

              <div className="hero-findings-head">
                <span className="kicker">FINDINGS / SUMMARY</span>
                <span className="verdict verdict-pass">PASS</span>
              </div>

              <div className="hero-find-row hero-find-status">
                <span className="hero-find-k">STATUS</span>
                <span className="hero-find-status-v">
                  <span className="status-dot" /> AVAILABLE FOR WORK
                </span>
              </div>

              {findings.map((f) => (
                <div key={f.k} className="hero-find-row">
                  <span className="hero-find-k">{f.k}</span>
                  <span className="hero-find-v">{f.v}</span>
                </div>
              ))}

              <div className="hero-find-row hero-find-conf-row">
                <span className="hero-find-k">CONFIDENCE</span>
                <span className="hero-find-conf">
                  <span className="hero-conf-bar"><span className="hero-conf-fill" /></span>
                  98%
                </span>
              </div>

              {/* Certified label footer — barcode */}
              <div className="hero-find-foot">
                <span className="hero-barcode" aria-hidden="true" />
                <span className="hero-find-ref">ED·2026·TN</span>
              </div>
            </motion.div>
          </div>

          {/* Running specimen strip */}
          <motion.div className="hero-strip" {...fade(0.85)}>
            <div className="hero-strip-track marquee-track-right">
              {strip.map((item, i) => (
                <span key={i} className="hero-strip-item">
                  {item}<span className="hero-strip-sep">/</span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        className="hero-scroll"
        {...fade(1)}
        onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) }}
      >
        <span className="hero-scroll-clause">§ 01 — SUBJECT</span>
        <motion.span
          className="hero-scroll-arrow"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.span>
      </motion.a>
    </section>
  )
}

export default Hero
