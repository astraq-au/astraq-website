import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "../components/Footer";
import { useLanguage } from "../i18n/LanguageContext";

const HumanoidRobotPage: React.FC = () => {
  const { language } = useLanguage();

  const getLabel = (en: string, zh: string) => {
    return language === "zh" ? zh : en;
  };

  const textTransform =
    language === "zh" ? ("none" as const) : ("uppercase" as const);

  const features = [
    {
      title: "Human-Centred Form",
      zhTitle: "仿人形态设计",
      description:
        "A humanoid structure designed for movement, interaction and task support in shared human environments.",
      zhDescription:
        "采用接近人类活动场景的仿人形态，适合在人机共处环境中进行移动、交互和任务辅助。",
      image: "/images/human-robot/ET-H-feature1.png",
    },
    {
      title: "Dexterous Task Handling",
      zhTitle: "灵巧任务操作",
      description:
        "Robotic hand and arm systems support controlled grasping, positioning and object interaction.",
      zhDescription:
        "通过机械臂与灵巧手系统，实现抓取、定位和物体交互等基础操作能力。",
      image: "/images/human-robot/ET-H-feature2.png",
    },
    {
      title: "Energy Service Support",
      zhTitle: "能源服务辅助",
      description:
        "Designed to support charging, inspection and service tasks around electric mobility infrastructure.",
      zhDescription:
        "可围绕电动交通基础设施，辅助完成充电、巡检和现场服务类任务。",
      image: "/images/human-robot/ET-H-feature3.png",
    },
    {
      title: "Operational Assistance",
      zhTitle: "运营场景辅助",
      description:
        "Suitable for logistics, inspection, reception and routine support tasks in controlled environments.",
      zhDescription:
        "适用于物流、巡检、接待和日常辅助等可控运营环境中的任务支持。",
      image: "/images/human-robot/ET-H-feature4.png",
    },
  ];

  const applications = [
    {
      title: "Charging Site Assistance",
      zhTitle: "充电场站辅助",
      description:
        "Supporting electric mobility sites with basic guidance, inspection and service interaction.",
      zhDescription:
        "在电动交通场站中提供基础引导、巡检和服务交互支持。",
      image: "/images/human-robot/ET-H-application1.png",
    },
    {
      title: "Logistics Workflow Support",
      zhTitle: "物流流程辅助",
      description:
        "Assisting with handling, sorting and process support in warehouse and depot environments.",
      zhDescription:
        "在仓储和场站环境中辅助搬运、分拣和流程执行。",
      image: "/images/human-robot/ET-H-application2.png",
    },
    {
      title: "Commercial Space Interaction",
      zhTitle: "商业空间交互",
      description:
        "Providing guidance and basic service interaction in public and commercial facilities.",
      zhDescription:
        "在公共空间和商业设施中提供引导、互动和基础服务支持。",
      image: "/images/human-robot/ET-H-application3.png",
    },
    {
      title: "Daily Assistance Scenario",
      zhTitle: "日常辅助场景",
      description:
        "Supporting simple care, comfort and personal assistance tasks in structured indoor environments.",
      zhDescription:
        "在结构化室内环境中，辅助完成简单照护、陪伴和日常支持任务。",
      image: "/images/human-robot/ET-H-application4.png",
    },
  ];

  const [activeFeature, setActiveFeature] = useState(0);
  const [activeApplication, setActiveApplication] = useState(0);

  const nextFeature = () => {
    setActiveFeature((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setActiveFeature((prev) =>
      prev === 0 ? features.length - 1 : prev - 1
    );
  };

  const nextApplication = () => {
    setActiveApplication((prev) => (prev + 1) % applications.length);
  };

  const prevApplication = () => {
    setActiveApplication((prev) =>
      prev === 0 ? applications.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen w-full overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/human-robot/ET-H-hero.png')",
            }}
          />

          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

          <div className="relative z-10 flex min-h-screen items-center px-6 sm:px-10 lg:px-20">
            <div className="max-w-3xl pt-20">
              <h1 className="mb-6 leading-tight">
                <span
                  className="block mt-2 font-light tracking-wide text-white/90"
                  style={{
                    fontSize: "clamp(2.4rem, 4vw, 4.8rem)",
                    letterSpacing: language === "zh" ? "-0.02em" : "0.02em",
                    textTransform,
                  }}
                >
                  {getLabel("ET-H Robot", "ET-H 人形机器人")}
                </span>

                <span
                  className="block mt-5 font-semibold tracking-tight text-white"
                  style={{
                    fontSize:
                      language === "zh"
                        ? "clamp(3rem, 6vw, 7rem)"
                        : "clamp(3.2rem, 6.5vw, 8rem)",
                    lineHeight: 1.05,
                    letterSpacing: language === "zh" ? "-0.04em" : "-0.045em",
                    textTransform,
                  }}
                >
                  {getLabel(
                    "Built for Practical Tasks",
                    "面向实际任务场景打造"
                  )}
                </span>
              </h1>

              <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:gap-6">
                <a
                  href="/specifications/ET-H-Specification.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/80 px-10 py-4 text-base font-semibold tracking-wide text-white shadow-lg transition hover:scale-105 hover:bg-white hover:text-black sm:px-12 sm:py-5 sm:text-lg"
                  style={{
                    letterSpacing: language === "zh" ? "0.04em" : "0.06em",
                    textTransform,
                  }}
                >
                  {getLabel("View Specifications", "查看参数")}
                </a>

                <a
                  href="/store"
                  className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-base font-semibold tracking-wide text-black shadow-lg transition hover:scale-105 hover:bg-white/85 sm:px-12 sm:py-5 sm:text-lg"
                  style={{
                    letterSpacing: language === "zh" ? "0.04em" : "0.06em",
                    textTransform,
                  }}
                >
                  {getLabel("Buy Now", "立即购买")}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative bg-[#f5f5f2] px-3 py-16 sm:px-4 lg:px-6">
          <div className="w-full">
            <div className="mb-8 text-center sm:mb-10 lg:mb-12">
              <h2
                className="font-semibold text-black"
                style={{
                  fontSize:
                    language === "zh"
                      ? "clamp(2rem, 3vw, 4rem)"
                      : "clamp(2rem, 3.2vw, 4.2rem)",
                  letterSpacing: language === "zh" ? "-0.03em" : "-0.035em",
                  textTransform,
                }}
              >
                {getLabel("Core Capabilities", "核心能力")}
              </h2>
            </div>

            <div className="relative mx-auto w-[96vw] overflow-hidden rounded-2xl bg-[#f5f5f2] shadow-2xl">
              <div
                className="h-[70vh] min-h-[420px] w-full bg-contain bg-center bg-no-repeat transition-all duration-500"
                style={{
                  backgroundImage: `url(${features[activeFeature].image})`,
                }}
                role="img"
                aria-label={getLabel(
                  features[activeFeature].title,
                  features[activeFeature].zhTitle
                )}
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 z-20 w-full max-w-5xl px-6 pb-7 sm:px-10 sm:pb-10 lg:px-16 lg:pb-14">
                <h3
                  className="mb-4 font-semibold leading-tight tracking-tight text-white"
                  style={{
                    fontSize:
                      language === "zh"
                        ? "clamp(2.2rem,3.6vw,5.2rem)"
                        : "clamp(2.4rem,4vw,5.8rem)",
                    letterSpacing: language === "zh" ? "-0.035em" : "-0.04em",
                    textTransform,
                  }}
                >
                  {getLabel(
                    features[activeFeature].title,
                    features[activeFeature].zhTitle
                  )}
                </h3>

                <p
                  className="max-w-4xl leading-relaxed text-white/85"
                  style={{
                    fontSize: "clamp(1rem,1.25vw,1.6rem)",
                  }}
                >
                  {getLabel(
                    features[activeFeature].description,
                    features[activeFeature].zhDescription
                  )}
                </p>
              </div>

              <button
                type="button"
                onClick={prevFeature}
                className="absolute left-5 top-1/2 z-30 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-black/65 text-white shadow-2xl backdrop-blur-md transition hover:scale-110 hover:bg-white hover:text-black sm:left-8 sm:h-16 sm:w-16 lg:left-10 lg:h-20 lg:w-20"
                aria-label="Previous feature"
              >
                <ChevronLeft className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
              </button>

              <button
                type="button"
                onClick={nextFeature}
                className="absolute right-5 top-1/2 z-30 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-black/65 text-white shadow-2xl backdrop-blur-md transition hover:scale-110 hover:bg-white hover:text-black sm:right-8 sm:h-16 sm:w-16 lg:right-10 lg:h-20 lg:w-20"
                aria-label="Next feature"
              >
                <ChevronRight className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
              </button>

              <div className="absolute bottom-6 right-6 z-30 flex gap-2 sm:bottom-8 sm:right-10 lg:bottom-10 lg:right-12">
                {features.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveFeature(index)}
                    className={`h-2 rounded-full transition-all ${
                      activeFeature === index
                        ? "w-9 bg-white"
                        : "w-2 bg-white/45 hover:bg-white/80"
                    }`}
                    aria-label={`Go to feature ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="relative bg-[#f5f5f2] px-3 py-16 sm:px-4 lg:px-6">
          <div className="w-full">
            <div className="mb-8 text-center sm:mb-10 lg:mb-12">
              <h2
                className="mx-auto max-w-[1500px] font-semibold text-black"
                style={{
                  fontSize:
                    language === "zh"
                      ? "clamp(2rem, 3vw, 4rem)"
                      : "clamp(2rem, 3.2vw, 4.2rem)",
                  lineHeight: 1.08,
                  letterSpacing: language === "zh" ? "-0.03em" : "-0.035em",
                  textTransform,
                }}
              >
                {getLabel(
                  "Designed for Service and Operational Scenarios",
                  "适配服务与运营场景"
                )}
              </h2>
            </div>

            <div className="relative mx-auto w-[96vw] overflow-hidden rounded-2xl bg-[#f5f5f2] shadow-2xl">
              <div
                className="h-[70vh] min-h-[420px] w-full bg-contain bg-center bg-no-repeat transition-all duration-500"
                style={{
                  backgroundImage: `url(${applications[activeApplication].image})`,
                }}
                role="img"
                aria-label={getLabel(
                  applications[activeApplication].title,
                  applications[activeApplication].zhTitle
                )}
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 z-20 w-full max-w-5xl px-6 pb-7 sm:px-10 sm:pb-10 lg:px-16 lg:pb-14">
                <h3
                  className="mb-4 font-semibold leading-tight tracking-tight text-white"
                  style={{
                    fontSize:
                      language === "zh"
                        ? "clamp(2.2rem,3.6vw,5.2rem)"
                        : "clamp(2.4rem,4vw,5.8rem)",
                    letterSpacing: language === "zh" ? "-0.035em" : "-0.04em",
                    textTransform,
                  }}
                >
                  {getLabel(
                    applications[activeApplication].title,
                    applications[activeApplication].zhTitle
                  )}
                </h3>

                <p
                  className="max-w-4xl leading-relaxed text-white/85"
                  style={{
                    fontSize: "clamp(1rem,1.25vw,1.6rem)",
                  }}
                >
                  {getLabel(
                    applications[activeApplication].description,
                    applications[activeApplication].zhDescription
                  )}
                </p>
              </div>

              <button
                type="button"
                onClick={prevApplication}
                className="absolute left-5 top-1/2 z-30 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-black/65 text-white shadow-2xl backdrop-blur-md transition hover:scale-110 hover:bg-white hover:text-black sm:left-8 sm:h-16 sm:w-16 lg:left-10 lg:h-20 lg:w-20"
                aria-label="Previous application"
              >
                <ChevronLeft className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
              </button>

              <button
                type="button"
                onClick={nextApplication}
                className="absolute right-5 top-1/2 z-30 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-black/65 text-white shadow-2xl backdrop-blur-md transition hover:scale-110 hover:bg-white hover:text-black sm:right-8 sm:h-16 sm:w-16 lg:right-10 lg:h-20 lg:w-20"
                aria-label="Next application"
              >
                <ChevronRight className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
              </button>

              <div className="absolute bottom-6 right-6 z-30 flex gap-2 sm:bottom-8 sm:right-10 lg:bottom-10 lg:right-12">
                {applications.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveApplication(index)}
                    className={`h-2 rounded-full transition-all ${
                      activeApplication === index
                        ? "w-9 bg-white"
                        : "w-2 bg-white/45 hover:bg-white/80"
                    }`}
                    aria-label={`Go to application ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Closing Summary Section */}
        <section className="bg-[#050505] px-4 py-20 sm:px-6 lg:px-8 xl:px-10">
          <div className="mx-auto flex w-full max-w-[1800px] flex-col items-center text-center">
            <h2
              className="mb-7 max-w-[1500px] font-semibold leading-[1.08] tracking-tight text-white"
              style={{
                fontSize:
                  language === "zh"
                    ? "clamp(2.1rem,3.6vw,5rem)"
                    : "clamp(2.2rem,4vw,5.5rem)",
                letterSpacing: language === "zh" ? "-0.04em" : "-0.045em",
                textTransform,
              }}
            >
              {getLabel(
                "A humanoid robotic platform for real operating environments.",
                "面向真实运营环境的人形机器人平台。"
              )}
            </h2>

            <p
              className="max-w-[1500px] leading-relaxed text-white/65"
              style={{
                fontSize: "clamp(1rem,1.25vw,1.6rem)",
              }}
            >
              {getLabel(
                "ET-H connects humanoid robotics with service support, mobility infrastructure, logistics workflows and industrial assistance. It focuses on practical task capability, controlled interaction and deployment in structured commercial environments.",
                "ET-H 将人形机器人能力与服务支持、交通基础设施、物流流程和工业辅助场景结合，重点面向实际任务能力、可控交互和结构化商业环境中的部署应用。"
              )}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HumanoidRobotPage;