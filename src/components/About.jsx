import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { MapPin, Mail, Phone } from 'lucide-react'
import profileImage from '../assets/Elyes Darouich.png'
import './About.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const About = () => {
  const { t } = useTranslation()

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Label */}
        <motion.div className="about-label" {...fadeUp()}>
          <span className="section-label">{t('about.title')}</span>
        </motion.div>

        <div className="about-split">
          {/* Left — photo */}
          <motion.div className="about-photo-col" {...fadeUp(0.1)}>
            <div className="about-photo-wrap">
              <img
                src={profileImage}
                alt="Elyes Darouich"
                className="about-photo"
                onError={(e) => { e.target.style.display = 'none' }}
              />
              <div className="about-photo-border" />
            </div>
            <div className="about-photo-info">
              <div className="about-name-block">
                <span className="about-name">ELYES DAROUICH</span>
                <span className="about-role">// Software Engineer</span>
              </div>
              <div className="about-location">
                <MapPin size={12} />
                <span>{t('about.location')}</span>
              </div>
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div className="about-text-col" {...fadeUp(0.15)}>
            {/* Huge heading */}
            <h2 className="about-heading">
              {t('about.subtitle')}
            </h2>

            <p className="about-bio">{t('about.description')}</p>

            {/* Stats row */}
            <div className="about-stats">
              {[
                { num: '4', label: 'Years at ESPRIT' },
                { num: '10+', label: 'Projects Built' },
                { num: '4', label: 'Internships' },
              ].map((s) => (
                <div key={s.label} className="about-stat">
                  <span className="about-stat-num">{s.num}</span>
                  <span className="about-stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="about-divider" />

            {/* Languages + Contact */}
            <div className="about-meta-row">
              <div className="about-langs">
                <span className="about-meta-label">// {t('about.languages.title')}</span>
                <div className="about-lang-list">
                  {[
                    t('about.languages.arabic'),
                    t('about.languages.french'),
                    t('about.languages.english'),
                  ].map((l) => (
                    <span key={l} className="tag">{l}</span>
                  ))}
                </div>
              </div>

              <div className="about-contact-col">
                <span className="about-meta-label">// Contact</span>
                <a href="mailto:skyrexcgaming@gmail.com" className="about-contact-link">
                  <Mail size={12} /> skyrexcgaming@gmail.com
                </a>
                <a href="tel:+21694906400" className="about-contact-link">
                  <Phone size={12} /> +216 94 906 400
                </a>
              </div>
            </div>

            {/* Interests */}
            <div className="about-interests">
              <span className="about-meta-label">// {t('about.interests.title')}</span>
              <div className="about-interest-tags">
                {[
                  t('about.interests.problemSolving'),
                  t('about.interests.mobileDev'),
                  t('about.interests.hackathons'),
                  t('about.interests.aiTech'),
                ].map((item) => (
                  <span key={item} className="tag tag-lime">{item}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
