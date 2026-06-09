/**
 * ASTRAQ Products Section 
 * - Model tabs at the top
 * - Large centered product image
 * - Learn More / Buy Now buttons
 * - Solar charging station section redesigned with 2/3 image + 1/3 compact key cards
 * - Brand About banner with separated editable text
 * - English / Chinese / Spanish / Arabic supported
 */

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

const FONT_FAMILY =
  "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

const ACCENT_COLOR = "#C9A46A";
const SECTION_BG = "#3F3432";
const LIGHT_BG = "#FFFFFF";

const PRODUCTS_HEADER_BG =
  "linear-gradient(to bottom, #0B0D0F 0%, #1B2024 28%, #EDEBE7 100%)";

type LangCode = "en" | "zh" | "es" | "ar";

const commonText: Record<
  LangCode,
  {
    learnMore: string;
    buyNow: string;
    aboutUs: string;
    brandTitle: string;
    brandSubtitle: string;
  }
> = {
  en: {
    learnMore: "Learn More",
    buyNow: "Buy Now",
    aboutUs: "About Us",
    brandTitle: "Built for the Next Era",
    brandSubtitle: "CLEAN ENERGY · INTELLIGENT MOBILITY · AI SYSTEMS",
  },
  zh: {
    learnMore: "了解更多",
    buyNow: "立即购买",
    aboutUs: "关于我们",
    brandTitle: "面向下一个时代",
    brandSubtitle: "清洁能源 · 智能交通 · AI 系统",
  },
  es: {
    learnMore: "Más Información",
    buyNow: "Comprar Ahora",
    aboutUs: "Sobre Nosotros",
    brandTitle: "Diseñado para la Próxima Era",
    brandSubtitle: "ENERGÍA LIMPIA · MOVILIDAD INTELIGENTE · SISTEMAS IA",
  },
  ar: {
    learnMore: "اعرف المزيد",
    buyNow: "اشتر الآن",
    aboutUs: "من نحن",
    brandTitle: "مصمم للعصر القادم",
    brandSubtitle: "طاقة نظيفة · تنقل ذكي · أنظمة ذكاء اصطناعي",
  },
};

const truckModels = [
  {
    name: "DM1",
    shortName: {
      en: "Diesel Mixer",
      zh: "柴油搅拌车",
      es: "Hormigonera Diésel",
      ar: "خلاطة ديزل",
    },
    image: "/diesel1.png",
    learnLink: "/products/diesel-truck",
    buyLink: "/store",
    imageScale: 1.3,
  },
  {
    name: "DPM1",
    shortName: {
      en: "Diesel Prime Mover",
      zh: "柴油牵引车",
      es: "Tractocamión Diésel",
      ar: "جرار ديزل",
    },
    image: "/diesel2.png",
    learnLink: "/products/diesel-truck-2",
    buyLink: "/store",
    imageScale: 0.95,
  },
  {
    name: "EPM1",
    shortName: {
      en: "Electric Prime Mover",
      zh: "电动牵引车",
      es: "Tractocamión Eléctrico",
      ar: "جرار كهربائي",
    },
    image: "/electric1.png",
    learnLink: "/products/electric-truck",
    buyLink: "/store",
    imageScale: 0.95,
  },
  {
    name: "EL1",
    shortName: {
      en: "Electric Light Truck",
      zh: "电动轻卡",
      es: "Camión Ligero Eléctrico",
      ar: "شاحنة خفيفة كهربائية",
    },
    image: "/electric2.png",
    learnLink: "/products/electric-truck-2",
    buyLink: "/store",
    imageScale: 1.2,
  },
];

const solarStation = {
  name: {
    en: "Clean Energy Infrastructure",
    zh: "清洁能源基础设施",
    es: "Infraestructura de Energía Limpia",
    ar: "بنية تحتية للطاقة النظيفة",
  },
  description: {
    en: "Integrated solar generation, battery storage, and charging services for commercial transport.",
    zh: "集成太阳能发电、储能与商用交通充电服务，为未来运输场景提供能源支持。",
    es: "Generación solar, almacenamiento en baterías y servicios de carga integrados para el transporte comercial.",
    ar: "توليد شمسي وتخزين بطاريات وخدمات شحن متكاملة لدعم النقل التجاري.",
  },
  title: {
    en: "Solar-Storage-Charging Integrated Station",
    zh: "光储充一体化电站",
    es: "Estación Integrada de Energía Solar, Almacenamiento y Carga",
    ar: "محطة متكاملة للطاقة الشمسية والتخزين والشحن",
  },
  image: "/Solar-Charging-Station.png",
  learnLink: "/products/solar-charging-station",
};

const solarCards = [
  {
    metric: {
      en: "5MW",
      zh: "5兆瓦",
      es: "5MW",
      ar: "5 ميجاواط",
    },
    label: {
      en: "Solar Generation Capacity",
      zh: "太阳能发电容量",
      es: "Capacidad de Generación Solar",
      ar: "قدرة التوليد الشمسي",
    },
  },
  {
    metric: {
      en: "11MWh",
      zh: "11兆瓦时",
      es: "11MWh",
      ar: "11 ميجاواط ساعة",
    },
    label: {
      en: "Battery Storage Capacity",
      zh: "电池储能容量",
      es: "Capacidad de Almacenamiento",
      ar: "سعة تخزين البطارية",
    },
  },
  {
    metric: {
      en: "20Y",
      zh: "20年",
      es: "20 años",
      ar: "20 سنة",
    },
    label: {
      en: "Design Life",
      zh: "设计寿命",
      es: "Vida Útil de Diseño",
      ar: "العمر التصميمي",
    },
  },
  {
    metric: {
      en: "PV + BESS",
      zh: "光伏 + 储能",
      es: "FV + BESS",
      ar: "PV + BESS",
    },
    label: {
      en: "Integrated Energy System",
      zh: "光伏 + 储能系统",
      es: "Sistema Energético Integrado",
      ar: "نظام طاقة متكامل",
    },
  },
];

const BRAND_BANNER = "/product-below-img.png";

function useInView(threshold = 0.15) {
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

function ProductSelector() {
  const { language } = useLanguage();
  const currentLanguage = normalizeLanguage(language);

  const { ref, inView } = useInView(0.15);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeModel = truckModels[activeIndex];

  const isZh = currentLanguage === "zh";
  const isAr = currentLanguage === "ar";

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{
        borderTop: "1px solid rgba(0,0,0,0.08)",
        background: LIGHT_BG,
        minHeight: "clamp(760px, 92vh, 1080px)",
        paddingTop: "clamp(3.5rem, 5vw, 6.5rem)",
        paddingBottom: "clamp(3rem, 5vw, 6rem)",
        fontFamily: FONT_FAMILY,
      }}
    >
      <div
        className="relative z-10 w-full max-w-[96vw] 2xl:max-w-[1900px] mx-auto px-4 sm:px-8 lg:px-12"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(36px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        <div className="flex justify-center">
          <div className="flex flex-wrap items-start justify-center gap-x-[clamp(2rem,4.2vw,7rem)] gap-y-5">
            {truckModels.map((model, index) => {
              const active = index === activeIndex;

              return (
                <button
                  key={model.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="relative text-center"
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: "0 0 0.75rem",
                    color: active
                      ? "rgba(0,0,0,0.88)"
                      : "rgba(0,0,0,0.32)",
                    transition: "color 0.25s ease",
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  <div
                    style={{
                      fontFamily: FONT_FAMILY,
                      fontWeight: 600,
                      fontSize: "clamp(1.1rem, 1.35vw, 2rem)",
                      letterSpacing: isZh || isAr ? "0.02em" : "0.04em",
                      textTransform: isZh || isAr ? "none" : "uppercase",
                      lineHeight: 1.1,
                    }}
                  >
                    {model.shortName[currentLanguage]}
                  </div>

                  <span
                    className="absolute left-1/2 bottom-0 h-[2px] -translate-x-1/2 transition-all duration-300"
                    style={{
                      width: active ? "100%" : "0",
                      background: ACCENT_COLOR,
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div
          className="relative mx-auto flex items-center justify-center"
          style={{
            width: "100%",
            height: "clamp(420px, 58vh, 720px)",
            marginTop: "clamp(1.5rem, 3vw, 3rem)",
            overflow: "visible",
          }}
        >
          <div
            className="relative flex items-center justify-center"
            style={{
              width: "min(92vw, 1500px)",
              height: "min(58vh, 700px)",
              overflow: "hidden",
              background:
                "radial-gradient(circle at center, rgba(255,255,255,1) 0%, rgba(255,255,255,0.96) 52%, rgba(255,255,255,0) 82%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 0%, black 62%, rgba(0,0,0,0.45) 76%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse at center, black 0%, black 62%, rgba(0,0,0,0.45) 76%, transparent 100%)",
            }}
          >
            <img
              key={activeModel.image}
              src={activeModel.image}
              alt={activeModel.name}
              className="relative z-10"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transform: `scale(${activeModel.imageScale})`,
                filter: "brightness(1.04) contrast(1.04) saturate(0.96)",
                mixBlendMode: "multiply",
              }}
            />
          </div>
        </div>

        <div
          className="relative z-10 flex flex-col items-center text-center"
          style={{
            marginTop: "clamp(0.5rem, 1.2vw, 1.5rem)",
          }}
        >
          <h3
            style={{
              fontFamily: FONT_FAMILY,
              fontWeight: 600,
              fontSize: "clamp(1.8rem, 2.3vw, 3.2rem)",
              letterSpacing: "-0.025em",
              textTransform: "uppercase",
              color: "rgba(0,0,0,0.88)",
              marginBottom: "clamp(1.2rem, 1.8vw, 2rem)",
            }}
          >
            {activeModel.name}
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={activeModel.learnLink}
              className="inline-flex items-center justify-center"
              style={{
                width: "clamp(150px, 9vw, 190px)",
                height: "clamp(46px, 3vw, 58px)",
                border: "1px solid rgba(0,0,0,0.42)",
                color: "rgba(0,0,0,0.86)",
                background: "rgba(255,255,255,0.02)",
                fontFamily: FONT_FAMILY,
                fontWeight: 600,
                fontSize: "clamp(0.8rem, 0.8vw, 1rem)",
                letterSpacing: isZh || isAr ? "0.04em" : "0.06em",
                textTransform: isZh || isAr ? "none" : "uppercase",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0,0,0,0.06)";
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.75)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.42)";
              }}
            >
              {commonText[currentLanguage].learnMore}
            </a>

            <a
              href={activeModel.buyLink}
              className="inline-flex items-center justify-center"
              style={{
                width: "clamp(150px, 9vw, 190px)",
                height: "clamp(46px, 3vw, 58px)",
                border: "1px solid rgba(201,164,106,0.95)",
                color: "#FFFFFF",
                background: "rgba(201,164,106,0.88)",
                fontFamily: FONT_FAMILY,
                fontWeight: 600,
                fontSize: "clamp(0.8rem, 0.8vw, 1rem)",
                letterSpacing: isZh || isAr ? "0.04em" : "0.06em",
                textTransform: isZh || isAr ? "none" : "uppercase",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(201,164,106,1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(201,164,106,0.88)";
              }}
            >
              {commonText[currentLanguage].buyNow}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function SolarStationSection() {
  const { language } = useLanguage();
  const currentLanguage = normalizeLanguage(language);

  const { ref, inView } = useInView(0.15);

  const isZh = currentLanguage === "zh";
  const isAr = currentLanguage === "ar";

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{
        borderTop: "1px solid rgba(0,0,0,0.06)",
        background:
          "linear-gradient(to bottom, #FFFFFF 0%, #F7F6F3 44%, #FFFFFF 100%)",
        paddingTop: "clamp(4rem, 6vw, 7rem)",
        paddingBottom: "clamp(4rem, 6vw, 7rem)",
        fontFamily: FONT_FAMILY,
      }}
    >
      <div
        className="relative z-10 w-full max-w-[98vw] 2xl:max-w-[1880px] mx-auto px-3 sm:px-5 lg:px-8 xl:px-10"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(36px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        <div className="text-center">
          <h3
            style={{
              fontFamily: FONT_FAMILY,
              fontWeight: 600,
              fontSize: "clamp(2.1rem, 3.2vw, 4.8rem)",
              letterSpacing: isZh || isAr ? "-0.02em" : "-0.04em",
              textTransform: isZh || isAr ? "none" : "uppercase",
              color: "rgba(0,0,0,0.88)",
              marginBottom: "clamp(0.8rem, 1.2vw, 1.5rem)",
            }}
          >
            {solarStation.name[currentLanguage]}
          </h3>

          <p
            className="mx-auto"
            style={{
              maxWidth: "clamp(760px, 58vw, 1120px)",
              fontFamily: FONT_FAMILY,
              fontWeight: 400,
              fontSize: "clamp(1.18rem, 1.35vw, 1.85rem)",
              letterSpacing: "-0.01em",
              lineHeight: 1.7,
              color: "rgba(0,0,0,0.58)",
              marginBottom: "clamp(2.5rem, 3.5vw, 4rem)",
            }}
          >
            {solarStation.description[currentLanguage]}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-[clamp(1rem,1.4vw,1.6rem)]">
          <a
            href={solarStation.learnLink}
            className="group relative block overflow-hidden no-underline"
            style={{
              minHeight: "clamp(520px, 42vw, 720px)",
              borderRadius: "8px",
              background: "#111111",
              boxShadow: "0 20px 46px rgba(0,0,0,0.12)",
              border: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <img
              src={solarStation.image}
              alt="Solar Charging Station"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
              style={{
                filter: "brightness(0.76) contrast(1.06)",
              }}
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.25) 44%, rgba(0,0,0,0.06) 100%)",
              }}
            />

            <div className="absolute left-0 right-0 bottom-0 p-[clamp(1.6rem,2.4vw,3.2rem)]">
              <div
                style={{
                  fontFamily: FONT_FAMILY,
                  fontWeight: 600,
                  fontSize: "clamp(2.4rem, 3vw, 4rem)",
                  letterSpacing: isZh || isAr ? "-0.02em" : "-0.04em",
                  textTransform: isZh || isAr ? "none" : "uppercase",
                  color: "#FFFFFF",
                  lineHeight: 1.15,
                  maxWidth: "850px",
                }}
              >
                {solarStation.title[currentLanguage]}
              </div>
            </div>
          </a>

          <div className="grid grid-cols-2 lg:grid-cols-2 gap-[clamp(1rem,1.2vw,1.4rem)]">
            {solarCards.map((card) => {
              return (
                <a
                  key={card.metric.en}
                  href={solarStation.learnLink}
                  className="group relative block overflow-hidden no-underline"
                  style={{
                    minHeight: "clamp(250px, 20vw, 348px)",
                    borderRadius: "8px",
                    background:
                      "linear-gradient(135deg, #EEF0F2 0%, #DDE2E5 52%, #F8F8F6 100%)",
                    boxShadow: "0 20px 42px rgba(0,0,0,0.08)",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle at 78% 18%, rgba(201,164,106,0.24), transparent 42%)",
                    }}
                  />

                  <div className="relative z-10 flex h-full flex-col justify-between p-[clamp(1.3rem,1.6vw,2rem)]">
                    <div
                      style={{
                        fontFamily: FONT_FAMILY,
                        fontWeight: 600,
                        fontSize:
                          isZh || isAr
                            ? "clamp(1.85rem, 2.35vw, 3.45rem)"
                            : "clamp(2.2rem, 2.8vw, 4.2rem)",
                        letterSpacing: isZh || isAr ? "-0.025em" : "-0.045em",
                        textTransform: isZh || isAr ? "none" : "uppercase",
                        color: "rgba(0,0,0,0.84)",
                        lineHeight: 1.08,
                      }}
                    >
                      {card.metric[currentLanguage]}
                    </div>

                    <div
                      style={{
                        fontFamily: FONT_FAMILY,
                        fontWeight: 600,
                        fontSize: "clamp(0.95rem, 1vw, 1.28rem)",
                        letterSpacing: isZh || isAr ? "0.03em" : "0.04em",
                        textTransform: isZh || isAr ? "none" : "uppercase",
                        color: ACCENT_COLOR,
                        lineHeight: 1.35,
                      }}
                    >
                      {card.label[currentLanguage]}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href={solarStation.learnLink}
            className="inline-flex items-center justify-center"
            style={{
              marginTop: "clamp(2rem, 3vw, 3.8rem)",
              width: "clamp(160px, 10vw, 210px)",
              height: "clamp(46px, 3vw, 58px)",
              border: "1px solid rgba(0,0,0,0.42)",
              color: "rgba(0,0,0,0.86)",
              background: "rgba(255,255,255,0.12)",
              fontFamily: FONT_FAMILY,
              fontWeight: 600,
              fontSize: "clamp(0.8rem, 0.8vw, 1rem)",
              letterSpacing: isZh || isAr ? "0.04em" : "0.06em",
              textTransform: isZh || isAr ? "none" : "uppercase",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0,0,0,0.06)";
              e.currentTarget.style.borderColor = "rgba(0,0,0,0.75)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.12)";
              e.currentTarget.style.borderColor = "rgba(0,0,0,0.42)";
            }}
          >
            {commonText[currentLanguage].learnMore}
          </a>
        </div>
      </div>
    </div>
  );
}

function BrandAboutBanner() {
  const { language } = useLanguage();
  const currentLanguage = normalizeLanguage(language);

  const { ref, inView } = useInView(0.15);

  const isZh = currentLanguage === "zh";
  const isAr = currentLanguage === "ar";

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "0",
        paddingBottom: "0",
        background: SECTION_BG,
        fontFamily: FONT_FAMILY,
      }}
    >
      <div
        className="w-full"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        <div
          className="relative w-full overflow-hidden group brand-about-banner"
          style={{
            borderRadius: "0",
            border: "none",
          }}
        >
          <img
            src={BRAND_BANNER}
            alt="ASTRAQ heavy transport clean energy intelligent robotics"
            className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.01] brand-about-image"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />

          <div className="brand-about-text">
            <h2>{commonText[currentLanguage].brandTitle}</h2>
            <p>{commonText[currentLanguage].brandSubtitle}</p>
          </div>

          <a href="/about" className="brand-about-button">
            {commonText[currentLanguage].aboutUs}
          </a>
        </div>
      </div>

      <style>{`
        .brand-about-banner {
          min-height: 420px;
        }

        .brand-about-image {
          min-height: 420px;
          object-fit: cover !important;
          object-position: center center;
        }

        .brand-about-text {
          position: absolute;
          z-index: 5;
          left: clamp(22%, 23vw, 28%);
          top: clamp(17%, 18vw, 24%);
          transform: translateY(-50%);
          color: rgba(255,255,255,0.94);
          text-shadow: 0 10px 32px rgba(0,0,0,0.42);
          pointer-events: none;
          direction: ltr;
        }

        .brand-about-text h2 {
          margin: 0;
          font-family: ${FONT_FAMILY};
          font-weight: 400;
          font-size: clamp(2.2rem, 3.9vw, 6rem);
          line-height: 1.05;
          letter-spacing: ${isZh || isAr ? "-0.02em" : "0.01em"};
          color: rgba(255,255,255,0.96);
        }

        .brand-about-text p {
          margin: clamp(0.8rem, 1.1vw, 1.7rem) 0 0;
          font-family: ${FONT_FAMILY};
          font-weight: 400;
          font-size: clamp(0.95rem, 1.35vw, 2rem);
          line-height: 1.35;
          letter-spacing: ${isZh || isAr ? "0.04em" : "0.12em"};
          color: rgba(255,255,255,0.82);
        }

        .brand-about-button {
          position: absolute;
          z-index: 6;
          left: 50%;
          bottom: clamp(1.2rem, 3vw, 3.5rem);
          transform: translateX(-50%);
          width: clamp(150px, 10vw, 210px);
          height: clamp(46px, 3vw, 60px);
          border: 1px solid rgba(255,255,255,0.72);
          border-radius: 4px;
          color: rgba(255,255,255,0.94);
          background: rgba(0,0,0,0.18);
          backdrop-filter: blur(8px);
          font-family: ${FONT_FAMILY};
          font-weight: 600;
          font-size: clamp(0.8rem, 0.85vw, 1rem);
          letter-spacing: ${isZh || isAr ? "0.04em" : "0.06em"};
          text-transform: ${isZh || isAr ? "none" : "uppercase"};
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .brand-about-button:hover {
          background: rgba(255,255,255,0.18);
          border-color: #FFFFFF;
        }

        @media (max-width: 1280px) {
          .brand-about-text {
            left: clamp(24%, 25vw, 30%);
            top: 23%;
          }
        }

        @media (max-width: 900px) {
          .brand-about-banner {
            min-height: 560px;
          }

          .brand-about-image {
            min-height: 560px;
            object-position: 48% center;
          }

          .brand-about-text {
            left: clamp(24px, 6vw, 56px);
            right: clamp(24px, 6vw, 56px);
            top: 18%;
            transform: none;
          }

          .brand-about-text h2 {
            font-size: clamp(2.4rem, 8vw, 4.6rem);
          }

          .brand-about-text p {
            max-width: 520px;
            font-size: clamp(0.95rem, 2.6vw, 1.35rem);
            letter-spacing: ${isZh || isAr ? "0.04em" : "0.08em"};
          }
        }

        @media (max-width: 560px) {
          .brand-about-banner {
            min-height: 620px;
          }

          .brand-about-image {
            min-height: 620px;
            object-position: 52% center;
          }

          .brand-about-text {
            top: 10%;
          }

          .brand-about-text h2 {
            font-size: clamp(2.2rem, 11vw, 3.8rem);
            line-height: 1.08;
          }

          .brand-about-text p {
            font-size: clamp(0.9rem, 4vw, 1.18rem);
            line-height: 1.55;
            letter-spacing: ${isZh || isAr ? "0.035em" : "0.055em"};
          }

          .brand-about-button {
            bottom: 32px;
            width: calc(100% - 48px);
            max-width: 260px;
          }
        }
      `}</style>
    </div>
  );
}

export default function ProductsSection() {
  const { ref: headerRef, inView: headerInView } = useInView(0.2);

  return (
    <section
      id="products"
      style={{
        background: LIGHT_BG,
        paddingTop: "0",
        scrollMarginTop: "clamp(90px, 7vw, 130px)",
        fontFamily: FONT_FAMILY,
      }}
    >
      <div
        style={{
          background: PRODUCTS_HEADER_BG,
          paddingTop: "clamp(6rem, 8vw, 10rem)",
          paddingBottom: "clamp(4rem, 6vw, 7rem)",
        }}
      >
        <div
          ref={headerRef}
          className="w-full max-w-[92vw] 2xl:max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 2xl:px-32"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        />
      </div>

      <ProductSelector />
      <SolarStationSection />
      <BrandAboutBanner />
    </section>
  );
}