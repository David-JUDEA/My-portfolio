import { useEffect, useState } from "react";
import { config, omarchyBar } from "../data";
import useInView from "../hooks/useInView";
import "./Contact.css";

// Formate l'heure en HH:MM
function useTime() {
  const [time, setTime] = useState(() => {
    const d = new Date();
    return d.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  });
  useEffect(() => {
    const id = setInterval(() => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }),
      );
    }, 10000);
    return () => clearInterval(id);
  }, []);
  return time;
}

// Formate la date courte
function shortDate() {
  return new Date().toLocaleDateString("fr-FR", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });
}

const WORKSPACES = [1, 2, 3, 4, 5, 6];

export default function Contact() {
  const [ref, inView] = useInView();
  const time = useTime();
  const [activeWs, setActiveWs] = useState(3);

  return (
    <section
      className="plane-section contact"
      id="contact"
      style={{ background: "#0d0f0d" }}
    >
      <div className="container" ref={ref}>
        {/* Header */}
        <div className={`section-label fade-up ${inView ? "visible" : ""}`}>
          <span className="section-label__num">05</span>
          <span className="section-label__title">Contact</span>
          <div className="section-label__line" />
        </div>

        <div
          className={`contact__card fade-up delay-1 ${inView ? "visible" : ""}`}
        >
          {/* ── Barre style Omarchy / Waybar ── */}
          <div className="omarchy-bar">
            {/* Gauche : workspaces cliquables */}
            <div className="omarchy-workspaces">
              {WORKSPACES.map((n) => (
                <span
                  key={n}
                  className={`omarchy-ws ${n === activeWs ? "active" : ""}`}
                  onClick={() => setActiveWs(n)}
                >
                  {n}
                </span>
              ))}
            </div>

            {/* Centre : message personnalisable */}
            <div className="omarchy-title">
              <span className="omarchy-title-icon">λ</span>
              {omarchyBar.message}
            </div>

            {/* Droite : infos système */}
            <div className="omarchy-sys">
              <span className="omarchy-sys-item">
                <span className="wifi-icon">◊</span>
              </span>
              <span className="omarchy-sys-sep">|</span>
              <span className="omarchy-sys-item omarchy-sys-time">{time}</span>
              <span className="omarchy-sys-sep">|</span>
              <span className="omarchy-sys-item">{shortDate()}</span>
            </div>
          </div>

          {/* ── Contenu du contact ── */}
          <div className="contact__body">
            <h2 className="contact__heading">
              <span className="gradient-text">Travaillons</span>
              <br />
              ensemble.
            </h2>

            <p className="contact__sub">
              Disponible pour des opportunités en alternance.
              <br />
              Avec le plaisir de vous rencontrer.
            </p>

            <a href={`mailto:${config.email}`} className="contact__email">
              {config.email}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 13L13 3M13 3H5M13 3v8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <div className="contact__links">
              <a
                href={config.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
              >
                GitHub
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path
                    d="M2 9L9 2M9 2H3M9 2v6"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <span className="contact__sep">·</span>
              <a
                href={config.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
              >
                LinkedIn
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path
                    d="M2 9L9 2M9 2H3M9 2v6"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <span className="contact__sep">·</span>
              <span className="contact__location">{config.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="contact__footer">
        <div className="container">
          <span>
            © {new Date().getFullYear()} {config.name}
          </span>
          <span>Bye</span>
        </div>
      </div>
    </section>
  );
}
