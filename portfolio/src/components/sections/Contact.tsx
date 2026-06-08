import { config } from '@/data/config'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { useIntersection } from '@/hooks/useIntersection'
import styles from './Contact.module.css'

export function Contact() {
  const { ref, isVisible } = useIntersection<HTMLDivElement>()

  return (
    <section id="contact" className="section-container">
      <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''}`}>
        <SectionHeader num="04" title="Contact" />

        <div className={styles.card}>
          <div className={styles.left}>
            <p className={styles.terminal}>
              <span>guest@portfolio:~$</span> ssh contact@votre-domaine.fr_
            </p>
            <h2 className={styles.heading}>Travaillons ensemble</h2>
            <p className={styles.sub}>
              Disponible pour des missions freelance ou des opportunités en CDI.<br />
              N'hésitez pas à me contacter pour discuter de votre projet.
            </p>
            <div className={styles.buttons}>
              <Button href={`mailto:${config.email}`} variant="primary">
                Envoyer un email
              </Button>
              {config.socials.map(s => (
                <Button key={s.label} href={s.url} variant="ghost" target="_blank" rel="noopener noreferrer">
                  {s.label} →
                </Button>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <a href={`mailto:${config.email}`} className={styles.detail}>
              {config.email}
            </a>
            {config.phone && (
              <a href={`tel:${config.phone}`} className={styles.detail}>
                {config.phone}
              </a>
            )}
            {config.cvUrl && (
              <a href={config.cvUrl} className={`${styles.detail} ${styles.cvLink}`} download>
                Télécharger le CV →
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
