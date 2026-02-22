import { useEffect } from 'react'

/**
 * Attaches an IntersectionObserver to every element with className="reveal".
 * When an element enters the viewport it gains the "visible" class,
 * triggering the CSS fade-up transition defined in globals.css.
 */
export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
