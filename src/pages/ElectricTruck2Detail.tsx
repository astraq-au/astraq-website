/**
 * ElectricLightTruckDetail Page
 * ASTRAQ EL1 Battery-Electric Light Truck
 * Commercial EV city distribution page
 * English / Chinese supported
 */

import Footer from "../components/Footer";
import { useLanguage } from "../i18n/LanguageContext";

const FONT_FAMILY =
  "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

const HERO_BG = "/elelctric2-hero-road.png";
const SPEC_PDF = "/specifications/electric-light-specification.pdf";

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
    value: "4×2",
    zhValue: "4×2",
    label: "City Route Chassis",
    zhLabel: "城市配送底盘",
  },
  {
    value: "EV",
    zhValue: "纯电",
    label: "Battery-Electric Drive",
    zhLabel: "电池电驱平台",
  },
  {
    value: "AC + DC",
    zhValue: "快充",
    label: "Fleet Charging Support",
    zhLabel: "车队充电适配",
  },
  {
    value: "Urban",
    zhValue: "城市",
    label: "Distribution Operation",
    zhLabel: "配送运营场景",
  },
];

const keyFeatures = [
  {
    text: "Battery-electric platform developed for city delivery, service routes and local logistics tasks.",
    zhText:
      "面向城市配送、服务车辆和本地物流场景开发的电池电动平台。",
  },
  {
    text: "Optimised for predictable daily routes, depot charging and frequent stop-start operation.",
    zhText:
      "适合固定线路、场站补能和频繁启停的城市运营工况。",
  },
  {
    text: "Body-ready architecture for van, refrigerated, service and utility applications.",
    zhText:
      "支持厢式、冷链、服务保障和市政工具车等多种上装形式。",
  },
  {
    text: "Driver interface designed around visibility, simple controls and daily fleet usability.",
    zhText:
      "驾驶界面围绕视野、易用控制和车队日常使用习惯进行设计。",
  },
  {
    text: "Electric architecture helps fleets reduce noise and tailpipe emissions on urban routes.",
    zhText:
      "电动架构有助于降低城市线路中的噪声和尾气排放。",
  },
  {
    text: "Compact cab-over layout supports manoeuvrability in streets, depots and loading areas.",
    zhText:
      "紧凑型平头布局有利于城市道路、仓库和装卸区域内的转弯与调度。",
  },
  {
    text: "Low-noise operation supports early morning, night-time and residential delivery schedules.",
    zhText:
      "低噪声运行更适合清晨、夜间以及居民区周边配送任务。",
  },
  {
    text: "Clean body design and ASTRAQ visual identity for commercial electric fleets.",
    zhText:
      "简洁车身设计结合 ASTRAQ 视觉识别，适配商用电动车队形象。",
  },
];

const quickSpecs = [
  {
    label: "Vehicle Type",
    zhLabel: "车辆类型",
    value: "Battery-Electric Light Truck",
    zhValue: "纯电轻型卡车",
  },
  {
    label: "Application",
    zhLabel: "应用场景",
    value: "City Delivery / Local Logistics",
    zhValue: "城市配送 / 本地物流",
  },
  {
    label: "Drive System",
    zhLabel: "驱动系统",
    value: "Electric Motor Drive",
    zhValue: "电机驱动系统",
  },
  {
    label: "Charging",
    zhLabel: "充电方式",
    value: "AC Charging + DC Fast Charging",
    zhValue: "交流充电 + 直流快充",
  },
  {
    label: "Cabin",
    zhLabel: "驾驶室",
    value: "Urban Cab Configuration",
    zhValue: "城市配送驾驶室配置",
  },
  {
    label: "Body Options",
    zhLabel: "上装选择",
    value: "Van / Refrigerated / Utility",
    zhValue: "厢式 / 冷链 / 工具车",
  },
];

const powerPullSpecs = [
  {
    label: "Powertrain",
    zhLabel: "动力系统",
    value: "Battery-electric drive",
    zhValue: "电池电驱系统",
    note: "Calibrated for smooth launch and low-speed delivery duty cycles.",
    zhNote:
      "面向平顺起步和低速配送工况进行匹配，适合城市车辆频繁启停。",
  },
  {
    label: "Energy Recovery",
    zhLabel: "能量回收",
    value: "Regenerative braking",
    zhValue: "制动能量回收",
    note: "Supports energy recovery during repeated braking on city routes.",
    zhNote:
      "在城市线路反复制动过程中回收部分能量，提升日常运营效率。",
  },
  {
    label: "Payload Use",
    zhLabel: "载货应用",
    value: "Urban distribution bodies",
    zhValue: "城市配送上装",
    note: "Suitable for delivery body, service body and refrigerated applications.",
    zhNote:
      "可用于配送厢体、服务保障车体及冷链运输上装。",
  },
  {
    label: "Charging Pattern",
    zhLabel: "补能模式",
    value: "Depot plus fast charge",
    zhValue: "场站充电 + 快充补能",
    note: "Designed around fleet charging plans and predictable route scheduling.",
    zhNote:
      "适配车队场站充电计划，并支持固定线路中的快速补能需求。",
  },
];

const safetyFeatures = [
  {
    title: "AEB",
    zhTitle: "AEB",
    desc: "Autonomous emergency braking support for dense city traffic.",
    zhDesc: "自动紧急制动辅助，提升城市密集交通中的安全冗余。",
  },
  {
    title: "LDW",
    zhTitle: "LDW",
    desc: "Lane departure warning for daily fleet operation.",
    zhDesc: "车道偏离预警，辅助车队日常运营中的驾驶安全。",
  },
  {
    title: "ESC",
    zhTitle: "ESC",
    desc: "Electronic stability control for more predictable handling.",
    zhDesc: "电子稳定控制系统，提升车辆行驶稳定性。",
  },
  {
    title: "AVAS",
    zhTitle: "AVAS",
    desc: "Low-speed acoustic warning for pedestrian awareness.",
    zhDesc: "低速行人提示音系统，提高低速行驶时的行人感知。",
  },
  {
    title: "Camera",
    zhTitle: "倒车影像",
    desc: "Reverse camera support for loading areas and depots.",
    zhDesc: "倒车影像辅助，适用于仓库、装卸区和场站调度。",
  },
  {
    title: "Digital",
    zhTitle: "数字座舱",
    desc: "Digital cockpit interface for straightforward driver operation.",
    zhDesc: "数字化驾驶界面，减少驾驶员学习成本并提升操作直观性。",
  },
  {
    title: "Battery",
    zhTitle: "电池防护",
    desc: "Battery protection strategy for commercial route use.",
    zhDesc: "面向商用运营工况的电池防护策略。",
  },
  {
    title: "Fleet",
    zhTitle: "车队接口",
    desc: "Connectivity-ready architecture for future fleet management systems.",
    zhDesc: "预留车队管理系统接入能力，便于后续运营数据管理。",
  },
];

const configurations = [
  {
    label: "City Cab",
    zhLabel: "城市驾驶室",
    value: "Short-wheelbase configuration for urban delivery routes",
    zhValue: "适合城市配送路线的短轴距配置",
  },
  {
    label: "Van Body",
    zhLabel: "厢式上装",
    value: "Dry freight, parcel delivery and service fleet use",
    zhValue: "适用于干货运输、包裹配送和服务车队",
  },
  {
    label: "Refrigerated Body",
    zhLabel: "冷链上装",
    value: "Cold-chain logistics and food distribution applications",
    zhValue: "适用于冷链物流和食品配送场景",
  },
  {
    label: "Utility Body",
    zhLabel: "工具车上装",
    value: "Service, maintenance and municipal operation tasks",
    zhValue: "适用于服务保障、维修维护和市政作业任务",
  },
];

export default function ElectricLightTruckDetail() {
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
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundColor: COLORS.pageBg,
            filter: "brightness(1.16) contrast(1.08) saturate(1.08)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(5,12,24,0.80) 0%, rgba(5,12,24,0.44) 42%, rgba(5,12,24,0.28) 100%)",
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.64) 0%, rgba(0,0,0,0.30) 14%, transparent 34%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 72% 46%, rgba(0,174,239,0.26) 0%, rgba(0,174,239,0.08) 30%, transparent 62%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, transparent 60%, rgba(7,19,34,0.42) 84%, rgba(7,19,34,0.96) 100%)",
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
          className="absolute inset-x-0 bottom-[25%] h-[1px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(124,140,255,0.45) 34%, rgba(0,174,239,0.26) 54%, transparent 100%)",
            boxShadow: "0 0 18px rgba(124,140,255,0.38)",
          }}
        />

        <div className="relative z-10 w-full max-w-[96vw] 2xl:max-w-[1900px] mx-auto px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28">
          <div
            style={{
              maxWidth: "clamp(720px, 56vw, 1280px)",
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
              {getLabel("Battery-Electric Light Truck", "纯电轻型卡车")}
            </div>

            <h1
              style={{
                fontFamily: FONT_FAMILY,
                fontWeight: 600,
                fontSize:
                  language === "zh"
                    ? "clamp(2.8rem, 5vw, 7.4rem)"
                    : "clamp(3rem, 5.3vw, 8.4rem)",
                lineHeight: 1.02,
                letterSpacing: titleLetterSpacing,
                textTransform,
                color: COLORS.textMain,
                marginTop: 0,
                marginBottom: "clamp(1.4rem, 2vw, 2.8rem)",
                textShadow: "0 18px 52px rgba(0,0,0,0.60)",
              }}
            >
              {getLabel("EL1 Electric City Cab", "EL1 城市纯电轻卡")}
            </h1>

            <p
              style={{
                fontFamily: FONT_FAMILY,
                fontWeight: 600,
                fontSize:
                  language === "zh"
                    ? "clamp(1.55rem, 2.7vw, 4rem)"
                    : "clamp(1.7rem, 3vw, 4.6rem)",
                lineHeight: 1.08,
                letterSpacing: language === "zh" ? "-0.025em" : "-0.025em",
                textTransform,
                color: COLORS.textSoft,
                marginBottom: "clamp(2rem, 3vw, 3.8rem)",
                textShadow: "0 14px 38px rgba(0,0,0,0.45)",
              }}
            >
              {getLabel(
                "City Delivery · Quiet Operation · Fleet Use",
                "城市配送 · 低噪运行 · 车队运营"
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
                  padding: "clamp(1.4rem, 2vw, 2.4rem)",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.075) 0%, rgba(255,255,255,0.028) 100%)",
                  boxShadow:
                    "0 24px 70px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.08)",
                  backdropFilter: "blur(14px)",
                }}
              >
                <div
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontWeight: 600,
                    fontSize:
                      language === "zh"
                        ? "clamp(2.25rem, 3.6vw, 5.2rem)"
                        : "clamp(2.5rem, 4.2vw, 6rem)",
                    lineHeight: 1,
                    color: COLORS.textMain,
                    letterSpacing: language === "zh" ? "-0.025em" : "-0.045em",
                    whiteSpace: "nowrap",
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

      {/* Key Features */}
      <section
        className="relative"
        style={{
          padding: "clamp(5rem, 7vw, 9rem) 0",
          background:
            "radial-gradient(circle at 84% 18%, rgba(0,174,239,0.13) 0%, transparent 30%), linear-gradient(180deg, #081A2B 0%, #071322 100%)",
        }}
      >
        <div className="w-full max-w-[94vw] 2xl:max-w-[1800px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 xl:gap-20 items-center">
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
                  {getLabel("Key Features", "核心特点")}
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
                  "Built for Urban Electric Distribution",
                  "面向城市电动配送场景打造"
                )}
              </h2>

              <p
                style={{
                  maxWidth: "clamp(520px, 42vw, 760px)",
                  fontFamily: FONT_FAMILY,
                  fontWeight: 400,
                  fontSize: "clamp(1.15rem, 1.22vw, 1.58rem)",
                  lineHeight: 1.6,
                  color: COLORS.textSoft,
                  marginTop: "clamp(1.4rem, 2vw, 2.4rem)",
                }}
              >
                {getLabel(
                  "The EL1 is a city-focused battery-electric light truck for delivery fleets, service operators and body builders that need a quieter and cleaner urban vehicle platform.",
                  "EL1 是面向城市配送车队、服务运营商和上装厂的纯电轻卡平台，适合需要低噪声、低排放城市车辆的商用场景。"
                )}
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gap: "clamp(0.9rem, 1.1vw, 1.3rem)",
              }}
            >
              {keyFeatures.map((feature, index) => (
                <div
                  key={feature.text}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: "clamp(0.9rem, 1.1vw, 1.4rem)",
                    alignItems: "start",
                    padding: "clamp(1rem, 1.35vw, 1.7rem)",
                    background:
                      index % 2 === 0
                        ? "linear-gradient(90deg, rgba(0,174,239,0.13) 0%, rgba(255,255,255,0.035) 100%)"
                        : "linear-gradient(90deg, rgba(124,140,255,0.13) 0%, rgba(255,255,255,0.035) 100%)",
                    boxShadow:
                      "0 18px 44px rgba(0,0,0,0.17), inset 0 1px 0 rgba(255,255,255,0.055)",
                  }}
                >
                  <div
                    style={{
                      width: "clamp(26px, 1.9vw, 38px)",
                      height: "clamp(26px, 1.9vw, 38px)",
                      borderRadius: "999px",
                      background:
                        index % 2 === 0
                          ? "radial-gradient(circle, rgba(0,174,239,0.62) 0%, rgba(0,174,239,0.15) 58%, transparent 100%)"
                          : "radial-gradient(circle, rgba(124,140,255,0.62) 0%, rgba(124,140,255,0.15) 58%, transparent 100%)",
                      boxShadow:
                        index % 2 === 0
                          ? "0 0 26px rgba(0,174,239,0.30)"
                          : "0 0 26px rgba(124,140,255,0.26)",
                    }}
                  />

                  <div
                    style={{
                      fontFamily: FONT_FAMILY,
                      fontWeight: 400,
                      fontSize: "clamp(1.05rem, 1.06vw, 1.35rem)",
                      lineHeight: 1.5,
                      color: COLORS.textSoft,
                    }}
                  >
                    {getLabel(feature.text, feature.zhText)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specification Matrix */}
      <section
        className="relative"
        style={{
          padding: "clamp(5rem, 7vw, 9rem) 0",
          background:
            "radial-gradient(circle at 20% 20%, rgba(124,140,255,0.12) 0%, transparent 28%), radial-gradient(circle at 86% 76%, rgba(0,174,239,0.12) 0%, transparent 30%), linear-gradient(180deg, #071322 0%, #0A1A2B 100%)",
        }}
      >
        <div className="w-full max-w-[94vw] 2xl:max-w-[1800px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="grid grid-cols-1 xl:grid-cols-[0.78fr_1.22fr] gap-10 xl:gap-16 items-start">
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
                  {getLabel("Product Specification", "产品参数")}
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
                  marginBottom: "clamp(1.5rem, 2vw, 2.4rem)",
                }}
              >
                {getLabel(
                  "Practical EV Platform for City Fleets",
                  "适合城市车队运营的电动平台"
                )}
              </h2>

              <p
                style={{
                  maxWidth: "clamp(520px, 42vw, 760px)",
                  fontFamily: FONT_FAMILY,
                  fontWeight: 400,
                  fontSize: "clamp(1.15rem, 1.2vw, 1.58rem)",
                  lineHeight: 1.6,
                  color: COLORS.textSoft,
                }}
              >
                {getLabel(
                  "The configuration focuses on daily usability, body adaptability, charging flexibility and a clean electric fleet image for commercial operators.",
                  "该车型配置重点围绕日常可用性、上装适配、充电灵活性以及商用电动车队形象展开。"
                )}
              </p>
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

      {/* Safety Features */}
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
                {getLabel("Safety Features Included", "安全配置")}
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
                "Confidence for Daily Fleet Operation",
                "服务车队日常运营的安全支持"
              )}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 2xl:gap-7">
            {safetyFeatures.map((feature) => (
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

      {/* Power & Pull */}
      <section
        className="relative"
        style={{
          padding: "clamp(5rem, 7vw, 9rem) 0",
          background:
            "radial-gradient(circle at 18% 28%, rgba(124,140,255,0.13) 0%, transparent 28%), radial-gradient(circle at 80% 74%, rgba(0,174,239,0.12) 0%, transparent 30%), linear-gradient(180deg, #071322 0%, #0A1A2B 100%)",
        }}
      >
        <div className="w-full max-w-[94vw] 2xl:max-w-[1800px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="grid grid-cols-1 xl:grid-cols-[0.82fr_1.18fr] gap-12 xl:gap-20 items-start">
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
                  {getLabel("Power & Control", "动力与控制")}
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
                  "Electric Drive for City Routes",
                  "面向城市路线的电驱系统"
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
                  "Electric drive supports smooth launch, predictable low-speed operation and energy recovery in stop-start city traffic.",
                  "电驱系统支持平顺起步、稳定的低速控制，并可在城市频繁启停工况中进行能量回收。"
                )}
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "clamp(1rem, 1.35vw, 1.7rem)",
              }}
            >
              {powerPullSpecs.map((spec, index) => (
                <div
                  key={spec.label}
                  style={{
                    padding: "clamp(1.3rem, 1.7vw, 2.2rem)",
                    background:
                      index % 2 === 0
                        ? "linear-gradient(180deg, rgba(0,174,239,0.14) 0%, rgba(255,255,255,0.035) 100%)"
                        : "linear-gradient(180deg, rgba(124,140,255,0.14) 0%, rgba(255,255,255,0.035) 100%)",
                    boxShadow:
                      "0 24px 60px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    style={{
                      width: "clamp(38px, 2.8vw, 62px)",
                      height: "clamp(38px, 2.8vw, 62px)",
                      borderRadius: "999px",
                      background:
                        index % 2 === 0
                          ? "radial-gradient(circle, rgba(0,174,239,0.55) 0%, rgba(0,174,239,0.12) 58%, transparent 100%)"
                          : "radial-gradient(circle, rgba(124,140,255,0.55) 0%, rgba(124,140,255,0.12) 58%, transparent 100%)",
                      boxShadow:
                        index % 2 === 0
                          ? "0 0 34px rgba(0,174,239,0.35)"
                          : "0 0 34px rgba(124,140,255,0.30)",
                      marginBottom: "clamp(1rem, 1.2vw, 1.5rem)",
                    }}
                  />

                  <div
                    style={{
                      fontFamily: FONT_FAMILY,
                      fontWeight: 600,
                      fontSize: "clamp(1.2rem, 1.25vw, 1.7rem)",
                      letterSpacing: language === "zh" ? "-0.01em" : "-0.02em",
                      textTransform,
                      color: COLORS.textMain,
                      marginBottom: "0.55rem",
                    }}
                  >
                    {getLabel(spec.label, spec.zhLabel)}
                  </div>

                  <div
                    style={{
                      fontFamily: FONT_FAMILY,
                      fontWeight: 600,
                      fontSize: "clamp(1.1rem, 1.15vw, 1.5rem)",
                      color: COLORS.accentLight,
                      marginBottom: "0.55rem",
                    }}
                  >
                    {getLabel(spec.value, spec.zhValue)}
                  </div>

                  <div
                    style={{
                      fontFamily: FONT_FAMILY,
                      fontWeight: 400,
                      fontSize: "clamp(0.98rem, 1vw, 1.24rem)",
                      lineHeight: 1.5,
                      color: COLORS.textSoft,
                    }}
                  >
                    {getLabel(spec.note, spec.zhNote)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Available Configurations */}
      <section
        className="relative"
        style={{
          padding: "clamp(5rem, 7.2vw, 9rem) 0",
          background:
            "radial-gradient(circle at 76% 20%, rgba(0,174,239,0.12) 0%, transparent 30%), linear-gradient(180deg, #0A1A2B 0%, #071322 100%)",
        }}
      >
        <div className="w-full max-w-[94vw] 2xl:max-w-[1800px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-12 xl:gap-20 items-start">
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
                  {getLabel("Body Configurations", "上装配置")}
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
                  "One Platform for Multiple Urban Bodies",
                  "一个平台适配多种城市上装"
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
                }}
              >
                {getLabel(
                  "The EL1 platform can support several commercial body styles, helping operators manage different city service tasks with a common electric chassis.",
                  "EL1 平台可支持多种商用上装，帮助运营方用同一电动底盘覆盖不同城市服务任务。"
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 2xl:gap-7">
              {configurations.map((item, index) => (
                <div
                  key={item.label}
                  style={{
                    padding: "clamp(1.3rem, 1.7vw, 2.2rem)",
                    minHeight: "clamp(140px, 9vw, 190px)",
                    background:
                      index % 2 === 0
                        ? "linear-gradient(180deg, rgba(0,174,239,0.12) 0%, rgba(255,255,255,0.035) 100%)"
                        : "linear-gradient(180deg, rgba(124,140,255,0.12) 0%, rgba(255,255,255,0.035) 100%)",
                    boxShadow:
                      "0 20px 54px rgba(0,0,0,0.19), inset 0 1px 0 rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: FONT_FAMILY,
                      fontWeight: 600,
                      fontSize: "clamp(1.25rem, 1.3vw, 1.75rem)",
                      letterSpacing: language === "zh" ? "-0.01em" : "-0.02em",
                      textTransform,
                      color: COLORS.textMain,
                      marginBottom: "0.65rem",
                    }}
                  >
                    {getLabel(item.label, item.zhLabel)}
                  </div>

                  <div
                    style={{
                      fontFamily: FONT_FAMILY,
                      fontWeight: 400,
                      fontSize: "clamp(1rem, 1.02vw, 1.28rem)",
                      lineHeight: 1.5,
                      color: COLORS.textSoft,
                    }}
                  >
                    {getLabel(item.value, item.zhValue)}
                  </div>
                </div>
              ))}

              <a
                href="/store"
                className="inline-flex items-center justify-center sm:col-span-2"
                style={{
                  marginTop: "clamp(0.5rem, 1vw, 1rem)",
                  height: "clamp(58px, 3.5vw, 76px)",
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
                  boxShadow: "0 18px 56px rgba(0,174,239,0.30)",
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

      <Footer />
    </main>
  );
}