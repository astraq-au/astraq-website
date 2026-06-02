/**
 * ASTRAQ Products Section — XPeng-style product selector
 * - Model tabs at the top
 * - Large centered product image
 * - Learn More / Buy Now buttons
 * - Solar charging station section redesigned with 2/3 image + 1/3 compact key cards
 * - Brand About banner
 */

import { useEffect, useRef, useState } from "react";

const FONT_FAMILY =
  "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

const ACCENT_COLOR = "#C9A46A";
const SECTION_BG = "#3F3432";
const LIGHT_BG = "#FFFFFF";

const PRODUCTS_HEADER_BG =
  "linear-gradient(to bottom, #0B0D0F 0%, #1B2024 28%, #EDEBE7 100%)";

const truckModels = [
  {
    name: "DM1",
    shortName: "Diesel Mixer",
    image: "/diesel1.png",
    learnLink: "/products/diesel-truck",
    buyLink: "/store",
    imageScale: 1.3,
  },
  {
    name: "DPM1",
    shortName: "Diesel Prime Mover",
    image: "/diesel2.png",
    learnLink: "/products/diesel-truck-2",
    buyLink: "/store",
    imageScale: 0.95,
  },
  {
    name: "EPM1",
    shortName: "Electric Prime Mover",
    image: "/electric1.png",
    learnLink: "/products/electric-truck",
    buyLink: "/store",
    imageScale: 0.95,
  },
  {
    name: "EL1",
    shortName: "Electric Light Truck",
    image: "/electric2.png",
    learnLink: "/products/electric-truck-2",
    buyLink: "/store",
    imageScale: 1.2,
  },
];

const solarStation = {
  name: "Clean Energy Infrastructure",
  image: "/Solar-Charging-Station.png",
  learnLink: "/products/solar-charging-station",
};

const solarCards = [
  {
    metric: "5MW",
    label: "Solar Generation Capacity",
  },
  {
    metric: "11MWh",
    label: "Battery Storage Capacity",
  },
  {
    metric: "20Y",
    label: "Design Life",
  },
  {
    metric: "PV + BESS",
    label: "Integrated Energy System",
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

function ProductSelector() {
  const { ref, inView } = useInView(0.15);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeModel = truckModels[activeIndex];

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
        {/* Model tabs */}
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
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      lineHeight: 1.1,
                    }}
                  >
                    {model.shortName}
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

        {/* Large truck image */}
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

        {/* Name + buttons */}
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
                letterSpacing: "0.06em",
                textTransform: "uppercase",
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
              Learn More
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
                letterSpacing: "0.06em",
                textTransform: "uppercase",
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
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function SolarStationSection() {
  const { ref, inView } = useInView(0.15);

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
        {/* Heading */}
        <div className="text-center">
          <h3
            style={{
              fontFamily: FONT_FAMILY,
              fontWeight: 600,
              fontSize: "clamp(2.1rem, 3.2vw, 4.8rem)",
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              color: "rgba(0,0,0,0.88)",
              marginBottom: "clamp(0.8rem, 1.2vw, 1.5rem)",
            }}
          >
            {solarStation.name}
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
            Integrated solar generation, battery storage, and charging services
            for commercial transport.
          </p>
        </div>

        {/* 2/3 image + 1/3 information cards */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-[clamp(1rem,1.4vw,1.6rem)]">
          {/* Left large image */}
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
                  letterSpacing: "-0.04em",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  lineHeight: 1.15,
                  maxWidth: "760px",
                }}
              >
                Solar-Storage-Charging Integrated Station
              </div>
            </div>
          </a>

          {/* Right compact cards */}
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-[clamp(1rem,1.2vw,1.4rem)]">
            {solarCards.map((card) => {
              return (
                <a
                  key={card.metric}
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
                        fontSize: "clamp(2.2rem, 2.8vw, 4.2rem)",
                        letterSpacing: "-0.045em",
                        textTransform: "uppercase",
                        color: "rgba(0,0,0,0.84)",
                        lineHeight: 1,
                      }}
                    >
                      {card.metric}
                    </div>

                    <div
                      style={{
                        fontFamily: FONT_FAMILY,
                        fontWeight: 600,
                        fontSize: "clamp(0.95rem, 1vw, 1.28rem)",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        color: ACCENT_COLOR,
                        lineHeight: 1.35,
                      }}
                    >
                      {card.label}
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
              letterSpacing: "0.06em",
              textTransform: "uppercase",
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
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

function BrandAboutBanner() {
  const { ref, inView } = useInView(0.15);

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
          className="relative w-full overflow-hidden group"
          style={{
            borderRadius: "0",
            border: "none",
          }}
        >
          <img
            src={BRAND_BANNER}
            alt="ASTRAQ founded in Australia"
            className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.01]"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />

          <a
            href="/about"
            className="absolute inline-flex items-center justify-center"
            style={{
              left: "50%",
              bottom: "clamp(1.2rem, 3vw, 3.5rem)",
              transform: "translateX(-50%)",
              width: "clamp(150px, 10vw, 210px)",
              height: "clamp(46px, 3vw, 60px)",
              border: "1px solid rgba(255,255,255,0.72)",
              borderRadius: "4px",
              color: "rgba(255,255,255,0.94)",
              background: "rgba(0,0,0,0.18)",
              backdropFilter: "blur(8px)",
              fontFamily: FONT_FAMILY,
              fontWeight: 600,
              fontSize: "clamp(0.8rem, 0.85vw, 1rem)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.18)";
              e.currentTarget.style.borderColor = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(0,0,0,0.18)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.72)";
            }}
          >
            About Us
          </a>
        </div>
      </div>
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
      {/* Section header */}
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
        ></div>
      </div>

      <ProductSelector />
      <SolarStationSection />
      <BrandAboutBanner />
    </section>
  );
}