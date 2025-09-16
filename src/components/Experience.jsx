import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Calendar, MapPin, Building, GraduationCap, Briefcase, Users, Code } from 'lucide-react'
import './Experience.css'

const Experience = () => {
  const { t } = useTranslation()

  const experiences = [
    {
      id: 1,
      type: 'internship',
      key: 'talan',
      location: 'Tunis, Tunisia',
      period: 'July 9 - September 9, 2025',
      duration: '2 months',
      technologies: ['Flutter', 'NestJS', 'MongoDB', 'WebSockets', 'Google Gemini AI', 'Docker', 'JWT', 'OAuth 2.0'],
      icon: <Briefcase />,
      color: 'primary'
    },
    {
      id: 2,
      type: 'internship',
      key: 'vatech2023',
      location: 'Tunis, Tunisia',
      period: 'Summer 2023',
      duration: '3 months',
      technologies: ['Flutter', 'REST API', 'Firebase', 'Push Notifications'],
      icon: <Code />,
      color: 'accent'
    },
    {
      id: 3,
      type: 'internship',
      key: 'vatech2022',
      location: 'Tunis, Tunisia',
      period: 'Summer 2022',
      duration: '1 month',
      technologies: ['Team Collaboration', 'Project Management', 'Business Analysis'],
      icon: <Users />,
      color: 'secondary'
    },
    {
      id: 4,
      type: 'education',
      key: 'esprit',
      location: 'Ariana, Tunisia',
      period: '2021 - Present',
      duration: '5 years',
      technologies: ['Mobile Development', 'Software Architecture', 'AI Integration', 'DevOps', 'Agile Methodologies'],
      icon: <GraduationCap />,
      color: 'success'
    },
    {
      id: 5,
      type: 'education',
      key: 'bac',
      location: 'Bizerte, Tunisia',
      period: '2020 - 2021',
      duration: '1 year',
      technologies: ['Programming Fundamentals', 'Mathematics', 'Logic'],
      icon: <GraduationCap />,
      color: 'info'
    }
  ]

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">{t('experience.title')}</h2>
          <p className="section-subtitle">{t('experience.subtitle')}</p>
        </motion.div>

        <motion.div
          className="timeline-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="timeline-line"></div>
          
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`timeline-dot ${experience.color}`}>
                {experience.icon}
              </div>
              
              <div className={`experience-card glass ${experience.type}`}>
                {/* Creative Header */}
                <div className="experience-header-top">
                  <div className="experience-period-container">
                    <span className={`experience-type ${experience.type}`}>
                      {experience.type === 'internship' ? t('experience.labels.internship') : t('experience.labels.education')}
                    </span>
                    <div className="experience-period">
                      <Calendar size={14} />
                      <span>{experience.period}</span>
                      <span className="duration">({experience.duration})</span>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  {/* Meta Row */}
                  <div className="experience-meta-row">
                    <div className="experience-title-container">
                      <h3 className="experience-title gradient-text">
                        {t(`experience.content.${experience.key}.title`)}
                      </h3>
                      <div className="experience-location">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                    <div className="experience-company">
                      <Building size={16} />
                      <span>{t(`experience.content.${experience.key}.company`)}</span>
                    </div>
                  </div>

                  <p className="experience-description">
                    {t(`experience.content.${experience.key}.description`)}
                  </p>
                  
                  <div className="experience-achievements">
                    <h4>{t('experience.labels.achievements')}</h4>
                    <ul>
                      {t(`experience.content.${experience.key}.achievements`, { returnObjects: true }).map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="experience-technologies">
                    <h4>{t('experience.labels.technologies')}</h4>
                    <div className="tech-tags">
                      {experience.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="tech-tag"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience