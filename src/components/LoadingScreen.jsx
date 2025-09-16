import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import './LoadingScreen.css'

const LoadingScreen = () => {
  const { t } = useTranslation()

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="loading-content">
        {/* Animated Logo */}
        <motion.div
          className="loading-logo"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="logo-circle"
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="logo-inner">
              <span className="logo-text gradient-text">ED</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          className="loading-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="gradient-text">{t('common.name')}</h2>
          <p>{t('common.loadingPortfolio')}</p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="progress-container"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "200px", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className="progress-bar"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Floating Particles */}
        <div className="loading-particles">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [-20, -60, -100],
                x: [0, Math.random() * 40 - 20, Math.random() * 80 - 40]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen