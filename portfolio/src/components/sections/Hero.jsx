import { personal, socials } from '../../data/data'
import SocialIcon from '../ui/SocialIcon'
import styles from './Hero.module.css'

export default function Hero() {
  const [first, last] = personal.name.split(' ')

  return (
    <section id="hero" className={styles.hero}>
      {/* Subtle grid background */}
      <div className={styles.grid} aria-hidden="true" />

      <p className={styles.eyebrow}>Welcome to my space ^_^</p>

      <h1 className={styles.name}>
        Hi, I'm <em className={styles.nameFirst}>{first}</em>
        <br />
        <span className={styles.nameLast}>{last}</span>
      </h1>

      <p className={styles.tagline}>{personal.tagline}</p>

      {/* Social links */}
      <div className={styles.socials}>
        {socials.map((s) => (
          <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className={styles.socialLink}>
            <SocialIcon name={s.name} />
            {s.label}
          </a>
        ))}
      </div>

      {/* Scroll hint */}
      <div className={styles.scroll} aria-hidden="true">
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="1" width="14" height="22" rx="7" />
          <circle cx="8" cy="8" r="2" fill="currentColor" />
        </svg>
        scroll
      </div>
    </section>
  )
}
