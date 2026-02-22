import { achievements } from '../../data/data'
import styles from './Achievements.module.css'

export default function Achievements() {
  return (
    <section id="achievements" className="section-wrapper">
      <p className="section-tag">05 — Achievements</p>
      <h2 className="section-title reveal">Milestones</h2>

      <div className={styles.grid}>
        {achievements.map((item, i) => (
          <div key={i} className={`${styles.card} reveal delay-${(i % 3) + 1}`}>
            <div className={styles.icon}>{item.icon}</div>
            <div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
