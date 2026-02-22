import { useState } from 'react'
import styles from './ThemeToggle.module.css'

/**
 * A light-bulb icon with a dangling string.
 * Clicking / pulling it toggles dark ↔ light mode.
 */
export default function ThemeToggle({ dark, onToggle }) {
  const [pulling, setPulling] = useState(false)

  function handleClick() {
    setPulling(true)
    onToggle()
    setTimeout(() => setPulling(false), 300)
  }

  return (
    <button
      className={`${styles.wrap} ${pulling ? styles.pulling : ''}`}
      onClick={handleClick}
      aria-label="Toggle colour theme"
      title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Bulb icon — filled in dark mode, outline in light */}
      <svg className={styles.bulb} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        {dark ? (
          /* moon */
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" stroke="none" />
        ) : (
          /* sun */
          <>
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1"  x2="12" y2="3"  />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22"  y1="4.22"  x2="5.64"  y2="5.64"  />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1"  y1="12" x2="3"  y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36" />
            <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"  />
          </>
        )}
      </svg>

      {/* The dangling string */}
      <span className={styles.string} />
      <span className={styles.bead}   />
    </button>
  )
}
