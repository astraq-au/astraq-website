/**
 * ASTRAQ News Page
 * Design: Dark Sci-Fi — deep black background, white text, cold blue accents
 * Sections: Hero → Stats → Products → Footer
 */

import Footer from "@/components/Footer";

const ACCENT_COLOR = "#C9A46A";

export default function News() {
  return (
    <main
      className="min-h-screen text-white"
      style={{ background: "#3F3432" }}
    >
      <section
        className="relative flex items-center overflow-hidden"
        style={{
          minHeight: "100vh",
          paddingTop: "clamp(8rem, 10vw, 12rem)",
          paddingBottom: "clamp(5rem, 8vw, 9rem)",
          background:
            "linear-gradient(180deg, #2E2726 0%, #3F3432 55%, #342B29 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 72% 42%, rgba(74,158,255,0.08) 0%, transparent 52%)",
          }}
        />

        <div className="relative z-10 w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24">
          <div className="flex items-center gap-4 mb-8">
            <span
              className="block h-px"
              style={{
                width: "clamp(32px, 3vw, 56px)",
                background: ACCENT_COLOR,
              }}
            />
            <span
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1rem, 1.15vw, 1.45rem)",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: ACCENT_COLOR,
              }}
            >
              News
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(3.2rem, 6vw, 8rem)",
              lineHeight: 0.95,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              maxWidth: "1200px",
              marginBottom: "clamp(1.5rem, 2.5vw, 3rem)",
            }}
          >
            ASTRAQ News Coming Soon
          </h1>

          <p
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 500,
              fontSize: "clamp(1.15rem, 1.3vw, 1.7rem)",
              lineHeight: 1.65,
              letterSpacing: "0.03em",
              color: "rgba(255,255,255,0.68)",
              maxWidth: "850px",
            }}
          >
            This page will share ASTRAQ updates, product progress, market
            expansion, technology development and company milestones.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
