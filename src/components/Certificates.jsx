import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Award, Calendar, Building2, CheckCircle } from 'lucide-react'
import awsCert from '../assets/aws-academy-graduate-cloud-foundations-training-bad.png'
import hashgraphCert from '../assets/hashgraph.pdf'
import nvidiaGenAICert from '../assets/My Learning _ NVIDIA.pdf'
import './Certificates.css'

const Certificates = () => {
  const { t } = useTranslation()

  const certificates = [
    {
      id: 'aws',
      image: awsCert,
      imageType: 'image',
      link: null
    },
    {
      id: 'hashgraph',
      image: hashgraphCert,
      imageType: 'pdf',
      link: hashgraphCert
    },
    {
      id: 'generativeai',
      image: nvidiaGenAICert,
      imageType: 'pdf',
      link: nvidiaGenAICert
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const handleCertificateClick = (cert) => {
    if (cert.link && cert.imageType === 'pdf') {
      window.open(cert.link, '_blank')
    }
  }

  const renderCertificatePreview = (cert) => {
    if (cert.imageType === 'image') {
      return (
        <img 
          src={cert.image} 
          alt={t(`certificates.items.${cert.id}.title`)}
          className="certificate-image"
        />
      )
    } else {
      // For PDF, create a preview using object or embed
      return (
        <div className="certificate-pdf-preview">
          <object 
            data={cert.image} 
            type="application/pdf" 
            className="pdf-preview-object"
          >
            <div className="certificate-pdf-placeholder">
              <Award size={80} className="pdf-icon" />
              <p className="pdf-text">Click to View Certificate</p>
            </div>
          </object>
        </div>
      )
    }
  }

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <Award className="section-icon" />
            {t('certificates.title')}
          </h2>
          <p className="section-subtitle">{t('certificates.subtitle')}</p>
        </motion.div>

        <motion.div
          className="certificates-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              className="certificate-card glass"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleCertificateClick(cert)}
              style={{ cursor: cert.link ? 'pointer' : 'default' }}
            >
              <div className="certificate-image-container">
                {renderCertificatePreview(cert)}
                <div className="certificate-overlay">
                  <Award size={40} className="overlay-icon" />
                </div>
              </div>

              <div className="certificate-content">
                <h3 className="certificate-title">
                  {t(`certificates.items.${cert.id}.title`)}
                </h3>

                <div className="certificate-meta">
                  <div className="meta-item">
                    <Building2 size={16} />
                    <span>{t(`certificates.items.${cert.id}.issuer`)}</span>
                  </div>
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{t(`certificates.items.${cert.id}.date`)}</span>
                  </div>
                </div>

                <p className="certificate-description">
                  {t(`certificates.items.${cert.id}.description`)}
                </p>

                <div className="certificate-skills">
                  {t(`certificates.items.${cert.id}.skills`, { returnObjects: true }).map((skill, index) => (
                    <div key={index} className="skill-tag">
                      <CheckCircle size={14} />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates
