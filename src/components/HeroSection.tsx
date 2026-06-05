/**
 * ASTRAQ Hero Section — Dark Sci-Fi Design
 * - Full viewport height, cinematic background
 * - Animated headline entrance (translateY + opacity)
 * - Tagline, CTA buttons
 * - Stats grid (integrated)
 * - Scroll indicator
 * - English / Chinese supported
 */

import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useLanguage } from "../i18n/LanguageContext";

//const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663624986257/BerFRCPtLjYjx9pqX5GUkP/hero-bg-melbourne-GuQD9Emmw6QGu8jJEy6BX7.webp";

const FONT_FAMILY =
  "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

const stats = [
  {
    value: "POWER",
    zhValue: "能源",
    label: "ENERGY",
    zhLabel: "清洁能源",
  },
  {
    value: "INTELLIGENCE",
    zhValue: "智能",
    label: "AI ROBOT",
    zhLabel: "AI 机器人",
  },
  {
    value: "SYSTEMS",
    zhValue: "系统",
    label: "INTEGRATION",
    zhLabel: "集成方案",
  },
  {
    value: "FUTURE",
    zhValue: "未来",
    label: "MOBILITY",
    zhLabel: "智慧出行",
  },
];

export default function HeroSection() {
  const { language } = useLanguage();

  const [visible, setVisible] = useState(false);
  const [hideHeroContent, setHideHeroContent] = useState(false);
  const [, setLocation] = useLocation();

  const getLabel = (en: string, zh: string) => {
    return language === "zh" ? zh : en;
  };

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
        {/* Main headline */}
        <h1
          style={{
            fontFamily: FONT_FAMILY,
            fontWeight: 600,
            fontSize: language === "zh"
              ? "clamp(3rem, 6.2vw, 7.4rem)"
              : "clamp(3.2rem, 7vw, 8.5rem)",
            lineHeight: 1.02,
            letterSpacing: language === "zh" ? "-0.035em" : "-0.055em",
            color: "#FFFFFF",
            textTransform: language === "zh" ? "none" : "uppercase",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 1s ease 0.3s, transform 1s ease 0.3s",
          }}
        >
          {getLabel("Powering Next-Generation Logistics", "驱动新一代物流")}
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
            {getLabel("Explore Products", "探索产品")}
          </button>

          <button className="btn-outline-glow" onClick={handleLearnMore}>
            {getLabel("Learn More", "了解更多")}
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
                  fontSize:
                    language === "zh"
                      ? "clamp(1.35rem, 2vw, 2.5rem)"
                      : "clamp(1.25rem, 2vw, 2.4rem)",
                  color: "#FFFFFF",
                  lineHeight: 1.04,
                  letterSpacing: language === "zh" ? "-0.01em" : "-0.025em",
                }}
              >
                {getLabel(stat.value, stat.zhValue)}
              </div>

              <div
                style={{
                  fontFamily: FONT_FAMILY,
                  fontWeight: 400,
                  fontSize:
                    language === "zh"
                      ? "clamp(0.72rem, 0.8vw, 1rem)"
                      : "clamp(0.65rem, 0.75vw, 0.9rem)",
                  letterSpacing: language === "zh" ? "0.06em" : "0.08em",
                  textTransform: language === "zh" ? "none" : "uppercase",
                  color: "rgba(255, 255, 255, 0.71)",
                  marginTop: "0.5rem",
                }}
              >
                {getLabel(stat.label, stat.zhLabel)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}