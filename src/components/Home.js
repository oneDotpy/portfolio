'use client'
import React, { useState, useEffect, useRef } from 'react'
import './Home.css'

const Home = () => {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [isDone, setIsDone] = useState(false)

  const fullText = "Hello, my name is "
  const name = "Ahnaf Keenan Ardhito"
  const description = "I'm a third-year Computer Science Specialist with a Minor in Statistics at the University of Toronto."
  const combinedText = fullText + name

  const typingSpeed = 100
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (!isDone && index < combinedText.length) {
      timeoutRef.current = setTimeout(() => {
        setText((prev) => prev + combinedText.charAt(index))
        setIndex(index + 1)
      }, typingSpeed)
    } else if (index >= combinedText.length) {
      setIsDone(true)
    }
    return () => clearTimeout(timeoutRef.current)
  }, [index, isDone, combinedText])

  const renderTypedText = () => {
    const regularText = text.slice(0, fullText.length)
    const coloredText = text.slice(fullText.length)
    return (
      <>
        {regularText}
        <span className="highlight">{coloredText}</span>
      </>
    )
  }

  const langIcons = [
    { cls: 'devicon-python-plain colored', label: 'Python' },
    { cls: 'devicon-java-plain colored', label: 'Java' },
    { cls: 'devicon-html5-plain colored', label: 'HTML5' },
    { cls: 'devicon-css3-plain colored', label: 'CSS3' },
    { cls: 'devicon-javascript-plain colored', label: 'JavaScript' },
    { cls: 'devicon-typescript-plain colored', label: 'TypeScript' },
    { cls: 'devicon-dart-plain colored', label: 'Dart' },
    { cls: 'devicon-kotlin-plain colored', label: 'Kotlin' },
    { cls: 'devicon-c-plain colored', label: 'C' },
    { cls: 'devicon-cplusplus-plain colored', label: 'C++' },
    { cls: 'devicon-r-plain colored', label: 'R' },
  ]

  return (
    <div className="home" id="home">
      <div className="home-content">
        <h1 className="typewriter">
          {renderTypedText()}
          <span className="cursor">|</span>
        </h1>
        <p className="home-desc">{description}</p>
        <div className="lang-icons">
          {langIcons.map(({ cls, label }) => (
            <i key={label} className={cls} title={label} />
          ))}
        </div>
        <button
          className="resume-btn"
          onClick={() => window.open("https://drive.google.com/file/d/1OaCPCswxMdYvJoXlAtLxy_n2DLMdz2Jx/view?usp=sharing", "_blank")}
        >
          Resume
        </button>
      </div>
    </div>
  )
}

export default Home
