import { useState } from 'react'
import { personal } from '../../data/data'
import styles from './Contact.module.css'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // 🔌 Wire up your backend or Formspree here:
    // e.g. fetch('https://formspree.io/f/YOUR_ID', { method:'POST', body: JSON.stringify(form) })
    setSent(true)
  }

  return (
    <section id="contact" className="section-wrapper">
      <div className="divider" style={{ marginBottom: '5rem' }} />

      <div className={styles.wrap}>
        {/* Left: info */}
        <div className={`${styles.info} reveal`}>
          <p className="section-tag">07 — Contact</p>
          <h2 className={styles.heading}>
            Let's build<br />
            something <span className="accent">great</span>
          </h2>
          <p className={styles.sub}>
            Whether it's a project idea, an open role, or just a conversation — my inbox is always open.
          </p>

          <div className={styles.detail}>
            <span className={styles.detailIcon}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
              </svg>
            </span>
            {personal.email}
          </div>

          <div className={styles.detail}>
            <span className={styles.detailIcon}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            {personal.location}
          </div>
        </div>

        {/* Right: form */}
        <div className="reveal delay-2">
          {sent ? (
            <div className={styles.success}>
              <p className={styles.successTitle}>Message Sent ✓</p>
              <p className={styles.successSub}>I'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.group}>
                <label htmlFor="name">Your Name</label>
                <input id="name" name="name" type="text" placeholder="Jane Smith" value={form.name} onChange={handleChange} required />
              </div>
              <div className={styles.group}>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="jane@example.com" value={form.email} onChange={handleChange} required />
              </div>
              <div className={styles.group}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell me about your project..." value={form.message} onChange={handleChange} required />
              </div>
              <button type="submit" className={styles.btn}>Send Message →</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
