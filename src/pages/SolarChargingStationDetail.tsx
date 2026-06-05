import React from "react";
import Footer from "../components/Footer";
import { useLanguage } from "../i18n/LanguageContext";

const FONT_FAMILY =
  "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

const useWindowWidth = () => {
  const [width, setWidth] = React.useState(
    typeof window !== "undefined" ? window.innerWidth : 1440
  );

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

const SolarStorageChargingStation: React.FC = () => {
  const width = useWindowWidth();
  const { language } = useLanguage();

  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1100;

  const getLabel = (en: string, zh: string) => {
    return language === "zh" ? zh : en;
  };

  const textTransform =
    language === "zh" ? ("none" as const) : ("uppercase" as const);

  const titleLetterSpacing = language === "zh" ? "-0.04em" : "-0.055em";
  const smallLetterSpacing = language === "zh" ? "0.04em" : "0.12em";

  const heroImage =
    "/images/Solar-Storage-Charging Integrated Station/Solar-Storage-Charging Integrated Station-hero.png";

  const keyNumbers = [
    {
      number: "5MW",
      zhNumber: "5兆瓦",
      label: "Solar Generation Capacity",
      zhLabel: "太阳能发电容量",
    },
    {
      number: "11MWh",
      zhNumber: "11兆瓦时",
      label: "Battery Storage Capacity",
      zhLabel: "电池储能容量",
    },
    {
      number: "DC",
      zhNumber: "直流耦合",
      label: "Solar-Storage Coupled System",
      zhLabel: "光伏储能耦合系统",
    },
    {
      number: "EV",
      zhNumber: "充电接口",
      label: "Charging Station Integration",
      zhLabel: "电动车充电接入",
    },
    {
      number: "2026",
      zhNumber: "2026",
      label: "Early Project Communication",
      zhLabel: "项目沟通启动阶段",
    },
  ];

  const statusSteps = [
    {
      title: "Initial Discussion",
      zhTitle: "项目初步沟通",
      active: true,
    },
    {
      title: "Scenario Review",
      zhTitle: "应用场景梳理",
      active: true,
    },
    {
      title: "Site & Grid Assessment",
      zhTitle: "选址与电网评估",
      active: false,
    },
    {
      title: "Technical Proposal",
      zhTitle: "技术方案准备",
      active: false,
    },
    {
      title: "Engineering Design",
      zhTitle: "工程设计",
      active: false,
    },
    {
      title: "Construction",
      zhTitle: "项目建设",
      active: false,
    },
    {
      title: "Operation",
      zhTitle: "运营投放",
      active: false,
    },
  ];

  const technicalParameters = [
    {
      label: "Project Name",
      zhLabel: "项目名称",
      value: "ASTRAQ Clean Energy System Project",
      zhValue: "ASTRAQ 清洁能源系统项目",
    },
    {
      label: "Project Type",
      zhLabel: "项目类型",
      value: "Solar Generation + Battery Storage + EV Charging Station",
      zhValue: "太阳能发电 + 电池储能 + 电动车充电站",
    },
    {
      label: "Location",
      zhLabel: "项目区域",
      value: "New South Wales, Australia",
      zhValue: "澳大利亚新南威尔士州",
    },
    {
      label: "Installed Capacity",
      zhLabel: "装机规模",
      value: "5MW solar generation / 11MWh battery energy storage",
      zhValue: "5MW 太阳能发电 / 11MWh 电池储能",
    },
    {
      label: "System Configuration",
      zhLabel: "系统组成",
      value:
        "Photovoltaic generation, DC-coupled battery storage, inverter system, energy management system and EV charging interface.",
      zhValue:
        "光伏发电、直流耦合储能、逆变系统、能源管理系统及电动车充电接口。",
    },
    {
      label: "Application Scenario",
      zhLabel: "应用场景",
      value:
        "Suitable for EV charging stations, commercial fleet charging, logistics bases, industrial parks and distributed renewable energy projects.",
      zhValue:
        "适用于电动车充电站、商用车队补能、物流基地、工业园区及分布式新能源项目。",
    },
    {
      label: "Project Positioning",
      zhLabel: "项目定位",
      value:
        "A clean energy infrastructure project connecting renewable generation, storage flexibility and electric transport support.",
      zhValue:
        "连接可再生能源发电、储能调节能力和电动交通补能需求的清洁能源基础设施项目。",
    },
  ];

  const coreModules = [
    {
      title: "Solar Generation",
      zhTitle: "太阳能发电",
      text: "Photovoltaic generation supplies renewable electricity for charging demand, battery storage and daily site operation.",
      zhText:
        "光伏系统为充电需求、电池储能和场站日常运行提供可再生电力来源。",
    },
    {
      title: "Battery Energy Storage",
      zhTitle: "电池储能系统",
      text: "The battery system improves power flexibility and helps balance energy demand during peak load or low-solar periods.",
      zhText:
        "电池储能系统提升场站用电灵活性，并在高负荷或低日照时段平衡能源需求。",
    },
    {
      title: "EV Charging Integration",
      zhTitle: "电动车充电接入",
      text: "The station can support EV charging demand and can be expanded for commercial fleet charging scenarios.",
      zhText:
        "场站可支持电动车补能需求，并可根据运营需要扩展至商用车队充电场景。",
    },
    {
      title: "Energy Management System",
      zhTitle: "能源管理系统",
      text: "The control system coordinates solar generation, storage capacity, charging demand and grid interaction.",
      zhText:
        "能源管理系统协调光伏发电、储能容量、充电负荷和电网交互。",
    },
  ];

  const styles: { [key: string]: React.CSSProperties } = {
    page: {
      width: "100%",
      minHeight: "100vh",
      background:
        "linear-gradient(180deg, #071012 0%, #081817 36%, #050505 100%)",
      color: "#ffffff",
      overflowX: "hidden",
      fontFamily: FONT_FAMILY,
    },

    hero: {
      position: "relative",
      width: "100%",
      height: isMobile
        ? "clamp(560px, 86vh, 720px)"
        : "clamp(640px, 88vh, 960px)",
      overflow: "hidden",
      backgroundColor: "#050505",
    },

    heroImage: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },

    heroOverlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(90deg, rgba(3,8,8,0.9) 0%, rgba(4,18,15,0.72) 42%, rgba(4,20,15,0.32) 100%), linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(5,5,5,0.84) 100%)",
    },

    heroContent: {
      position: "relative",
      zIndex: 2,
      width: isMobile ? "min(90vw, 720px)" : "min(92vw, 1480px)",
      height: "100%",
      margin: "0 auto",
      paddingTop: isMobile ? "72px" : "88px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
    },

    heroTitle: {
      margin: 0,
      maxWidth: "1400px",
      color: "#ffffff",
      fontSize: isMobile
        ? "clamp(38px, 11vw, 68px)"
        : isTablet
        ? "clamp(56px, 8vw, 86px)"
        : language === "zh"
        ? "clamp(58px, 5vw, 100px)"
        : "clamp(60px, 5.2vw, 108px)",
      lineHeight: 1.02,
      fontWeight: 600,
      letterSpacing: titleLetterSpacing,
    },

    heroTitleLine: {
      display: "block",
      whiteSpace: isMobile ? "normal" : "nowrap",
    },

    heroDescription: {
      margin: isMobile ? "26px 0 0" : "34px 0 0",
      maxWidth: isMobile ? "92vw" : "900px",
      color: "rgba(255,255,255,0.84)",
      fontSize: isMobile
        ? "clamp(18px, 4.8vw, 24px)"
        : "clamp(20px, 1.55vw, 31px)",
      lineHeight: 1.58,
      fontWeight: 400,
      letterSpacing: language === "zh" ? "0.01em" : "-0.01em",
    },

    main: {
      width: isMobile ? "min(90vw, 720px)" : "min(94vw, 1680px)",
      margin: "0 auto",
      padding: isMobile
        ? "clamp(58px, 12vw, 90px) 0"
        : "clamp(70px, 7vw, 130px) 0",
    },

    section: {
      marginBottom: isMobile
        ? "clamp(70px, 14vw, 105px)"
        : "clamp(86px, 7.5vw, 145px)",
    },

    sectionLabel: {
      margin: "0 0 clamp(24px, 2vw, 34px)",
      color: "#cb8d63",
      fontSize: isMobile
        ? "clamp(18px, 4.6vw, 24px)"
        : isTablet
        ? "clamp(20px, 2.2vw, 28px)"
        : "clamp(22px, 1.45vw, 32px)",
      lineHeight: 1.15,
      fontWeight: 600,
      letterSpacing: smallLetterSpacing,
      textTransform,
    },

    divider: {
      width: "100%",
      height: "1px",
      backgroundColor: "rgba(255,255,255,0.14)",
      marginBottom: isMobile ? "28px" : "38px",
    },

    keyGrid: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "repeat(2, 1fr)"
        : isTablet
        ? "repeat(3, 1fr)"
        : "repeat(5, minmax(150px, 1fr))",
      gap: isMobile ? "34px 24px" : "clamp(28px, 4.5vw, 92px)",
    },

    keyItem: {
      minWidth: 0,
    },

    keyNumber: {
      margin: "0 0 14px",
      color: "#ffffff",
      fontSize: isMobile
        ? "clamp(32px, 8vw, 52px)"
        : language === "zh"
        ? "clamp(34px, 3.2vw, 66px)"
        : "clamp(38px, 3.8vw, 76px)",
      lineHeight: language === "zh" ? 1.12 : 1,
      fontWeight: 600,
      letterSpacing: language === "zh" ? "-0.025em" : "-0.045em",
      whiteSpace: "normal",
      wordBreak: "keep-all",
    },

    keyLabel: {
      margin: 0,
      maxWidth: "280px",
      color: "rgba(255,255,255,0.68)",
      fontSize: isMobile
        ? "clamp(14px, 3.4vw, 17px)"
        : "clamp(16px, 1.05vw, 22px)",
      lineHeight: 1.45,
      fontWeight: 400,
    },

    statusWrapper: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : isTablet
        ? "repeat(3, 1fr)"
        : "repeat(7, 1fr)",
      gap: isMobile ? "22px" : isTablet ? "26px 0" : 0,
    },

    statusItem: {
      minWidth: 0,
    },

    statusLine: {
      position: "relative",
      height: isMobile ? "14px" : "16px",
      borderRight: isMobile ? "none" : "3px solid #071012",
      borderRadius: isMobile ? "999px" : 0,
    },

    statusDot: {
      position: "absolute",
      right: isMobile ? "12px" : "-7px",
      top: "50%",
      width: isMobile ? "11px" : "12px",
      height: isMobile ? "11px" : "12px",
      borderRadius: "50%",
      transform: "translateY(-50%)",
      zIndex: 2,
    },

    statusText: {
      margin: isMobile ? "12px 0 0" : "18px 22px 0 0",
      fontSize: isMobile
        ? "clamp(14px, 3.4vw, 17px)"
        : "clamp(14px, 0.95vw, 18px)",
      lineHeight: 1.38,
      fontWeight: 400,
    },

    statusNote: {
      margin: isMobile ? "32px 0 0" : "42px 0 0",
      maxWidth: "1280px",
      color: "rgba(255,255,255,0.74)",
      fontSize: isMobile
        ? "clamp(16px, 4vw, 20px)"
        : "clamp(18px, 1.15vw, 24px)",
      lineHeight: 1.68,
      fontWeight: 400,
    },

    technicalSection: {
      marginBottom: isMobile
        ? "clamp(78px, 14vw, 110px)"
        : "clamp(96px, 8vw, 155px)",
    },

    technicalHeader: {
      textAlign: isMobile ? "left" : "center",
      marginBottom: isMobile ? "30px" : "clamp(34px, 3vw, 56px)",
    },

    sectionTitle: {
      margin: 0,
      color: "#ffffff",
      fontSize: isMobile
        ? "clamp(34px, 9vw, 54px)"
        : isTablet
        ? "clamp(46px, 6vw, 72px)"
        : language === "zh"
        ? "clamp(42px, 4.2vw, 82px)"
        : "clamp(46px, 4.8vw, 92px)",
      lineHeight: 1.04,
      fontWeight: 600,
      letterSpacing: language === "zh" ? "-0.04em" : "-0.055em",
    },

    parameterCard: {
      width: "100%",
      borderTop: "1px solid rgba(255,255,255,0.14)",
      borderBottom: "1px solid rgba(255,255,255,0.14)",
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))",
      borderRadius: isMobile ? "22px" : "30px",
      overflow: "hidden",
    },

    parameterRow: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : "clamp(240px, 18vw, 360px) 1fr",
      gap: isMobile ? "10px" : "clamp(28px, 4vw, 64px)",
      padding: isMobile
        ? "24px 22px"
        : "clamp(28px, 2.4vw, 42px) clamp(28px, 4vw, 70px)",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
    },

    parameterLabel: {
      color: "#d7b46a",
      fontSize: isMobile
        ? "clamp(15px, 3.6vw, 18px)"
        : "clamp(17px, 1.15vw, 24px)",
      lineHeight: 1.45,
      fontWeight: 600,
    },

    parameterValue: {
      color: "rgba(255,255,255,0.78)",
      fontSize: isMobile
        ? "clamp(15px, 3.6vw, 18px)"
        : "clamp(17px, 1.18vw, 24px)",
      lineHeight: 1.68,
      fontWeight: 400,
    },

    overviewSection: {
      display: "grid",
      gridTemplateColumns: isMobile || isTablet ? "1fr" : "1.08fr 0.92fr",
      gap: isMobile ? "38px" : "clamp(52px, 6vw, 120px)",
      alignItems: "center",
      marginBottom: isMobile
        ? "clamp(78px, 14vw, 110px)"
        : "clamp(96px, 8vw, 155px)",
    },

    overviewContent: {
      minWidth: 0,
    },

    paragraph: {
      margin: "28px 0 0",
      color: "rgba(255,255,255,0.7)",
      fontSize: isMobile
        ? "clamp(16px, 4vw, 20px)"
        : "clamp(18px, 1.22vw, 25px)",
      lineHeight: 1.72,
      fontWeight: 400,
    },

    overviewImageBox: {
      width: "100%",
      borderRadius: isMobile ? "22px" : "30px",
      overflow: "hidden",
      backgroundColor: "rgba(255,255,255,0.06)",
      boxShadow: "0 34px 100px rgba(0,0,0,0.42)",
      border: "1px solid rgba(255,255,255,0.12)",
    },

    overviewImage: {
      display: "block",
      width: "100%",
      height: isMobile
        ? "clamp(260px, 62vw, 420px)"
        : "clamp(420px, 36vw, 680px)",
      objectFit: "cover",
    },

    moduleSection: {
      marginBottom: isMobile ? "40px" : "clamp(40px, 5vw, 80px)",
    },

    moduleGrid: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : isTablet
        ? "repeat(2, 1fr)"
        : "repeat(4, 1fr)",
      gap: isMobile ? "22px" : "clamp(20px, 2vw, 34px)",
      marginTop: isMobile ? "34px" : "48px",
    },

    moduleCard: {
      minHeight: isMobile ? "auto" : "300px",
      padding: isMobile
        ? "26px 24px"
        : "clamp(28px, 2.5vw, 44px)",
      borderRadius: isMobile ? "22px" : "30px",
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.095), rgba(255,255,255,0.035))",
      border: "1px solid rgba(255,255,255,0.12)",
    },

    moduleIndex: {
      display: "block",
      marginBottom: isMobile ? "28px" : "42px",
      color: "#dadee5",
      fontSize: isMobile
        ? "clamp(15px, 3.6vw, 18px)"
        : "clamp(16px, 1vw, 20px)",
      lineHeight: 1,
      fontWeight: 600,
    },

    moduleTitle: {
      margin: "0 0 18px",
      color: "#ffffff",
      fontSize: isMobile
        ? "clamp(24px, 6vw, 34px)"
        : language === "zh"
        ? "clamp(22px, 1.65vw, 34px)"
        : "clamp(24px, 1.8vw, 36px)",
      lineHeight: 1.14,
      fontWeight: 600,
      letterSpacing: language === "zh" ? "-0.025em" : "-0.035em",
    },

    moduleText: {
      margin: 0,
      color: "rgba(255,255,255,0.66)",
      fontSize: isMobile
        ? "clamp(15px, 3.7vw, 18px)"
        : "clamp(16px, 1.02vw, 20px)",
      lineHeight: 1.65,
      fontWeight: 400,
    },
  };

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <img
          src={heroImage}
          alt={getLabel(
            "Solar storage charging integrated station",
            "光储充一体化站"
          )}
          style={styles.heroImage}
        />

        <div style={styles.heroOverlay} />

        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            {language === "zh" ? (
              <>
                <span style={styles.heroTitleLine}>光储充一体化站</span>
              </>
            ) : (
              <>
                <span style={styles.heroTitleLine}>Solar-Storage-Charging</span>
                <span style={styles.heroTitleLine}>Integrated Station</span>
              </>
            )}
          </h1>

          <p style={styles.heroDescription}>
            {getLabel(
              "An energy infrastructure concept combining solar generation, battery storage and EV charging for transport and commercial sites.",
              "面向交通和商业场站的能源基础设施方案，结合太阳能发电、电池储能与电动车充电能力。"
            )}
          </p>
        </div>
      </section>

      <main style={styles.main}>
        <section style={styles.section}>
          <p style={styles.sectionLabel}>
            {getLabel("Key Numbers", "关键数据")}
          </p>

          <div style={styles.divider} />

          <div style={styles.keyGrid}>
            {keyNumbers.map((item, index) => (
              <div key={index} style={styles.keyItem}>
                <h3 style={styles.keyNumber}>
                  {getLabel(item.number, item.zhNumber)}
                </h3>
                <p style={styles.keyLabel}>
                  {getLabel(item.label, item.zhLabel)}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <p style={styles.sectionLabel}>
            {getLabel("Current Status", "当前进展")}
          </p>

          <div style={styles.divider} />

          <div style={styles.statusWrapper}>
            {statusSteps.map((step, index) => (
              <div key={index} style={styles.statusItem}>
                <div
                  style={{
                    ...styles.statusLine,
                    backgroundColor: step.active
                      ? "#37b86a"
                      : "rgba(255,255,255,0.18)",
                  }}
                >
                  <span
                    style={{
                      ...styles.statusDot,
                      backgroundColor: step.active
                        ? "#d7b46a"
                        : "rgba(255,255,255,0.28)",
                    }}
                  />
                </div>

                <p
                  style={{
                    ...styles.statusText,
                    color: step.active
                      ? "rgba(255,255,255,0.88)"
                      : "rgba(255,255,255,0.46)",
                  }}
                >
                  {getLabel(step.title, step.zhTitle)}
                </p>
              </div>
            ))}
          </div>

          <p style={styles.statusNote}>
            {getLabel(
              "The project is currently in the early communication stage. The current focus is to confirm the project concept, application scenario, site feasibility, energy demand and preliminary system configuration.",
              "项目目前处于前期沟通阶段，当前重点是确认项目概念、应用场景、选址可行性、能源需求和初步系统配置。"
            )}
          </p>
        </section>

        <section style={styles.technicalSection}>
          <div style={styles.technicalHeader}>
            <p style={styles.sectionLabel}>
              {getLabel("Technical Parameters", "技术参数")}
            </p>

            <h2 style={styles.sectionTitle}>
              {getLabel(
                "5MW / 11MWh Solar + Storage + Charging Project",
                "5MW / 11MWh 光储充项目"
              )}
            </h2>
          </div>

          <div style={styles.parameterCard}>
            {technicalParameters.map((item, index) => (
              <div key={index} style={styles.parameterRow}>
                <div style={styles.parameterLabel}>
                  {getLabel(item.label, item.zhLabel)}
                </div>
                <div style={styles.parameterValue}>
                  {getLabel(item.value, item.zhValue)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.overviewSection}>
          <div style={styles.overviewContent}>
            <p style={styles.sectionLabel}>
              {getLabel("Project Overview", "项目概述")}
            </p>

            <h2 style={styles.sectionTitle}>
              {getLabel(
                "Solar, Storage and Charging in One Energy Platform",
                "集成发电、储能与充电的一体化能源平台"
              )}
            </h2>

            <p style={styles.paragraph}>
              {getLabel(
                "The Solar-Storage-Charging Integrated Station is designed as a distributed clean energy platform for commercial sites and transport operations. It combines photovoltaic generation, battery storage and charging infrastructure into a coordinated system.",
                "光储充一体化站面向商业场站和交通运营场景设计，是一种分布式清洁能源平台。项目将光伏发电、电池储能和充电基础设施整合为协同运行的系统。"
              )}
            </p>

            <p style={styles.paragraph}>
              {getLabel(
                "The system can use solar generation for direct charging or store electricity for later use, helping improve renewable energy utilisation and site-level energy flexibility.",
                "系统可将太阳能发电用于直接充电，也可将电能储存后在需要时释放，从而提升可再生能源利用率和场站用能灵活性。"
              )}
            </p>
          </div>

          <div style={styles.overviewImageBox}>
            <img
              src={heroImage}
              alt={getLabel(
                "Solar storage charging project",
                "光储充项目"
              )}
              style={styles.overviewImage}
            />
          </div>
        </section>

        <section style={styles.moduleSection}>
          <p style={styles.sectionLabel}>
            {getLabel("Core System Modules", "核心系统模块")}
          </p>

          <h2 style={styles.sectionTitle}>
            {getLabel(
              "Integrated System Architecture",
              "一体化系统架构"
            )}
          </h2>

          <div style={styles.moduleGrid}>
            {coreModules.map((item, index) => (
              <div key={index} style={styles.moduleCard}>
                <span style={styles.moduleIndex}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 style={styles.moduleTitle}>
                  {getLabel(item.title, item.zhTitle)}
                </h3>

                <p style={styles.moduleText}>
                  {getLabel(item.text, item.zhText)}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SolarStorageChargingStation;