import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { MapPin, Mail, Phone, Calendar, Code } from 'lucide-react'
import profileImage from '../assets/Elyes Darouich.png'
import './About.css'

const About = () => {
  const { t } = useTranslation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
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

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">{t('about.title')}</h2>
          <p className="section-subtitle">{t('about.subtitle')}</p>
        </motion.div>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Profile Section */}
          <div className="about-grid">
            <motion.div className="about-profile" variants={itemVariants}>
              <div className="profile-card glass">
                <div className="profile-image-container">
                  <div className="profile-rings">
                    <div className="ring ring-1"></div>
                    <div className="ring ring-2"></div>
                  </div>
                  <img
                    src={profileImage}
                    alt="Elyes Darouich"
                    className="profile-image"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="profile-fallback" style={{ display: 'none' }}>
                    <span className="gradient-text">ED</span>
                  </div>
                </div>
                <div className="profile-info">
                  <h3 className="gradient-text">{t('common.name')}</h3>
                  <p className="profile-title">{t('common.title')}</p>
                  <div className="profile-details">
                    <div className="detail-item">
                      <MapPin size={16} />
                      <span>{t('about.location')}</span>
                    </div>
                    <div className="detail-item">
                      <Calendar size={16} />
                      <span>{t('about.age')}</span>
                    </div>
                    <div className="detail-item">
                      <Mail size={16} />
                      <span>{t('about.email')}</span>
                    </div>
                    <div className="detail-item">
                      <Phone size={16} />
                      <span>{t('about.phone')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="about-description" variants={itemVariants}>
              <div className="description-card glass">
                <div className="card-header">
                  <Code className="header-icon" />
                  <h3>About Me</h3>
                </div>
                <p className="description-text">
                  {t('about.description')}
                </p>
                <div className="languages-section">
                  <h4>{t('about.languages.title')}</h4>
                  <div className="languages-grid">
                    <div className="language-item">
                      <span className="language-flag">🇹🇳</span>
                      <span>{t('about.languages.arabic')}</span>
                    </div>
                    <div className="language-item">
                      <span className="language-flag">🇫🇷</span>
                      <span>{t('about.languages.french')}</span>
                    </div>
                    <div className="language-item">
                      <span className="language-flag">🇺🇸</span>
                      <span>{t('about.languages.english')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Interests Section */}
          <motion.div className="interests-section" variants={itemVariants}>
            <div className="interests-card glass">
              <h4 className="gradient-text">{t('about.interests.title')}</h4>
              <div className="interests-grid">
                <div className="interest-item">
                  <span className="interest-emoji">🧩</span>
                  <span>{t('about.interests.problemSolving')}</span>
                </div>
                <div className="interest-item">
                  <span className="interest-emoji">📱</span>
                  <span>{t('about.interests.mobileDev')}</span>
                </div>
                <div className="interest-item">
                  <span className="interest-emoji">🏆</span>
                  <span>{t('about.interests.hackathons')}</span>
                </div>
                <div className="interest-item">
                  <span className="interest-emoji">🤖</span>
                  <span>{t('about.interests.aiTech')}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About