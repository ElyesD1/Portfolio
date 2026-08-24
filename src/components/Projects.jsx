import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Github, Play, ArrowUpRight } from 'lucide-react'
import './Projects.css'

const ALL_PROJECTS = [
  {
    key: 'edith',
    num: '00',
    type: 'personal',
    year: '2026',
    tech: ['Python', 'Swift', 'SwiftUI', 'Ollama', 'MLX', 'LoRA', 'SQLite', 'sqlite-vec', 'whisper.cpp', 'ONNX'],
    github: null,
    video: null,
  },
  {
    key: 'smiauditor',
    num: '01',
    type: 'internship',
    year: '2026',
    tech: ['React', 'TypeScript', 'FastAPI', 'Python', 'RAG', 'ChromaDB', 'Ollama', 'PostgreSQL', 'Celery', 'Docker'],
    github: null,
    video: 'https://www.youtube.com/embed/p_5qoQz33Es',
    videoType: 'youtube',
  },
  {
    key: 'sentinelai',
    num: '02',
    type: 'internship',
    year: '2026',
    tech: ['React', 'FastAPI', 'LangGraph', 'Python', 'Celery', 'Redis', 'MongoDB', 'Qdrant', 'Groq', 'Docker'],
    github: null,
    video: 'https://www.youtube.com/embed/iznfuuZudcc',
    videoType: 'youtube',
  },
  {
    key: 'scribeai',
    num: '03',
    type: 'internship',
    year: '2026',
    tech: ['React', 'Flask', 'FastAPI', 'Ollama', 'ChromaDB', 'ElevenLabs', 'Mermaid.js', 'Python'],
    github: null,
    video: 'https://www.youtube.com/embed/v0qGRqt-6O8',
    videoType: 'youtube',
  },
  {
    key: 'zkattest',
    num: '04',
    type: 'personal',
    year: '2026',
    tech: ['Next.js', 'TypeScript', 'Circom', 'snarkjs', 'Groth16', 'Solidity', 'Hyperledger Besu', 'FastAPI', 'Python', 'Docker'],
    github: 'https://github.com/ElyesDarouich/ZK-Attest',
    video: 'https://www.youtube.com/embed/40VL6TgpNg8',
    videoType: 'youtube',
  },
  {
    key: 'agenticvalley',
    num: '05',
    type: 'personal',
    year: '2026',
    tech: ['TypeScript', 'Claude Agent SDK', 'VSCode API', 'Node.js', 'Webview API', 'esbuild', 'Vitest'],
    github: 'https://github.com/ElyesDarouich/Agentic-Valley',
    video: 'https://www.youtube.com/embed/cIxHejuXQAg',
    videoType: 'youtube',
  },
  {
    key: 'claudehive',
    num: '06',
    type: 'personal',
    year: '2026',
    tech: ['TypeScript', 'MCP', 'Supabase Realtime', 'Node.js', 'Unix Sockets', 'VSCode API', 'PostgreSQL'],
    github: 'https://github.com/ElyesDarouich/claude-hive',
    video: null,
  },
  {
    key: 'projectflow',
    num: '07',
    type: 'internship',
    year: '2025',
    tech: ['Flutter', 'NestJS', 'MongoDB', 'Gemini AI', 'Docker', 'WebSocket'],
    github: 'https://github.com/ElyesD1/Project-management-tool-mobile-front',
    video: 'https://www.youtube.com/embed/SQS832EH9Zs',
    videoType: 'youtube',
  },
  {
    key: 'squadlink',
    num: '08',
    type: 'personal',
    year: '2025',
    tech: ['Next.js', 'NestJS', 'Socket.io', 'Riot API'],
    github: 'https://github.com/ElyesD1/SquadLink',
    video: 'https://www.youtube.com/embed/BuduF2vcr3k',
    videoType: 'youtube',
  },
  {
    key: 'riftpedia',
    num: '09',
    type: 'personal',
    year: '2024',
    tech: ['SwiftUI', 'MapKit', 'Riot API'],
    github: 'https://github.com/ElyesD1',
    video: 'https://www.youtube.com/embed/JUjH3DlewF4',
    videoType: 'youtube',
  },
  {
    key: 'languagelearning',
    num: '10',
    type: 'academic',
    year: '2024',
    tech: ['Swift', 'Kotlin', 'NestJS', 'MongoDB'],
    github: 'https://github.com/ElyesD1/Dialex-Front-IOS',
    video: null,
  },
  {
    key: 'smarttravel',
    num: '11',
    type: 'academic',
    year: '2024',
    tech: ['Flutter', 'NestJS', 'Gemini AI'],
    github: 'https://github.com/Tayaa01/Nomadly',
    video: null,
  },
  {
    key: 'employeeleave',
    num: '12',
    type: 'internship',
    year: '2023',
    tech: ['Flutter', 'REST API', 'Firebase'],
    github: null,
    video: null,
  },
  {
    key: 'footballplatform',
    num: '13',
    type: 'academic',
    year: '2023',
    tech: ['Symfony', 'JavaFX', 'MySQL'],
    github: 'https://github.com/rouazayani211/Pi_Symfony',
    video: null,
  },
  {
    key: 'firedetection',
    num: '14',
    type: 'academic',
    year: '2022',
    tech: ['Qt', 'C++', 'Arduino', 'IoT'],
    github: null,
    video: null,
  },
]

const FILTERS = ['all', 'internship', 'academic', 'personal']

// ── Exhibit footage viewer ───────────────────────────────────────────
const ExhibitViewer = ({ video, videoType, title, refLabel }) => {
  const [playing, setPlaying] = useState(false)

  if (!video) {
    return (
      <div className="exh-viewer exh-viewer-empty">
        <span className="exh-vbracket tl" /><span className="exh-vbracket tr" />
        <span className="exh-vbracket bl" /><span className="exh-vbracket br" />
        <div className="exh-vempty">
          <span className="exh-vempty-code">NO FOOTAGE ON FILE</span>
          <span className="exh-vempty-sub">— exhibit documented by record only —</span>
        </div>
        <div className="exh-vbar">
          <span>{refLabel}</span>
          <span>NO DEMO</span>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`exh-viewer${playing ? ' is-playing' : ''}`}
      onClick={() => !playing && setPlaying(true)}
    >
      <span className="exh-vbracket tl" /><span className="exh-vbracket tr" />
      <span className="exh-vbracket bl" /><span className="exh-vbracket br" />

      {playing ? (
        <div className="exh-vmedia">
          {videoType === 'local' ? (
            <video src={video} controls autoPlay className="exh-video" />
          ) : (
            <iframe
              src={`${video}?autoplay=1&rel=0&modestbranding=1`}
              title={`${title} demo`}
              allowFullScreen
              allow="autoplay; fullscreen"
              className="exh-video"
            />
          )}
        </div>
      ) : (
        <div className="exh-vidle">
          <div className="exh-play">
            <span className="exh-play-ring"><Play size={16} fill="currentColor" /></span>
            <span className="exh-play-label">VIEW EXHIBIT FOOTAGE</span>
          </div>
        </div>
      )}

      {!playing && (
        <div className="exh-vbar">
          <span>{refLabel}</span>
          <span className="exh-vbar-tag">DEMO · {videoType === 'local' ? 'MP4' : 'STREAM'}</span>
        </div>
      )}
    </div>
  )
}

// ── Exhibit case file (detail) ───────────────────────────────────────
const ExhibitDetail = ({ project }) => {
  const { t } = useTranslation()
  const features = t(`projects.content.${project.key}.features`, { returnObjects: true })
  const refLabel = `EXH · ${project.num}`

  return (
    <div className="exh-detail-inner">
      <div className="exh-detail-top">
        <span className="exh-detail-ref">{refLabel} — CASE FILE</span>
        <span className="exh-detail-year">{project.year}</span>
      </div>

      <div className="exh-detail-grid">
        <div className="exh-detail-info">
          <div className="exh-detail-titleblock">
            <span className="exh-detail-class">{t(`projects.categories.${project.type}`)}</span>
            <h3 className="exh-detail-title">{t(`projects.content.${project.key}.title`)}</h3>
          </div>

          <p className="prose exh-detail-desc">
            {t(`projects.content.${project.key}.description`)}
          </p>

          {Array.isArray(features) && features.length > 0 && (
            <div className="exh-detail-findings">
              <span className="kicker exh-findings-label">KEY FINDINGS</span>
              <ul className="exh-findings-list">
                {features.slice(0, 4).map((f, i) => (
                  <li key={i}>
                    <span className="exh-findings-bullet">→</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="exh-detail-stack">
            <span className="kicker exh-stack-label">STACK</span>
            <div className="exh-detail-tech">
              {project.tech.map((tech) => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>
          </div>

          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="exh-link">
              <Github size={13} /> VIEW SOURCE <ArrowUpRight size={12} />
            </a>
          )}
        </div>

        <div className="exh-detail-viewer">
          <span className="kicker exh-viewer-label">EXHIBIT FOOTAGE</span>
          <ExhibitViewer
            key={project.key}
            video={project.video}
            videoType={project.videoType}
            title={t(`projects.content.${project.key}.title`)}
            refLabel={refLabel}
          />
        </div>
      </div>
    </div>
  )
}

// ── Main ─────────────────────────────────────────────────────────────
const Projects = () => {
  const { t } = useTranslation()
  const [filter, setFilter] = useState('all')
  const [selectedKey, setSelectedKey] = useState(ALL_PROJECTS[0].key)

  const filtered = ALL_PROJECTS.filter((p) => filter === 'all' || p.type === filter)

  useEffect(() => {
    const isVisible = filtered.some((p) => p.key === selectedKey)
    if (!isVisible && filtered.length > 0) setSelectedKey(filtered[0].key)
  }, [filter]) // eslint-disable-line react-hooks/exhaustive-deps

  const selected = ALL_PROJECTS.find((p) => p.key === selectedKey) || filtered[0]

  const handleFilter = (f) => {
    setFilter(f)
    const next = ALL_PROJECTS.find((p) => f === 'all' || p.type === f)
    if (next) setSelectedKey(next.key)
  }

  return (
    <section id="projects" className="section exh-section">
      <div className="spec">
        {/* Clause rail */}
        <div className="clause-rail">
          <div className="clause-rail-sticky">
            <span className="clause-num">§ 03</span>
            <span className="clause-tick" />
            <span className="clause-name">EXHIBITS</span>
          </div>
        </div>

        <div className="exh-main">
          <motion.header
            className="exh-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="kicker">EXHIBITS / CASE FILES</span>
            <h2 className="exh-title">{t('projects.title')}</h2>
          </motion.header>

          <motion.div
            className="exh-dossier"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Dossier bar */}
            <div className="exh-bar">
              <span className="exh-bar-title">EXHIBIT INDEX</span>
              <span className="exh-bar-count">{String(filtered.length).padStart(2, '0')} FILED</span>
              <div className="exh-filters">
                {FILTERS.map((f) => (
                  <button
                    key={f}
                    onClick={() => handleFilter(f)}
                    className={`exh-filter${filter === f ? ' is-active' : ''}`}
                  >
                    {f === 'all' ? 'ALL' : t(`projects.categories.${f}`)}
                  </button>
                ))}
              </div>
            </div>

            {/* Body: index + case file */}
            <div className="exh-body">
              {/* Index */}
              <div className="exh-index">
                <AnimatePresence mode="popLayout">
                  {filtered.map((p) => {
                    const active = selectedKey === p.key
                    return (
                      <motion.button
                        key={p.key}
                        className={`exh-index-item${active ? ' is-active' : ''}`}
                        onClick={() => setSelectedKey(p.key)}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -8 }}
                        transition={{ duration: 0.18 }}
                        layout
                      >
                        <span className="exh-index-num">{p.num}</span>
                        <span className="exh-index-name">{t(`projects.content.${p.key}.title`)}</span>
                        <span className="exh-index-year">{p.year}</span>
                      </motion.button>
                    )
                  })}
                </AnimatePresence>
              </div>

              {/* Case file */}
              <div className="exh-detail">
                <AnimatePresence mode="wait">
                  {selected && (
                    <motion.div
                      key={selected.key}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.22 }}
                      style={{ height: '100%' }}
                    >
                      <ExhibitDetail project={selected} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Build-time prerender only: the interactive dossier mounts one
                case file at a time, so the full archive is emitted here for
                crawlers and AI scrapers. Never rendered in the browser. */}
            {typeof window === 'undefined' && (
              <div className="exh-ssr-archive">
                {ALL_PROJECTS.map((p) => (
                  <ExhibitDetail key={p.key} project={p} />
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Projects
