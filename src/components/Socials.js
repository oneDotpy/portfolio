'use client'
import React from 'react'
import './Socials.css'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const gitLogo = '/icons/github.png'
const linkedinLogo = '/icons/linkedin.png'
const emailLogo = '/icons/email.png'

const Socials = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div className="socials-section" id="socials">
      <div className={`socials-content animate ${isVisible ? 'visible' : ''}`} ref={ref}>
        <h2>Let's get in touch!</h2>
        <div className="socials-icons">
          <a href="https://github.com/oneDotpy" target="_blank" rel="noopener noreferrer">
            <img src={gitLogo} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/ahnaf-keenan-ardhito-837187299/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" />
          </a>
          <a href="mailto:ahnaf.ardhito@mail.utoronto.ca">
            <img src={emailLogo} alt="Email" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Socials
