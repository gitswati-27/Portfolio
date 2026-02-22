import { certifications } from '../../data/data'
import styles from './Certifications.module.css'

export default function Certifications() {
  return (
    <section id="certifications" className="section-wrapper">
      <p className="section-tag">06 — Certifications</p>
      <h2 className="section-title reveal">Credentials</h2>

      <div className={styles.grid}>
        {certifications.map((cert, i) => (
          <a
            key={i}
            href={cert.credlyUrl}
            target="_blank"
            rel="noreferrer"
            className={`${styles.card} reveal delay-${(i % 3) + 1}`}
          >
            {/* Coloured header uses each cert's brand colour */}
            <div
                  className={styles.thumb}
                  style={{
                    borderColor: `${cert.color}44`,
                  }}
                >
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className={styles.certImage}
                  />
            </div>
            <div className={styles.body}>
              <p className={styles.issuer}>{cert.issuer}</p>
              <h3 className={styles.name}>{cert.name}</h3>
              <p className={styles.date}>{cert.date}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
