import { useState, useEffect } from 'react'
import { config } from '../data'
import './Navbar.css'

const links = [
  { label: 'Skills',      href: '#skills' },
  { label: 'Projets',     href: '#projects' },
  { label: 'Expérience',  href: '#experience' },
  { label: 'Contact',     href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#" className="navbar__logo">
          <span className="logo-bracket">&lt;</span>
          {config.firstName[0]}{config.lastName[0]}
          <span className="logo-bracket">/&gt;</span>
        </a>

        <ul className="navbar__links">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="navbar__link">{l.label}</a>
            </li>
          ))}
        </ul>

        <a href={`mailto:${config.email}`} className="btn btn-primary navbar__cta">
          Hire me
        </a>

        <button
          className={`navbar__burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            className="navbar__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <a href={`mailto:${config.email}`} className="btn btn-primary" style={{ marginTop: '8px' }}>
          Hire me
        </a>
      </div>
    </nav>
  )
}
