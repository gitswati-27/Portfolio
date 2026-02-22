import { education } from '../../data/data'
import styles from './Education.module.css'

export default function Education() {
  return (
    <section id="education" className="section-wrapper">
      <p className="section-tag">03 — Education</p>
      <h2 className="section-title reveal">Academic Journey</h2>

      {/* Vertical timeline */}
      <div className={`${styles.timeline} reveal`}>
        {education.map((item, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.dot} />
            <p className={styles.year}>{item.year}</p>
            <h3 className={styles.degree}>{item.degree}</h3>
            <p className={styles.institution}>{item.institution}</p>
            <p className={styles.desc}>{item.description}</p>
            {item.badge && <span className={styles.badge}>{item.badge}</span>}
          </div>
        ))}
      </div>
    </section>
  )
}
