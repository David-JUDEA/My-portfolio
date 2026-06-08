import { config } from '@/data/config'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} {config.name}</p>
      <p>Développé avec ♥ — {config.location}</p>
    </footer>
  )
}
