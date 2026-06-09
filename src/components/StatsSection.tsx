/**
 * ASTRAQ Stats Section — Dark Sci-Fi Design
 * - Key company metrics with animated counters
 * - Horizontal divider layout
 * - English / Chinese / Spanish / Arabic supported
 */

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

type LangCode = "en" | "zh" | "es" | "ar";

const stats: Array<{
  value: string;
  suffix: string;
  label: Record<LangCode, string>;
}> = [
  {
    value: "4",
    suffix: "+",
    label: {
      en: "Product Lines",
      zh: "产品线",
      es: "Líneas de Producto",
      ar: "خطوط المنتجات",
    },
  },
  {
    value: "2026",
    suffix: "",
    label: {
      en: "Founded",
      zh: "成立年份",
      es: "Fundación",
      ar: "سنة التأسيس",
    },
  },
  {
    value: "100",
    suffix: "%",
    label: {
      en: "Zero Emission Goal",
      zh: "零排放目标",
      es: "Objetivo de Cero Emisiones",
      ar: "هدف الانبعاثات الصفرية",
    },
  },
  {
    value: "∞",
    suffix: "",
    label: {
      en: "Possibilities",
      zh: "无限可能",
      es: "Posibilidades",
      ar: "إمكانات بلا حدود",
    },
  },
];

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function normalizeLanguage(language: string): LangCode {
  if (language === "zh" || language === "es" || language === "ar") {
    return language;
  }

  return "en";
}

export default function StatsSection() {
  const { language } = useLanguage();
  const currentLanguage = normalizeLanguage(language);

  const { ref, inView } = useInView(0.15);

  const isZh = currentLanguage === "zh";
  const isAr = currentLanguage === "ar";

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
              key={stat.label.en}
              className="relative text-center lg:text-left"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.7s ease ${i * 0.12}s, transform 0.7s ease ${
                  i * 0.12
                }s`,
                borderRight:
                  i < stats.length - 1
                    ? "1px solid rgba(255,255,255,0.06)"
                    : "none",
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
                  fontFamily:
                    isZh || isAr
                      ? "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                      : "'DM Sans', sans-serif",
                  fontSize: isZh || isAr ? "0.82rem" : "0.7rem",
                  letterSpacing: isZh || isAr ? "0.08em" : "0.2em",
                  textTransform: isZh || isAr ? "none" : "uppercase",
                  color: "rgba(255,255,255,0.35)",
                  marginTop: "0.5rem",
                  lineHeight: 1.45,
                }}
              >
                {stat.label[currentLanguage]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}