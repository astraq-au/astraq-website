/**
 * ASTRAQ News Page
 * Design: Dark industrial style — warm dark background, white text, gold accent
 * Content: News coming soon page
 * English / Chinese supported
 */

import Footer from "../components/Footer";
import { useLanguage } from "../i18n/LanguageContext";

const ACCENT_COLOR = "#C9A46A";

const FONT_FAMILY =
  "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

export default function News() {
  const { language } = useLanguage();

  const getLabel = (en: string, zh: string) => {
    return language === "zh" ? zh : en;
  };

  const textTransform =
    language === "zh" ? ("none" as const) : ("uppercase" as const);

  const titleLetterSpacing = language === "zh" ? "-0.04em" : "0.05em";
  const smallLetterSpacing = language === "zh" ? "0.08em" : "0.22em";
  const paragraphLetterSpacing = language === "zh" ? "0.02em" : "0.03em";

  return (
    <main
      className="min-h-screen text-white"
      style={{
        background: "#3F3432",
        fontFamily: FONT_FAMILY,
      }}
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
              "radial-gradient(ellipse at 72% 42%, rgba(201,164,106,0.12) 0%, transparent 52%)",
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.08) 45%, rgba(0,0,0,0.34) 100%)",
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
                fontFamily: FONT_FAMILY,
                fontWeight: 700,
                fontSize: "clamp(1rem, 1.15vw, 1.45rem)",
                letterSpacing: smallLetterSpacing,
                textTransform,
                color: ACCENT_COLOR,
              }}
            >
              {getLabel("News", "新闻")}
            </span>
          </div>

          <h1
            style={{
              fontFamily: FONT_FAMILY,
              fontWeight: 700,
              fontSize:
                language === "zh"
                  ? "clamp(3rem, 5.6vw, 7.2rem)"
                  : "clamp(3.2rem, 6vw, 8rem)",
              lineHeight: language === "zh" ? 1.05 : 0.95,
              letterSpacing: titleLetterSpacing,
              textTransform,
              color: "#FFFFFF",
              maxWidth: language === "zh" ? "1300px" : "1200px",
              marginBottom: "clamp(1.5rem, 2.5vw, 3rem)",
            }}
          >
            {getLabel("ASTRAQ News Coming Soon", "ASTRAQ 新闻即将上线")}
          </h1>

          <p
            style={{
              fontFamily: FONT_FAMILY,
              fontWeight: 500,
              fontSize: "clamp(1.15rem, 1.3vw, 1.7rem)",
              lineHeight: 1.65,
              letterSpacing: paragraphLetterSpacing,
              color: "rgba(255,255,255,0.68)",
              maxWidth: language === "zh" ? "950px" : "850px",
            }}
          >
            {getLabel(
              "This page will share ASTRAQ updates, product progress, market expansion, technology development and company milestones.",
              "这里将用于发布 ASTRAQ 的公司动态、产品进展、市场拓展、技术发展和重要里程碑。"
            )}
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}