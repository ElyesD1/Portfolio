import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Mail, Phone } from 'lucide-react'
import profileImage from '../assets/Elyes Darouich.png'
import './About.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

const About = () => {
  const { t } = useTranslation()

  const particulars = [
    { k: 'NAME', v: 'Elyes Darouich' },
    { k: 'CLASSIFICATION', v: 'AI & Full-Stack Engineer' },
    { k: 'INSTITUTION', v: 'ESPRIT — Eng. Cycle ’26' },
    { k: 'BASED IN', v: t('about.location') },
    { k: 'DATE OF BIRTH', v: '07 · 03 · 2002' },
    { k: 'AGE', v: t('about.age') },
  ]

  const langs = [
    { raw: t('about.languages.arabic'), pct: 100 },
    { raw: t('about.languages.french'), pct: 72 },
    { raw: t('about.languages.english'), pct: 92 },
  ].map((l) => {
    const [name, ...rest] = l.raw.split(/\s[–-]\s/)
    return { name, level: rest.join(' — '), pct: l.pct }
  })

  const interests = [
    t('about.interests.problemSolving'),
    t('about.interests.mobileDev'),
    t('about.interests.hackathons'),
    t('about.interests.aiTech'),
  ]

  return (
    <section id="about" className="section about-section">
      <div className="spec">
        {/* Clause rail */}
        <div className="clause-rail">
          <div className="clause-rail-sticky">
            <span className="clause-num">§ 01</span>
            <span className="clause-tick" />
            <span className="clause-name">SUBJECT</span>
          </div>
        </div>

        <div className="about-main">
          <motion.header className="about-head" {...fadeUp()}>
            <span className="kicker">SUBJECT PROFILE</span>
            <h2 className="about-title">{t('about.subtitle')}</h2>
          </motion.header>

          <motion.div className="rule about-head-rule" {...fadeUp(0.05)} />

          <div className="about-grid">
            {/* Identification photo */}
            <motion.figure className="about-id" {...fadeUp(0.1)}>
              <div className="about-photo-wrap">
                <img
                  src={profileImage}
                  alt="Elyes Darouich"
                  className="about-photo"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
                <span className="about-photo-bracket tl" aria-hidden="true" />
                <span className="about-photo-bracket tr" aria-hidden="true" />
                <span className="about-photo-bracket bl" aria-hidden="true" />
                <span className="about-photo-bracket br" aria-hidden="true" />
                <span className="about-photo-stamp">FIG. A</span>
              </div>
              <figcaption className="about-id-cap">
                <span className="about-id-cap-line">IDENTIFICATION — ELYES DAROUICH</span>
                <span className="about-id-cap-ref">REF · ED·SUBJ·2026</span>
              </figcaption>
            </motion.figure>

            {/* Profile */}
            <div className="about-profile">
              <motion.p className="prose about-bio" {...fadeUp(0.15)}>
                {t('about.description')}
              </motion.p>

              {/* Particulars ledger */}
              <motion.div className="about-block" {...fadeUp(0.2)}>
                <span className="kicker about-block-label">PARTICULARS</span>
                <div className="about-particulars">
                  {particulars.map((p) => (
                    <div key={p.k} className="about-part-row">
                      <span className="about-part-k">{p.k}</span>
                      <span className="about-part-dots" />
                      <span className="about-part-v">{p.v}</span>
                    </div>
                  ))}
                  <div className="about-part-row">
                    <span className="about-part-k">STATUS</span>
                    <span className="about-part-dots" />
                    <span className="verdict verdict-pass about-part-status">AVAILABLE</span>
                  </div>
                </div>
              </motion.div>

              {/* Languages */}
              <motion.div className="about-block" {...fadeUp(0.25)}>
                <span className="kicker about-block-label">{t('about.languages.title')}</span>
                <div className="about-langs">
                  {langs.map((l) => (
                    <div key={l.name} className="about-lang-row">
                      <span className="about-lang-name">{l.name}</span>
                      <span className="about-lang-bar">
                        <span className="about-lang-fill" style={{ width: `${l.pct}%` }} />
                      </span>
                      <span className="about-lang-level">{l.level}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Interests + contact */}
              <motion.div className="about-foot" {...fadeUp(0.3)}>
                <div className="about-block">
                  <span className="kicker about-block-label">{t('about.interests.title')}</span>
                  <div className="about-interest-tags">
                    {interests.map((item) => (
                      <span key={item} className="tag tag-lime">{item}</span>
                    ))}
                  </div>
                </div>
                <div className="about-contact-col">
                  <span className="kicker about-block-label">DIRECT</span>
                  <a href="mailto:elyes.darouich@esprit.tn" className="about-contact-link">
                    <Mail size={12} /> elyes.darouich@esprit.tn
                  </a>
                  <a href="mailto:elyes.darouich@talan.com" className="about-contact-link">
                    <Mail size={12} /> elyes.darouich@talan.com
                  </a>
                  <a href="mailto:elyes.darouich1@gmail.com" className="about-contact-link">
                    <Mail size={12} /> elyes.darouich1@gmail.com
                  </a>
                  <a href="tel:+21694906400" className="about-contact-link">
                    <Phone size={12} /> +216 94 906 400
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
