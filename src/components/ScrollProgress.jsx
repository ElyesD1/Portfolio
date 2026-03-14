import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './ScrollProgress.css'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(scrollPercent)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="scroll-progress-container">
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.08 }}
      />
    </div>
  )
}

export default ScrollProgress
