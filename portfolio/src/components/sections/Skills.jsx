import { skills } from '../../data/data'
import styles from './Skills.module.css'

const CARD_LABELS = {
  Frontend: 'Interface',
  Backend:  'Server',
  Tools:    'DevOps',
}

export default function Skills() {
  return (
    <section id="skills" className="section-wrapper">
      <p className="section-tag">02 — Skills</p>
      <h2 className="section-title reveal">Technical Arsenal</h2>

      <div className={styles.grid}>
        {Object.entries(skills).map(([cat, tags], i) => (
          <div key={cat} className={`${styles.card} reveal delay-${i + 1}`}>
            <p className={styles.cat}>{cat}</p>
            <h3 className={styles.label}>{CARD_LABELS[cat]}</h3>
            <div className={styles.tags}>
              {tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
