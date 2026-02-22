import { personal } from '../../data/data'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} {personal.name}</span>
      <span>Built with React + ❤️</span>
    </footer>
  )
}
