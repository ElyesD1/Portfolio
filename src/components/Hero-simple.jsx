import { useTranslation } from 'react-i18next'
import './Hero.css'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Hello, I'm Elyes Darouich</h1>
          <p>Software Engineer</p>
        </div>
      </div>
    </section>
  )
}

export default Hero