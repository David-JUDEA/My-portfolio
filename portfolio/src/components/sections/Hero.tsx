import { config } from '@/data/config'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>

        {/* Left — intro */}
        <div className={styles.left}>
          <Badge>
            <span className={styles.dot} />
            Disponible — {config.contractType}
          </Badge>

          <h1 className={styles.name}>{config.name}</h1>
          <p className={styles.role}>{config.role}</p>
          <p className={styles.bio}>{config.bio}</p>

          <div className={styles.cta}>
            <Button href="#contact" variant="primary">Me contacter</Button>
            <Button href="#projects" variant="ghost">Voir mes projets →</Button>
          </div>
        </div>

        {/* Right — info cards */}
        <div className={styles.right}>
          <div className={styles.card}>
            <p className={styles.cardLabel}>Disponibilité</p>
            <InfoRow label="Date" value={config.availability} />
            <InfoRow label="Contrat" value={config.contractType} />
            <InfoRow label="Rythme" value="Remote / Hybride" />
            <InfoRow label="Localisation" value={config.location} />
          </div>

          <div className={styles.card}>
            <p className={styles.cardLabel}>Expertise</p>
            <InfoRow label="Backend" value="PHP · Symfony · Node.js" />
            <InfoRow label="Frontend" value="React · TypeScript · CSS" />
            <InfoRow label="Infra" value="Docker · PostgreSQL · CI/CD" />
          </div>
        </div>

      </div>
    </section>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.infoRow}>
      <span className={styles.arrow}>›</span>
      {label} : <span className={styles.infoValue}>{value}</span>
    </div>
  )
}
