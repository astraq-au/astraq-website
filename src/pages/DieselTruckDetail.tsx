/**
 * DieselTruckDetail Page
 * ASTRAQ Diesel Mixer Truck — Light Homepage Matched Style
 */
import Footer from "@/components/Footer";

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
    label: "Drive Configuration",
  },
  {
    value: "35T",
    label: "Certified GVM",
  },
  {
    value: "265 KW",
    label: "Cummins Engine",
  },
  {
    value: "12-Speed",
    label: "Automated Transmission",
  },
];

const quickSpecs = [
  {
    label: "Application",
    value: "Concrete Mixer Cab & Chassis",
  },
  {
    label: "Engine",
    value: "Cummins X11EVIE360",
  },
  {
    label: "Power",
    value: "265 kW @ 1900 rpm",
  },
  {
    label: "Torque",
    value: "1800 N·m @ 1000–1400 rpm",
  },
  {
    label: "Gearbox",
    value: "AMT 12-speed",
  },
  {
    label: "Wheelbase",
    value: "1800 + 3000 + 1350 mm",
  },
  {
    label: "Dimensions",
    value: "8615 × 2518 × 3120 mm",
  },
  {
    label: "Cabin",
    value: "Short sleeper cab",
  },
];

const safetyFeatures = [
  "EBS + ESC",
  "AEBS",
  "LDWS",
  "FCWS",
  "Reverse Camera",
  "Blind Spot Monitoring",
];

export default function DieselTruckDetail() {
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
              "linear-gradient(90deg, rgba(245,247,250,0.78) 0%, rgba(245,247,250,0.42) 46%, rgba(245,247,250,0.58) 100%)",
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
              "radial-gradient(ellipse at 72% 42%, rgba(22,119,168,0.16) 0%, rgba(22,119,168,0.06) 30%, transparent 60%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[96vw] 2xl:max-w-[1900px] mx-auto px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28">
          <h1
            style={{
              fontFamily: FONT_FAMILY,
              fontWeight: 600,
              fontSize: "clamp(3.8rem, 7.2vw, 10.5rem)",
              lineHeight: 1,
              letterSpacing: "-0.055em",
              textTransform: "uppercase",
              color: COLORS.textMain,
              maxWidth: "clamp(780px, 58vw, 1280px)",
              marginTop: "clamp(0.5rem, 1vw, 1rem)",
              marginBottom: "clamp(1.3rem, 2vw, 2.6rem)",
              textShadow: "0 12px 32px rgba(255,255,255,0.45)",
            }}
          >
            DM1 8×4 Mixer
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
                boxShadow: "0 18px 48px rgba(22,119,168,0.24)",
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
        <div className="w-full max-w-[96vw] 2xl:max-w-[1900px] mx-auto px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_1.42fr] gap-10 lg:gap-14 xl:gap-18 2xl:gap-20 items-stretch">
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
                  Key Specification
                </span>
              </div>

              <h2
                style={{
                  fontFamily: FONT_FAMILY,
                  fontWeight: 600,
                  fontSize: "clamp(2.9rem, 4.8vw, 7rem)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.045em",
                  textTransform: "uppercase",
                  color: COLORS.textMain,
                  marginBottom: "clamp(2.2rem, 3.2vw, 4rem)",
                  maxWidth: "none",
                  whiteSpace: "normal",
                }}
              >
                <span className="inline xl:whitespace-nowrap">
                  Built for Mixer Duty
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
                padding: "clamp(2.2rem, 3.4vw, 4.6rem)",
                height: "100%",
                minHeight: "clamp(580px, 38vw, 820px)",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 28px 80px rgba(15,23,42,0.10)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 2xl:gap-x-16"
                style={{
                  flex: 1,
                  alignContent: "space-between",
                  rowGap: "clamp(2rem, 2.5vw, 3.4rem)",
                }}
              >
                {quickSpecs.map((spec) => (
                  <div
                    key={spec.label}
                    style={{
                      borderBottom: `1px solid ${COLORS.borderSoft}`,
                      paddingBottom: "clamp(1.1rem, 1.3vw, 1.7rem)",
                      minHeight: "clamp(94px, 5.4vw, 132px)",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: FONT_FAMILY,
                        fontWeight: 600,
                        fontSize: "clamp(0.95rem, 0.95vw, 1.22rem)",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: COLORS.accent,
                        marginBottom: "clamp(0.5rem, 0.65vw, 0.9rem)",
                      }}
                    >
                      {spec.label}
                    </div>

                    <div
                      style={{
                        fontFamily: FONT_FAMILY,
                        fontWeight: 400,
                        fontSize: "clamp(1.25rem, 1.22vw, 1.65rem)",
                        lineHeight: 1.4,
                        color: COLORS.textMain,
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
                className="inline-flex items-center justify-center mt-12"
                style={{
                  width: "clamp(230px, 14vw, 310px)",
                  height: "clamp(60px, 3.9vw, 78px)",
                  border: `1px solid ${COLORS.accentBorder}`,
                  color: COLORS.textMain,
                  background: "rgba(255,255,255,0.88)",
                  fontFamily: FONT_FAMILY,
                  fontWeight: 600,
                  fontSize: "clamp(0.9rem, 0.9vw, 1.12rem)",
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

      {/* Safety */}
      <section
        style={{
          padding: "clamp(4.2rem, 6.6vw, 8.5rem) 0",
          background: "linear-gradient(180deg, #FFFFFF 0%, #EEF2F6 100%)",
          borderTop: `1px solid ${COLORS.borderSoft}`,
        }}
      >
        <div className="w-full max-w-[96vw] 2xl:max-w-[1900px] mx-auto px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28">
          <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-10 lg:gap-16 2xl:gap-20 items-center">
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
                  fontSize: "clamp(2.7rem, 4vw, 5.9rem)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.045em",
                  textTransform: "uppercase",
                  color: COLORS.textMain,
                  maxWidth: "none",
                  whiteSpace: "normal",
                }}
              >
                <span className="inline 2xl:whitespace-nowrap">
                  Ready for Modern Fleets
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 2xl:gap-x-10 gap-y-6 2xl:gap-y-8">
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
                      letterSpacing: "0.04em",
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