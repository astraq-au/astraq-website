/**
 * ASTRAQ Hero Section — Dark Sci-Fi Design
 * - Full viewport height, cinematic background
 * - Mobile / WeChat video fallback with hero-poster.png
 * - Animated headline entrance
 * - CTA buttons
 * - Stats grid
 * - English / Chinese / Spanish / Arabic supported
 */

import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import { useLanguage } from "../i18n/LanguageContext";

const FONT_FAMILY =
  "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

type LangCode = "en" | "zh" | "es" | "ar";

const heroText: Record<
  LangCode,
  {
    title: string;
    exploreProducts: string;
    learnMore: string;
  }
> = {
  en: {
    title: "Redefining Future",
    exploreProducts: "Explore Products",
    learnMore: "Learn More",
  },
  zh: {
    title: "重塑未来",
    exploreProducts: "探索产品",
    learnMore: "了解更多",
  },
  es: {
    title: "Redefiniendo el Futuro",
    exploreProducts: "Explorar Productos",
    learnMore: "Más Información",
  },
  ar: {
    title: "إعادة تعريف المستقبل",
    exploreProducts: "استكشف المنتجات",
    learnMore: "اعرف المزيد",
  },
};

const stats: Array<{
  value: Record<LangCode, string>;
  label: Record<LangCode, string>;
}> = [
  {
    value: {
      en: "POWER",
      zh: "能源",
      es: "ENERGÍA",
      ar: "الطاقة",
    },
    label: {
      en: "ENERGY",
      zh: "清洁能源",
      es: "ENERGÍA LIMPIA",
      ar: "طاقة نظيفة",
    },
  },
  {
    value: {
      en: "INTELLIGENCE",
      zh: "智能",
      es: "INTELIGENCIA",
      ar: "الذكاء",
    },
    label: {
      en: "AI ROBOT",
      zh: "AI 机器人",
      es: "ROBOT IA",
      ar: "روبوت ذكي",
    },
  },
  {
    value: {
      en: "SYSTEMS",
      zh: "系统",
      es: "SISTEMAS",
      ar: "الأنظمة",
    },
    label: {
      en: "INTEGRATION",
      zh: "集成方案",
      es: "INTEGRACIÓN",
      ar: "حلول متكاملة",
    },
  },
  {
    value: {
      en: "FUTURE",
      zh: "未来",
      es: "FUTURO",
      ar: "المستقبل",
    },
    label: {
      en: "MOBILITY",
      zh: "智慧出行",
      es: "MOVILIDAD",
      ar: "التنقل الذكي",
    },
  },
];

export default function HeroSection() {
  const { language } = useLanguage();

  const currentLanguage: LangCode =
    language === "zh" || language === "es" || language === "ar"
      ? language
      : "en";

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [visible, setVisible] = useState(false);
  const [hideHeroContent, setHideHeroContent] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const [, setLocation] = useLocation();

  const isZh = currentLanguage === "zh";
  const isAr = currentLanguage === "ar";

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

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.setAttribute("playsinline", "true");
    video.setAttribute("webkit-playsinline", "true");
    video.setAttribute("x5-playsinline", "true");
    video.setAttribute("x5-video-player-type", "h5");
    video.setAttribute("x5-video-player-fullscreen", "false");

    video.muted = true;
    video.defaultMuted = true;

    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setVideoReady(true);
          setVideoError(false);
        })
        .catch(() => {
          setVideoError(true);
        });
    }
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
      {/* Background fallback image for mobile / WeChat */}
      <img
        src="/hero-poster.png"
        alt="ASTRAQ background"
        className="absolute inset-0 z-0 w-full h-full object-cover"
        style={{
          opacity: videoReady && !videoError ? 0 : 1,
          transition: "opacity 0.6s ease",
        }}
      />

      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 z-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-poster.png"
        onCanPlay={() => {
          setVideoReady(true);
          setVideoError(false);
        }}
        onLoadedData={() => {
          setVideoReady(true);
          setVideoError(false);
        }}
        onError={() => {
          setVideoError(true);
        }}
        style={{
          opacity: videoReady && !videoError ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
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
          direction: "ltr",
        }}
      >
        {/* Main headline */}
        <h1
          style={{
            fontFamily: FONT_FAMILY,
            fontWeight: 600,
            fontSize:
              isZh || isAr
                ? "clamp(3rem, 6.2vw, 7.4rem)"
                : "clamp(3.2rem, 7vw, 8.5rem)",
            lineHeight: 1.02,
            letterSpacing: isZh || isAr ? "-0.025em" : "-0.055em",
            color: "#FFFFFF",
            textTransform: isZh || isAr ? "none" : "uppercase",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 1s ease 0.3s, transform 1s ease 0.3s",
          }}
        >
          {heroText[currentLanguage].title}
        </h1>

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
            {heroText[currentLanguage].exploreProducts}
          </button>

          <button className="btn-outline-glow" onClick={handleLearnMore}>
            {heroText[currentLanguage].learnMore}
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
              key={stat.label.en}
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
                  fontSize:
                    isZh || isAr
                      ? "clamp(1.35rem, 2vw, 2.5rem)"
                      : "clamp(1.25rem, 2vw, 2.4rem)",
                  color: "#FFFFFF",
                  lineHeight: 1.04,
                  letterSpacing: isZh || isAr ? "-0.01em" : "-0.025em",
                }}
              >
                {stat.value[currentLanguage]}
              </div>

              <div
                style={{
                  fontFamily: FONT_FAMILY,
                  fontWeight: 400,
                  fontSize:
                    isZh || isAr
                      ? "clamp(0.72rem, 0.8vw, 1rem)"
                      : "clamp(0.65rem, 0.75vw, 0.9rem)",
                  letterSpacing: isZh || isAr ? "0.04em" : "0.08em",
                  textTransform: isZh || isAr ? "none" : "uppercase",
                  color: "rgba(255, 255, 255, 0.71)",
                  marginTop: "0.5rem",
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