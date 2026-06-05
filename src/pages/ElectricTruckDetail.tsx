/**
 * ElectricTruckDetail Page
 * ASTRAQ EPM1 6x4 Battery-Electric Prime Mover
 * Commercial EV heavy transport product page
 * English / Chinese supported
 */

import Footer from "../components/Footer";
import { useLanguage } from "../i18n/LanguageContext";

const FONT_FAMILY =
  "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

const ELECTRIC_TRUCK_IMAGE = "/electric-primemover-truck.png";
const SPEC_PDF = "/specifications/electric-PrimeMover-specification.pdf";
const HERO_BG = "/elelctric-hero-road.png";

const COLORS = {
  pageBg: "#071322",
  pageBgAlt: "#0A1A2B",

  panel: "rgba(255,255,255,0.065)",
  panelStrong: "rgba(255,255,255,0.095)",
  panelSoft: "rgba(255,255,255,0.045)",

  textMain: "#F5FAFF",
  textSoft: "rgba(245,250,255,0.76)",
  textMuted: "rgba(245,250,255,0.55)",

  darkText: "#172033",

  accent: "#00AEEF",
  accentLight: "#5FDBFF",
  accentSoft: "rgba(0,174,239,0.13)",
  accentStrong: "rgba(0,174,239,0.24)",
  accentLine: "rgba(0,174,239,0.38)",
  accentGlow: "rgba(0,174,239,0.32)",

  green: "#7CFFCB",
  purple: "#7C8CFF",
};

const keyHighlights = [
  {
    value: "6×4",
    zhValue: "6×4",
    label: "Drive Configuration",
    zhLabel: "驱动形式",
  },
  {
    value: "60T",
    zhValue: "60吨",
    label: "Gross Combination Mass",
    zhLabel: "最大组合总质量",
  },
  {
    value: "420km",
    zhValue: "420公里",
    label: "Reference Driving Range",
    zhLabel: "参考续航里程",
  },
  {
    value: "600kWh",
    zhValue: "600千瓦时",
    label: "Battery Capacity",
    zhLabel: "电池容量",
  },
];

const quickSpecs = [
  {
    label: "Vehicle Type",
    zhLabel: "车辆类型",
    value: "6×4 Battery-Electric Prime Mover",
    zhValue: "6×4 纯电牵引车",
  },
  {
    label: "Battery",
    zhLabel: "电池系统",
    value: "500–600 kWh LFP Battery",
    zhValue: "500–600 kWh 磷酸铁锂电池",
  },
  {
    label: "Range",
    zhLabel: "续航里程",
    value: "420 km Reference Range",
    zhValue: "参考续航 420 km",
  },
  {
    label: "Platform",
    zhLabel: "高压平台",
    value: "800 V High-Voltage Platform",
    zhValue: "800 V 高压电平台",
  },
  {
    label: "Motor",
    zhLabel: "电机系统",
    value: "Dual-Motor Electric Drive",
    zhValue: "双电机电驱系统",
  },
  {
    label: "GCM",
    zhLabel: "组合总质量 GCM",
    value: "Up to 60,000 kg",
    zhValue: "最高 60,000 kg",
  },
  {
    label: "Wheelbase",
    zhLabel: "轴距",
    value: "4550 + 1350 mm",
    zhValue: "4550 + 1350 mm",
  },
  {
    label: "Charging",
    zhLabel: "补能方式",
    value: "Fast Charging + Battery Swap",
    zhValue: "快充 + 换电适配",
  },
];

const powertrainSpecs = [
  {
    label: "Rated / Peak Power",
    zhLabel: "额定 / 峰值功率",
    value: "2 × 138 kW / 2 × 290 kW",
    zhValue: "2 × 138 kW / 2 × 290 kW",
  },
  {
    label: "Rated / Peak Torque",
    zhLabel: "额定 / 峰值扭矩",
    value: "2 × 300 N·m / 2 × 820 N·m",
    zhValue: "2 × 300 N·m / 2 × 820 N·m",
  },
  {
    label: "Drive System",
    zhLabel: "驱动系统",
    value: "Direct Electric Drive with Regenerative Braking",
    zhValue: "直驱电驱系统，支持制动能量回收",
  },
  {
    label: "Battery Layout",
    zhLabel: "电池布置",
    value: "Underfloor Battery System with Protection Frame",
    zhValue: "底置式电池系统，配备防护框架",
  },
];

const capabilitySpecs = [
  {
    label: "Kerb Weight",
    zhLabel: "整备质量",
    value: "10,900 kg",
    zhValue: "10,900 kg",
  },
  {
    label: "GCM",
    zhLabel: "组合总质量 GCM",
    value: "60,000 kg",
    zhValue: "60,000 kg",
  },
  {
    label: "Battery",
    zhLabel: "电池容量",
    value: "500–600 kWh",
    zhValue: "500–600 kWh",
  },
  {
    label: "Range",
    zhLabel: "续航里程",
    value: "420 km",
    zhValue: "420 km",
  },
  {
    label: "Gradeability",
    zhLabel: "最大爬坡度",
    value: "≥20%",
    zhValue: "≥20%",
  },
  {
    label: "Tyres",
    zhLabel: "轮胎规格",
    value: "12R22.5",
    zhValue: "12R22.5",
  },
];

const techSafetyFeatures = [
  {
    title: "AEB",
    zhTitle: "AEB",
    desc: "Autonomous emergency braking support.",
    zhDesc: "自动紧急制动辅助，提升复杂道路环境下的安全冗余。",
  },
  {
    title: "LDW / LDWS",
    zhTitle: "LDW / LDWS",
    desc: "Lane departure warning support for fleet operation.",
    zhDesc: "车道偏离预警，辅助长距离运输和车队日常运营。",
  },
  {
    title: "FCW",
    zhTitle: "FCW",
    desc: "Forward collision warning for traffic risk awareness.",
    zhDesc: "前碰撞预警，帮助驾驶员提前识别前方交通风险。",
  },
  {
    title: "EBS + ESC",
    zhTitle: "EBS + ESC",
    desc: "Electronic braking and stability control.",
    zhDesc: "电子制动与车身稳定控制，提升制动和行驶稳定性。",
  },
  {
    title: "L2+ Ready",
    zhTitle: "L2+ 预留",
    desc: "Driver-assistance architecture prepared for future upgrades.",
    zhDesc: "预留驾驶辅助架构，为后续功能升级提供基础。",
  },
  {
    title: "V2X Ready",
    zhTitle: "V2X 预留",
    desc: "Connected electrical platform prepared for V2X integration.",
    zhDesc: "预留车路协同接入能力，适配后续联网运营场景。",
  },
  {
    title: "LiDAR Ready",
    zhTitle: "激光雷达预留",
    desc: "Sensor layout prepared for advanced perception systems.",
    zhDesc: "预留传感器布置空间，支持后续高级感知系统扩展。",
  },
  {
    title: "By-Wire Chassis",
    zhTitle: "线控底盘",
    desc: "Brake-by-wire, steer-by-wire and drive-by-wire architecture.",
    zhDesc: "支持线控制动、线控转向和线控驱动架构。",
  },
];

export default function ElectricTruckDetail() {
  const { language } = useLanguage();

  const getLabel = (en: string, zh: string) => {
    return language === "zh" ? zh : en;
  };

  const textTransform =
    language === "zh" ? ("none" as const) : ("uppercase" as const);
  const titleLetterSpacing = language === "zh" ? "-0.035em" : "-0.055em";
  const smallLetterSpacing = language === "zh" ? "0.04em" : "0.06em";

  return (
    <main
      className="min-h-screen overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 78% 8%, rgba(0,174,239,0.20) 0%, transparent 26%), radial-gradient(circle at 18% 42%, rgba(124,140,255,0.12) 0%, transparent 26%), linear-gradient(180deg, #071322 0%, #0A1A2B 42%, #071322 100%)",
        color: COLORS.textMain,
        fontFamily: FONT_FAMILY,
      }}
    >
      {/* Hero Banner */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{
          minHeight: "clamp(620px, 58vw, 1080px)",
          paddingTop: "clamp(6rem, 8vw, 11rem)",
          paddingBottom: "clamp(5rem, 7vw, 10rem)",
          background: COLORS.pageBg,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: "100% auto",
            backgroundPosition: "center 46%",
            backgroundRepeat: "no-repeat",
            backgroundColor: COLORS.pageBg,
            filter: "brightness(1.18) contrast(1.08) saturate(1.08)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(5,12,24,0.74) 0%, rgba(5,12,24,0.26) 46%, rgba(5,12,24,0.38) 100%)",
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.30) 14%, transparent 34%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 72% 48%, rgba(0,174,239,0.22) 0%, rgba(0,174,239,0.07) 28%, transparent 62%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, transparent 62%, rgba(7,19,34,0.36) 84%, rgba(7,19,34,0.92) 100%)",
          }}
        />

        <div
          className="absolute inset-x-0 bottom-[18%] h-[1px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(0,174,239,0.0) 15%, rgba(0,174,239,0.75) 42%, rgba(124,255,203,0.45) 62%, transparent 100%)",
            boxShadow: "0 0 26px rgba(0,174,239,0.72)",
          }}
        />

        <div
          className="absolute inset-x-0 bottom-[24%] h-[1px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(124,140,255,0.45) 34%, rgba(0,174,239,0.26) 54%, transparent 100%)",
            boxShadow: "0 0 18px rgba(124,140,255,0.38)",
          }}
        />

        <div className="relative z-10 w-full max-w-[96vw] 2xl:max-w-[1900px] mx-auto px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28">
          <div
            style={{
              maxWidth: "clamp(760px, 62vw, 1420px)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.9rem",
                marginBottom: "clamp(1.2rem, 1.5vw, 2rem)",
                color: COLORS.accentLight,
                fontFamily: FONT_FAMILY,
                fontWeight: 600,
                letterSpacing: smallLetterSpacing,
                textTransform,
                fontSize: "clamp(0.9rem, 0.9vw, 1.18rem)",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "clamp(36px, 3vw, 70px)",
                  height: "1px",
                  background: COLORS.accent,
                  boxShadow: "0 0 18px rgba(0,174,239,0.65)",
                }}
              />
              {getLabel("Battery-Electric Prime Mover", "纯电牵引车")}
            </div>

            <h1
              style={{
                fontFamily: FONT_FAMILY,
                fontWeight: 600,
                fontSize:
                  language === "zh"
                    ? "clamp(2.8rem, 5vw, 7.6rem)"
                    : "clamp(3rem, 5.4vw, 8.6rem)",
                lineHeight: 1.02,
                letterSpacing: titleLetterSpacing,
                textTransform,
                color: COLORS.textMain,
                marginTop: 0,
                marginBottom: "clamp(1.4rem, 2vw, 2.8rem)",
                textShadow: "0 18px 52px rgba(0,0,0,0.60)",
              }}
            >
              {getLabel(
                "EPM1 6×4 Electric Prime Mover",
                "EPM1 6×4 纯电牵引车"
              )}
            </h1>

            <p
              style={{
                fontFamily: FONT_FAMILY,
                fontWeight: 600,
                fontSize:
                  language === "zh"
                    ? "clamp(1.55rem, 2.7vw, 4rem)"
                    : "clamp(1.8rem, 3.1vw, 4.8rem)",
                lineHeight: 1.08,
                letterSpacing: language === "zh" ? "-0.025em" : "-0.025em",
                textTransform,
                color: COLORS.textSoft,
                marginBottom: "clamp(2rem, 3vw, 3.8rem)",
                textShadow: "0 14px 38px rgba(0,0,0,0.45)",
              }}
            >
              {getLabel(
                "Electric Drive · High-Voltage Platform · Heavy Transport",
                "电驱系统 · 高压平台 · 重载运输"
              )}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
              <a
                href={SPEC_PDF}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center"
                style={{
                  width: "clamp(220px, 14vw, 310px)",
                  height: "clamp(56px, 3.6vw, 76px)",
                  color: COLORS.textMain,
                  background:
                    "linear-gradient(90deg, rgba(0,174,239,0.16) 0%, rgba(255,255,255,0.06) 100%)",
                  fontFamily: FONT_FAMILY,
                  fontWeight: 600,
                  fontSize: "clamp(0.9rem, 0.9vw, 1.12rem)",
                  letterSpacing: smallLetterSpacing,
                  textTransform,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  boxShadow: "0 18px 48px rgba(0,174,239,0.18)",
                  backdropFilter: "blur(12px)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(90deg, rgba(0,174,239,0.28) 0%, rgba(255,255,255,0.10) 100%)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(90deg, rgba(0,174,239,0.16) 0%, rgba(255,255,255,0.06) 100%)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {getLabel("View Specification", "查看参数")}
              </a>

              <a
                href="/store"
                className="inline-flex items-center justify-center"
                style={{
                  width: "clamp(190px, 12vw, 260px)",
                  height: "clamp(56px, 3.6vw, 76px)",
                  color: "#06111F",
                  background:
                    "linear-gradient(90deg, #00AEEF 0%, #7CFFCB 100%)",
                  fontFamily: FONT_FAMILY,
                  fontWeight: 600,
                  fontSize: "clamp(0.9rem, 0.9vw, 1.12rem)",
                  letterSpacing: smallLetterSpacing,
                  textTransform,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  boxShadow: "0 18px 56px rgba(0,174,239,0.34)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "brightness(1.14)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "brightness(1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {getLabel("Buy Now", "立即购买")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section
        className="relative"
        style={{
          padding: "clamp(3.2rem, 5vw, 6.8rem) 0",
          background:
            "linear-gradient(180deg, rgba(7,19,34,1) 0%, rgba(8,26,43,1) 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(0,174,239,0.12) 0%, transparent 34%)",
          }}
        />

        <div className="relative w-full max-w-[96vw] 2xl:max-w-[1900px] mx-auto px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 2xl:gap-8">
            {keyHighlights.map((item) => (
              <div
                key={item.label}
                style={{
                  padding:
                    language === "zh"
                      ? "clamp(1.2rem, 1.6vw, 2rem)"
                      : "clamp(1.4rem, 2vw, 2.4rem)",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.075) 0%, rgba(255,255,255,0.028) 100%)",
                  boxShadow:
                    "0 24px 70px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.08)",
                  backdropFilter: "blur(14px)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontWeight: 600,
                    fontSize:
                      language === "zh"
                        ? "clamp(2rem, 3vw, 4.2rem)"
                        : "clamp(2.5rem, 4.2vw, 6rem)",
                    lineHeight: language === "zh" ? 1.12 : 1,
                    color: COLORS.textMain,
                    letterSpacing: language === "zh" ? "-0.02em" : "-0.045em",
                    whiteSpace: "normal",
                    wordBreak: "keep-all",
                    overflowWrap: "break-word",
                    maxWidth: "100%",
                    textShadow: "0 0 26px rgba(0,174,239,0.24)",
                  }}
                >
                  {getLabel(item.value, item.zhValue)}
                </div>

                <div
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontWeight: 600,
                    fontSize: "clamp(0.85rem, 0.9vw, 1.16rem)",
                    letterSpacing: smallLetterSpacing,
                    textTransform,
                    color: COLORS.accentLight,
                    marginTop: "0.85rem",
                  }}
                >
                  {getLabel(item.label, item.zhLabel)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specification Preview */}
      <section
        className="relative"
        style={{
          padding: "clamp(5rem, 7.6vw, 10rem) 0",
          background:
            "radial-gradient(circle at 84% 18%, rgba(0,174,239,0.13) 0%, transparent 30%), linear-gradient(180deg, #081A2B 0%, #071322 100%)",
        }}
      >
        <div className="w-full max-w-[94vw] 2xl:max-w-[1800px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.15fr)_minmax(420px,0.85fr)] gap-10 xl:gap-16 2xl:gap-20 items-center">
            <div className="relative">
              <div style={{ marginBottom: "clamp(2rem, 2.8vw, 3.2rem)" }}>
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className="block h-px"
                    style={{
                      width: "clamp(34px, 3vw, 64px)",
                      background: COLORS.accent,
                      boxShadow: "0 0 16px rgba(0,174,239,0.6)",
                    }}
                  />

                  <span
                    style={{
                      fontFamily: FONT_FAMILY,
                      fontWeight: 600,
                      fontSize: "clamp(1.05rem, 1.1vw, 1.45rem)",
                      letterSpacing: smallLetterSpacing,
                      textTransform,
                      color: COLORS.accentLight,
                    }}
                  >
                    {getLabel("Energy Architecture", "能源架构")}
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontWeight: 600,
                    fontSize:
                      language === "zh"
                        ? "clamp(2.35rem, 3.5vw, 5.1rem)"
                        : "clamp(2.5rem, 3.8vw, 5.6rem)",
                    lineHeight: 1.04,
                    letterSpacing: language === "zh" ? "-0.035em" : "-0.045em",
                    textTransform,
                    color: COLORS.textMain,
                    margin: 0,
                    maxWidth: "clamp(680px, 55vw, 1080px)",
                  }}
                >
                  {getLabel(
                    "Built Around an 800V Electric Platform",
                    "800V 高压电平台"
                  )}
                </h2>
              </div>

              <div
                className="relative overflow-hidden"
                style={{
                  minHeight: "clamp(460px, 36vw, 760px)",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.065) 0%, rgba(255,255,255,0.02) 100%)",
                  boxShadow:
                    "0 32px 90px rgba(0,0,0,0.32), 0 0 60px rgba(0,174,239,0.10)",
                }}
              >
                <img
                  src={ELECTRIC_TRUCK_IMAGE}
                  alt="ASTRAQ EPM1 battery-electric prime mover"
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
                      "linear-gradient(to bottom, rgba(7,19,34,0.02) 0%, transparent 48%, rgba(7,19,34,0.38) 100%)",
                  }}
                />

                <div
                  className="absolute inset-x-0 bottom-0 h-[2px] pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(0,174,239,0.75) 50%, transparent 100%)",
                    boxShadow: "0 0 26px rgba(0,174,239,0.74)",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                padding: "clamp(1.4rem, 2.1vw, 2.8rem)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.075) 0%, rgba(255,255,255,0.026) 100%)",
                boxShadow:
                  "0 30px 80px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.08)",
                backdropFilter: "blur(14px)",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: "clamp(0.9rem, 1.2vw, 1.4rem)",
                }}
              >
                {quickSpecs.map((spec) => (
                  <div
                    key={spec.label}
                    style={{
                      padding: "clamp(1rem, 1.25vw, 1.55rem)",
                      background:
                        "linear-gradient(180deg, rgba(0,174,239,0.08) 0%, rgba(255,255,255,0.035) 100%)",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: FONT_FAMILY,
                        fontWeight: 600,
                        fontSize: "clamp(0.86rem, 0.9vw, 1.08rem)",
                        letterSpacing: smallLetterSpacing,
                        textTransform,
                        color: COLORS.accentLight,
                        marginBottom: "clamp(0.45rem, 0.5vw, 0.65rem)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {getLabel(spec.label, spec.zhLabel)}
                    </div>

                    <div
                      style={{
                        fontFamily: FONT_FAMILY,
                        fontWeight: 400,
                        fontSize: "clamp(1.15rem, 1.16vw, 1.48rem)",
                        lineHeight: 1.38,
                        color: COLORS.textMain,
                        wordBreak: "break-word",
                      }}
                    >
                      {getLabel(spec.value, spec.zhValue)}
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
                  marginTop: "clamp(1.2rem, 1.8vw, 2.2rem)",
                  width: "100%",
                  height: "clamp(54px, 3.3vw, 70px)",
                  color: COLORS.textMain,
                  background:
                    "linear-gradient(90deg, rgba(0,174,239,0.24) 0%, rgba(124,255,203,0.12) 100%)",
                  fontFamily: FONT_FAMILY,
                  fontWeight: 600,
                  fontSize: "clamp(0.82rem, 0.86vw, 1.05rem)",
                  letterSpacing: smallLetterSpacing,
                  textTransform,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  boxShadow: "0 16px 46px rgba(0,174,239,0.18)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "brightness(1.16)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "brightness(1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {getLabel("View Specification", "查看参数")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Powertrain + Capability combined */}
      <section
        className="relative"
        style={{
          padding: "clamp(5rem, 7vw, 9rem) 0",
          background:
            "radial-gradient(circle at 18% 28%, rgba(124,140,255,0.13) 0%, transparent 28%), radial-gradient(circle at 80% 74%, rgba(0,174,239,0.12) 0%, transparent 30%), linear-gradient(180deg, #071322 0%, #0A1A2B 100%)",
        }}
      >
        <div className="w-full max-w-[94vw] 2xl:max-w-[1800px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 xl:gap-20 items-start">
            <div>
              <div className="flex items-center gap-4 mb-7">
                <span
                  className="block h-px"
                  style={{
                    width: "clamp(34px, 3vw, 64px)",
                    background: COLORS.accent,
                    boxShadow: "0 0 16px rgba(0,174,239,0.6)",
                  }}
                />

                <span
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontWeight: 600,
                    fontSize: "clamp(1.05rem, 1.1vw, 1.45rem)",
                    letterSpacing: smallLetterSpacing,
                    textTransform,
                    color: COLORS.accentLight,
                  }}
                >
                  {getLabel("Electric Powertrain", "电驱系统")}
                </span>
              </div>

              <h2
                style={{
                  fontFamily: FONT_FAMILY,
                  fontWeight: 600,
                  fontSize:
                    language === "zh"
                      ? "clamp(2.35rem, 3.4vw, 5rem)"
                      : "clamp(2.5rem, 3.6vw, 5.4rem)",
                  lineHeight: 1.04,
                  letterSpacing: language === "zh" ? "-0.035em" : "-0.045em",
                  textTransform,
                  color: COLORS.textMain,
                  marginBottom: "clamp(1.6rem, 2vw, 2.6rem)",
                }}
              >
                {getLabel(
                  "Fast-Charge and Battery-Swap Support",
                  "支持快充与换电运营"
                )}
              </h2>

              <p
                style={{
                  maxWidth: "clamp(520px, 42vw, 760px)",
                  fontFamily: FONT_FAMILY,
                  fontWeight: 400,
                  fontSize: "clamp(1.2rem, 1.25vw, 1.65rem)",
                  lineHeight: 1.55,
                  color: COLORS.textSoft,
                  marginBottom: "clamp(2.2rem, 3vw, 3.8rem)",
                }}
              >
                {getLabel(
                  "The EPM1 combines a high-voltage electric platform, dual-motor drive and regenerative braking to support heavy-duty transport routes with planned charging or battery-swap operation.",
                  "EPM1 结合高压电平台、双电机驱动和制动能量回收，适配具备规划补能或换电条件的重载运输线路。"
                )}
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: "clamp(0.9rem, 1.2vw, 1.4rem)",
                }}
              >
                {capabilitySpecs.map((spec) => (
                  <div
                    key={spec.label}
                    style={{
                      padding: "clamp(1rem, 1.35vw, 1.7rem)",
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.028) 100%)",
                      boxShadow:
                        "0 18px 44px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.06)",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: FONT_FAMILY,
                        fontWeight: 600,
                        fontSize: "clamp(0.9rem, 0.95vw, 1.12rem)",
                        letterSpacing: smallLetterSpacing,
                        textTransform,
                        color: COLORS.accentLight,
                        marginBottom: "0.55rem",
                      }}
                    >
                      {getLabel(spec.label, spec.zhLabel)}
                    </div>

                    <div
                      style={{
                        fontFamily: FONT_FAMILY,
                        fontWeight: 600,
                        fontSize: "clamp(1.45rem, 1.6vw, 2.2rem)",
                        lineHeight: 1.22,
                        color: COLORS.textMain,
                        letterSpacing: "-0.035em",
                      }}
                    >
                      {getLabel(spec.value, spec.zhValue)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gap: "clamp(1rem, 1.3vw, 1.6rem)",
              }}
            >
              {powertrainSpecs.map((spec, index) => (
                <div
                  key={spec.label}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: "clamp(1rem, 1.4vw, 1.8rem)",
                    alignItems: "center",
                    padding: "clamp(1.2rem, 1.7vw, 2.2rem)",
                    background:
                      index % 2 === 0
                        ? "linear-gradient(90deg, rgba(0,174,239,0.16) 0%, rgba(255,255,255,0.045) 100%)"
                        : "linear-gradient(90deg, rgba(124,140,255,0.16) 0%, rgba(255,255,255,0.045) 100%)",
                    boxShadow:
                      "0 24px 60px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    style={{
                      width: "clamp(44px, 3vw, 68px)",
                      height: "clamp(44px, 3vw, 68px)",
                      borderRadius: "999px",
                      background:
                        index % 2 === 0
                          ? "radial-gradient(circle, rgba(0,174,239,0.55) 0%, rgba(0,174,239,0.12) 58%, transparent 100%)"
                          : "radial-gradient(circle, rgba(124,140,255,0.55) 0%, rgba(124,140,255,0.12) 58%, transparent 100%)",
                      boxShadow:
                        index % 2 === 0
                          ? "0 0 34px rgba(0,174,239,0.35)"
                          : "0 0 34px rgba(124,140,255,0.30)",
                    }}
                  />

                  <div>
                    <div
                      style={{
                        fontFamily: FONT_FAMILY,
                        fontWeight: 600,
                        fontSize: "clamp(0.95rem, 1vw, 1.22rem)",
                        letterSpacing: smallLetterSpacing,
                        textTransform,
                        color:
                          index % 2 === 0 ? COLORS.accentLight : "#A9B3FF",
                        marginBottom: "0.45rem",
                      }}
                    >
                      {getLabel(spec.label, spec.zhLabel)}
                    </div>

                    <div
                      style={{
                        fontFamily: FONT_FAMILY,
                        fontWeight: 400,
                        fontSize: "clamp(1.32rem, 1.45vw, 2rem)",
                        lineHeight: 1.32,
                        color: COLORS.textMain,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {getLabel(spec.value, spec.zhValue)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Safety */}
      <section
        style={{
          padding: "clamp(5rem, 7.2vw, 9rem) 0",
          background:
            "radial-gradient(circle at 72% 16%, rgba(0,174,239,0.16) 0%, transparent 32%), radial-gradient(circle at 30% 76%, rgba(124,140,255,0.12) 0%, transparent 30%), linear-gradient(180deg, #0A1A2B 0%, #071322 100%)",
        }}
      >
        <div className="w-full max-w-[92vw] 2xl:max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="text-center mb-[clamp(3rem,4vw,5rem)]">
            <div className="flex items-center justify-center gap-4 mb-7">
              <span
                className="block h-px"
                style={{
                  width: "clamp(34px, 3vw, 64px)",
                  background: COLORS.accent,
                  boxShadow: "0 0 16px rgba(0,174,239,0.6)",
                }}
              />

              <span
                style={{
                  fontFamily: FONT_FAMILY,
                  fontWeight: 600,
                  fontSize: "clamp(1.05rem, 1.1vw, 1.45rem)",
                  letterSpacing: smallLetterSpacing,
                  textTransform,
                  color: COLORS.accentLight,
                }}
              >
                {getLabel(
                  "Safety, Assistance & Connectivity",
                  "安全、辅助与联网能力"
                )}
              </span>

              <span
                className="block h-px"
                style={{
                  width: "clamp(34px, 3vw, 64px)",
                  background: COLORS.accent,
                  boxShadow: "0 0 16px rgba(0,174,239,0.6)",
                }}
              />
            </div>

            <h2
              style={{
                fontFamily: FONT_FAMILY,
                fontWeight: 600,
                fontSize:
                  language === "zh"
                    ? "clamp(2.3rem, 3.1vw, 4.4rem)"
                    : "clamp(2.4rem, 3.3vw, 4.8rem)",
                lineHeight: 1.04,
                letterSpacing: language === "zh" ? "-0.035em" : "-0.045em",
                textTransform,
                color: COLORS.textMain,
                margin: 0,
              }}
            >
              {getLabel(
                "Prepared for Commercial Fleet Operation",
                "面向商用车队运营配置"
              )}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 2xl:gap-7">
            {techSafetyFeatures.map((feature) => (
              <div
                key={feature.title}
                style={{
                  padding: "clamp(1.3rem, 1.6vw, 2rem)",
                  minHeight: "clamp(150px, 10vw, 210px)",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.025) 100%)",
                  boxShadow:
                    "0 18px 52px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.06)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  style={{
                    width: "clamp(36px, 2.6vw, 54px)",
                    height: "clamp(36px, 2.6vw, 54px)",
                    borderRadius: "999px",
                    background:
                      "radial-gradient(circle, rgba(0,174,239,0.48) 0%, rgba(0,174,239,0.10) 58%, transparent 100%)",
                    marginBottom: "clamp(1rem, 1.2vw, 1.5rem)",
                    boxShadow: "0 0 24px rgba(0,174,239,0.22)",
                  }}
                />

                <div
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontWeight: 600,
                    fontSize: "clamp(1.35rem, 1.35vw, 1.9rem)",
                    letterSpacing: language === "zh" ? "-0.01em" : "-0.02em",
                    textTransform,
                    color: COLORS.textMain,
                    marginBottom: "0.55rem",
                  }}
                >
                  {getLabel(feature.title, feature.zhTitle)}
                </div>

                <div
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontWeight: 400,
                    fontSize: "clamp(1rem, 1vw, 1.24rem)",
                    lineHeight: 1.5,
                    color: COLORS.textSoft,
                  }}
                >
                  {getLabel(feature.desc, feature.zhDesc)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}