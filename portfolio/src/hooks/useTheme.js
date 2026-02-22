import { useState, useEffect } from 'react'

/**
 * Manages dark / light mode.
 * Default: dark.  Persists choice to localStorage.
 */
export function useTheme() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : true   // default → dark
  })

  useEffect(() => {
    document.body.classList.toggle('light', !dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  const toggle = () => setDark((d) => !d)

  return { dark, toggle }
}
