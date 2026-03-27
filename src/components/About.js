'use client'
import './About.css'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const About = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div className="about-section" id="about">
      <div className={`about-content animate ${isVisible ? 'visible' : ''}`} ref={ref}>
        <h2>About</h2>
        <p className="about-bio">
          Third-year Honours Computer Science Specialist with a Minor in Statistics at the
          University of Toronto — building at the intersection of full-stack development,
          mobile applications, and AI integration.
        </p>
        <p className="about-scholarship">
          <span className="about-highlight">Recipient of the Indonesia Maju Scholarship (BIM)</span>
          {' '}by the Indonesian Ministry of Education, fully funding my undergraduate studies.
        </p>
        <div className="about-tags">
          {['Full-Stack', 'Mobile Dev', 'AI Integration', 'UI/UX'].map((tag) => (
            <span key={tag} className="about-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
