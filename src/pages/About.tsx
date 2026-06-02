import { useState } from "react";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const ACCENT_COLOR = "#C9A46A";
const HERO_BG = "/images/about/about-bg.png";
const GLOBAL_PLAN_IMG = "/images/about/global-plan.png";

const milestones = [
  {
    year: "2025",
    title: "Prototype Development",
    text: "Complete diesel platform preparation, ADR pathway review and initial market validation. This stage focuses on building the foundation for Australian market entry.",
  },
  {
    year: "2026",
    title: "Australia Launch",
    text: "Introduce the first diesel heavy truck platform in Australia and establish local service readiness, dealer communication and fleet customer engagement.",
  },
  {
    year: "2027",
    title: "Dealer Network Expansion",
    text: "Expand across key Australian states through channel partners, local fleet customers and after-sales service capability.",
  },
  {
    year: "2028+",
    title: "Global Expansion",
    text: "Extend the Australian-validated model into Southeast Asia, the Middle East and the Americas, supported by manufacturing resources and local market partnerships.",
  },
];

const teamMembers = [
  {
    name: "Lawrence Lee",
    role: "CEO",
    image: "/images/about/Lawrence.png",
  },
  {
    name: "Wei Zhang",
    role: "CTO",
    image: "/images/about/Wei.png",
  },
  {
    name: "Daniel Ferreira",
    role: "COO",
    image: "/images/about/Daniel.png",
  },
  {
    name: "Matthew Israel",
    role: "CMO",
    image: "/images/about/Mattew.png",
  },
  {
    name: "Ming Ng",
    role: "CFO",
    image: "/images/about/Ming.png",
  },
];

export default function About() {
  const [activeYear, setActiveYear] = useState(milestones[0].year);
  const activeMilestone =
    milestones.find((item) => item.year === activeYear) || milestones[0];

  return (
    <main
      className="min-h-screen overflow-hidden text-white"
      style={{
        background: "#233032",
      }}
    >
      {/* Hero */}
      <section
        className="relative flex min-h-screen items-center overflow-hidden"
        style={{
          paddingTop: "clamp(7rem, 9vw, 11rem)",
          paddingBottom: "clamp(5rem, 8vw, 9rem)",
          background: "#1D292B",
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${HERO_BG})`,
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(10,18,20,0.74) 0%, rgba(18,28,30,0.48) 45%, rgba(18,28,30,0.12) 100%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.04) 0%, rgba(22,31,33,0.12) 58%, #233032 100%)",
          }}
        />

        <div className="relative z-10 w-full max-w-none px-6 sm:px-10 lg:px-24 xl:px-32 2xl:px-40">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.26em] text-[#C9A46A] no-underline transition hover:text-white sm:text-base lg:text-lg"
          >
            ← Back to Home
          </Link>

          <h1 className="max-w-[1100px] text-[clamp(3.2rem,5.6vw,7.2rem)] font-semibold leading-[0.98] tracking-tight text-white">
            Engineering Heavy Mobility for World
          </h1>
        </div>
      </section>

      {/* Global Expansion */}
      <section
        style={{
          padding: "clamp(4.5rem, 7vw, 8rem) 0",
          background:
            "linear-gradient(180deg, #233032 0%, #1F2A2D 48%, #192326 100%)",
        }}
      >
        <div className="w-full max-w-none px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24">
          <div className="mb-[clamp(2rem,3vw,3.6rem)]">
            <div className="mb-4 flex items-center gap-4">
              <span
                className="block h-px"
                style={{
                  width: "clamp(32px, 3vw, 56px)",
                  background: ACCENT_COLOR,
                }}
              />

              <span className="text-[clamp(2.3rem,3.7vw,5rem)] font-semibold uppercase leading-none tracking-tight text-[#C9A46A]">
                Global Expansion
              </span>
            </div>

            <h2 className="max-w-[1200px] text-[clamp(1.5rem,2vw,2.7rem)] font-light uppercase leading-tight tracking-wide text-white/90">
              Australia · Southeast Asia · Middle East · Americas
            </h2>
          </div>

          <div className="relative w-full overflow-hidden bg-transparent">
            <img
              src={GLOBAL_PLAN_IMG}
              alt="ASTRAQ global expansion map"
              className="block h-auto w-full object-contain object-center"
              style={{
                opacity: 0.9,
                mixBlendMode: "screen",
                filter: "saturate(0.9) contrast(0.98)",
              }}
            />

            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(31,42,45,0) 34%, rgba(25,35,38,0.5) 100%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Company Journey */}
      <section
        style={{
          padding: "clamp(5rem, 8vw, 9rem) 0",
          background:
            "linear-gradient(180deg, #192326 0%, #EDF0F0 18%, #F5F6F4 100%)",
          color: "#101820",
        }}
      >
        <div className="mx-auto w-full max-w-[1760px] px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24">
          <div className="mb-[clamp(2.8rem,4vw,4.8rem)] text-center">
            <h2 className="mb-4 text-[clamp(2.8rem,4.8vw,6rem)] font-semibold uppercase leading-[1.02] tracking-tight text-[#142426]">
              ASTRAQ Milestones
            </h2>
          </div>

          <div className="mb-[clamp(1.8rem,3vw,3rem)] flex flex-wrap justify-center gap-[clamp(2rem,6vw,8rem)] border-b border-[rgba(20,36,38,0.14)]">
            {milestones.map((item) => {
              const isActive = item.year === activeYear;

              return (
                <button
                  key={item.year}
                  type="button"
                  onClick={() => setActiveYear(item.year)}
                  className="relative border-none bg-transparent pb-[clamp(1rem,1.2vw,1.35rem)] text-[clamp(1.6rem,2.1vw,2.8rem)] font-semibold tracking-tight transition"
                  style={{
                    cursor: "pointer",
                    color: isActive ? "#0D4B8D" : "#101820",
                  }}
                >
                  {item.year}

                  <span
                    className="absolute bottom-[-1px] left-0 right-0 h-[2px] transition"
                    style={{
                      background: isActive ? "#0D4B8D" : "transparent",
                    }}
                  />
                </button>
              );
            })}
          </div>

          <div
            className="mx-auto max-w-[1400px]"
            style={{
              minHeight: "clamp(170px, 13vw, 240px)",
            }}
          >
            <div className="mb-3 text-[clamp(1.6rem,2.2vw,3rem)] font-semibold uppercase leading-tight tracking-tight text-[#142426]">
              {activeMilestone.title}
            </div>

            <p className="m-0 text-[clamp(1.25rem,1.55vw,2rem)] font-light leading-relaxed tracking-normal text-[rgba(16,24,32,0.82)]">
              {activeMilestone.text}
            </p>
          </div>
        </div>
      </section>

      {/* Company Vision */}
      <section
        style={{
          padding: "clamp(5rem, 8vw, 9rem) 0",
          background:
            "linear-gradient(180deg, #F5F6F4 0%, #E9ECEA 12%, #233032 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-[1760px] px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24">
          <div className="mx-auto max-w-[1800px]">
            <div className="mb-8 flex items-center gap-4">
              <span
                className="block h-px"
                style={{
                  width: "clamp(32px, 3vw, 56px)",
                  background: ACCENT_COLOR,
                }}
              />

              <span className="text-[clamp(2.5rem,3.8vw,5rem)] font-semibold uppercase leading-none tracking-tight text-[#C9A46A]">
                Company Vision
              </span>
            </div>

            <h2 className="max-w-[1800px] text-[clamp(2.1rem,3.3vw,4.8rem)] font-semibold uppercase leading-[1.05] tracking-tight text-white">
              Built from Australia, Connected to Global Manufacturing.
            </h2>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section
        style={{
          padding: "clamp(5rem, 7vw, 8rem) 0",
          background:
            "linear-gradient(180deg, #233032 0%, #1F2A2D 55%, #192326 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-[1760px] px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24">
          <div className="mb-10 flex items-center gap-4">
            <span
              className="block h-px"
              style={{
                width: "clamp(32px, 3vw, 56px)",
                background: ACCENT_COLOR,
              }}
            />

            <span className="text-[clamp(2.5rem,3.8vw,5rem)] font-semibold uppercase leading-none tracking-tight text-[#C9A46A]">
              Core Team
            </span>
          </div>

          <h2 className="mb-[clamp(3rem,4vw,5rem)] max-w-[1250px] text-[clamp(2.1rem,3.3vw,4.8rem)] font-semibold uppercase leading-[1.05] tracking-tight text-white">
            Built by industry experience. Driven by execution.
          </h2>
        </div>

        <div className="w-full max-w-none px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:grid-cols-5 xl:gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="relative overflow-hidden bg-transparent shadow-2xl"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="block h-auto w-full object-contain object-center"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}