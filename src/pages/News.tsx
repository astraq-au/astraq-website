/**
 * ASTRAQ News Page
 * Design: Dark industrial style — warm dark background, white text, gold accent
 * Content: News coming soon page
 * English / Chinese / Spanish / Arabic supported
 */

import Footer from "../components/Footer";
import { useLanguage } from "../i18n/LanguageContext";

const ACCENT_COLOR = "#C9A46A";

const FONT_FAMILY =
  "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

export default function News() {
  const { language } = useLanguage();

  const isZh = language === "zh";
  const isEs = language === "es";
  const isAr = language === "ar";
  const isRtl = isAr;

  const getLabel = (en: string, zh: string, es: string, ar: string) => {
    if (isZh) return zh;
    if (isEs) return es;
    if (isAr) return ar;
    return en;
  };

  const textTransform =
    isZh || isAr ? ("none" as const) : ("uppercase" as const);

  const titleLetterSpacing = isZh || isAr ? "-0.04em" : isEs ? "0.01em" : "0.05em";
  const smallLetterSpacing = isZh || isAr ? "0.08em" : isEs ? "0.14em" : "0.22em";
  const paragraphLetterSpacing = isZh || isAr ? "0.02em" : "0.03em";

  return (
    <main
      dir={isRtl ? "rtl" : "ltr"}
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
            background: isRtl
              ? "radial-gradient(ellipse at 28% 42%, rgba(201,164,106,0.12) 0%, transparent 52%)"
              : "radial-gradient(ellipse at 72% 42%, rgba(201,164,106,0.12) 0%, transparent 52%)",
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
                fontSize: isEs
                  ? "clamp(0.9rem, 1vw, 1.25rem)"
                  : "clamp(1rem, 1.15vw, 1.45rem)",
                letterSpacing: smallLetterSpacing,
                textTransform,
                color: ACCENT_COLOR,
              }}
            >
              {getLabel("News", "新闻", "Noticias", "الأخبار")}
            </span>
          </div>

          <h1
            style={{
              fontFamily: FONT_FAMILY,
              fontWeight: 700,
              fontSize:
                isZh || isAr
                  ? "clamp(3rem, 5.6vw, 7.2rem)"
                  : isEs
                  ? "clamp(2.8rem, 5.2vw, 7rem)"
                  : "clamp(3.2rem, 6vw, 8rem)",
              lineHeight: isZh || isAr ? 1.05 : 0.98,
              letterSpacing: titleLetterSpacing,
              textTransform,
              color: "#FFFFFF",
              maxWidth: isZh || isAr ? "1300px" : isEs ? "1400px" : "1200px",
              marginBottom: "clamp(1.5rem, 2.5vw, 3rem)",
              overflowWrap: "break-word",
            }}
          >
            {getLabel(
              "ASTRAQ News Coming Soon",
              "ASTRAQ 新闻即将上线",
              "Noticias de ASTRAQ próximamente",
              "أخبار ASTRAQ قريبًا"
            )}
          </h1>

          <p
            style={{
              fontFamily: FONT_FAMILY,
              fontWeight: 500,
              fontSize: isEs
                ? "clamp(1.05rem, 1.18vw, 1.5rem)"
                : "clamp(1.15rem, 1.3vw, 1.7rem)",
              lineHeight: 1.65,
              letterSpacing: paragraphLetterSpacing,
              color: "rgba(255,255,255,0.68)",
              maxWidth: isZh || isAr ? "950px" : isEs ? "980px" : "850px",
            }}
          >
            {getLabel(
              "This page will share ASTRAQ updates, product progress, market expansion, technology development and company milestones.",
              "这里将用于发布 ASTRAQ 的公司动态、产品进展、市场拓展、技术发展和重要里程碑。",
              "Esta página compartirá novedades de ASTRAQ, avances de productos, expansión de mercado, desarrollo tecnológico e hitos de la empresa.",
              "ستعرض هذه الصفحة تحديثات ASTRAQ وتقدم المنتجات وتوسع الأسواق والتطور التقني والمحطات المهمة للشركة."
            )}
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}