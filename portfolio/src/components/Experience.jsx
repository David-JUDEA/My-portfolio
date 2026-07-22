import { experiences } from '../data'
import useInView from '../hooks/useInView'
import './Experience.css'

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section className="plane-section experience" id="experience" style={{ background: '#0d0d1e' }}>
      <div className="container" ref={ref}>
        <div className={`section-label fade-up ${inView ? 'visible' : ''}`}>
          <span className="section-label__num">04</span>
          <span className="section-label__title">Expérience</span>
          <div className="section-label__line" />
        </div>

        <div className="exp__list">
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className={`exp__item fade-up delay-${i + 1} ${inView ? 'visible' : ''}`}
            >
              {/* Timeline dot + line */}
              <div className="exp__timeline">
                <div className="exp__dot" />
                <div className="exp__line" />
              </div>

              {/* Période */}
              <span className="exp__period gradient-text">{exp.period}</span>

              {/* Contenu */}
              <div className="exp__body">
                <h3 className="exp__company">{exp.company}</h3>
                <p className="exp__role">{exp.role}</p>
                <p className="exp__desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
