/**
 * DieselTruck2Detail Page
 * ASTRAQ DPM1 6x4 Diesel Prime Mover — Light Homepage Matched Style
 * English / Chinese / Spanish / Arabic supported
 */

import Footer from "../components/Footer";
import { useLanguage } from "../i18n/LanguageContext";

const FONT_FAMILY =
  "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

const PRIME_MOVER_IMAGE = "/diesel-primemover-truck.png";
const SPEC_PDF = "/specifications/diesel-PrimeMover-specification.pdf";
const HERO_BG = "/diesel2-hero-road.png";

const COLORS = {
  pageBg: "#F5F7FA",
  sectionBg: "#FFFFFF",
  sectionBgAlt: "#EEF2F6",

  cardBg: "rgba(255,255,255,0.86)",
  cardBgStrong: "rgba(255,255,255,0.96)",

  border: "rgba(15,23,42,0.12)",
  borderSoft: "rgba(15,23,42,0.08)",

  textMain: "#1F283E",
  textSoft: "rgba(15,23,42,0.72)",
  textMuted: "rgba(15,23,42,0.54)",

  accent: "#1671B2",
  accentSoft: "rgba(22,113,178,0.10)",
  accentStrong: "rgba(22,113,178,0.16)",
  accentBorder: "rgba(22,113,178,0.32)",
};

const keyHighlights = [
  {
    value: "6×4",
    zhValue: "6×4",
    esValue: "6×4",
    arValue: "6×4",
    label: "Drive Configuration",
    zhLabel: "驱动形式",
    esLabel: "Configuración de tracción",
    arLabel: "نظام الدفع",
  },
  {
    value: "90T",
    zhValue: "90吨",
    esValue: "90 t",
    arValue: "90 طن",
    label: "Gross Combination Mass",
    zhLabel: "最大组合总质量",
    esLabel: "Masa máxima combinada",
    arLabel: "الكتلة الإجمالية المركبة",
  },
  {
    value: "400kW",
    zhValue: "400千瓦",
    esValue: "400 kW",
    arValue: "400 كيلوواط",
    label: "MC13 Diesel Engine",
    zhLabel: "MC13 柴油发动机",
    esLabel: "Motor diésel MC13",
    arLabel: "محرك ديزل MC13",
  },
  {
    value: "12-Speed",
    zhValue: "12挡",
    esValue: "12 marchas",
    arValue: "12 سرعة",
    label: "Automated Transmission",
    zhLabel: "自动变速箱",
    esLabel: "Transmisión automatizada",
    arLabel: "ناقل حركة آلي",
  },
];

const quickSpecs = [
  {
    label: "Application",
    zhLabel: "应用场景",
    esLabel: "Aplicación",
    arLabel: "الاستخدام",
    value: "6×4 Prime Mover",
    zhValue: "6×4 柴油牵引车",
    esValue: "Tractocamión 6×4",
    arValue: "قاطرة 6×4",
  },
  {
    label: "Engine",
    zhLabel: "发动机",
    esLabel: "Motor",
    arLabel: "المحرك",
    value: "MC13.54-61 12.42L Diesel",
    zhValue: "MC13.54-61 12.42L 柴油发动机",
    esValue: "MC13.54-61 diésel de 12.42 L",
    arValue: "MC13.54-61 ديزل 12.42 لتر",
  },
  {
    label: "Power",
    zhLabel: "最大功率",
    esLabel: "Potencia",
    arLabel: "القوة",
    value: "400 kW @ 1800 rpm",
    zhValue: "400 千瓦 @ 1800 rpm",
    esValue: "400 kW @ 1800 rpm",
    arValue: "400 كيلوواط @ 1800 دورة/دقيقة",
  },
  {
    label: "Torque",
    zhLabel: "最大扭矩",
    esLabel: "Par máximo",
    arLabel: "العزم",
    value: "2500 N·m @ 950–1400 rpm",
    zhValue: "2500 N·m @ 950–1400 rpm",
    esValue: "2500 N·m @ 950–1400 rpm",
    arValue: "2500 نيوتن·متر @ 950–1400 دورة/دقيقة",
  },
  {
    label: "Transmission",
    zhLabel: "变速箱",
    esLabel: "Transmisión",
    arLabel: "ناقل الحركة",
    value: "12-Speed AMT",
    zhValue: "12挡 AMT 自动变速箱",
    esValue: "AMT de 12 marchas",
    arValue: "AMT بـ 12 سرعة",
  },
  {
    label: "Wheelbase",
    zhLabel: "轴距",
    esLabel: "Distancia entre ejes",
    arLabel: "قاعدة العجلات",
    value: "3200 + 1400 mm",
    zhValue: "3200 + 1400 mm",
    esValue: "3200 + 1400 mm",
    arValue: "3200 + 1400 مم",
  },
  {
    label: "Dimensions",
    zhLabel: "整车尺寸",
    esLabel: "Dimensiones",
    arLabel: "الأبعاد",
    value: "7025 × 2490 × 3317 mm",
    zhValue: "7025 × 2490 × 3317 mm",
    esValue: "7025 × 2490 × 3317 mm",
    arValue: "7025 × 2490 × 3317 مم",
  },
  {
    label: "Fifth-Wheel Height",
    zhLabel: "鞍座高度",
    esLabel: "Altura de quinta rueda",
    arLabel: "ارتفاع صينية القطر",
    value: "1260 mm unloaded",
    zhValue: "1260 mm，空载状态",
    esValue: "1260 mm sin carga",
    arValue: "1260 مم بدون حمولة",
  },
];

const capabilitySpecs = [
  {
    label: "GVM",
    zhLabel: "最大总质量 GVM",
    esLabel: "GVM",
    arLabel: "GVM",
    value: "25,000 kg",
    zhValue: "25,000 kg",
    esValue: "25,000 kg",
    arValue: "25,000 كجم",
  },
  {
    label: "GCM",
    zhLabel: "最大组合总质量 GCM",
    esLabel: "GCM",
    arLabel: "GCM",
    value: "90,000 kg",
    zhValue: "90,000 kg",
    esValue: "90,000 kg",
    arValue: "90,000 كجم",
  },
  {
    label: "Kerb Weight",
    zhLabel: "整备质量",
    esLabel: "Peso en vacío",
    arLabel: "الوزن الفارغ",
    value: "8,800 kg",
    zhValue: "8,800 kg",
    esValue: "8,800 kg",
    arValue: "8,800 كجم",
  },
  {
    label: "Fuel Tank",
    zhLabel: "油箱容量",
    esLabel: "Depósito de combustible",
    arLabel: "خزان الوقود",
    value: "700 + 240 L",
    zhValue: "700 + 240 L",
    esValue: "700 + 240 L",
    arValue: "700 + 240 لتر",
  },
  {
    label: "Max Speed",
    zhLabel: "最高车速",
    esLabel: "Velocidad máxima",
    arLabel: "السرعة القصوى",
    value: "100 km/h",
    zhValue: "100 km/h",
    esValue: "100 km/h",
    arValue: "100 كم/س",
  },
  {
    label: "Gradeability",
    zhLabel: "最大爬坡度",
    esLabel: "Capacidad de ascenso",
    arLabel: "قدرة الصعود",
    value: "≥25%",
    zhValue: "≥25%",
    esValue: "≥25%",
    arValue: "≥25%",
  },
];

const safetyFeatures = [
  {
    value: "EBS + ESC + HSA",
    zhValue: "EBS 电子制动 + ESC 车身稳定 + HSA 坡道辅助",
    esValue: "EBS + ESC + HSA",
    arValue: "EBS + ESC + HSA",
  },
  {
    value: "ACC",
    zhValue: "ACC 自适应巡航",
    esValue: "ACC",
    arValue: "ACC",
  },
  {
    value: "AEBS",
    zhValue: "AEBS 自动紧急制动",
    esValue: "AEBS",
    arValue: "AEBS",
  },
  {
    value: "LDW",
    zhValue: "LDW 车道偏离预警",
    esValue: "LDW",
    arValue: "LDW",
  },
  {
    value: "Reverse Camera",
    zhValue: "倒车影像",
    esValue: "Cámara de reversa",
    arValue: "كاميرا خلفية",
  },
  {
    value: "Dual-Circuit Air Brake",
    zhValue: "双回路气压制动",
    esValue: "Freno neumático de doble circuito",
    arValue: "فرامل هوائية مزدوجة الدائرة",
  },
];

export default function DieselTruck2Detail() {
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

  const textTransform = isZh || isAr ? ("none" as const) : ("uppercase" as const);
  const buttonLetterSpacing = isZh || isAr ? "0.04em" : "0.06em";
  const titleLetterSpacing = isZh || isAr ? "-0.035em" : "-0.045em";

  return (
    <main
      dir={isRtl ? "rtl" : "ltr"}
      className="min-h-screen"
      style={{
        background: COLORS.pageBg,
        color: COLORS.textMain,
        fontFamily: FONT_FAMILY,
      }}
    >
      {/* Hero Banner */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{
          minHeight: "clamp(520px, 52vw, 940px)",
          paddingTop: "clamp(6rem, 8vw, 11rem)",
          paddingBottom: "clamp(5rem, 7vw, 10rem)",
          background: COLORS.sectionBg,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center 58%",
            backgroundRepeat: "no-repeat",
            transform: "scale(1.04)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background: isRtl
              ? "linear-gradient(270deg, rgba(245,247,250,0.76) 0%, rgba(245,247,250,0.38) 46%, rgba(245,247,250,0.56) 100%)"
              : "linear-gradient(90deg, rgba(245,247,250,0.76) 0%, rgba(245,247,250,0.38) 46%, rgba(245,247,250,0.56) 100%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(245,247,250,0.02) 0%, rgba(245,247,250,0.08) 58%, rgba(245,247,250,0.92) 100%)",
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(6,16,29,0.52) 0%, rgba(6,16,29,0.28) 12%, rgba(6,16,29,0.00) 28%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 72% 42%, rgba(22,113,178,0.16) 0%, rgba(22,113,178,0.06) 30%, transparent 60%)",
          }}
        />

        <div className="relative z-10 w-full max-w-[96vw] 2xl:max-w-[1900px] mx-auto px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28">
          <h1
            style={{
              fontFamily: FONT_FAMILY,
              fontWeight: 600,
              fontSize:
                isZh || isAr
                  ? "clamp(2.7rem, 5.2vw, 7.8rem)"
                  : "clamp(2.8rem, 5.6vw, 8.6rem)",
              lineHeight: 1.02,
              letterSpacing: titleLetterSpacing,
              textTransform,
              color: COLORS.textMain,
              maxWidth: "none",
              whiteSpace: "nowrap",
              marginTop: "clamp(0.5rem, 1vw, 1rem)",
              marginBottom: "clamp(1.3rem, 2vw, 2.6rem)",
              textShadow: "0 12px 32px rgba(255,255,255,0.45)",
            }}
          >
            {getLabel(
              "DPM1 6×4 Prime Mover",
              "DPM1 6×4 柴油牵引车",
              "DPM1 tractocamión 6×4",
              "DPM1 قاطرة 6×4"
            )}
          </h1>

          <p
            style={{
              fontFamily: FONT_FAMILY,
              fontWeight: 600,
              fontSize:
                isZh || isAr
                  ? "clamp(2rem, 3.8vw, 5.6rem)"
                  : "clamp(2.2rem, 4.2vw, 6.2rem)",
              lineHeight: 1,
              letterSpacing: isZh || isAr ? "-0.015em" : "-0.02em",
              textTransform,
              color: COLORS.textMain,
              marginBottom: "clamp(2rem, 3vw, 3.8rem)",
            }}
          >
            {getLabel("Euro 6", "欧六排放", "Euro 6", "يورو 6")}
          </p>

          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5"
            style={{
              marginTop: "clamp(1rem, 1.6vw, 2rem)",
            }}
          >
            <a
              href={SPEC_PDF}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center"
              style={{
                width: "clamp(210px, 13vw, 290px)",
                height: "clamp(56px, 3.6vw, 76px)",
                border: `1px solid ${COLORS.accentBorder}`,
                color: COLORS.textMain,
                background: "rgba(255,255,255,0.72)",
                fontFamily: FONT_FAMILY,
                fontWeight: 600,
                fontSize: "clamp(0.9rem, 0.9vw, 1.12rem)",
                letterSpacing: buttonLetterSpacing,
                textTransform,
                textDecoration: "none",
                transition: "all 0.3s ease",
                boxShadow: "0 18px 48px rgba(15,23,42,0.10)",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = COLORS.accent;
                e.currentTarget.style.background = COLORS.accentSoft;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = COLORS.accentBorder;
                e.currentTarget.style.background = "rgba(255,255,255,0.72)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {getLabel(
                "View Specification",
                "查看参数",
                "Ver especificaciones",
                "عرض المواصفات"
              )}
            </a>

            <a
              href="/store"
              className="inline-flex items-center justify-center"
              style={{
                width: "clamp(190px, 12vw, 260px)",
                height: "clamp(56px, 3.6vw, 76px)",
                border: `1px solid ${COLORS.accent}`,
                color: "#FFFFFF",
                background: COLORS.accent,
                fontFamily: FONT_FAMILY,
                fontWeight: 600,
                fontSize: "clamp(0.9rem, 0.9vw, 1.12rem)",
                letterSpacing: buttonLetterSpacing,
                textTransform,
                textDecoration: "none",
                transition: "all 0.3s ease",
                boxShadow: "0 18px 48px rgba(22,113,178,0.24)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#0F5F86";
                e.currentTarget.style.borderColor = "#0F5F86";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = COLORS.accent;
                e.currentTarget.style.borderColor = COLORS.accent;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {getLabel("Buy Now", "立即购买", "Comprar ahora", "اشتر الآن")}
            </a>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section
        style={{
          borderTop: `1px solid ${COLORS.borderSoft}`,
          borderBottom: `1px solid ${COLORS.borderSoft}`,
          padding: "clamp(3.5rem, 5.2vw, 7rem) 0",
          background: "linear-gradient(180deg, #FFFFFF 0%, #EEF2F6 100%)",
        }}
      >
        <div className="w-full max-w-[96vw] 2xl:max-w-[1900px] mx-auto px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {keyHighlights.map((item, index) => (
              <div
                key={item.label}
                className="text-center"
                style={{
                  textAlign: isRtl ? "right" : "left",
                  borderRight:
                    !isRtl && index < keyHighlights.length - 1
                      ? `1px solid ${COLORS.borderSoft}`
                      : "none",
                  borderLeft:
                    isRtl && index < keyHighlights.length - 1
                      ? `1px solid ${COLORS.borderSoft}`
                      : "none",
                  paddingLeft: index > 0 ? "clamp(0rem, 2.2vw, 4rem)" : "0",
                  paddingRight:
                    index < keyHighlights.length - 1
                      ? "clamp(0rem, 2.2vw, 4rem)"
                      : "0",
                }}
              >
                <div
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontWeight: 600,
                    fontSize:
                      isZh || isAr
                        ? "clamp(2.3rem, 3.4vw, 5rem)"
                        : "clamp(2.6rem, 4vw, 5.8rem)",
                    lineHeight: 1,
                    color: COLORS.textMain,
                    letterSpacing: isZh || isAr ? "-0.025em" : "-0.045em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {getLabel(item.value, item.zhValue, item.esValue, item.arValue)}
                </div>

                <div
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontWeight: 600,
                    fontSize: "clamp(0.9rem, 0.9vw, 1.18rem)",
                    letterSpacing: isZh || isAr ? "0.04em" : "0.08em",
                    textTransform,
                    color: COLORS.accent,
                    marginTop: "0.75rem",
                  }}
                >
                  {getLabel(item.label, item.zhLabel, item.esLabel, item.arLabel)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specification Preview */}
      <section
        style={{
          padding: "clamp(5rem, 7.6vw, 10rem) 0",
          background:
            "linear-gradient(180deg, #F5F7FA 0%, #FFFFFF 52%, #EEF2F6 100%)",
        }}
      >
        <div className="w-full max-w-[92vw] 2xl:max-w-[1760px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px] xl:grid-cols-[minmax(0,1fr)_460px] 2xl:grid-cols-[minmax(0,1fr)_500px] gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 items-stretch">
            <div
              className="flex flex-col"
              style={{
                minWidth: 0,
              }}
            >
              <div style={{ marginBottom: "clamp(2rem, 2.8vw, 3.2rem)" }}>
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className="block h-px"
                    style={{
                      width: "clamp(34px, 3vw, 64px)",
                      background: COLORS.accent,
                    }}
                  />

                  <span
                    style={{
                      fontFamily: FONT_FAMILY,
                      fontWeight: 600,
                      fontSize: "clamp(0.95rem, 1vw, 1.25rem)",
                      letterSpacing: buttonLetterSpacing,
                      textTransform,
                      color: COLORS.accent,
                    }}
                  >
                    {getLabel(
                      "Key Specification",
                      "核心参数",
                      "Especificaciones clave",
                      "المواصفات الرئيسية"
                    )}
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontWeight: 600,
                    fontSize:
                      isZh || isAr
                        ? "clamp(2.8rem, 4.4vw, 6.2rem)"
                        : "clamp(3rem, 4.8vw, 7rem)",
                    lineHeight: 1.04,
                    letterSpacing: titleLetterSpacing,
                    textTransform,
                    color: COLORS.textMain,
                    margin: 0,
                    maxWidth: "100%",
                  }}
                >
                  {getLabel(
                    "Built for Trailer Operation",
                    "为牵引运输场景打造",
                    "Diseñado para operaciones con remolque",
                    "مصمم لعمليات القطر بالمقطورات"
                  )}
                </h2>
              </div>

              <div
                className="relative overflow-hidden flex-1"
                style={{
                  border: `1px solid ${COLORS.border}`,
                  background: COLORS.cardBg,
                  minHeight: "clamp(460px, 36vw, 720px)",
                  boxShadow: "0 28px 80px rgba(15,23,42,0.12)",
                }}
              >
                <img
                  src={PRIME_MOVER_IMAGE}
                  alt="ASTRAQ DPM1 diesel prime mover"
                  className="w-full h-full transition-transform duration-700 hover:scale-105"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center center",
                  }}
                />

                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 58%, rgba(245,247,250,0.42) 100%)",
                  }}
                />

                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at 65% 35%, rgba(22,113,178,0.10) 0%, transparent 42%)",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                border: `1px solid ${COLORS.border}`,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.88) 100%)",
                padding: "clamp(1.6rem, 2vw, 2.6rem)",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                boxShadow: "0 28px 80px rgba(15,23,42,0.10)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                className="grid grid-cols-2"
                style={{
                  flex: 1,
                  columnGap: "clamp(1.8rem, 2.2vw, 3rem)",
                  rowGap: "clamp(1rem, 1.4vw, 1.8rem)",
                  alignContent: "space-between",
                }}
              >
                {quickSpecs.map((spec) => (
                  <div
                    key={spec.label}
                    style={{
                      borderBottom: `1px solid ${COLORS.borderSoft}`,
                      paddingBottom: "clamp(0.8rem, 0.9vw, 1.1rem)",
                      minHeight: "clamp(88px, 4.8vw, 118px)",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: FONT_FAMILY,
                        fontWeight: 600,
                        fontSize: "clamp(0.95rem, 0.95vw, 1.18rem)",
                        letterSpacing: isZh || isAr ? "0.04em" : "0.06em",
                        textTransform,
                        color: COLORS.accent,
                        marginBottom: "clamp(0.4rem, 0.5vw, 0.65rem)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {getLabel(
                        spec.label,
                        spec.zhLabel,
                        spec.esLabel,
                        spec.arLabel
                      )}
                    </div>

                    <div
                      style={{
                        fontFamily: FONT_FAMILY,
                        fontWeight: 400,
                        fontSize: "clamp(1.28rem, 1.25vw, 1.6rem)",
                        lineHeight: 1.35,
                        color: COLORS.textMain,
                        wordBreak: "break-word",
                      }}
                    >
                      {getLabel(
                        spec.value,
                        spec.zhValue,
                        spec.esValue,
                        spec.arValue
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={SPEC_PDF}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center"
                style={{
                  marginTop: "clamp(1.4rem, 1.8vw, 2.2rem)",
                  width: "100%",
                  height: "clamp(54px, 3.3vw, 70px)",
                  border: `1px solid ${COLORS.accentBorder}`,
                  color: COLORS.textMain,
                  background: "rgba(255,255,255,0.88)",
                  fontFamily: FONT_FAMILY,
                  fontWeight: 600,
                  fontSize: "clamp(0.82rem, 0.86vw, 1.05rem)",
                  letterSpacing: buttonLetterSpacing,
                  textTransform,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  boxShadow: "0 14px 36px rgba(15,23,42,0.08)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = COLORS.accent;
                  e.currentTarget.style.background = COLORS.accentSoft;
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = COLORS.accentBorder;
                  e.currentTarget.style.background = "rgba(255,255,255,0.88)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {getLabel(
                  "View Specification",
                  "查看参数",
                  "Ver especificaciones",
                  "عرض المواصفات"
                )}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Capability */}
      <section
        style={{
          padding: "clamp(4.2rem, 6.6vw, 8.5rem) 0",
          background: "linear-gradient(180deg, #FFFFFF 0%, #EEF2F6 100%)",
          borderTop: `1px solid ${COLORS.borderSoft}`,
        }}
      >
        <div className="w-full max-w-[96vw] 2xl:max-w-[1900px] mx-auto px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_clamp(520px,34vw,720px)] gap-10 lg:gap-12 2xl:gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-7">
                <span
                  className="block h-px"
                  style={{
                    width: "clamp(34px, 3vw, 64px)",
                    background: COLORS.accent,
                  }}
                />

                <span
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontWeight: 600,
                    fontSize: "clamp(1rem, 1.05vw, 1.35rem)",
                    letterSpacing: buttonLetterSpacing,
                    textTransform,
                    color: COLORS.accent,
                  }}
                >
                  {getLabel(
                    "Prime Mover Capability",
                    "牵引车运营能力",
                    "Capacidad del tractocamión",
                    "قدرات القاطرة"
                  )}
                </span>
              </div>

              <h2
                style={{
                  fontFamily: FONT_FAMILY,
                  fontWeight: 600,
                  fontSize:
                    isZh || isAr
                      ? "clamp(2.8rem, 4.4vw, 6.2rem)"
                      : "clamp(3rem, 4.8vw, 7rem)",
                  lineHeight: 1,
                  letterSpacing: titleLetterSpacing,
                  textTransform,
                  color: COLORS.textMain,
                  maxWidth: "clamp(520px, 48vw, 820px)",
                  whiteSpace: "normal",
                }}
              >
                {getLabel(
                  "Long-Haul Ready Platform",
                  "面向长途干线运输的高效平台",
                  "Plataforma preparada para larga distancia",
                  "منصة جاهزة للنقل لمسافات طويلة"
                )}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 2xl:gap-x-6 gap-y-5 2xl:gap-y-6">
              {capabilitySpecs.map((spec) => (
                <div
                  key={spec.label}
                  style={{
                    border: `1px solid ${COLORS.accentBorder}`,
                    padding: "clamp(1rem, 1.4vw, 1.6rem)",
                    minHeight: "clamp(128px, 8vw, 168px)",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(245,247,250,0.88) 100%)",
                    boxShadow: "0 16px 38px rgba(15,23,42,0.07)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: FONT_FAMILY,
                      fontWeight: 600,
                      fontSize: "clamp(0.9rem, 0.9vw, 1.1rem)",
                      letterSpacing: isZh || isAr ? "0.04em" : "0.08em",
                      textTransform,
                      color: COLORS.accent,
                      marginBottom: "0.6rem",
                    }}
                  >
                    {getLabel(
                      spec.label,
                      spec.zhLabel,
                      spec.esLabel,
                      spec.arLabel
                    )}
                  </div>

                  <span
                    style={{
                      fontFamily: FONT_FAMILY,
                      fontWeight: 600,
                      fontSize: "clamp(1.35rem, 1.45vw, 1.9rem)",
                      letterSpacing: "-0.02em",
                      color: COLORS.textMain,
                    }}
                  >
                    {getLabel(
                      spec.value,
                      spec.zhValue,
                      spec.esValue,
                      spec.arValue
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section
        style={{
          padding: "clamp(4.2rem, 6.6vw, 8.5rem) 0",
          background:
            "linear-gradient(180deg, #F5F7FA 0%, #FFFFFF 52%, #EEF2F6 100%)",
          borderTop: `1px solid ${COLORS.borderSoft}`,
        }}
      >
        <div className="w-full max-w-[96vw] 2xl:max-w-[1900px] mx-auto px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_clamp(520px,34vw,720px)] gap-10 lg:gap-12 2xl:gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-7">
                <span
                  className="block h-px"
                  style={{
                    width: "clamp(34px, 3vw, 64px)",
                    background: COLORS.accent,
                  }}
                />

                <span
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontWeight: 600,
                    fontSize: "clamp(1rem, 1.05vw, 1.35rem)",
                    letterSpacing: buttonLetterSpacing,
                    textTransform,
                    color: COLORS.accent,
                  }}
                >
                  {getLabel(
                    "Safety Systems",
                    "安全系统",
                    "Sistemas de seguridad",
                    "أنظمة السلامة"
                  )}
                </span>
              </div>

              <h2
                style={{
                  fontFamily: FONT_FAMILY,
                  fontWeight: 600,
                  fontSize:
                    isZh || isAr
                      ? "clamp(2.8rem, 4.4vw, 6.2rem)"
                      : "clamp(3rem, 4.8vw, 7rem)",
                  lineHeight: 1,
                  letterSpacing: titleLetterSpacing,
                  textTransform,
                  color: COLORS.textMain,
                  maxWidth: "clamp(520px, 48vw, 820px)",
                  whiteSpace: "normal",
                }}
              >
                {getLabel(
                  "Ready for Modern Fleets",
                  "满足现代车队安全运营需求",
                  "Preparado para flotas modernas",
                  "جاهز لأساطيل النقل الحديثة"
                )}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 2xl:gap-x-6 gap-y-5 2xl:gap-y-6">
              {safetyFeatures.map((feature) => (
                <div
                  key={feature.value}
                  style={{
                    border: `1px solid ${COLORS.accentBorder}`,
                    padding: "clamp(1.2rem, 2vw, 2rem)",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(245,247,250,0.88) 100%)",
                    boxShadow: "0 18px 48px rgba(15,23,42,0.08)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: FONT_FAMILY,
                      fontWeight: 600,
                      fontSize: "clamp(1.15rem, 1.22vw, 1.65rem)",
                      letterSpacing: isZh || isAr ? "0.02em" : "0.06em",
                      color: COLORS.textMain,
                    }}
                  >
                    {getLabel(
                      feature.value,
                      feature.zhValue,
                      feature.esValue,
                      feature.arValue
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}