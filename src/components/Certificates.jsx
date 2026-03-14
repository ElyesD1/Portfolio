import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ExternalLink, Calendar } from 'lucide-react'
import awsCert from '../assets/aws-academy-graduate-cloud-foundations-training-bad.png'
import hashgraphCert from '../assets/hashgraph.pdf'
import nvidiaCert from '../assets/My Learning _ NVIDIA.pdf'
import './Certificates.css'

const CERTS = [
  { key: 'aws', accent: '#FF9900', label: 'Cloud', view: awsCert },
  { key: 'hashgraph', accent: '#00B4D8', label: 'Blockchain', view: hashgraphCert },
  { key: 'generativeai', accent: '#76B900', label: 'AI / ML', view: nvidiaCert },
]

const Certificates = () => {
  const { t } = useTranslation()

  return (
    <section id="certificates" className="section certs-section">
      <div className="container">
        <motion.div
          className="certs-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Credentials</span>
          <h2 className="certs-header-title">{t('certificates.title')}</h2>
        </motion.div>

        <div className="certs-grid">
          {CERTS.map((cert, i) => {
            const data = t(`certificates.items.${cert.key}`, { returnObjects: true })
            return (
              <motion.div
                key={cert.key}
                className="cert-card"
                style={{ '--c-accent': cert.accent }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="cert-head">
                  <span className="cert-label">{cert.label}</span>
                  <span className="cert-issuer">{data.issuer}</span>
                </div>
                <h3 className="cert-title">{data.title}</h3>
                <p className="cert-desc">{data.description}</p>
                <div className="cert-skills">
                  {data.skills?.map((skill) => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
                <div className="cert-footer">
                  <div className="cert-date">
                    <Calendar size={12} />
                    {data.date}
                  </div>
                  <a href={cert.view} target="_blank" rel="noreferrer" className="cert-link">
                    View <ExternalLink size={11} />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Certificates
