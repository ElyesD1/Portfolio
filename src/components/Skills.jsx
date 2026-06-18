import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import './Skills.css'

const DOMAINS = [
  { ref: 'C·01', name: 'AI Agents & Orchestration', level: 'LEAD', score: 5, skills: ['LangGraph', 'Multi-agent', 'MCP', 'Claude Agent SDK', 'Tool-use', 'Task Delegation'] },
  { ref: 'C·02', name: 'RAG & LLM Engineering', level: 'LEAD', score: 5, skills: ['RAG Pipelines', 'Vector Search', 'Embeddings', 'Guardrails', 'Prompt Engineering', 'Llama · Groq · Ollama'] },
  { ref: 'C·03', name: 'Frontend & Mobile', level: 'LEAD', score: 5, skills: ['React', 'Next.js', 'TypeScript', 'Flutter', 'SwiftUI', 'Kotlin'] },
  { ref: 'C·04', name: 'Backend & APIs', level: 'ADVANCED', score: 4, skills: ['FastAPI', 'NestJS', 'Flask', 'Celery', 'WebSockets', 'REST'] },
  { ref: 'C·05', name: 'Data & Infrastructure', level: 'ADVANCED', score: 4, skills: ['PostgreSQL', 'MongoDB', 'Redis', 'ChromaDB', 'Qdrant', 'Docker'] },
  { ref: 'C·06', name: 'Applied Crypto / ZK', level: 'PROFICIENT', score: 3, skills: ['Zero-Knowledge', 'Groth16', 'Circom', 'snarkjs', 'Solidity'] },
]

const METHODS = ['Clean Architecture', 'Agile / Scrum', 'TDD', 'UML', 'CI/CD']

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

const STACK = [
  {
    label: 'LANGUAGES',
    items: [
      { n: 'TypeScript', i: 'typescript/typescript-original' },
      { n: 'JavaScript', i: 'javascript/javascript-original' },
      { n: 'Python', i: 'python/python-original' },
      { n: 'Java', i: 'java/java-original' },
      { n: 'C++', i: 'cplusplus/cplusplus-original' },
      { n: 'C', i: 'c/c-original' },
      { n: 'Swift', i: 'swift/swift-original' },
      { n: 'Kotlin', i: 'kotlin/kotlin-original' },
      { n: 'Dart', i: 'dart/dart-original' },
      { n: 'PHP', i: 'php/php-original' },
    ],
  },
  {
    label: 'FRONTEND & MOBILE',
    items: [
      { n: 'React', i: 'react/react-original' },
      { n: 'Next.js', i: 'nextjs/nextjs-original', dark: true },
      { n: 'Flutter', i: 'flutter/flutter-original' },
      { n: 'Tailwind', i: 'tailwindcss/tailwindcss-original' },
      { n: 'HTML5', i: 'html5/html5-original' },
      { n: 'CSS3', i: 'css3/css3-original' },
    ],
  },
  {
    label: 'BACKEND',
    items: [
      { n: 'FastAPI', i: 'fastapi/fastapi-original' },
      { n: 'NestJS', i: 'nestjs/nestjs-original' },
      { n: 'Flask', i: 'flask/flask-original', dark: true },
      { n: 'Node.js', i: 'nodejs/nodejs-original' },
      { n: 'Spring', i: 'spring/spring-original' },
      { n: 'Symfony', i: 'symfony/symfony-original', dark: true },
    ],
  },
  {
    label: 'DATA & STORAGE',
    items: [
      { n: 'PostgreSQL', i: 'postgresql/postgresql-original' },
      { n: 'MongoDB', i: 'mongodb/mongodb-original' },
      { n: 'MySQL', i: 'mysql/mysql-original' },
      { n: 'Redis', i: 'redis/redis-original' },
      { n: 'Firebase', i: 'firebase/firebase-original' },
    ],
  },
  {
    label: 'DEVOPS & CHAIN',
    items: [
      { n: 'Docker', i: 'docker/docker-original' },
      { n: 'Git', i: 'git/git-original' },
      { n: 'Linux', i: 'linux/linux-original' },
      { n: 'Nginx', i: 'nginx/nginx-original' },
      { n: 'Solidity', i: 'solidity/solidity-original', dark: true },
    ],
  },
]

const SUMMARY = [
  { k: 'DOMAINS ASSESSED', v: '06' },
  { k: 'TECHNOLOGIES', v: '40+' },
  { k: 'PRIMARY FOCUS', v: 'AGENTIC AI · RAG' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const Meter = ({ score }) => (
  <span className="skl-meter" role="img" aria-label={`Proficiency ${score} of 5`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <motion.span
        key={i}
        className={`skl-seg${i < score ? ' is-on' : ''}`}
        initial={{ scaleY: 0.25, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 + i * 0.06, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    ))}
  </span>
)

const Skills = () => {
  const { t } = useTranslation()

  return (
    <section id="skills" className="section skills-section">
      <div className="spec">
        {/* Clause rail */}
        <div className="clause-rail">
          <div className="clause-rail-sticky">
            <span className="clause-num">§ 04</span>
            <span className="clause-tick" />
            <span className="clause-name">COMPETENCIES</span>
          </div>
        </div>

        <div className="skills-main">
          <motion.header className="skills-header" {...fadeUp()}>
            <span className="kicker">COMPETENCY ASSESSMENT</span>
            <h2 className="skills-title">{t('skills.title')}</h2>
          </motion.header>

          {/* Summary strip */}
          <motion.div className="skl-summary" {...fadeUp(0.05)}>
            {SUMMARY.map((s) => (
              <div key={s.k} className="skl-sum-cell">
                <span className="skl-sum-k">{s.k}</span>
                <span className="skl-sum-v">{s.v}</span>
              </div>
            ))}
          </motion.div>

          {/* Capability scorecard */}
          <motion.div className="skl-card" {...fadeUp(0.1)}>
            <div className="skl-card-head">
              <span className="kicker">CAPABILITY SCORECARD</span>
              <span className="kicker skl-card-scale">PROFICIENCY · ▮▮▮▮▮ / 05</span>
            </div>

            {DOMAINS.map((d) => (
              <div key={d.ref} className="skl-row">
                <div className="skl-row-head">
                  <span className="skl-ref">{d.ref}</span>
                  <h3 className="skl-domain">{d.name}</h3>
                </div>

                <div className="skl-skills">
                  {d.skills.map((s) => (
                    <span key={s} className="skl-skill">{s}</span>
                  ))}
                </div>

                <div className="skl-rating">
                  <Meter score={d.score} />
                  <span className={`skl-level${d.score === 5 ? ' is-lead' : ''}`}>{d.level}</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Stack / toolchain — logo inventory */}
          <motion.div className="skl-stack" {...fadeUp(0.15)}>
            <div className="skl-stack-head">
              <span className="kicker">STACK / TOOLCHAIN</span>
              <span className="kicker skl-stack-count">{String(STACK.length).padStart(2, '0')} GROUPS</span>
            </div>
            {STACK.map((group) => (
              <div key={group.label} className="skl-stack-row">
                <span className="skl-stack-label">{group.label}</span>
                <div className="skl-stack-grid">
                  {group.items.map((it) => (
                    <div key={it.n} className="skl-tech" title={it.n}>
                      <img
                        src={`${DEVICON}/${it.i}.svg`}
                        alt=""
                        className={`skl-tech-icon${it.dark ? ' is-dark' : ''}`}
                        loading="lazy"
                        onError={(e) => { e.target.style.visibility = 'hidden' }}
                      />
                      <span className="skl-tech-name">{it.n}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Methods footer */}
          <motion.div className="skl-foundations" {...fadeUp(0.2)}>
            <span className="kicker skl-foundations-label">METHODS</span>
            <div className="skl-foundations-list">
              {METHODS.map((m) => (
                <span key={m} className="skl-found-item">{m}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
