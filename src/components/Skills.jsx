import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import './Skills.css'

const ROW1 = [
  { name: 'Flutter', icon: 'flutter' },
  { name: 'Swift', icon: 'swift' },
  { name: 'Kotlin', icon: 'kotlin' },
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'NestJS', icon: 'nestjs' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'Java', icon: 'java' },
  { name: 'Python', icon: 'python' },
]

const ROW2 = [
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Git', icon: 'git' },
  { name: 'Redis', icon: 'redis' },
  { name: 'FastAPI', icon: 'fastapi' },
  { name: 'Spring Boot', icon: 'spring' },
  { name: 'Linux', icon: 'linux' },
  { name: 'C++', icon: 'cplusplus' },
  { name: 'Firebase', icon: 'firebase' },
]

const CATEGORIES = [
  { key: 'mobile', skills: ['Flutter', 'SwiftUI', 'UIKit', 'Kotlin', 'React Native'] },
  { key: 'web', skills: ['React', 'Next.js', 'NestJS', 'FastAPI', 'Flask', 'Spring Boot'] },
  { key: 'databases', skills: ['MongoDB', 'MySQL', 'Firebase', 'Qdrant', 'ChromaDB', 'Redis'] },
  { key: 'tools', skills: ['LangGraph', 'Docker', 'Celery', 'Ollama', 'Git/GitHub', 'Linux'] },
]

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

const SkillPill = ({ name, icon }) => (
  <div className="skill-pill">
    <img
      src={`${DEVICON_BASE}/${icon}/${icon}-original.svg`}
      alt={name}
      className="skill-icon"
      onError={(e) => { e.target.style.display = 'none' }}
      loading="lazy"
    />
    <span>{name}</span>
  </div>
)

const Skills = () => {
  const { t } = useTranslation()
  const row1d = [...ROW1, ...ROW1]
  const row2d = [...ROW2, ...ROW2]

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Expertise</span>
          <h2 className="skills-header-title">{t('skills.title')}</h2>
        </motion.div>
      </div>

      <motion.div
        className="marquee-wrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <div className="marquee-row">
          <div className="marquee-track marquee-track-right">
            {row1d.map((s, i) => <SkillPill key={`r1-${i}`} {...s} />)}
          </div>
        </div>
        <div className="marquee-row">
          <div className="marquee-track marquee-track-left">
            {row2d.map((s, i) => <SkillPill key={`r2-${i}`} {...s} />)}
          </div>
        </div>
      </motion.div>

      <div className="container">
        <motion.div
          className="skills-cat-grid"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          {CATEGORIES.map((cat) => (
            <div key={cat.key} className="skills-cat-card">
              <h4 className="skills-cat-title">{t(`skills.categories.${cat.key}`)}</h4>
              <div className="skills-cat-tags">
                {cat.skills.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
