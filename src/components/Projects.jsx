import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Github } from 'lucide-react'
import './Projects.css'

const ALL_PROJECTS = [
  {
    key: 'sentinelai',
    num: '01',
    type: 'internship',
    year: '2026',
    tech: ['React', 'FastAPI', 'LangGraph', 'Python', 'Celery', 'Redis', 'MongoDB', 'Qdrant', 'Groq', 'Docker'],
    github: null,
    video: 'https://www.youtube.com/embed/iznfuuZudcc',
    videoType: 'youtube',
  },
  {
    key: 'scribeai',
    num: '02',
    type: 'internship',
    year: '2026',
    tech: ['React', 'Flask', 'FastAPI', 'Ollama', 'ChromaDB', 'ElevenLabs', 'Mermaid.js', 'Python'],
    github: null,
    video: 'https://www.youtube.com/embed/v0qGRqt-6O8',
    videoType: 'youtube',
  },
  {
    key: 'projectflow',
    num: '03',
    type: 'internship',
    year: '2025',
    tech: ['Flutter', 'NestJS', 'MongoDB', 'Gemini AI', 'Docker', 'WebSocket'],
    github: 'https://github.com/ElyesD1/Project-management-tool-mobile-front',
    video: 'https://www.youtube.com/embed/SQS832EH9Zs',
    videoType: 'youtube',
  },
  {
    key: 'squadlink',
    num: '04',
    type: 'personal',
    year: '2025',
    tech: ['Next.js', 'NestJS', 'Socket.io', 'Riot API'],
    github: 'https://github.com/ElyesD1/SquadLink',
    video: 'https://www.youtube.com/embed/BuduF2vcr3k',
    videoType: 'youtube',
  },
  {
    key: 'riftpedia',
    num: '05',
    type: 'personal',
    year: '2024',
    tech: ['SwiftUI', 'MapKit', 'Riot API'],
    github: 'https://github.com/ElyesD1',
    video: 'https://www.youtube.com/embed/JUjH3DlewF4',
    videoType: 'youtube',
  },
  {
    key: 'languagelearning',
    num: '06',
    type: 'academic',
    year: '2024',
    tech: ['Swift', 'Kotlin', 'NestJS', 'MongoDB'],
    github: 'https://github.com/ElyesD1/Dialex-Front-IOS',
    video: null,
  },
  {
    key: 'smarttravel',
    num: '07',
    type: 'academic',
    year: '2024',
    tech: ['Flutter', 'NestJS', 'Gemini AI'],
    github: 'https://github.com/Tayaa01/Nomadly',
    video: null,
  },
  {
    key: 'employeeleave',
    num: '08',
    type: 'internship',
    year: '2023',
    tech: ['Flutter', 'REST API', 'Firebase'],
    github: null,
    video: null,
  },
  {
    key: 'footballplatform',
    num: '09',
    type: 'academic',
    year: '2023',
    tech: ['Symfony', 'JavaFX', 'MySQL'],
    github: 'https://github.com/rouazayani211/Pi_Symfony',
    video: null,
  },
  {
    key: 'firedetection',
    num: '10',
    type: 'academic',
    year: '2022',
    tech: ['Qt', 'C++', 'Arduino', 'IoT'],
    github: null,
    video: null,
  },
]

const FILTERS = ['all', 'internship', 'academic', 'personal']

// ── CRT Inline Demo Screen ───────────────────────────────────────────
const CrtScreen = ({ video, videoType, title }) => {
  const [playing, setPlaying] = useState(false)

  if (!video) {
    return (
      <div className="crt-screen crt-screen-empty">
        <div className="crt-corner crt-tl" /><div className="crt-corner crt-tr" />
        <div className="crt-corner crt-bl" /><div className="crt-corner crt-br" />
        <div className="crt-no-signal">
          <span className="crt-no-code">NO_DEMO</span>
          <span className="crt-no-sub">// source unavailable</span>
        </div>
        <div className="crt-status-bar">
          <span>SIGNAL: NULL</span><span>FEED: —</span><span>STATUS: N/A</span>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`crt-screen${playing ? ' crt-screen-playing' : ''}`}
      onClick={() => !playing && setPlaying(true)}
    >
      <div className="crt-corner crt-tl" /><div className="crt-corner crt-tr" />
      <div className="crt-corner crt-bl" /><div className="crt-corner crt-br" />

      {playing ? (
        <div className="crt-media">
          {videoType === 'local' ? (
            <video src={video} controls autoPlay className="crt-video" />
          ) : (
            <iframe
              src={`${video}?autoplay=1&rel=0&modestbranding=1`}
              title={`${title} demo`}
              allowFullScreen
              allow="autoplay; fullscreen"
              className="crt-video"
            />
          )}
        </div>
      ) : (
        <div className="crt-idle">
          <div className="crt-scan-sweep" />
          <div className="crt-play-zone">
            <div className="crt-play-ring">
              <span className="crt-play-icon">▶</span>
            </div>
            <span className="crt-play-label">INITIALIZE DEMO FEED</span>
          </div>
        </div>
      )}

      <div className="crt-status-bar">
        <span className={playing ? 'crt-rec' : 'crt-standby'}>
          {playing ? '● REC' : '○ STANDBY'}
        </span>
        <span>SIGNAL: ACQUIRED</span>
        <span>{videoType === 'local' ? 'LOCAL·MOV' : 'STREAM·YT'}</span>
      </div>
    </div>
  )
}

// ── Project Detail Panel ─────────────────────────────────────────────
const ProjectDetail = ({ project }) => {
  const { t } = useTranslation()
  return (
    <div className="proj-detail-inner">
      <div className="proj-detail-topbar">
        <span className="proj-detail-cmd">
          <span className="proj-detail-prompt">$</span>
          {' '}cat ./projects/<span className="proj-detail-filename">{project.key}.md</span>
        </span>
        <span className="proj-detail-year">{project.year}</span>
      </div>

      <div className="proj-detail-content">
        {/* Left: description + tech + links */}
        <div className="proj-detail-info">
          <div>
            <h3 className="proj-detail-title">
              {t(`projects.content.${project.key}.title`)}
            </h3>
            <span className="proj-detail-type">{t(`projects.categories.${project.type}`)}</span>
          </div>

          <p className="proj-detail-desc">
            <span className="proj-desc-cursor">&gt;&nbsp;</span>
            {t(`projects.content.${project.key}.description`)}
          </p>

          <div className="proj-detail-stack">
            <span className="proj-stack-label">STACK:</span>
            <div className="proj-detail-tech">
              {project.tech.map((tech) => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>
          </div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="proj-link-btn"
            >
              <Github size={11} />
              <span>$ open --github</span>
            </a>
          )}
        </div>

        {/* Right: CRT demo screen */}
        <div className="proj-crt-col">
          <div className="crt-header-bar">
            <span>// DEMO_FEED</span>
            <div className="crt-header-indicators">
              <span className="crt-ind crt-ind-r" />
              <span className="crt-ind crt-ind-y" />
              <span className="crt-ind crt-ind-g" />
            </div>
          </div>
          <CrtScreen
            key={project.key}
            video={project.video}
            videoType={project.videoType}
            title={t(`projects.content.${project.key}.title`)}
          />
        </div>
      </div>
    </div>
  )
}

// ── Main Component ───────────────────────────────────────────────────
const Projects = () => {
  const { t } = useTranslation()
  const [filter, setFilter] = useState('all')
  const [selectedKey, setSelectedKey] = useState(ALL_PROJECTS[0].key)

  const filtered = ALL_PROJECTS.filter((p) => filter === 'all' || p.type === filter)

  useEffect(() => {
    const isVisible = filtered.some((p) => p.key === selectedKey)
    if (!isVisible && filtered.length > 0) {
      setSelectedKey(filtered[0].key)
    }
  }, [filter])

  const selected = ALL_PROJECTS.find((p) => p.key === selectedKey) || filtered[0]

  const handleFilter = (f) => {
    setFilter(f)
    const next = ALL_PROJECTS.find((p) => f === 'all' || p.type === f)
    if (next) setSelectedKey(next.key)
  }

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          className="proj-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Portfolio</span>
          <h2 className="proj-header-title">{t('projects.title')}</h2>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          className="proj-terminal"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Title bar */}
          <div className="proj-terminal-bar">
            <div className="proj-win-controls">
              <span className="proj-win-dot" style={{ background: '#ff5f57' }} />
              <span className="proj-win-dot" style={{ background: '#ffbd2e' }} />
              <span className="proj-win-dot" style={{ background: 'var(--lime)', animation: 'crt-pulse 2s ease-in-out infinite' }} />
            </div>
            <span className="proj-terminal-title">PROJECTS.sh — ~/portfolio/work</span>
            <div className="proj-terminal-filters">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => handleFilter(f)}
                  className={`proj-filter-btn${filter === f ? ' proj-filter-active' : ''}`}
                >
                  {f === 'all' ? 'ALL' : t(`projects.categories.${f}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Body: explorer + detail */}
          <div className="proj-terminal-body">

            {/* Left: File explorer */}
            <div className="proj-explorer">
              <div className="proj-explorer-header">
                <span>EXPLORER</span>
                <span className="proj-explorer-count">{filtered.length}&nbsp;FILES</span>
              </div>

              <div className="proj-file-list">
                <AnimatePresence mode="popLayout">
                  {filtered.map((p) => {
                    const active = selectedKey === p.key
                    return (
                      <motion.button
                        key={p.key}
                        className={`proj-file-item${active ? ' proj-file-item-active' : ''}`}
                        onClick={() => setSelectedKey(p.key)}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.18 }}
                        layout
                      >
                        <span className="proj-file-cursor">{active ? '>' : '\u00a0'}</span>
                        <span className="proj-file-num">{p.num}</span>
                        <span className="proj-file-name">{t(`projects.content.${p.key}.title`)}</span>
                        <span className="proj-file-year">{p.year}</span>
                      </motion.button>
                    )
                  })}
                </AnimatePresence>
              </div>

              <div className="proj-explorer-footer">
                <span className="proj-explorer-prompt">
                  ~/work&nbsp;<span className="proj-prompt-dollar">$</span>&nbsp;<span className="proj-cursor-blink">_</span>
                </span>
              </div>
            </div>

            {/* Right: Detail panel */}
            <div className="proj-detail">
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
                    <ProjectDetail project={selected} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
