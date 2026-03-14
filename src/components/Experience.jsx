import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import './Experience.css'

const ITEMS = [
  {
    key: 'talan',
    type: 'internship',
    period: 'Jul – Sep 2025',
    location: 'Tunis, TN',
    tech: ['Flutter', 'NestJS', 'MongoDB', 'WebSockets', 'Gemini AI', 'Docker'],
  },
  {
    key: 'vatech2023',
    type: 'internship',
    period: 'Summer 2023',
    location: 'Tunis, TN',
    tech: ['Flutter', 'REST API', 'Firebase', 'Push Notifications'],
  },
  {
    key: 'vatech2022',
    type: 'internship',
    period: 'Summer 2022',
    location: 'Tunis, TN',
    tech: ['Team Collaboration', 'Project Management'],
  },
  {
    key: 'esprit',
    type: 'education',
    period: '2021 – Present',
    location: 'Ariana, TN',
    tech: ['Mobile Dev', 'Software Architecture', 'AI Integration', 'DevOps'],
  },
  {
    key: 'bac',
    type: 'education',
    period: '2020 – 2021',
    location: 'Bizerte, TN',
    tech: ['CS', 'Mathematics', 'Programming Fundamentals'],
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
})

const Experience = () => {
  const { t } = useTranslation()

  return (
    <section id="experience" className="section exp-section">
      <div className="container">
        <motion.div className="exp-header" {...fadeUp()}>
          <span className="section-label">Career</span>
          <h2 className="exp-title-main">{t('experience.title')}</h2>
        </motion.div>

        {/* Changelog-style list */}
        <div className="exp-log">
          {ITEMS.map((item, i) => {
            const achievements = t(`experience.content.${item.key}.achievements`, { returnObjects: true })
            const isWork = item.type === 'internship'

            return (
              <motion.div
                key={item.key}
                className={`exp-entry ${isWork ? 'exp-entry-work' : 'exp-entry-edu'}`}
                {...fadeUp(i * 0.07)}
              >
                {/* Left: type + period */}
                <div className="exp-entry-meta">
                  <span className={`exp-type-tag ${isWork ? 'exp-type-work' : 'exp-type-edu'}`}>
                    {isWork ? 'WORK' : 'EDU'}
                  </span>
                  <span className="exp-period">{item.period}</span>
                  <span className="exp-loc">{item.location}</span>
                </div>

                {/* Right: content */}
                <div className="exp-entry-body">
                  <div className="exp-entry-head">
                    <h3 className="exp-role">{t(`experience.content.${item.key}.title`)}</h3>
                    <span className="exp-company">@ {t(`experience.content.${item.key}.company`)}</span>
                  </div>

                  <p className="exp-desc">{t(`experience.content.${item.key}.description`)}</p>

                  {Array.isArray(achievements) && achievements.length > 0 && (
                    <ul className="exp-achievements">
                      {achievements.slice(0, 4).map((a, j) => (
                        <li key={j}>
                          <span className="exp-bullet">→</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="exp-tech-wrap">
                    {item.tech.map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
