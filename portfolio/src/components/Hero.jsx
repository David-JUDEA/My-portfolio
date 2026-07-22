import { useEffect, useState } from "react";
import { config } from "../data";
import "./Hero.css";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className={`hero__content ${loaded ? "loaded" : ""}`}>
          {/* Badge disponibilité */}
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            {config.availability} - {config.contractType}
          </div>

          {/* Nom statique */}
          <h1 className="hero__name">
            <span className="hero__firstname">{config.firstName}</span>
            <br />
            <span className="hero__lastname gradient-text">
              {config.lastName}
            </span>
          </h1>

          {/* Rôle */}
          <p className="hero__role">
            <span className="hero__role-bracket">{"{"}</span>
            {config.role}
            <span className="hero__role-bracket">{"}"}</span>
          </p>

          {/* Bio */}
          <p className="hero__bio">{config.bio}</p>
          <p className="hero__bio2">{config.bio2}</p>

          {/* Tags personnels */}
          <div className="hero__tags">
            {config.tags.map((tag) => (
              <span key={tag} className="hero__tag">
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="hero__cta">
            <a href="#projects" className="btn btn-primary">
              Voir mes projets
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 7h12M7 1l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#contact" className="btn btn-ghost">
              Me contacter
            </a>
          </div>
        </div>

        {/* Déco numéro */}
        <div className="hero__deco" aria-hidden="true">
          01
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>scroll</span>
      </div>

      {/* Grille décorative */}
      <div className="hero__grid" aria-hidden="true" />
    </section>
  );
}
