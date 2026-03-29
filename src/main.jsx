import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import Lenis from 'lenis'
import './index.css'
import App from './App.jsx'

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: false,
    })

    let frameId = requestAnimationFrame(function raf(time) {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    })

    return () => {
      cancelAnimationFrame(frameId)
      lenis.destroy()
    }
  }, [])

  return null
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmoothScroll />
    <App />
  </StrictMode>,
)
