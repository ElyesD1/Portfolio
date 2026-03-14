import { motion } from 'framer-motion'
import './LoadingScreen.css'

const LINES = [
  '> INITIALIZING PORTFOLIO_v2.0...',
  '> LOADING MODULES................OK',
  '> COMPILING ASSETS...............OK',
  '> MOUNTING COMPONENTS............OK',
  '> ELYES DAROUICH — SOFTWARE ENGINEER',
  '> BOOT COMPLETE.',
]

const LoadingScreen = () => {
  return (
    <motion.div
      className="ls-root"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="ls-content">
        {LINES.map((line, i) => (
          <motion.div
            key={i}
            className={`ls-line ${i === 4 ? 'ls-line-name' : ''} ${i === 5 ? 'ls-line-done' : ''}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.32, duration: 0.2 }}
          >
            {line}
            {i === LINES.length - 1 && (
              <motion.span
                className="ls-cursor"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >_</motion.span>
            )}
          </motion.div>
        ))}

        {/* Progress bar */}
        <motion.div
          className="ls-bar-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="ls-bar"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 2.2, ease: 'linear' }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
