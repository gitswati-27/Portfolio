import { useState, useEffect } from 'react'
import { useTheme } from './hooks/useTheme'

import Loader         from './components/ui/Loader'
import Navbar         from './components/ui/Navbar'
import Hero           from './components/sections/Hero'
import About          from './components/sections/About'
import Skills         from './components/sections/Skills'
import Education      from './components/sections/Education'
import Projects       from './components/sections/Projects'
import Achievements   from './components/sections/Achievements'
import Certifications from './components/sections/Certifications'
import Contact        from './components/sections/Contact'
import Footer         from './components/ui/Footer'

export default function App() {
  const [loaderDone, setLoaderDone] = useState(false)
  const [showLoader, setShowLoader] = useState(true)
  const { dark, toggle } = useTheme()

  // When the loader signals done, fade it out then remove it from DOM
  function handleLoaderDone() {
    setLoaderDone(true)
    // Give CSS fade-out time to complete before unmounting
    setTimeout(() => setShowLoader(false), 800)
  }

  // Attach scroll-reveal observer AFTER content is in the DOM
  useEffect(() => {
    if (!loaderDone) return

    const attachObserver = () => {
      const elements = document.querySelectorAll('.reveal')
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add('visible')
          })
        },
        { threshold: 0.1 }
      )
      elements.forEach((el) => observer.observe(el))
      return observer
    }

    // Small delay so React has painted the DOM
    const timer = setTimeout(() => {
      const obs = attachObserver()
      return () => obs.disconnect()
    }, 100)

    return () => clearTimeout(timer)
  }, [loaderDone])

  return (
    <>
      {/* Loader: always rendered but fades out when done */}
      {showLoader && <Loader onDone={handleLoaderDone} fading={loaderDone} />}

      {/* Main site: render immediately but hidden under loader */}
      <Navbar dark={dark} toggleTheme={toggle} />

      <main>
        <Hero />
        <div className="divider" />
        <About />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Education />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Achievements />
        <div className="divider" />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
