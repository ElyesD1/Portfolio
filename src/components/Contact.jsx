import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Mail, Github, Linkedin, Facebook, Instagram, MapPin, Phone } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const { t } = useTranslation()

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'skyrexcgaming@gmail.com',
      link: 'mailto:skyrexcgaming@gmail.com',
      color: 'email'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+216 94 906 400',
      link: 'tel:+21694906400',
      color: 'phone'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Tunis, Tunisia',
      link: null,
      color: 'location'
    }
  ]

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: '@ElyesD1',
      link: 'https://github.com/ElyesD1',
      color: 'github'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'Elyes Darouich',
      link: 'https://linkedin.com/in/elyes-darouich',
      color: 'linkedin'
    },
    {
      icon: <Facebook size={24} />,
      label: 'Facebook',
      value: 'Elyes Darouich',
      link: 'https://www.facebook.com/elyes.darouich.7/',
      color: 'facebook'
    },
    {
      icon: <Instagram size={24} />,
      label: 'Instagram',
      value: '@elyes_darouich',
      link: 'https://www.instagram.com/elyes_darouich/',
      color: 'instagram'
    }
  ]

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
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">{t('contact.title')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
        </motion.div>
        
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Information */}
          <motion.div className="contact-info-section" variants={itemVariants}>
            <h3 className="contact-section-title">Get In Touch</h3>
            <div className="contact-grid">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className={`contact-card glass ${info.color}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {info.link ? (
                    <a href={info.link} className="contact-link">
                      <div className="contact-icon">
                        {info.icon}
                      </div>
                      <div className="contact-details">
                        <span className="contact-label">{info.label}</span>
                        <span className="contact-value">{info.value}</span>
                      </div>
                    </a>
                  ) : (
                    <div className="contact-link">
                      <div className="contact-icon">
                        {info.icon}
                      </div>
                      <div className="contact-details">
                        <span className="contact-label">{info.label}</span>
                        <span className="contact-value">{info.value}</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div className="social-media-section" variants={itemVariants}>
            <h3 className="contact-section-title">Connect With Me</h3>
            <div className="social-grid">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-card glass ${social.color}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="social-icon">
                    {social.icon}
                  </div>
                  <div className="social-details">
                    <span className="social-label">{social.label}</span>
                    <span className="social-value">{social.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div className="contact-cta" variants={itemVariants}>
            <div className="cta-card glass">
              <h3 className="gradient-text">Let's Work Together!</h3>
              <p>I'm always interested in new opportunities and exciting projects. Feel free to reach out!</p>
              <motion.a
                href="mailto:skyrexcgaming@gmail.com"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                Send me an email
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact