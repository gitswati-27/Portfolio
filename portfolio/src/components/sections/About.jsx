import { personal, about } from '../../data/data'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className="section-wrapper">
      <p className="section-tag">01 — About</p>

      <div className={`${styles.grid} reveal`}>
        {/* Photo column */}
        <div className={styles.imgWrap}>
          {personal.photo ? (
            <img src={personal.photo} alt={personal.name} className={styles.photo} />
          ) : (
            <div className={styles.photoPlaceholder}>
              <span>[ YOUR PHOTO ]</span>
              <small>Add photo in src/data/data.js</small>
            </div>
          )}
          <div className={styles.stat}>
            <div className={styles.statNum}>🎓</div>
            <div className={styles.statLabel}>Student</div>
          </div>
        </div>

        {/* Text column */}
        <div className={styles.text}>
          <h2 className="section-title">
            Turning ideas<br />
            into <span className="accent">reality</span>
          </h2>
          {about.map((para, i) => (
            <p key={i} className={i === 0 ? styles.lead : styles.para}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
