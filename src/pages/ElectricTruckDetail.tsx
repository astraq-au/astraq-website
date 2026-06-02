/**
 * ElectricTruckDetail Page
 * ASTRAQ EPM1 6x4 Battery-Electric Prime Mover
 * Futuristic EV-focused product page
 */
import Footer from "@/components/Footer";

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
    label: "Drive Configuration",
  },
  {
    value: "60T",
    label: "Gross Combination Mass",
  },
  {
    value: "420km",
    label: "Driving Range",
  },
  {
    value: "600kWh",
    label: "Battery Size",
  },
];

const quickSpecs = [
  {
    label: "Vehicle Type",
    value: "6×4 BEV Prime Mover",
  },
  {
    label: "Battery",
    value: "500–600 kWh LFP",
  },
  {
    label: "Range",
    value: ">400 km line-haul",
  },
  {
    label: "Platform",
    value: "800 V high-voltage",
  },
  {
    label: "Motor",
    value: "Dual-motor electric drive",
  },
  {
    label: "GCM",
    value: "Up to 60,000 kg",
  },
  {
    label: "Wheelbase",
    value: "4550 + 1350 mm",
  },
  {
    label: "Charging",
    value: "Fast charge + battery swap",
  },
];

const powertrainSpecs = [
  {
    label: "Rated / Peak Power",
    value: "2 × 138 kW / 2 × 290 kW",
  },
  {
    label: "Rated / Peak Torque",
    value: "2 × 300 N·m / 2 × 820 N·m",
  },
  {
    label: "Drive System",
    value: "Direct electric drive with regenerative braking",
  },
  {
    label: "Battery Layout",
    value: "Underfloor battery system with protection frame",
  },
];

const capabilitySpecs = [
  {
    label: "Kerb Weight",
    value: "10,900 kg",
  },
  {
    label: "GCM",
    value: "60,000 kg",
  },
  {
    label: "Battery",
    value: "500–600 kWh",
  },
  {
    label: "Range",
    value: ">400 km",
  },
  {
    label: "Gradeability",
    value: "≥20%",
  },
  {
    label: "Tyres",
    value: "12R22.5",
  },
];

const techSafetyFeatures = [
  {
    title: "AEB",
    desc: "Autonomous emergency braking",
  },
  {
    title: "LDW / LDWS",
    desc: "Lane departure warning system",
  },
  {
    title: "FCW",
    desc: "Forward collision warning",
  },
  {
    title: "EBS + ESC",
    desc: "Electronic braking and stability control",
  },
  {
    title: "L2+ Ready",
    desc: "Upgradeable driver-assistance architecture",
  },
  {
    title: "V2X Ready",
    desc: "Upgradable connected electrical platform",
  },
  {
    title: "LiDAR Ready",
    desc: "Sensor layout prepared for advanced perception",
  },
  {
    title: "By-Wire Chassis",
    desc: "Brake-by-wire, steer-by-wire and drive-by-wire",
  },
];

export default function ElectricTruckDetail() {
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
        {/* Background image */}
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

        {/* Balanced tech overlay - keep truck visible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(5,12,24,0.74) 0%, rgba(5,12,24,0.26) 46%, rgba(5,12,24,0.38) 100%)",
          }}
        />

        {/* Header readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.30) 14%, transparent 34%)",
          }}
        />

        {/* Futuristic blue light */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 72% 48%, rgba(0,174,239,0.22) 0%, rgba(0,174,239,0.07) 28%, transparent 62%)",
          }}
        />

        {/* Bottom continuity fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, transparent 62%, rgba(7,19,34,0.36) 84%, rgba(7,19,34,0.92) 100%)",
          }}
        />

        {/* Electric grid lines */}
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

        {/* Content */}
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
                letterSpacing: "0.08em",
                textTransform: "uppercase",
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
              Battery-Electric Prime Mover
            </div>

            <h1
              style={{
                fontFamily: FONT_FAMILY,
                fontWeight: 600,
                fontSize: "clamp(3rem, 5.4vw, 8.6rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.055em",
                textTransform: "uppercase",
                color: COLORS.textMain,
                marginTop: 0,
                marginBottom: "clamp(1.4rem, 2vw, 2.8rem)",
                textShadow: "0 18px 52px rgba(0,0,0,0.60)",
              }}
            >
              EPM1 6×4 Electric Prime Mover
            </h1>

            <p
              style={{
                fontFamily: FONT_FAMILY,
                fontWeight: 600,
                fontSize: "clamp(1.8rem, 3.1vw, 4.8rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.025em",
                textTransform: "uppercase",
                color: COLORS.textSoft,
                marginBottom: "clamp(2rem, 3vw, 3.8rem)",
                textShadow: "0 14px 38px rgba(0,0,0,0.45)",
              }}
            >
              Zero Emission · Smart Energy · Line-Haul Ready
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
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
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
                View Specification
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
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
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
                Buy Now
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
                    fontSize: "clamp(2.5rem, 4.2vw, 6rem)",
                    lineHeight: 1,
                    color: COLORS.textMain,
                    letterSpacing: "-0.045em",
                    whiteSpace: "nowrap",
                    textShadow: "0 0 26px rgba(0,174,239,0.24)",
                  }}
                >
                  {item.value}
                </div>

                <div
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontWeight: 600,
                    fontSize: "clamp(0.85rem, 0.9vw, 1.16rem)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: COLORS.accentLight,
                    marginTop: "0.85rem",
                  }}
                >
                  {item.label}
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
            {/* Left image feature */}
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
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: COLORS.accentLight,
                    }}
                  >
                    Energy Architecture
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontWeight: 600,
                    fontSize: "clamp(2.5rem, 3.8vw, 5.6rem)",
                    lineHeight: 1.04,
                    letterSpacing: "-0.045em",
                    textTransform: "uppercase",
                    color: COLORS.textMain,
                    margin: 0,
                    maxWidth: "clamp(680px, 55vw, 1080px)",
                  }}
                >
                  Built Around an 800V Electric Platform
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

            {/* Right spec matrix */}
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
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: COLORS.accentLight,
                        marginBottom: "clamp(0.45rem, 0.5vw, 0.65rem)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {spec.label}
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
                      {spec.value}
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
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
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
                View Specification
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
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: COLORS.accentLight,
                  }}
                >
                  Electric Powertrain
                </span>
              </div>

              <h2
                style={{
                  fontFamily: FONT_FAMILY,
                  fontWeight: 600,
                  fontSize: "clamp(2.5rem, 3.6vw, 5.4rem)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.045em",
                  textTransform: "uppercase",
                  color: COLORS.textMain,
                  marginBottom: "clamp(1.6rem, 2vw, 2.6rem)",
                }}
              >
                Fast-Charge and Battery-Swap Ready
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
                Designed around a high-voltage electric platform, dual-motor
                drive, regenerative braking and a battery-swap compatible
                operating model for future heavy-duty line-haul applications.
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
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: COLORS.accentLight,
                        marginBottom: "0.55rem",
                      }}
                    >
                      {spec.label}
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
                      {spec.value}
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
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color:
                          index % 2 === 0 ? COLORS.accentLight : "#A9B3FF",
                        marginBottom: "0.45rem",
                      }}
                    >
                      {spec.label}
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
                      {spec.value}
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
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: COLORS.accentLight,
                }}
              >
                Safety, Intelligence & Comfort
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
                fontSize: "clamp(2.4rem, 3.3vw, 4.8rem)",
                lineHeight: 1.04,
                letterSpacing: "-0.045em",
                textTransform: "uppercase",
                color: COLORS.textMain,
                margin: 0,
              }}
            >
              Electric-Ready Intelligent Platform
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
                    letterSpacing: "-0.02em",
                    textTransform: "uppercase",
                    color: COLORS.textMain,
                    marginBottom: "0.55rem",
                  }}
                >
                  {feature.title}
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
                  {feature.desc}
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