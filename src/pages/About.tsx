import { useState } from "react";
import Footer from "../components/Footer";
import { Link } from "wouter";
import { useLanguage } from "../i18n/LanguageContext";

const ACCENT_COLOR = "#C9A46A";
const HERO_BG = "/images/about/about-bg.png";
const GLOBAL_PLAN_IMG = "/images/about/global-plan.png";

const milestones = [
  {
    year: "2025",
    title: "Prototype Development",
    zhTitle: "样车开发",
    text: "Complete diesel platform preparation, ADR pathway review and initial market validation. This stage focuses on building the foundation for Australian market entry.",
    zhText:
      "完成柴油重卡平台准备、ADR 认证路径梳理和初步市场验证。本阶段重点是为进入澳大利亚市场打好产品、合规和商业基础。",
  },
  {
    year: "2026",
    title: "Australia Launch & Energy Project Discussion",
    zhTitle: "澳洲启动与能源项目沟通",
    text: "Introduce the first diesel heavy truck platform in Australia and establish local service readiness, dealer communication and fleet customer engagement. In parallel, begin early discussions for solar-storage-charging integrated station opportunities to support future electric heavy transport.",
    zhText:
      "在澳大利亚导入首款柴油重卡平台，并逐步建立本地服务准备、经销商沟通和车队客户对接能力。同时，启动光储充一体化站项目的前期沟通，为未来电动重卡的能源补给能力做准备。",
  },
  {
    year: "2027",
    title: "Dealer Network Expansion & Site Selection",
    zhTitle: "渠道拓展与选址启动",
    text: "Expand across key Australian states through channel partners, local fleet customers and after-sales service capability. For the clean energy infrastructure project, begin site selection, commercial scenario assessment and preliminary technical planning.",
    zhText:
      "通过渠道合作伙伴、本地车队客户和售后服务能力建设，逐步覆盖澳大利亚主要州和重点运输市场。光储充项目同步进入选址、商业场景评估和初步技术方案规划阶段。",
  },
  {
    year: "2028",
    title: "Global Expansion & Electric Platform Validation",
    zhTitle: "全球拓展与电动平台验证",
    text: "Extend the Australian-validated diesel truck model into selected overseas markets, including Southeast Asia, the Middle East and the Americas. Diesel platforms will lead the first stage of global expansion, while electric truck platforms continue validation in suitable Australian operating scenarios.",
    zhText:
      "将经过澳大利亚市场验证的柴油重卡产品和运营模式拓展至东南亚、中东和美洲等海外市场。全球化布局将以柴油平台先行，电动平台则在适合的澳洲运营场景中继续验证。",
  },
  {
    year: "2029",
    title: "Energy Infrastructure Demonstration",
    zhTitle: "能源基础设施示范",
    text: "Develop the first demonstration model for solar-storage-charging infrastructure, connecting renewable energy generation, battery storage and heavy vehicle charging. This stage supports the transition from product sales to an integrated transport and energy solution.",
    zhText:
      "推进首个光储充基础设施示范项目，将太阳能发电、电池储能和重型车辆充电能力连接起来。本阶段将支持 ASTRAQ 从单一产品销售，逐步走向运输与能源一体化解决方案。",
  },
  {
    year: "2030",
    title: "Integrated Global Mobility Platform",
    zhTitle: "全球化综合运输平台",
    text: "Build a complete global growth model with diesel trucks leading market entry, electric trucks following operational readiness, and clean energy infrastructure supporting long-term transition. ASTRAQ aims to become an integrated platform connecting heavy transport, clean energy and intelligent technology.",
    zhText:
      "形成以柴油重卡先行进入市场、电动重卡逐步跟进、清洁能源基础设施提供长期支撑的全球化发展模式。ASTRAQ 将逐步发展为连接重型运输、清洁能源和智能技术的综合平台。",
  },
];

const teamMembers = [
  {
    name: "Lawrence Lee",
    role: "CEO",
    image: "/images/about/Lawrence.png",
    imageCn: "/images/about/Lawrence-cn.png",
  },
  {
    name: "Wei Zhang",
    role: "CTO",
    image: "/images/about/Wei.png",
    imageCn: "/images/about/Wei-cn.png",
  },
  {
    name: "Daniel Ferreira",
    role: "COO",
    image: "/images/about/Daniel.png",
    imageCn: "/images/about/Daniel-cn.png",
  },
  {
    name: "Matthew Israel",
    role: "CMO",
    image: "/images/about/Matthew.png",
    imageCn: "/images/about/Matthew-cn.png",
  },
  {
    name: "Ming Ng",
    role: "CFO",
    image: "/images/about/Ming.png",
    imageCn: "/images/about/Ming-cn.png",
  },
];

export default function About() {
  const { language } = useLanguage();

  const [activeYear, setActiveYear] = useState(milestones[0].year);
  const activeMilestone =
    milestones.find((item) => item.year === activeYear) || milestones[0];

  const getLabel = (en: string, zh: string) => {
    return language === "zh" ? zh : en;
  };

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
            style={{
              letterSpacing: language === "zh" ? "0.12em" : "0.26em",
              textTransform: language === "zh" ? "none" : "uppercase",
            }}
          >
            ← {getLabel("Back to Home", "返回首页")}
          </Link>

          <h1
            className="max-w-[1100px] font-semibold leading-[0.98] tracking-tight text-white"
            style={{
              fontSize:
                language === "zh"
                  ? "clamp(3.1rem,5.1vw,6.6rem)"
                  : "clamp(3.2rem,5.6vw,7.2rem)",
              textTransform: language === "zh" ? "none" : "none",
              letterSpacing: language === "zh" ? "-0.04em" : "-0.025em",
            }}
          >
            {getLabel(
              "Engineering Heavy Mobility for World",
              "为全球重型运输打造工程化解决方案"
            )}
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

              <span
                className="font-semibold leading-none tracking-tight text-[#C9A46A]"
                style={{
                  fontSize: "clamp(2.3rem,3.7vw,5rem)",
                  textTransform: language === "zh" ? "none" : "uppercase",
                  letterSpacing: language === "zh" ? "-0.03em" : "-0.025em",
                }}
              >
                {getLabel("Global Expansion", "全球拓展")}
              </span>
            </div>

            <h2
              className="max-w-[1200px] font-light leading-tight tracking-wide text-white/90"
              style={{
                fontSize: "clamp(1.5rem,2vw,2.7rem)",
                textTransform: language === "zh" ? "none" : "uppercase",
                letterSpacing: language === "zh" ? "0.02em" : "0.04em",
              }}
            >
              {getLabel(
                "Australia · Southeast Asia · Middle East · Americas",
                "澳大利亚 · 东南亚 · 中东 · 美洲"
              )}
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
            <h2
              className="mb-4 font-semibold leading-[1.02] tracking-tight text-[#142426]"
              style={{
                fontSize: "clamp(2.8rem,4.8vw,6rem)",
                textTransform: language === "zh" ? "none" : "uppercase",
                letterSpacing: language === "zh" ? "-0.04em" : "-0.03em",
              }}
            >
              {getLabel("ASTRAQ Milestones", "ASTRAQ 发展里程碑")}
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
            <div
              className="mb-3 font-semibold leading-tight tracking-tight text-[#142426]"
              style={{
                fontSize: "clamp(1.6rem,2.2vw,3rem)",
                textTransform: language === "zh" ? "none" : "uppercase",
                letterSpacing: language === "zh" ? "-0.02em" : "-0.025em",
              }}
            >
              {getLabel(activeMilestone.title, activeMilestone.zhTitle)}
            </div>

            <p
              className="m-0 font-light leading-relaxed tracking-normal text-[rgba(16,24,32,0.82)]"
              style={{
                fontSize: "clamp(1.25rem,1.55vw,2rem)",
              }}
            >
              {getLabel(activeMilestone.text, activeMilestone.zhText)}
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

              <span
                className="font-semibold leading-none tracking-tight text-[#C9A46A]"
                style={{
                  fontSize: "clamp(2.5rem,3.8vw,5rem)",
                  textTransform: language === "zh" ? "none" : "uppercase",
                  letterSpacing: language === "zh" ? "-0.03em" : "-0.025em",
                }}
              >
                {getLabel("Company Vision", "公司愿景")}
              </span>
            </div>

            <h2
              className="max-w-[1800px] font-semibold leading-[1.05] tracking-tight text-white"
              style={{
                fontSize: "clamp(2.1rem,3.3vw,4.8rem)",
                textTransform: language === "zh" ? "none" : "uppercase",
                letterSpacing: language === "zh" ? "-0.04em" : "-0.03em",
              }}
            >
              {getLabel(
                "Built from Australia, Connected to Global Manufacturing.",
                "立足澳大利亚，连接全球制造能力。"
              )}
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

            <span
              className="font-semibold leading-none tracking-tight text-[#C9A46A]"
              style={{
                fontSize: "clamp(2.5rem,3.8vw,5rem)",
                textTransform: language === "zh" ? "none" : "uppercase",
                letterSpacing: language === "zh" ? "-0.03em" : "-0.025em",
              }}
            >
              {getLabel("Core Team", "核心团队")}
            </span>
          </div>

          <h2
            className="mb-[clamp(3rem,4vw,5rem)] max-w-[1250px] font-semibold leading-[1.05] tracking-tight text-white"
            style={{
              fontSize: "clamp(2.1rem,3.3vw,4.8rem)",
              textTransform: language === "zh" ? "none" : "uppercase",
              letterSpacing: language === "zh" ? "-0.04em" : "-0.03em",
            }}
          >
            {getLabel(
              "Built by industry experience. Driven by execution.",
              "由行业经验打造，以执行能力驱动。"
            )}
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
                  src={language === "zh" ? member.imageCn : member.image}
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