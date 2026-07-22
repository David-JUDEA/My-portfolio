import { skillsMarquee, skillGroups } from '../data'
import useInView from '../hooks/useInView'
import './Skills.css'

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section className="plane-section skills" id="skills" style={{ background: '#0b0d0b' }}>

      {/* Marquee infini */}
      <div className="skills__marquee-wrap">
        <div className="skills__marquee-track">
          {[...skillsMarquee, ...skillsMarquee].map((skill, i) => (
            <span key={i} className="skills__marquee-item">
              <span className="skills__marquee-dot" />
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="container">
        <div ref={ref}>

          {/* Header */}
          <div className={`section-label fade-up ${inView ? 'visible' : ''}`}>
            <span className="section-label__num">02</span>
            <span className="section-label__title">Compétences</span>
            <div className="section-label__line" />
          </div>

          {/* Lignes de compétences */}
          <div className="skills__rows">
            {skillGroups.map((group, i) => (
              <div
                key={group.id}
                className={`skills__row fade-up delay-${i + 1} ${inView ? 'visible' : ''}`}
              >
                <span
                  className="skills__category"
                  style={{ color: group.color }}
                >
                  {group.category}
                </span>
                <div className="skills__items">
                  {group.items.map((item, j) => (
                    <span key={item} className="skills__item-wrap">
                      <span className="skills__skill">{item}</span>
                      {j < group.items.length - 1 && (
                        <span className="skills__sep">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
