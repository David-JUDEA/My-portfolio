import { useRef, useEffect, useState } from "react";
import { projects } from "../data";
import useInView from "../hooks/useInView";
import "./Projects.css";

export default function Projects() {
  const [ref, inView] = useInView();
  const trackRef = useRef(null);

  // ─── État du drag ───────────────────────────
  const posRef = useRef(0); // position actuelle (translateX)
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startPos = useRef(0);
  const speed = 0.4; // vitesse auto-scroll (px/frame) — ajuste ici

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let rafId;
    const halfWidth = track.scrollWidth / 2;

    const animate = () => {
      if (!isDragging.current) {
        posRef.current -= speed;
        if (Math.abs(posRef.current) >= halfWidth) {
          posRef.current = 0;
        }
        track.style.transform = `translateX(${posRef.current}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    const onDown = (clientX) => {
      isDragging.current = true;
      startX.current = clientX;
      startPos.current = posRef.current;
      track.style.cursor = "grabbing";
    };

    const onMove = (clientX) => {
      if (!isDragging.current) return;
      const delta = clientX - startX.current;
      let next = startPos.current + delta;
      if (next > 0) next -= halfWidth;
      if (next < -halfWidth) next += halfWidth;
      posRef.current = next;
      track.style.transform = `translateX(${next}px)`;
    };

    const onUp = () => {
      isDragging.current = false;
      track.style.cursor = "grab";
    };

    const onMouseDown = (e) => onDown(e.clientX);
    const onMouseMove = (e) => onMove(e.clientX);
    const onTouchStart = (e) => onDown(e.touches[0].clientX);
    const onTouchMove = (e) => onMove(e.touches[0].clientX);

    // ─── Scroll trackpad / molette horizontale ──
    const onWheel = (e) => {
      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      if (isHorizontal) {
        e.preventDefault();
        let next = posRef.current - e.deltaX;
        if (next > 0) next -= halfWidth;
        if (next < -halfWidth) next += halfWidth;
        posRef.current = next;
        track.style.transform = `translateX(${next}px)`;
      }
    };

    track.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onUp);
    track.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onUp);
    track.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      cancelAnimationFrame(rafId);
      track.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onUp);
      track.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onUp);
      track.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <section
      className="plane-section projects"
      id="projects"
      style={{ background: "#0c0e0c" }}
    >
      <div className="container" ref={ref}>
        {/* Header */}
        <div className={`section-label fade-up ${inView ? "visible" : ""}`}>
          <span className="section-label__num">03</span>
          <span className="section-label__title">Projets</span>
          <div className="section-label__line" />
        </div>
      </div>

      {/* Marquee de cartes — draggable */}
      <div className="projects__marquee-wrap">
        <div className="projects__marquee-track" ref={trackRef}>
          {[...projects, ...projects].map((project, i) => (
            <a
              key={i}
              href={project.url}
              target={project.url !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="projects__card"
              style={{ "--c": project.color }}
              draggable={false}
              onClick={(e) => {
                // Empêche l'ouverture du lien si l'utilisateur vient de drag
                if (Math.abs(posRef?.current) > 0 && isDragging.current) {
                  e.preventDefault();
                }
              }}
            >
              <div className="projects__card-meta">
                <span className="projects__card-num">{project.id}</span>
                <span className="projects__card-year">{project.year}</span>
                <span className="projects__card-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 13L13 3M13 3H5M13 3v8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>

              <h3 className="projects__card-title">{project.title}</h3>
              <p className="projects__card-desc">{project.description}</p>

              <div className="projects__card-tags">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="projects__card-tag"
                    style={{
                      color: project.color,
                      borderColor: project.color + "33",
                      background: project.color + "0d",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
