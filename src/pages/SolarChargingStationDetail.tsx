import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1100;

  const heroImage =
    "/images/Solar-Storage-Charging Integrated Station/Solar-Storage-Charging Integrated Station-hero.png";

  const keyNumbers = [
    {
      number: "5MW",
      label: "Solar Power Capacity",
    },
    {
      number: "11MWh",
      label: "Battery Energy Storage",
    },
    {
      number: "DC",
      label: "Solar-Storage Coupled System",
    },
    {
      number: "EV",
      label: "Charging Station Integration",
    },
    {
      number: "2026",
      label: "Preliminary Project Stage",
    },
  ];

  const statusSteps = [
    {
      title: "Initial Discussion",
      active: true,
    },
    {
      title: "Preliminary Communication",
      active: true,
    },
    {
      title: "Site & Grid Assessment",
      active: false,
    },
    {
      title: "Technical Proposal",
      active: false,
    },
    {
      title: "Engineering Design",
      active: false,
    },
    {
      title: "Construction",
      active: false,
    },
    {
      title: "Operation",
      active: false,
    },
  ];

  const technicalParameters = [
    {
      label: "Project Name",
      value: "Astraq Clean Energy System Project",
    },
    {
      label: "Project Type",
      value: "Solar Power + Battery Energy Storage + EV Charging Station",
    },
    {
      label: "Location",
      value: "New South Wales, Australia",
    },
    {
      label: "Installed Capacity",
      value: "5MW solar power generation / 11MWh battery energy storage",
    },
    {
      label: "System Configuration",
      value:
        "Photovoltaic generation, DC-coupled battery storage, inverter system, smart energy management and EV charging interface.",
    },
    {
      label: "Application Scenario",
      value:
        "Suitable for EV charging stations, commercial fleet charging, industrial parks, logistics bases and distributed renewable energy projects.",
    },
    {
      label: "Project Positioning",
      value:
        "A representative clean energy solution combining solar generation, storage flexibility and electric mobility support.",
    },
  ];

  const coreModules = [
    {
      title: "Solar Generation",
      text: "Photovoltaic generation provides clean electricity for direct charging, battery storage and daily site operation.",
    },
    {
      title: "Battery Energy Storage",
      text: "The battery system improves power flexibility and helps balance energy demand during peak or low-solar periods.",
    },
    {
      title: "EV Charging Integration",
      text: "The station supports electric vehicle charging and can be expanded for commercial fleet charging scenarios.",
    },
    {
      title: "Smart Energy Management",
      text: "The control system coordinates solar generation, storage capacity, charging demand and grid interaction.",
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
        : "clamp(60px, 5.2vw, 108px)",
      lineHeight: 1.02,
      fontWeight: 600,
      letterSpacing: "-0.055em",
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
      letterSpacing: "-0.01em",
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
      letterSpacing: "0.12em",
      textTransform: "uppercase",
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
        ? "clamp(34px, 9vw, 54px)"
        : "clamp(38px, 3.8vw, 76px)",
      lineHeight: 1,
      fontWeight: 600,
      letterSpacing: "-0.045em",
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
        : "clamp(46px, 4.8vw, 92px)",
      lineHeight: 1.04,
      fontWeight: 600,
      letterSpacing: "-0.055em",
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

    highlightParagraph: {
      margin: "32px 0 0",
      color: "#ffffff",
      fontSize: isMobile
        ? "clamp(17px, 4.2vw, 21px)"
        : "clamp(19px, 1.3vw, 27px)",
      lineHeight: 1.65,
      fontWeight: 500,
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
        : "clamp(24px, 1.8vw, 36px)",
      lineHeight: 1.14,
      fontWeight: 600,
      letterSpacing: "-0.035em",
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
      <Navbar />

      <section style={styles.hero}>
        <img
          src={heroImage}
          alt="Solar Storage Charging Integrated Station"
          style={styles.heroImage}
        />

        <div style={styles.heroOverlay} />

        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            <span style={styles.heroTitleLine}>Solar-Storage-Charging</span>
            <span style={styles.heroTitleLine}>Integrated Station</span>
          </h1>

          <p style={styles.heroDescription}>
            A future-ready energy infrastructure solution integrating solar
            power generation, battery energy storage and EV charging services.
          </p>
        </div>
      </section>

      <main style={styles.main}>
        <section style={styles.section}>
          <p style={styles.sectionLabel}>KEY NUMBERS</p>

          <div style={styles.divider} />

          <div style={styles.keyGrid}>
            {keyNumbers.map((item, index) => (
              <div key={index} style={styles.keyItem}>
                <h3 style={styles.keyNumber}>{item.number}</h3>
                <p style={styles.keyLabel}>{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <p style={styles.sectionLabel}>CURRENT STATUS</p>

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
                  {step.title}
                </p>
              </div>
            ))}
          </div>

          <p style={styles.statusNote}>
            The project is currently at an early communication stage. The focus
            is on confirming the project concept, application scenario, site
            feasibility, energy demand and preliminary system configuration.
          </p>
        </section>

        <section style={styles.technicalSection}>
          <div style={styles.technicalHeader}>
            <p style={styles.sectionLabel}>TECHNICAL PARAMETERS</p>

            <h2 style={styles.sectionTitle}>
              5MW / 11MWh Solar + Storage + Charging Project
            </h2>
          </div>

          <div style={styles.parameterCard}>
            {technicalParameters.map((item, index) => (
              <div key={index} style={styles.parameterRow}>
                <div style={styles.parameterLabel}>{item.label}</div>
                <div style={styles.parameterValue}>{item.value}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.overviewSection}>
          <div style={styles.overviewContent}>
            <p style={styles.sectionLabel}>PROJECT OVERVIEW</p>

            <h2 style={styles.sectionTitle}>
              Clean Power, Energy Storage and EV Charging in One Platform
            </h2>

            <p style={styles.paragraph}>
              The Solar-Storage-Charging Integrated Station is designed as a
              distributed clean energy platform. It combines photovoltaic power
              generation, battery energy storage and EV charging facilities into
              a coordinated system, improving renewable energy utilisation and
              supporting the transition toward low-carbon transport.
            </p>

            {/*<p style={styles.paragraph}>
              During daylight hours, solar power can be used directly for
              charging demand or stored in the battery system. The stored energy
              can then be released during high-demand periods, helping reduce
              grid pressure and improve the flexibility of renewable power
              applications.
            </p>*/}
          </div>

          <div style={styles.overviewImageBox}>
            <img
              src={heroImage}
              alt="Solar storage charging project"
              style={styles.overviewImage}
            />
          </div>
        </section>

        <section style={styles.moduleSection}>
          <p style={styles.sectionLabel}>CORE SYSTEM MODULES</p>

          <h2 style={styles.sectionTitle}>Integrated System Architecture</h2>

          <div style={styles.moduleGrid}>
            {coreModules.map((item, index) => (
              <div key={index} style={styles.moduleCard}>
                <span style={styles.moduleIndex}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 style={styles.moduleTitle}>{item.title}</h3>

                <p style={styles.moduleText}>{item.text}</p>
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