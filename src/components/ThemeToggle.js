'use client'
import { useState, useEffect } from 'react'
import './ThemeToggle.css'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light') {
      setIsDark(false)
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [])

  const toggle = () => {
    const next = isDark ? 'light' : 'dark'
    setIsDark(!isDark)
    document.documentElement.setAttribute('data-theme', next === 'dark' ? '' : 'light')
    localStorage.setItem('theme', next)
  }

  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
      {isDark ? '☀' : '☾'}
    </button>
  )
}

export default ThemeToggle
