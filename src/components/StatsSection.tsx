/**
 * ASTRAQ Stats Section — Dark Sci-Fi Design
 * - Key company metrics with animated counters
 * - Horizontal divider layout
 */

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "4", suffix: "+", label: "Product Lines" },
  { value: "2026", suffix: "", label: "Founded" },
  { value: "100", suffix: "%", label: "Zero Emission Goal" },
  { value: "∞", suffix: "", label: "Possibilities" },
];

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function StatsSection() {
  const { ref, inView } = useInView(0.15);

  return (
    <section
      ref={ref}
      style={{
        background: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "5rem 0",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="relative text-center lg:text-left"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.7s ease ${i * 0.12}s, transform 0.7s ease ${i * 0.12}s`,
                borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                paddingRight: i < stats.length - 1 ? "3rem" : "0",
                paddingLeft: i > 0 ? "3rem" : "0",
              }}
            >
              <div
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  color: "#FFFFFF",
                  lineHeight: 1,
                  letterSpacing: "0.02em",
                }}
              >
                {stat.value}
                <span style={{ color: "#C9A46A" }}>{stat.suffix}</span>
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
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
