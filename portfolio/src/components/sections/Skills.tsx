import { skillGroups } from '@/data/skills'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Tag } from '@/components/ui/Tag'
import { useIntersection } from '@/hooks/useIntersection'
import styles from './Skills.module.css'

export function Skills() {
  const { ref, isVisible } = useIntersection<HTMLDivElement>()

  return (
    <section id="skills" className="section-container">
      <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''}`}>
        <SectionHeader num="01" title="Compétences" />
        <div className={styles.grid}>
          {skillGroups.map(group => (
            <div key={group.id} className={styles.group}>
              <p className={styles.groupName}>{group.category}</p>
              <div className={styles.tags}>
                {group.skills.map(skill => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
