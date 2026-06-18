import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import './Experience.css'

const ITEMS = [
  {
    key: 'talanPfe',
    type: 'internship',
    period: 'Feb – Jun 2026',
    location: 'Tunis, TN',
    tech: ['FastAPI', 'React', 'RAG', 'ChromaDB', 'Ollama', 'PostgreSQL', 'Celery', 'Docker'],
  },
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
    period: '2021 – 2026',
    location: 'Ariana, TN',
    tech: ['Software Architecture', 'AI Integration', 'Full-Stack', 'DevOps'],
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
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const Experience = () => {
  const { t } = useTranslation()

  return (
    <section id="experience" className="section exp-section">
      <div className="spec">
        {/* Clause rail */}
        <div className="clause-rail">
          <div className="clause-rail-sticky">
            <span className="clause-num">§ 02</span>
            <span className="clause-tick" />
            <span className="clause-name">RECORD</span>
          </div>
        </div>

        <div className="exp-main">
          <motion.header className="exp-header" {...fadeUp()}>
            <span className="kicker">RECORD OF SERVICE &amp; EDUCATION</span>
            <h2 className="exp-title-main">{t('experience.title')}</h2>
          </motion.header>

          <div className="exp-log">
            {ITEMS.map((item, i) => {
              const achievements = t(`experience.content.${item.key}.achievements`, { returnObjects: true })
              const isWork = item.type === 'internship'
              const ref = String(i + 1).padStart(2, '0')

              return (
                <motion.article
                  key={item.key}
                  className={`exp-entry ${isWork ? 'exp-entry-work' : 'exp-entry-edu'}`}
                  {...fadeUp(0.04 * i)}
                >
                  {/* Left meta */}
                  <div className="exp-meta">
                    <span className="exp-ref">R · {ref}</span>
                    <span className={`exp-type ${isWork ? 'exp-type-work' : 'exp-type-edu'}`}>
                      {isWork ? t('experience.labels.internship') : t('experience.labels.education')}
                    </span>
                    <span className="exp-period">{item.period}</span>
                    <span className="exp-loc">{item.location}</span>
                  </div>

                  {/* Right body */}
                  <div className="exp-body">
                    <span className="exp-node" aria-hidden="true" />

                    <div className="exp-head">
                      <h3 className="exp-role">{t(`experience.content.${item.key}.title`)}</h3>
                      <span className="exp-company">{t(`experience.content.${item.key}.company`)}</span>
                    </div>

                    <p className="prose exp-desc">{t(`experience.content.${item.key}.description`)}</p>

                    {Array.isArray(achievements) && achievements.length > 0 && (
                      <ul className="exp-log-list">
                        {achievements.slice(0, 5).map((a, j) => (
                          <li key={j}>
                            <span className="exp-bullet">→</span>
                            <span>{a}</span>
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
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
