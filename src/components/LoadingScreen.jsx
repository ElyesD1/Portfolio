import { motion } from 'framer-motion'
import './LoadingScreen.css'

const LINES = [
  'ESTABLISHING SUBJECT',
  'LOADING CLAUSES § 00–06',
  'VERIFYING EVIDENCE',
  'COMPILING SPECIMEN',
]

const LoadingScreen = () => {
  return (
    <motion.div
      className="ls-root"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="hero-crop hero-crop-tl ls-crop" aria-hidden="true" />
      <span className="hero-crop hero-crop-tr ls-crop" aria-hidden="true" />
      <span className="hero-crop hero-crop-bl ls-crop" aria-hidden="true" />
      <span className="hero-crop hero-crop-br ls-crop" aria-hidden="true" />

      <div className="ls-content">
        <div className="ls-top">
          <span className="kicker">PORTFOLIO SPECIMEN</span>
          <span className="kicker">REF · ED—2026</span>
        </div>
        <div className="ls-rule" />

        <div className="ls-lines">
          {LINES.map((line, i) => (
            <motion.div
              key={line}
              className="ls-line"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.28, duration: 0.2 }}
            >
              <span className="ls-line-label">{line}</span>
              <span className="ls-line-dots" />
              <motion.span
                className="ls-line-ok"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.28 + 0.22 }}
              >
                OK
              </motion.span>
            </motion.div>
          ))}
        </div>

        <motion.h2
          className="ls-name"
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 -2% 0 0)' }}
          transition={{ delay: 1.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          ELYES DAROUICH
        </motion.h2>

        <div className="ls-foot">
          <div className="ls-bar-wrap">
            <motion.div
              className="ls-bar"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 2.3, ease: 'easeInOut' }}
            />
          </div>
          <motion.span
            className="verdict verdict-pass ls-verdict"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.0, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            PASS
          </motion.span>
        </div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
