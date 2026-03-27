'use client'
import { useEffect, useRef } from 'react'
import './MouseGlow.css'

const MouseGlow = () => {
  const glowRef = useRef(null)

  useEffect(() => {
    const handleMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.background =
          `radial-gradient(500px at ${e.clientX}px ${e.clientY}px, rgba(173, 216, 230, 0.08) 0%, transparent 60%)`
      }
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return <div ref={glowRef} className="mouse-glow" />
}

export default MouseGlow
