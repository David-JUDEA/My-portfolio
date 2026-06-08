import { useScrollSpy } from '@/hooks/useScrollSpy'
import styles from './Navbar.module.css'

const NAV_ITEMS = [
  { label: 'Skills',      href: '#skills' },
  { label: 'Projets',     href: '#projects' },
  { label: 'Expérience',  href: '#experience' },
  { label: 'Contact',     href: '#contact' },
]

const SECTION_IDS = NAV_ITEMS.map(item => item.href.slice(1))

export function Navbar() {
  const active = useScrollSpy(SECTION_IDS)

  return (
    <nav className={styles.nav}>
      <a href="#" className={styles.logo}>VN.dev</a>
      <ul className={styles.links}>
        {NAV_ITEMS.map(item => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`${styles.link} ${active === item.href.slice(1) ? styles.active : ''}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
