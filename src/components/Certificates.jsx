import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowUpRight } from 'lucide-react'
import awsCert from '../assets/aws-academy-graduate-cloud-foundations-training-bad.png'
import hashgraphCert from '../assets/hashgraph.pdf'
import nvidiaCert from '../assets/My Learning _ NVIDIA.pdf'
import './Certificates.css'

const CERTS = [
  { key: 'aws', ref: 'CRED·01', accent: '#FF9900', label: 'Cloud', view: awsCert },
  { key: 'hashgraph', ref: 'CRED·02', accent: '#7FE9D0', label: 'Blockchain', view: hashgraphCert },
  { key: 'generativeai', ref: 'CRED·03', accent: '#C5F74F', label: 'AI / ML', view: nvidiaCert },
]

const Certificates = () => {
  const { t } = useTranslation()

  return (
    <section id="certificates" className="section certs-section">
      <div className="spec">
        {/* Clause rail */}
        <div className="clause-rail">
          <div className="clause-rail-sticky">
            <span className="clause-num">§ 05</span>
            <span className="clause-tick" />
            <span className="clause-name">CREDENTIALS</span>
          </div>
        </div>

        <div className="certs-main">
          <motion.header
            className="certs-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="kicker">VERIFIED CREDENTIALS</span>
            <h2 className="certs-title">{t('certificates.title')}</h2>
          </motion.header>

          <div className="certs-grid">
            {CERTS.map((cert, i) => {
              const data = t(`certificates.items.${cert.key}`, { returnObjects: true })
              return (
                <motion.article
                  key={cert.key}
                  className="cert-card"
                  style={{ '--c-accent': cert.accent }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="cert-top">
                    <span className="cert-ref">{cert.ref}</span>
                    <span className="verdict verdict-pass cert-verified">VERIFIED</span>
                  </div>

                  <div className="cert-head">
                    <span className="cert-label">{cert.label}</span>
                    <span className="cert-issuer">{data.issuer}</span>
                  </div>

                  <h3 className="cert-title">{data.title}</h3>
                  <p className="prose cert-desc">{data.description}</p>

                  <div className="cert-skills">
                    {data.skills?.map((skill) => (
                      <span key={skill} className="tag">{skill}</span>
                    ))}
                  </div>

                  <div className="cert-footer">
                    <span className="cert-date">ISSUED · {data.date}</span>
                    <a href={cert.view} target="_blank" rel="noreferrer" className="cert-link">
                      VIEW <ArrowUpRight size={12} />
                    </a>
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

export default Certificates
