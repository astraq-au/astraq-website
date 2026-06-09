/**
 * DieselTruckDetail Page
 * ASTRAQ Diesel Mixer Truck — Light Homepage Matched Style
 * English / Chinese / Spanish / Arabic supported
 */

import Footer from "../components/Footer";
import { useLanguage } from "../i18n/LanguageContext";

const FONT_FAMILY =
  "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

const MIXER_DUTY_IMAGE = "/diesel-mixer-truck.png";
const SPEC_PDF = "/specifications/diesel-mixer-specification.pdf";
const HERO_BG = "/diesel-hero-road.png";

const COLORS = {
  pageBg: "#F5F7FA",
  sectionBg: "#FFFFFF",
  sectionBgAlt: "#EEF2F6",

  cardBg: "rgba(255,255,255,0.86)",
  cardBgStrong: "rgba(255,255,255,0.96)",

  border: "rgba(15,23,42,0.12)",
  borderSoft: "rgba(15,23,42,0.08)",

  textMain: "#1f283e",
  textSoft: "rgba(15,23,42,0.72)",
  textMuted: "rgba(15,23,42,0.54)",

  accent: "#1671b2",
  accentSoft: "rgba(22,119,168,0.10)",
  accentStrong: "rgba(22,119,168,0.16)",
  accentBorder: "rgba(22,119,168,0.32)",
};

const keyHighlights = [
  {
    value: "8×4",
    zhValue: "8×4",
    esValue: "8×4",
    arValue: "8×4",
    label: "Drive Configuration",
    zhLabel: "驱动形式",
    esLabel: "Configuración de tracción",
    arLabel: "نظام الدفع",
  },
  {
    value: "32T",
    zhValue: "32吨",
    esValue: "32 t",
    arValue: "32 طن",
    label: "Certified GVM",
    zhLabel: "认证最大总质量",
    esLabel: "GVM certificado",
    arLabel: "الوزن الإجمالي المعتمد",
  },
  {
    value: "265 KW",
    zhValue: "265千瓦",
    esValue: "265 kW",
    arValue: "265 كيلوواط",
    label: "Cummins Engine",
    zhLabel: "康明斯发动机",
    esLabel: "Motor Cummins",
    arLabel: "محرك كمنز",
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
    value: "Concrete Mixer Cab & Chassis",
    zhValue: "混凝土搅拌车底盘",
    esValue: "Cabina y chasis para hormigonera",
    arValue: "كابينة وشاسيه شاحنة خلط الخرسانة",
  },
  {
    label: "Engine",
    zhLabel: "发动机",
    esLabel: "Motor",
    arLabel: "المحرك",
    value: "Cummins X11EVIE360",
    zhValue: "康明斯 X11EVIE360",
    esValue: "Cummins X11EVIE360",
    arValue: "كمنز X11EVIE360",
  },
  {
    label: "Power",
    zhLabel: "最大功率",
    esLabel: "Potencia",
    arLabel: "القوة",
    value: "265 kW @ 1900 rpm",
    zhValue: "265 千瓦 @ 1900 rpm",
    esValue: "265 kW @ 1900 rpm",
    arValue: "265 كيلوواط @ 1900 دورة/دقيقة",
  },
  {
    label: "Torque",
    zhLabel: "最大扭矩",
    esLabel: "Par máximo",
    arLabel: "العزم",
    value: "1800 N·m @ 1000–1400 rpm",
    zhValue: "1800 N·m @ 1000–1400 rpm",
    esValue: "1800 N·m @ 1000–1400 rpm",
    arValue: "1800 نيوتن·متر @ 1000–1400 دورة/دقيقة",
  },
  {
    label: "Gearbox",
    zhLabel: "变速箱",
    esLabel: "Caja de cambios",
    arLabel: "علبة التروس",
    value: "AMT 12-speed",
    zhValue: "12挡 AMT 自动变速箱",
    esValue: "AMT de 12 marchas",
    arValue: "AMT بـ 12 سرعة",
  },
  {
    label: "Wheelbase",
    zhLabel: "轴距",
    esLabel: "Distancia entre ejes",
    arLabel: "قاعدة العجلات",
    value: "1800 + 3000 + 1350 mm",
    zhValue: "1800 + 3000 + 1350 mm",
    esValue: "1800 + 3000 + 1350 mm",
    arValue: "1800 + 3000 + 1350 مم",
  },
  {
    label: "Dimensions",
    zhLabel: "整车尺寸",
    esLabel: "Dimensiones",
    arLabel: "الأبعاد",
    value: "8615 × 2518 × 3120 mm",
    zhValue: "8615 × 2518 × 3120 mm",
    esValue: "8615 × 2518 × 3120 mm",
    arValue: "8615 × 2518 × 3120 مم",
  },
  {
    label: "Cabin",
    zhLabel: "驾驶室",
    esLabel: "Cabina",
    arLabel: "الكابينة",
    value: "Short sleeper cab",
    zhValue: "短卧铺驾驶室",
    esValue: "Cabina dormitorio corta",
    arValue: "كابينة قصيرة مزودة بسرير",
  },
];

const safetyFeatures = [
  {
    value: "EBS + ESC",
    zhValue: "EBS 电子制动 + ESC 车身稳定",
    esValue: "EBS + ESC",
    arValue: "EBS + ESC",
  },
  {
    value: "AEBS",
    zhValue: "AEBS 自动紧急制动",
    esValue: "AEBS",
    arValue: "AEBS",
  },
  {
    value: "LDWS",
    zhValue: "LDWS 车道偏离预警",
    esValue: "LDWS",
    arValue: "LDWS",
  },
  {
    value: "FCWS",
    zhValue: "FCWS 前碰撞预警",
    esValue: "FCWS",
    arValue: "FCWS",
  },
  {
    value: "Reverse Camera",
    zhValue: "倒车影像",
    esValue: "Cámara de reversa",
    arValue: "كاميرا خلفية",
  },
  {
    value: "Blind Spot Monitoring",
    zhValue: "盲区监测",
    esValue: "Monitoreo de punto ciego",
    arValue: "مراقبة النقاط العمياء",
  },
];

export default function DieselTruckDetail() {
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

  const buttonLetterSpacing = isZh || isAr ? "0.04em" : isEs ? "0.035em" : "0.06em";

  const titleLetterSpacing = isZh || isAr ? "-0.035em" : "-0.055em";

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
              ? "linear-gradient(270deg, rgba(245,247,250,0.78) 0%, rgba(245,247,250,0.42) 46%, rgba(245,247,250,0.58) 100%)"
              : "linear-gradient(90deg, rgba(245,247,250,0.78) 0%, rgba(245,247,250,0.42) 46%, rgba(245,247,250,0.58) 100%)",
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
              "radial-gradient(ellipse at 72% 42%, rgba(22,119,168,0.16) 0%, rgba(22,119,168,0.06) 30%, transparent 60%)",
          }}
        />

        <div className="relative z-10 w-full max-w-[96vw] 2xl:max-w-[1900px] mx-auto px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28">
          <h1
            style={{
              fontFamily: FONT_FAMILY,
              fontWeight: 600,
              fontSize:
                isZh || isAr
                  ? "clamp(3rem, 6vw, 9rem)"
                  : isEs
                  ? "clamp(3.2rem, 6.2vw, 9rem)"
                  : "clamp(3.8rem, 7.2vw, 10.5rem)",
              lineHeight: 1,
              letterSpacing: titleLetterSpacing,
              textTransform,
              color: COLORS.textMain,
              maxWidth:
                isZh || isAr
                  ? "clamp(820px, 62vw, 1380px)"
                  : "clamp(780px, 58vw, 1280px)",
              marginTop: "clamp(0.5rem, 1vw, 1rem)",
              marginBottom: "clamp(1.3rem, 2vw, 2.6rem)",
              textShadow: "0 12px 32px rgba(255,255,255,0.45)",
            }}
          >
            {getLabel(
              "DM1 8×4 Mixer",
              "DM1 8×4 柴油搅拌车",
              "DM1 hormigonera 8×4",
              "DM1 شاحنة خلط 8×4"
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
                width: isEs ? "clamp(230px, 15vw, 320px)" : "clamp(210px, 13vw, 290px)",
                height: "clamp(56px, 3.6vw, 76px)",
                border: `1px solid ${COLORS.accentBorder}`,
                color: COLORS.textMain,
                background: "rgba(255,255,255,0.72)",
                fontFamily: FONT_FAMILY,
                fontWeight: 600,
                fontSize: isEs
                  ? "clamp(0.82rem, 0.82vw, 1rem)"
                  : "clamp(0.9rem, 0.9vw, 1.12rem)",
                letterSpacing: buttonLetterSpacing,
                textTransform,
                textDecoration: "none",
                transition: "all 0.3s ease",
                boxShadow: "0 18px 48px rgba(15,23,42,0.10)",
                backdropFilter: "blur(10px)",
                whiteSpace: "nowrap",
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
                boxShadow: "0 18px 48px rgba(22,119,168,0.24)",
                whiteSpace: "nowrap",
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
                  minWidth: 0,
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
                    fontSize: isEs
                      ? "clamp(0.72rem, 0.72vw, 0.92rem)"
                      : "clamp(0.9rem, 0.9vw, 1.18rem)",
                    letterSpacing: isZh || isAr ? "0.04em" : isEs ? "0.035em" : "0.08em",
                    textTransform,
                    color: COLORS.accent,
                    marginTop: "0.75rem",
                    lineHeight: 1.25,
                    overflowWrap: "break-word",
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
        <div className="w-full max-w-[96vw] 2xl:max-w-[1900px] mx-auto px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28">
          <div
            className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.1fr)_minmax(460px,0.9fr)] gap-10 lg:gap-14 xl:gap-16 2xl:gap-20 items-stretch"
            style={{
              minWidth: 0,
            }}
          >
            <div style={{ minWidth: 0 }}>
              <div className="flex items-center gap-4 mb-7">
                <span
                  className="block h-px"
                  style={{
                    width: "clamp(34px, 3vw, 64px)",
                    background: COLORS.accent,
                    flexShrink: 0,
                  }}
                />

                <span
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontWeight: 600,
                    fontSize: isEs
                      ? "clamp(0.78rem, 0.78vw, 1rem)"
                      : "clamp(1rem, 1.05vw, 1.35rem)",
                    letterSpacing: buttonLetterSpacing,
                    textTransform,
                    color: COLORS.accent,
                    lineHeight: 1.25,
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
                      : isEs
                      ? "clamp(2.4rem, 3.6vw, 5.2rem)"
                      : "clamp(2.9rem, 4.8vw, 7rem)",
                  lineHeight: 1.04,
                  letterSpacing: isZh || isAr ? "-0.035em" : "-0.045em",
                  textTransform,
                  color: COLORS.textMain,
                  marginBottom: "clamp(2.2rem, 3.2vw, 4rem)",
                  maxWidth: "none",
                  whiteSpace: "normal",
                  overflowWrap: "break-word",
                }}
              >
                <span className="inline">
                  {getLabel(
                    "Built for Mixer Duty",
                    "为搅拌运输工况打造",
                    "Diseñado para trabajos de hormigonera",
                    "مصمم لعمليات خلط الخرسانة"
                  )}
                </span>
              </h2>

              <div
                className="relative overflow-hidden"
                style={{
                  border: `1px solid ${COLORS.border}`,
                  background: COLORS.cardBg,
                  height: "clamp(460px, 38vw, 760px)",
                  boxShadow: "0 28px 80px rgba(15,23,42,0.12)",
                }}
              >
                <img
                  src={MIXER_DUTY_IMAGE}
                  alt="ASTRAQ diesel mixer truck"
                  className="w-full h-full transition-transform duration-700 hover:scale-105"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 58%, rgba(245,247,250,0.48) 100%)",
                  }}
                />

                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at 65% 35%, rgba(22,119,168,0.10) 0%, transparent 42%)",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                border: `1px solid ${COLORS.border}`,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.78) 100%)",
                padding: isEs
                  ? "clamp(1.5rem, 2.2vw, 3rem)"
                  : "clamp(2.2rem, 3.4vw, 4.6rem)",
                height: "100%",
                minHeight: "clamp(580px, 38vw, 820px)",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 28px 80px rgba(15,23,42,0.10)",
                backdropFilter: "blur(10px)",
                minWidth: 0,
              }}
            >
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 2xl:gap-x-12"
                style={{
                  flex: 1,
                  alignContent: "space-between",
                  rowGap: isEs
                    ? "clamp(1.3rem, 1.8vw, 2.4rem)"
                    : "clamp(2rem, 2.5vw, 3.4rem)",
                  minWidth: 0,
                }}
              >
                {quickSpecs.map((spec) => (
                  <div
                    key={spec.label}
                    style={{
                      borderBottom: `1px solid ${COLORS.borderSoft}`,
                      paddingBottom: "clamp(1.1rem, 1.3vw, 1.7rem)",
                      minHeight: isEs
                        ? "clamp(104px, 6vw, 148px)"
                        : "clamp(94px, 5.4vw, 132px)",
                      minWidth: 0,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: FONT_FAMILY,
                        fontWeight: 600,
                        fontSize: isEs
                          ? "clamp(0.72rem, 0.72vw, 0.95rem)"
                          : "clamp(0.95rem, 0.95vw, 1.22rem)",
                        letterSpacing: isZh || isAr ? "0.04em" : isEs ? "0.025em" : "0.06em",
                        textTransform,
                        color: COLORS.accent,
                        marginBottom: "clamp(0.5rem, 0.65vw, 0.9rem)",
                        lineHeight: 1.25,
                        wordBreak: "normal",
                        overflowWrap: "break-word",
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
                        fontSize: isEs
                          ? "clamp(1rem, 1vw, 1.28rem)"
                          : "clamp(1.25rem, 1.22vw, 1.65rem)",
                        lineHeight: 1.4,
                        color: COLORS.textMain,
                        overflowWrap: "break-word",
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
                className="inline-flex items-center justify-center mt-12"
                style={{
                  width: isEs ? "clamp(240px, 16vw, 330px)" : "clamp(230px, 14vw, 310px)",
                  height: "clamp(60px, 3.9vw, 78px)",
                  border: `1px solid ${COLORS.accentBorder}`,
                  color: COLORS.textMain,
                  background: "rgba(255,255,255,0.88)",
                  fontFamily: FONT_FAMILY,
                  fontWeight: 600,
                  fontSize: isEs
                    ? "clamp(0.78rem, 0.78vw, 0.98rem)"
                    : "clamp(0.9rem, 0.9vw, 1.12rem)",
                  letterSpacing: buttonLetterSpacing,
                  textTransform,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  boxShadow: "0 14px 36px rgba(15,23,42,0.08)",
                  whiteSpace: "nowrap",
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

      {/* Safety */}
      <section
        style={{
          padding: "clamp(4.2rem, 6.6vw, 8.5rem) 0",
          background: "linear-gradient(180deg, #FFFFFF 0%, #EEF2F6 100%)",
          borderTop: `1px solid ${COLORS.borderSoft}`,
        }}
      >
        <div className="w-full max-w-[96vw] 2xl:max-w-[1900px] mx-auto px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28">
          <div
            className="grid grid-cols-1 xl:grid-cols-[minmax(0,0.9fr)_minmax(520px,1.1fr)] gap-10 lg:gap-14 2xl:gap-20 items-center"
            style={{
              minWidth: 0,
            }}
          >
            <div style={{ minWidth: 0 }}>
              <div className="flex items-center gap-4 mb-7">
                <span
                  className="block h-px"
                  style={{
                    width: "clamp(34px, 3vw, 64px)",
                    background: COLORS.accent,
                    flexShrink: 0,
                  }}
                />

                <span
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontWeight: 600,
                    fontSize: isEs
                      ? "clamp(0.82rem, 0.82vw, 1.05rem)"
                      : "clamp(1rem, 1.05vw, 1.35rem)",
                    letterSpacing: buttonLetterSpacing,
                    textTransform,
                    color: COLORS.accent,
                    lineHeight: 1.25,
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
                      ? "clamp(2.6rem, 3.8vw, 5.4rem)"
                      : isEs
                      ? "clamp(2.4rem, 3.4vw, 5rem)"
                      : "clamp(2.7rem, 4vw, 5.9rem)",
                  lineHeight: 1.04,
                  letterSpacing: isZh || isAr ? "-0.035em" : "-0.045em",
                  textTransform,
                  color: COLORS.textMain,
                  maxWidth: "none",
                  whiteSpace: "normal",
                  overflowWrap: "break-word",
                }}
              >
                <span className="inline">
                  {getLabel(
                    "Ready for Modern Fleets",
                    "满足现代车队安全运营需求",
                    "Preparado para flotas modernas",
                    "جاهز لأساطيل النقل الحديثة"
                  )}
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 2xl:gap-x-10 gap-y-6 2xl:gap-y-8">
              {safetyFeatures.map((feature) => (
                <div
                  key={feature.value}
                  style={{
                    border: `1px solid ${COLORS.accentBorder}`,
                    padding: isEs
                      ? "clamp(1rem, 1.5vw, 1.6rem)"
                      : "clamp(1.2rem, 2vw, 2rem)",
                    minHeight: isEs ? "clamp(92px, 5.6vw, 128px)" : "auto",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(245,247,250,0.88) 100%)",
                    boxShadow: "0 18px 48px rgba(15,23,42,0.08)",
                    minWidth: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: FONT_FAMILY,
                      fontWeight: 600,
                      fontSize: isEs
                        ? "clamp(1rem, 1vw, 1.35rem)"
                        : "clamp(1.15rem, 1.22vw, 1.65rem)",
                      lineHeight: 1.35,
                      letterSpacing: isZh || isAr ? "0.02em" : isEs ? "0.01em" : "0.04em",
                      color: COLORS.textMain,
                      overflowWrap: "break-word",
                      wordBreak: "normal",
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