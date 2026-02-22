import { useEffect } from 'react'
import styles from './Loader.module.css'

export default function Loader({ onDone, fading }) {
  useEffect(() => {
    const timer = setTimeout(() => onDone(), 2500)
    return () => clearTimeout(timer)
  }, [])

  const letters = 'Oops, wait!'.split(' ')

  return (
    <div className={`${styles.loader} ${fading ? styles.fading : ''}`}>
      <div className={styles.text}>
        {letters.map((l, i) => (
          <span key={i} style={{ animationDelay: `${0.05 + i * 0.06}s` }}>
            {l}
          </span>
        ))}
      </div>

      <div className={styles.barWrap}>
        <div className={styles.bar} />
      </div>

      <p className={styles.sub}>Loading experience</p>
    </div>
  )
}
