import { projects } from '@/data/projects'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Tag } from '@/components/ui/Tag'
import { useIntersection } from '@/hooks/useIntersection'
import styles from './Projects.module.css'

export function Projects() {
  const { ref, isVisible } = useIntersection<HTMLDivElement>()

  return (
    <section id="projects" className="section-container">
      <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''}`}>
        <SectionHeader num="02" title="Projets" />
        <ul className={styles.list}>
          {projects.map(project => {
            const href = project.url ?? project.github ?? '#'
            return (
              <li key={project.id}>
                <a
                  href={href}
                  className={styles.item}
                  target={href !== '#' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                >
                  <div className={styles.content}>
                    <div className={styles.top}>
                      <h3 className={styles.title}>{project.title}</h3>
                      <span className={styles.year}>{project.year}</span>
                    </div>
                    <p className={styles.desc}>{project.description}</p>
                    <div className={styles.tech}>
                      {project.tech.map(t => (
                        <Tag key={t} variant="accent">{t}</Tag>
                      ))}
                    </div>
                  </div>
                  <span className={styles.arrow}>↗</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
