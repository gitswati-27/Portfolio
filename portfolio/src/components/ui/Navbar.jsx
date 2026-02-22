import { personal } from '../../data/data'
import ThemeToggle  from './ThemeToggle'
import styles       from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'About',          to: 'about'          },
  { label: 'Skills',         to: 'skills'         },
  { label: 'Education',      to: 'education'      },
  { label: 'Projects',       to: 'projects'       },
  { label: 'Achievements',   to: 'achievements'   },
  { label: 'Certifications', to: 'certifications' },
  { label: 'Contact',        to: 'contact'        },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar({ dark, toggleTheme }) {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>{personal.initials}.</span>

      <ul className={styles.links}>
        {NAV_LINKS.map(({ label, to }) => (
          <li key={to}>
            <button
              onClick={() => scrollTo(to)}
              className={styles.link}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>

      <ThemeToggle dark={dark} onToggle={toggleTheme} />
    </nav>
  )
}
