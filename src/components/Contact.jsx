import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Github, Linkedin, Facebook, Instagram, ArrowUpRight } from 'lucide-react'
import './Contact.css'

const SOCIALS = [
  { icon: <Github size={15} />, label: 'GitHub', href: 'https://github.com/ElyesD1' },
  { icon: <Linkedin size={15} />, label: 'LinkedIn', href: 'https://linkedin.com/in/elyes-darouich' },
  { icon: <Facebook size={15} />, label: 'Facebook', href: 'https://www.facebook.com/elyes.darouich.7/' },
  { icon: <Instagram size={15} />, label: 'Instagram', href: 'https://www.instagram.com/elyes_darouich/' },
]

const CORRESPONDENCE = [
  { k: 'EMAIL — PERSONAL', v: 'elyes.darouich1@gmail.com', href: 'mailto:elyes.darouich1@gmail.com' },
  { k: 'EMAIL — ACADEMIC', v: 'elyes.darouich@esprit.tn', href: 'mailto:elyes.darouich@esprit.tn' },
  { k: 'DIRECT LINE', v: '+216 94 906 400', href: 'tel:+21694906400' },
  { k: 'LOCATION', v: 'Bizerte / Tunis, TN', href: null },
]

const fade = (delay = 0, y = 24) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

const Contact = () => {
  const { t } = useTranslation()

  return (
    <section id="contact" className="section contact-section">
      <div className="spec">
        {/* Clause rail */}
        <div className="clause-rail">
          <div className="clause-rail-sticky">
            <span className="clause-num">§ 06</span>
            <span className="clause-tick" />
            <span className="clause-name">ENQUIRY</span>
          </div>
        </div>

        <div className="contact-main">
          <motion.header className="contact-heading" {...fade()}>
            <span className="kicker">ENQUIRY / SIGN-OFF</span>
            <h2 className="contact-title">
              <span className="contact-title-line">AVAILABLE</span>
              <span className="contact-title-line">FOR <span className="contact-title-lime">WORK</span></span>
            </h2>
            <p className="prose contact-sub">{t('contact.description')}</p>
          </motion.header>

          <motion.div className="rule contact-rule" {...fade(0.05)} />

          <div className="contact-grid">
            {/* Correspondence ledger */}
            <motion.div className="contact-ledger" {...fade(0.1)}>
              <span className="kicker contact-block-label">CORRESPONDENCE</span>
              <div className="contact-rows">
                {CORRESPONDENCE.map((c) => (
                  <div key={c.k} className="contact-row">
                    <span className="contact-row-k">{c.k}</span>
                    <span className="contact-row-dots" />
                    {c.href ? (
                      <a href={c.href} className="contact-row-v contact-row-link">
                        {c.v}<ArrowUpRight size={12} className="contact-row-arrow" />
                      </a>
                    ) : (
                      <span className="contact-row-v">{c.v}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Connect + sign-off */}
            <motion.div className="contact-side" {...fade(0.15)}>
              <div className="contact-block">
                <span className="kicker contact-block-label">CONNECT</span>
                <div className="contact-socials">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="contact-social-link"
                    >
                      {s.icon}<span>{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Sign-off stamp */}
              <div className="contact-signoff">
                <span className="contact-signoff-bracket tl" aria-hidden="true" />
                <span className="contact-signoff-bracket br" aria-hidden="true" />
                <div className="contact-signoff-head">
                  <span className="kicker">END OF DOSSIER</span>
                  <span className="verdict verdict-pass">PASS</span>
                </div>
                <div className="contact-signoff-body">
                  <span className="contact-signoff-mark">ED</span>
                  <div className="contact-signoff-meta">
                    <span>REF · ED—2026 · TUNIS, TN</span>
                    <span>STATUS · OPEN TO OPPORTUNITIES</span>
                    <span>VERIFIED · 2026</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
