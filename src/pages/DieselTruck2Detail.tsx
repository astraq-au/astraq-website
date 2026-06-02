/**
 * DieselTruck2Detail Page
 * ASTRAQ DPM1 6x4 Diesel Prime Mover — Light Homepage Matched Style
 */
import Footer from "@/components/Footer";

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
    label: "Drive Configuration",
  },
  {
    value: "90T",
    label: "Gross Combination Mass",
  },
  {
    value: "400kW",
    label: "MC13 Diesel Engine",
  },
  {
    value: "12-Speed",
    label: "Automated Transmission",
  },
];

const quickSpecs = [
  {
    label: "Application",
    value: "6×4 Prime Mover",
  },
  {
    label: "Engine",
    value: "MC13.54-61 12.42L Diesel",
  },
  {
    label: "Power",
    value: "400 kW @ 1800 rpm",
  },
  {
    label: "Torque",
    value: "2500 N·m @ 950–1400 rpm",
  },
  {
    label: "Transmission",
    value: "12-Speed AMT",
  },
  {
    label: "Wheelbase",
    value: "3200 + 1400 mm",
  },
  {
    label: "Dimensions",
    value: "7025 × 2490 × 3317 mm",
  },
  {
    label: "Fifth-Wheel Height",
    value: "1260 mm unloaded",
  },
];

const capabilitySpecs = [
  {
    label: "GVM",
    value: "25,000 kg",
  },
  {
    label: "GCM",
    value: "90,000 kg",
  },
  {
    label: "Kerb Weight",
    value: "8,800 kg",
  },
  {
    label: "Fuel Tank",
    value: "700 + 240 L",
  },
  {
    label: "Max Speed",
    value: "100 km/h",
  },
  {
    label: "Gradeability",
    value: "≥34%",
  },
];

const safetyFeatures = [
  "EBS + ESC + HSA",
  "ACC",
  "AEBS",
  "LDW",
  "Reverse Camera",
  "Dual-Circuit Air Brake",
];

export default function DieselTruck2Detail() {
  return (
    <main
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
        {/* Background image */}
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

        {/* Balanced light overlay - keep background image visible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(245,247,250,0.76) 0%, rgba(245,247,250,0.38) 46%, rgba(245,247,250,0.56) 100%)",
          }}
        />

        {/* Bottom fade overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(245,247,250,0.02) 0%, rgba(245,247,250,0.08) 58%, rgba(245,247,250,0.92) 100%)",
          }}
        />

        {/* Header readability overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(6,16,29,0.52) 0%, rgba(6,16,29,0.28) 12%, rgba(6,16,29,0.00) 28%)",
          }}
        />

        {/* Blue highlight */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 72% 42%, rgba(22,113,178,0.16) 0%, rgba(22,113,178,0.06) 30%, transparent 60%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[96vw] 2xl:max-w-[1900px] mx-auto px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28">
          <h1
            style={{
              fontFamily: FONT_FAMILY,
              fontWeight: 600,
              fontSize: "clamp(2.8rem, 5.6vw, 8.6rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.045em",
              textTransform: "uppercase",
              color: COLORS.textMain,
              maxWidth: "none",
              whiteSpace: "nowrap",
              marginTop: "clamp(0.5rem, 1vw, 1rem)",
              marginBottom: "clamp(1.3rem, 2vw, 2.6rem)",
              textShadow: "0 12px 32px rgba(255,255,255,0.45)",
            }}
          >
            DPM1 6×4 Prime Mover
          </h1>

          <p
            style={{
              fontFamily: FONT_FAMILY,
              fontWeight: 600,
              fontSize: "clamp(2.2rem, 4.2vw, 6.2rem)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: COLORS.textMain,
              marginBottom: "clamp(2rem, 3vw, 3.8rem)",
            }}
          >
            Euro 6
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
                letterSpacing: "0.06em",
                textTransform: "uppercase",
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
              View Specification
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
                letterSpacing: "0.06em",
                textTransform: "uppercase",
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
              Buy Now
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
                className="text-center lg:text-left"
                style={{
                  borderRight:
                    index < keyHighlights.length - 1
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
                    fontSize: "clamp(2.6rem, 4vw, 5.8rem)",
                    lineHeight: 1,
                    color: COLORS.textMain,
                    letterSpacing: "-0.045em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.value}
                </div>

                <div
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontWeight: 600,
                    fontSize: "clamp(0.9rem, 0.9vw, 1.18rem)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: COLORS.accent,
                    marginTop: "0.75rem",
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
        style={{
          padding: "clamp(5rem, 7.6vw, 10rem) 0",
          background:
            "linear-gradient(180deg, #F5F7FA 0%, #FFFFFF 52%, #EEF2F6 100%)",
        }}
      >
        <div className="w-full max-w-[92vw] 2xl:max-w-[1760px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px] xl:grid-cols-[minmax(0,1fr)_460px] 2xl:grid-cols-[minmax(0,1fr)_500px] gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 items-stretch">
            {/* Left content: title + image */}
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
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: COLORS.accent,
                    }}
                  >
                    Key Specification
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontWeight: 600,
                    fontSize: "clamp(3rem, 4.8vw, 7rem)",
                    lineHeight: 1.04,
                    letterSpacing: "-0.045em",
                    textTransform: "uppercase",
                    color: COLORS.textMain,
                    margin: 0,
                    maxWidth: "100%",
                  }}
                >
                  Built for Trailer Operation
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

            {/* Right specification card */}
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
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: COLORS.accent,
                        marginBottom: "clamp(0.4rem, 0.5vw, 0.65rem)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {spec.label}
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
                  marginTop: "clamp(1.4rem, 1.8vw, 2.2rem)",
                  width: "100%",
                  height: "clamp(54px, 3.3vw, 70px)",
                  border: `1px solid ${COLORS.accentBorder}`,
                  color: COLORS.textMain,
                  background: "rgba(255,255,255,0.88)",
                  fontFamily: FONT_FAMILY,
                  fontWeight: 600,
                  fontSize: "clamp(0.82rem, 0.86vw, 1.05rem)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
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
                View Specification
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
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: COLORS.accent,
                  }}
                >
                  Prime Mover Capability
                </span>
              </div>

              <h2
                style={{
                  fontFamily: FONT_FAMILY,
                  fontWeight: 600,
                  fontSize: "clamp(3rem, 4.8vw, 7rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.045em",
                  textTransform: "uppercase",
                  color: COLORS.textMain,
                  maxWidth: "clamp(520px, 48vw, 820px)",
                  whiteSpace: "normal",
                }}
              >
                Long-Haul Ready Platform
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
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: COLORS.accent,
                      marginBottom: "0.6rem",
                    }}
                  >
                    {spec.label}
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
                    {spec.value}
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
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: COLORS.accent,
                  }}
                >
                  Safety Systems
                </span>
              </div>

              <h2
                style={{
                  fontFamily: FONT_FAMILY,
                  fontWeight: 600,
                  fontSize: "clamp(3rem, 4.8vw, 7rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.045em",
                  textTransform: "uppercase",
                  color: COLORS.textMain,
                  maxWidth: "clamp(520px, 48vw, 820px)",
                  whiteSpace: "normal",
                }}
              >
                Ready for Modern Fleets
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 2xl:gap-x-6 gap-y-5 2xl:gap-y-6">
              {safetyFeatures.map((feature) => (
                <div
                  key={feature}
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
                      letterSpacing: "0.06em",
                      color: COLORS.textMain,
                    }}
                  >
                    {feature}
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