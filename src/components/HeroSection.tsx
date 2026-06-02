/**
 * ASTRAQ Hero Section — Dark Sci-Fi Design
 * - Full viewport height, cinematic background
 * - Animated headline entrance (translateY + opacity)
 * - Tagline, CTA buttons
 * - Stats grid (integrated)
 * - Scroll indicator
 */

import { useEffect, useState } from "react";
import { useLocation } from "wouter";

//const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663624986257/BerFRCPtLjYjx9pqX5GUkP/hero-bg-melbourne-GuQD9Emmw6QGu8jJEy6BX7.webp";

const FONT_FAMILY =
  "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

const stats = [
  { value: "POWER", label: "ENERGY" },
  { value: "INTELLIGENCE", label: "AI ROBOT" },
  { value: "SYSTEMS", label: "INTEGRATION" },
  { value: "FUTURE", label: "MOBILITY" },
];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [hideHeroContent, setHideHeroContent] = useState(false);
  const [, setLocation] = useLocation();

  const handleLearnMore = () => {
    setLocation("/about");
  };

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 100);

    const hideTimer = setTimeout(() => {
      setHideHeroContent(true);
    }, 5000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "#050505",
        fontFamily: FONT_FAMILY,
      }}
    >
      {/* Background video */}
      <video
        className="absolute inset-0 z-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlays */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5,5,5,0.55) 0%, rgba(5,5,5,0.25) 40%, rgba(5,5,5,0.65) 80%, rgba(5,5,5,1) 100%)",
        }}
      />

      {/* Subtle blue vignette */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(74,158,255,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-[90vw] 2xl:max-w-[1500px] mx-auto flex flex-col items-center justify-center h-full"
        style={{
          opacity: visible && !hideHeroContent ? 1 : 0,
          transform:
            visible && !hideHeroContent
              ? "translateY(0)"
              : "translateY(24px)",
          transition: "opacity 1.2s ease, transform 1.2s ease",
          pointerEvents: hideHeroContent ? "none" : "auto",
        }}
      >
        {/* Label tag */}
        {/* <div
          className="inline-flex items-center gap-3 mb-8"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1.2s ease 0.2s, transform 1.2s ease 0.2s",
          }}
        >
          <span className="block w-8 h-px" style={{ background: "#C9A46A" }} />
          <span
            className="label-tag"
            style={{
              fontSize: "clamp(0.85rem, 1vw, 1.25rem)",
              letterSpacing: "clamp(0.12em, 0.35vw, 0.28em)",
              color: "#C9A46A",
            }}
          >
            The Future of new life
          </span>
          <span className="block w-8 h-px" style={{ background: "#C9A46A" }} />
        </div> */}

        {/* Main headline */}
        <h1
          style={{
            fontFamily: FONT_FAMILY,
            fontWeight: 600,
            fontSize: "clamp(3.2rem, 7vw, 8.5rem)",
            lineHeight: 1.02,
            letterSpacing: "-0.055em",
            color: "#FFFFFF",
            textTransform: "uppercase",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 1s ease 0.3s, transform 1s ease 0.3s",
          }}
        >
          REDEFINE FUTURE
        </h1>

        {/* Subheadline */}
        {/* <p
          style={{
            fontFamily: FONT_FAMILY,
            fontWeight: 400,
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "rgba(255,255,255,0.6)",
            marginTop: "5px",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.7,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1s ease 0.5s, transform 1s ease 0.5s",
          }}
        >
          Astraq is building the next generation of human life for a sustainable world.
        </p> */}

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6 mt-8 sm:mt-10 lg:mt-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1s ease 0.7s, transform 1s ease 0.7s",
          }}
        >
          <button
            className="btn-primary-glow"
            onClick={() => {
              document
                .querySelector("#products")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore Products
          </button>

          <button className="btn-outline-glow" onClick={handleLearnMore}>
            Learn More
          </button>
        </div>

        {/* Stats Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 w-full max-w-[90vw] 2xl:max-w-[1300px] mx-auto text-center mt-10 sm:mt-14 lg:mt-18"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1s ease 0.9s, transform 1s ease 0.9s",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="relative text-center"
              style={{
                borderRight:
                  i < stats.length - 1
                    ? "1px solid rgba(255,255,255,0.06)"
                    : "none",
                paddingRight: i < stats.length - 1 ? "1rem" : "0",
                paddingLeft: i > 0 ? "1rem" : "0",
              }}
            >
              <div
                style={{
                  fontFamily: FONT_FAMILY,
                  fontWeight: 600,
                  fontSize: "clamp(1.25rem, 2vw, 2.4rem)",
                  color: "#FFFFFF",
                  lineHeight: 1.04,
                  letterSpacing: "-0.025em",
                }}
              >
                {stat.value}
                {/* <span style={{ color: "#e5360b" }}>{stat.suffix}</span> */}
              </div>

              <div
                style={{
                  fontFamily: FONT_FAMILY,
                  fontWeight: 400,
                  fontSize: "clamp(0.65rem, 0.75vw, 0.9rem)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(255, 255, 255, 0.71)",
                  marginTop: "0.5rem",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}