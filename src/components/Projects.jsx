import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useState, useRef } from 'react'
import { 
  ExternalLink, 
  Github, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX,
  Code,
  Smartphone,
  Globe,
  Database,
  Star,
  Award
} from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const { t } = useTranslation()
  const [activeVideo, setActiveVideo] = useState(null)
  const [videoStates, setVideoStates] = useState({})
  const videoRefs = useRef({})

  const projects = {
    academic: [
      {
        id: 1,
        key: 'languagelearning',
        category: 'mobile',
        technologies: ['Swift (iOS)', 'Kotlin (Android)', 'NestJS', 'MongoDB', 'Flutter'],
        year: '2024-2025',
        color: 'primary'
      },
      {
        id: 2,
        key: 'smarttravel',
        category: 'mobile',
        technologies: ['Flutter', 'NestJS', 'MongoDB', 'Gemini AI', 'Geolocation'],
        year: '2024-2025',
        color: 'secondary'
      },
      {
        id: 3,
        key: 'footballplatform',
        category: 'web',
        technologies: ['Symfony', 'JavaFX', 'MySQL', 'PHP'],
        year: '2023',
        color: 'success'
      },
      {
        id: 4,
        key: 'firedetection',
        category: 'desktop',
        technologies: ['Qt', 'C++', 'Arduino', 'IoT'],
        year: '2022',
        color: 'info'
      },
      {
        id: 5,
        key: 'smartlabwebsite',
        category: 'web',
        technologies: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
        year: '2022',
        color: 'warning'
      },
      {
        id: 6,
        key: 'sdlgame',
        category: 'desktop',
        technologies: ['C', 'SDL', 'Game Development'],
        year: '2021',
        color: 'danger'
      }
    ],
    internship: [
      {
        id: 7,
        key: 'projectflow',
        category: 'mobile',
        featured: true,
        video: 'https://drive.google.com/uc?export=view&id=1Icmywhlux8nr2C8jc_v3aN__M7-nXgrf',
        technologies: ['Flutter', 'NestJS', 'MongoDB', 'Docker', 'AI/Gemini', 'WebSocket'],
        year: '2025',
        company: 'Talan Tunisia',
        color: 'primary'
      },
      {
        id: 8,
        key: 'employeeleave',
        category: 'mobile',
        technologies: ['Flutter', 'REST API', 'Push Notifications'],
        year: '2023',
        company: 'Vatech WABAG',
        color: 'secondary'
      }
    ],
    personal: [
      {
        id: 9,
        key: 'riftpedia',
        category: 'mobile',
        featured: true,
        video: 'https://drive.google.com/uc?export=view&id=1wLJN71quhoN3W5o6N18hOrHEy1Q3t5I5',
        technologies: ['SwiftUI', 'MapKit', 'Riot API', 'iOS'],
        year: '2024',
        color: 'primary'
      }
    ]
  }

  const handleVideoPlay = (projectId) => {
    const video = videoRefs.current[projectId]
    if (video) {
      if (activeVideo && activeVideo !== projectId) {
        const activeVideoEl = videoRefs.current[activeVideo]
        if (activeVideoEl) {
          activeVideoEl.pause()
        }
      }
      
      if (videoStates[projectId]?.playing) {
        video.pause()
        setVideoStates(prev => ({ ...prev, [projectId]: { ...prev[projectId], playing: false } }))
      } else {
        video.play()
        setVideoStates(prev => ({ ...prev, [projectId]: { ...prev[projectId], playing: true } }))
        setActiveVideo(projectId)
      }
    }
  }

  const handleVideoMute = (projectId) => {
    const video = videoRefs.current[projectId]
    if (video) {
      video.muted = !video.muted
      setVideoStates(prev => ({ 
        ...prev, 
        [projectId]: { ...prev[projectId], muted: video.muted } 
      }))
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'mobile':
        return <Smartphone size={20} />
      case 'web':
        return <Globe size={20} />
      case 'api':
        return <Database size={20} />
      default:
        return <Code size={20} />
    }
  }

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">{t('projects.title')}</h2>
          <p className="section-subtitle">{t('projects.subtitle')}</p>
        </motion.div>

        {/* Internship Projects */}
        <motion.div
          className="project-category-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="category-header">
            <h3 className="category-title">
              <Award className="category-icon" />
              {t('projects.categories.internship')}
            </h3>
            <p className="category-subtitle">{t('projects.categories.internshipDesc')}</p>
          </div>

          <div className="projects-category-grid">
            {projects.internship.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card glass ${project.color}`}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-header">
                  <div className="project-category">
                    {getCategoryIcon(project.category)}
                    <span>{t(`projects.categories.${project.category}`)}</span>
                  </div>
                  
                  <div className="project-year-company">
                    <div className="project-year">{project.year}</div>
                    {project.company && <div className="project-company">{project.company}</div>}
                  </div>
                </div>

                <h3 className="project-title gradient-text">
                  {t(`projects.content.${project.key}.title`)}
                </h3>

                <p className="project-description">
                  {t(`projects.content.${project.key}.description`)}
                </p>

                <div className="project-features">
                  <h4>{t('projects.labels.features')}</h4>
                  <ul>
                    {t(`projects.content.${project.key}.features`, { returnObjects: true }).slice(0, 4).map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag-small">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Academic Projects */}
        <motion.div
          className="project-category-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="category-header">
            <h3 className="category-title">
              <Code className="category-icon" />
              {t('projects.categories.academic')}
            </h3>
            <p className="category-subtitle">{t('projects.categories.academicDesc')}</p>
          </div>

          <div className="projects-category-grid academic-grid">
            {projects.academic.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card glass ${project.color}`}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-header">
                  <div className="project-category">
                    {getCategoryIcon(project.category)}
                    <span>{t(`projects.categories.${project.category}`)}</span>
                  </div>
                  
                  <div className="project-year">{project.year}</div>
                </div>

                <h3 className="project-title gradient-text">
                  {t(`projects.content.${project.key}.title`)}
                </h3>

                <p className="project-description">
                  {t(`projects.content.${project.key}.description`)}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag-small">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Projects */}
        <motion.div
          className="project-category-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="category-header">
            <h3 className="category-title">
              <Star className="category-icon" />
              {t('projects.categories.personal')}
            </h3>
            <p className="category-subtitle">{t('projects.categories.personalDesc')}</p>
          </div>

          <div className="projects-category-grid">
            {projects.personal.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card glass ${project.color}`}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-header">
                  <div className="project-category">
                    {getCategoryIcon(project.category)}
                    <span>{t(`projects.categories.${project.category}`)}</span>
                  </div>
                  
                  <div className="project-year">{project.year}</div>
                </div>

                <h3 className="project-title gradient-text">
                  {t(`projects.content.${project.key}.title`)}
                </h3>

                <p className="project-description">
                  {t(`projects.content.${project.key}.description`)}
                </p>

                <div className="project-features">
                  <h4>{t('projects.labels.features')}</h4>
                  <ul>
                    {t(`projects.content.${project.key}.features`, { returnObjects: true }).slice(0, 4).map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag-small">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile Demos Section */}
        <motion.div
          className="mobile-demos-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="demos-header">
            <h3 className="demos-title">
              <Smartphone className="demos-icon" />
              {t('projects.demos.title')}
            </h3>
            <p className="demos-subtitle">{t('projects.demos.subtitle')}</p>
          </div>

          <div className="mobile-demos-grid">
            {[projects.internship.find(p => p.key === 'projectflow'), projects.personal.find(p => p.key === 'riftpedia')].map((project, index) => (
              <motion.div
                key={project.id}
                className="mobile-demo-container"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mobile-frame">
                  <div className="mobile-screen">
                    <video
                      ref={el => videoRefs.current[`demo-${project.id}`] = el}
                      src={project.video}
                      muted
                      loop
                      playsInline
                      className="mobile-video"
                      autoPlay
                    />
                    
                    <div className="mobile-overlay">
                      <button 
                        className="mobile-play-btn"
                        onClick={() => handleVideoPlay(`demo-${project.id}`)}
                      >
                        {videoStates[`demo-${project.id}`]?.playing ? <Pause size={20} /> : <Play size={20} />}
                      </button>
                    </div>
                  </div>
                  
                  <div className="mobile-home-indicator"></div>
                </div>
                
                <div className="demo-info">
                  <h4 className="demo-title gradient-text">
                    {t(`projects.content.${project.key}.title`)}
                  </h4>
                  <p className="demo-description">
                    {t(`projects.content.${project.key}.demoDesc`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects