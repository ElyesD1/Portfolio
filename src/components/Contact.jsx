import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Mail, Github, Linkedin, Facebook, Instagram, MapPin, ArrowUpRight } from 'lucide-react'
import './Contact.css'

const SOCIALS = [
  { icon: <Github size={16} />, label: 'GitHub', href: 'https://github.com/ElyesD1' },
  { icon: <Linkedin size={16} />, label: 'LinkedIn', href: 'https://linkedin.com/in/elyes-darouich' },
  { icon: <Facebook size={16} />, label: 'Facebook', href: 'https://www.facebook.com/elyes.darouich.7/' },
  { icon: <Instagram size={16} />, label: 'Instagram', href: 'https://www.instagram.com/elyes_darouich/' },
]

const Contact = () => {
  const { t } = useTranslation()

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-inner">
        {/* Big heading */}
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Contact</span>
          <h2 className="contact-title">
            <span>AVAILABLE</span>
            <span>FOR <span className="contact-title-lime">WORK</span></span>
          </h2>
          <p className="contact-sub">{t('contact.description')}</p>
        </motion.div>

        {/* Email */}
        <motion.a
          href="mailto:skyrexcgaming@gmail.com"
          className="contact-email"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Mail size={20} />
          <span>skyrexcgaming@gmail.com</span>
          <ArrowUpRight size={18} className="contact-arrow" />
        </motion.a>

        {/* Socials */}
        <motion.div
          className="contact-socials"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="contact-social-link"
              aria-label={s.label}
            >
              {s.icon}
              <span>{s.label}</span>
            </a>
          ))}
        </motion.div>

        {/* Location */}
        <motion.div
          className="contact-location"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <MapPin size={12} />
          <span>Bizerte / Tunis, Tunisia</span>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
