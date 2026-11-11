"use client";

import { createContext, useEffect, useState } from "react";

export const LandingContext = createContext(null);

export default function LandingExperience({ children }) {
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    return () => cancelAnimationFrame(frameId);
  }, [hasEntered]);

  const returnToIntro = () => setHasEntered(false);

  if (!hasEntered) {
    return (
      <section className="hero-intro landing-screen">
        <div className="hero-intro-content">
          <h1 className="signature-name">
            <span>Prince</span>
            <span>Elesi</span>
          </h1>
          <p>Aspiring Software Engineer</p>
          <button
            className="see-portfolio"
            type="button"
            onClick={() => setHasEntered(true)}
          >
            See Portfolio
          </button>
        </div>
      </section>
    );
  }

  return (
    <LandingContext.Provider value={returnToIntro}>
      <div className="portfolio-stage">{children}</div>
    </LandingContext.Provider>
  );
}
