import { experiences } from '@/data/experience'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { useIntersection } from '@/hooks/useIntersection'
import styles from './Experience.module.css'

export function Experience() {
  const { ref, isVisible } = useIntersection<HTMLDivElement>()

  return (
    <section id="experience" className="section-container">
      <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''}`}>
        <SectionHeader num="03" title="Expérience" />
        <ul className={styles.list}>
          {experiences.map(exp => (
            <li key={exp.id} className={styles.item}>
              <span className={styles.period}>{exp.period}</span>
              <div>
                <h3 className={styles.company}>{exp.company}</h3>
                <p className={styles.role}>{exp.role}</p>
                <p className={styles.desc}>{exp.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
