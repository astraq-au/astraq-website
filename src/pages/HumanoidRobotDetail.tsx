import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "../components/Footer";
import { useLanguage } from "../i18n/LanguageContext";

const HumanoidRobotPage: React.FC = () => {
  const { language } = useLanguage();

  const isZh = language === "zh";
  const isEs = language === "es";
  const isAr = language === "ar";
  const isRtl = isAr;

  const getLabel = (en: string, zh: string, es: string, ar: string) => {
    if (isZh) return zh;
    if (isEs) return es;
    if (isAr) return ar;
    return en;
  };

  const textTransform =
    isZh || isAr ? ("none" as const) : ("uppercase" as const);

  const titleLetterSpacing = isZh || isAr ? "-0.035em" : "-0.045em";
  const smallLetterSpacing = isZh || isAr ? "0.04em" : isEs ? "0.035em" : "0.06em";

  const features = [
    {
      title: "Human-Centred Form",
      zhTitle: "仿人形态设计",
      esTitle: "Forma centrada en el entorno humano",
      arTitle: "تصميم قريب من البيئة البشرية",
      description:
        "A humanoid structure designed for movement, interaction and task support in shared human environments.",
      zhDescription:
        "采用接近人类活动场景的仿人形态，适合在人机共处环境中进行移动、交互和任务辅助。",
      esDescription:
        "Una estructura humanoide diseñada para el movimiento, la interacción y el apoyo a tareas en entornos compartidos con personas.",
      arDescription:
        "هيكل شبيه بالإنسان مصمم للحركة والتفاعل ودعم المهام في البيئات المشتركة مع البشر.",
      image: "/images/human-robot/ET-H-feature1.png",
    },
    {
      title: "Dexterous Task Handling",
      zhTitle: "灵巧任务操作",
      esTitle: "Manipulación flexible de tareas",
      arTitle: "تنفيذ مهام بمرونة",
      description:
        "Robotic hand and arm systems support controlled grasping, positioning and object interaction.",
      zhDescription:
        "通过机械臂与灵巧手系统，实现抓取、定位和物体交互等基础操作能力。",
      esDescription:
        "Los sistemas de brazos y manos robóticas permiten agarre controlado, posicionamiento e interacción con objetos.",
      arDescription:
        "تدعم أنظمة الذراع واليد الروبوتية الإمساك المتحكم به، وتحديد الموضع، والتفاعل مع الأشياء.",
      image: "/images/human-robot/ET-H-feature2.png",
    },
    {
      title: "Energy Service Support",
      zhTitle: "能源服务辅助",
      esTitle: "Apoyo a servicios energéticos",
      arTitle: "دعم خدمات الطاقة",
      description:
        "Designed to support charging, inspection and service tasks around electric mobility infrastructure.",
      zhDescription:
        "可围绕电动交通基础设施，辅助完成充电、巡检和现场服务类任务。",
      esDescription:
        "Diseñado para apoyar tareas de carga, inspección y servicio alrededor de infraestructuras de movilidad eléctrica.",
      arDescription:
        "مصمم لدعم مهام الشحن والفحص والخدمة حول بنية التنقل الكهربائي.",
      image: "/images/human-robot/ET-H-feature3.png",
    },
    {
      title: "Operational Assistance",
      zhTitle: "运营场景辅助",
      esTitle: "Asistencia operativa",
      arTitle: "مساعدة تشغيلية",
      description:
        "Suitable for logistics, inspection, reception and routine support tasks in controlled environments.",
      zhDescription:
        "适用于物流、巡检、接待和日常辅助等可控运营环境中的任务支持。",
      esDescription:
        "Adecuado para logística, inspección, recepción y tareas de apoyo rutinario en entornos controlados.",
      arDescription:
        "مناسب للخدمات اللوجستية والفحص والاستقبال ومهام الدعم اليومية في بيئات تشغيلية منظمة.",
      image: "/images/human-robot/ET-H-feature4.png",
    },
  ];

  const applications = [
    {
      title: "Charging Site Assistance",
      zhTitle: "充电场站辅助",
      esTitle: "Asistencia en estaciones de carga",
      arTitle: "مساعدة في مواقع الشحن",
      description:
        "Supporting electric mobility sites with basic guidance, inspection and service interaction.",
      zhDescription:
        "在电动交通场站中提供基础引导、巡检和服务交互支持。",
      esDescription:
        "Apoyo a sitios de movilidad eléctrica mediante orientación básica, inspección e interacción de servicio.",
      arDescription:
        "دعم مواقع التنقل الكهربائي من خلال الإرشاد الأساسي والفحص والتفاعل الخدمي.",
      image: "/images/human-robot/ET-H-application1.png",
    },
    {
      title: "Logistics Workflow Support",
      zhTitle: "物流流程辅助",
      esTitle: "Apoyo a flujos logísticos",
      arTitle: "دعم سير العمل اللوجستي",
      description:
        "Assisting with handling, sorting and process support in warehouse and depot environments.",
      zhDescription:
        "在仓储和场站环境中辅助搬运、分拣和流程执行。",
      esDescription:
        "Asistencia en manipulación, clasificación y apoyo de procesos en almacenes y depósitos.",
      arDescription:
        "المساعدة في المناولة والفرز ودعم العمليات داخل المستودعات ومراكز التشغيل.",
      image: "/images/human-robot/ET-H-application2.png",
    },
    {
      title: "Commercial Space Interaction",
      zhTitle: "商业空间交互",
      esTitle: "Interacción en espacios comerciales",
      arTitle: "التفاعل في المساحات التجارية",
      description:
        "Providing guidance and basic service interaction in public and commercial facilities.",
      zhDescription:
        "在公共空间和商业设施中提供引导、互动和基础服务支持。",
      esDescription:
        "Orientación e interacción básica de servicio en instalaciones públicas y comerciales.",
      arDescription:
        "تقديم الإرشاد والتفاعل الخدمي الأساسي في المرافق العامة والتجارية.",
      image: "/images/human-robot/ET-H-application3.png",
    },
    {
      title: "Daily Assistance Scenario",
      zhTitle: "日常辅助场景",
      esTitle: "Escenarios de asistencia diaria",
      arTitle: "سيناريوهات المساعدة اليومية",
      description:
        "Supporting simple care, comfort and personal assistance tasks in structured indoor environments.",
      zhDescription:
        "在结构化室内环境中，辅助完成简单照护、陪伴和日常支持任务。",
      esDescription:
        "Apoyo a tareas simples de cuidado, acompañamiento y asistencia personal en entornos interiores estructurados.",
      arDescription:
        "دعم مهام الرعاية البسيطة والراحة والمساعدة الشخصية في بيئات داخلية منظمة.",
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
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className="min-h-screen bg-black text-white overflow-hidden"
    >
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
          <div
            className="absolute inset-0"
            style={{
              background: isRtl
                ? "linear-gradient(270deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 55%, transparent 100%)"
                : "linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 55%, transparent 100%)",
            }}
          />

          <div className="relative z-10 flex min-h-screen items-center px-6 sm:px-10 lg:px-20">
            <div className="max-w-3xl pt-20">
              <h1 className="mb-6 leading-tight">
                <span
                  className="block mt-2 font-light tracking-wide text-white/90"
                  style={{
                    fontSize: isEs
                      ? "clamp(2.1rem, 3.6vw, 4.3rem)"
                      : "clamp(2.4rem, 4vw, 4.8rem)",
                    letterSpacing: isZh || isAr ? "-0.02em" : "0.02em",
                    textTransform,
                    lineHeight: 1.08,
                  }}
                >
                  {getLabel(
                    "ET-H Robot",
                    "ET-H 人形机器人",
                    "Robot ET-H",
                    "روبوت ET-H"
                  )}
                </span>

                <span
                  className="block mt-5 font-semibold tracking-tight text-white"
                  style={{
                    fontSize:
                      isZh || isAr
                        ? "clamp(3rem, 6vw, 7rem)"
                        : isEs
                        ? "clamp(2.8rem, 5.6vw, 7rem)"
                        : "clamp(3.2rem, 6.5vw, 8rem)",
                    lineHeight: 1.05,
                    letterSpacing: titleLetterSpacing,
                    textTransform,
                    overflowWrap: "break-word",
                  }}
                >
                  {getLabel(
                    "Built for Practical Tasks",
                    "面向实际任务场景打造",
                    "Diseñado para tareas prácticas",
                    "مصمم للمهام العملية"
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
                    letterSpacing: smallLetterSpacing,
                    textTransform,
                    whiteSpace: "nowrap",
                  }}
                >
                  {getLabel(
                    "View Specifications",
                    "查看参数",
                    "Ver especificaciones",
                    "عرض المواصفات"
                  )}
                </a>

                <a
                  href="/store"
                  className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-base font-semibold tracking-wide text-black shadow-lg transition hover:scale-105 hover:bg-white/85 sm:px-12 sm:py-5 sm:text-lg"
                  style={{
                    letterSpacing: smallLetterSpacing,
                    textTransform,
                    whiteSpace: "nowrap",
                  }}
                >
                  {getLabel("Buy Now", "立即购买", "Comprar ahora", "اشتر الآن")}
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
                    isZh || isAr
                      ? "clamp(2rem, 3vw, 4rem)"
                      : isEs
                      ? "clamp(1.9rem, 2.8vw, 3.8rem)"
                      : "clamp(2rem, 3.2vw, 4.2rem)",
                  letterSpacing: isZh || isAr ? "-0.03em" : "-0.035em",
                  textTransform,
                  lineHeight: 1.08,
                }}
              >
                {getLabel(
                  "Core Capabilities",
                  "核心能力",
                  "Capacidades principales",
                  "القدرات الأساسية"
                )}
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
                  features[activeFeature].zhTitle,
                  features[activeFeature].esTitle,
                  features[activeFeature].arTitle
                )}
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div
                className={`absolute bottom-0 z-20 w-full max-w-5xl px-6 pb-7 sm:px-10 sm:pb-10 lg:px-16 lg:pb-14 ${
                  isRtl ? "right-0" : "left-0"
                }`}
              >
                <h3
                  className="mb-4 font-semibold leading-tight tracking-tight text-white"
                  style={{
                    fontSize:
                      isZh || isAr
                        ? "clamp(2.2rem,3.6vw,5.2rem)"
                        : isEs
                        ? "clamp(2rem,3.4vw,5rem)"
                        : "clamp(2.4rem,4vw,5.8rem)",
                    letterSpacing: isZh || isAr ? "-0.035em" : "-0.04em",
                    textTransform,
                    overflowWrap: "break-word",
                  }}
                >
                  {getLabel(
                    features[activeFeature].title,
                    features[activeFeature].zhTitle,
                    features[activeFeature].esTitle,
                    features[activeFeature].arTitle
                  )}
                </h3>

                <p
                  className="max-w-4xl leading-relaxed text-white/85"
                  style={{
                    fontSize: isEs
                      ? "clamp(0.95rem,1.12vw,1.38rem)"
                      : "clamp(1rem,1.25vw,1.6rem)",
                  }}
                >
                  {getLabel(
                    features[activeFeature].description,
                    features[activeFeature].zhDescription,
                    features[activeFeature].esDescription,
                    features[activeFeature].arDescription
                  )}
                </p>
              </div>

              <button
                type="button"
                onClick={isRtl ? nextFeature : prevFeature}
                className="absolute left-5 top-1/2 z-30 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-black/65 text-white shadow-2xl backdrop-blur-md transition hover:scale-110 hover:bg-white hover:text-black sm:left-8 sm:h-16 sm:w-16 lg:left-10 lg:h-20 lg:w-20"
                aria-label="Previous feature"
              >
                {isRtl ? (
                  <ChevronRight className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
                ) : (
                  <ChevronLeft className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
                )}
              </button>

              <button
                type="button"
                onClick={isRtl ? prevFeature : nextFeature}
                className="absolute right-5 top-1/2 z-30 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-black/65 text-white shadow-2xl backdrop-blur-md transition hover:scale-110 hover:bg-white hover:text-black sm:right-8 sm:h-16 sm:w-16 lg:right-10 lg:h-20 lg:w-20"
                aria-label="Next feature"
              >
                {isRtl ? (
                  <ChevronLeft className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
                ) : (
                  <ChevronRight className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
                )}
              </button>

              <div
                className={`absolute bottom-6 z-30 flex gap-2 sm:bottom-8 lg:bottom-10 ${
                  isRtl ? "left-6 sm:left-10 lg:left-12" : "right-6 sm:right-10 lg:right-12"
                }`}
              >
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
                    isZh || isAr
                      ? "clamp(2rem, 3vw, 4rem)"
                      : isEs
                      ? "clamp(1.9rem, 2.8vw, 3.8rem)"
                      : "clamp(2rem, 3.2vw, 4.2rem)",
                  lineHeight: 1.08,
                  letterSpacing: isZh || isAr ? "-0.03em" : "-0.035em",
                  textTransform,
                  overflowWrap: "break-word",
                }}
              >
                {getLabel(
                  "Designed for Service and Operational Scenarios",
                  "适配服务与运营场景",
                  "Diseñado para escenarios de servicio y operación",
                  "مصمم لسيناريوهات الخدمة والتشغيل"
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
                  applications[activeApplication].zhTitle,
                  applications[activeApplication].esTitle,
                  applications[activeApplication].arTitle
                )}
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div
                className={`absolute bottom-0 z-20 w-full max-w-5xl px-6 pb-7 sm:px-10 sm:pb-10 lg:px-16 lg:pb-14 ${
                  isRtl ? "right-0" : "left-0"
                }`}
              >
                <h3
                  className="mb-4 font-semibold leading-tight tracking-tight text-white"
                  style={{
                    fontSize:
                      isZh || isAr
                        ? "clamp(2.2rem,3.6vw,5.2rem)"
                        : isEs
                        ? "clamp(2rem,3.4vw,5rem)"
                        : "clamp(2.4rem,4vw,5.8rem)",
                    letterSpacing: isZh || isAr ? "-0.035em" : "-0.04em",
                    textTransform,
                    overflowWrap: "break-word",
                  }}
                >
                  {getLabel(
                    applications[activeApplication].title,
                    applications[activeApplication].zhTitle,
                    applications[activeApplication].esTitle,
                    applications[activeApplication].arTitle
                  )}
                </h3>

                <p
                  className="max-w-4xl leading-relaxed text-white/85"
                  style={{
                    fontSize: isEs
                      ? "clamp(0.95rem,1.12vw,1.38rem)"
                      : "clamp(1rem,1.25vw,1.6rem)",
                  }}
                >
                  {getLabel(
                    applications[activeApplication].description,
                    applications[activeApplication].zhDescription,
                    applications[activeApplication].esDescription,
                    applications[activeApplication].arDescription
                  )}
                </p>
              </div>

              <button
                type="button"
                onClick={isRtl ? nextApplication : prevApplication}
                className="absolute left-5 top-1/2 z-30 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-black/65 text-white shadow-2xl backdrop-blur-md transition hover:scale-110 hover:bg-white hover:text-black sm:left-8 sm:h-16 sm:w-16 lg:left-10 lg:h-20 lg:w-20"
                aria-label="Previous application"
              >
                {isRtl ? (
                  <ChevronRight className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
                ) : (
                  <ChevronLeft className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
                )}
              </button>

              <button
                type="button"
                onClick={isRtl ? prevApplication : nextApplication}
                className="absolute right-5 top-1/2 z-30 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-black/65 text-white shadow-2xl backdrop-blur-md transition hover:scale-110 hover:bg-white hover:text-black sm:right-8 sm:h-16 sm:w-16 lg:right-10 lg:h-20 lg:w-20"
                aria-label="Next application"
              >
                {isRtl ? (
                  <ChevronLeft className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
                ) : (
                  <ChevronRight className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
                )}
              </button>

              <div
                className={`absolute bottom-6 z-30 flex gap-2 sm:bottom-8 lg:bottom-10 ${
                  isRtl ? "left-6 sm:left-10 lg:left-12" : "right-6 sm:right-10 lg:right-12"
                }`}
              >
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
                  isZh || isAr
                    ? "clamp(2.1rem,3.6vw,5rem)"
                    : isEs
                    ? "clamp(2rem,3.5vw,5rem)"
                    : "clamp(2.2rem,4vw,5.5rem)",
                letterSpacing: isZh || isAr ? "-0.04em" : "-0.045em",
                textTransform,
                overflowWrap: "break-word",
              }}
            >
              {getLabel(
                "A humanoid robotic platform for real operating environments.",
                "面向真实运营环境的人形机器人平台。",
                "Una plataforma robótica humanoide para entornos operativos reales.",
                "منصة روبوتية بشرية الشكل لبيئات تشغيل واقعية."
              )}
            </h2>

            <p
              className="max-w-[1500px] leading-relaxed text-white/65"
              style={{
                fontSize: isEs
                  ? "clamp(0.95rem,1.12vw,1.4rem)"
                  : "clamp(1rem,1.25vw,1.6rem)",
              }}
            >
              {getLabel(
                "ET-H connects humanoid robotics with service support, mobility infrastructure, logistics workflows and industrial assistance. It focuses on practical task capability, controlled interaction and deployment in structured commercial environments.",
                "ET-H 将人形机器人能力与服务支持、交通基础设施、物流流程和工业辅助场景结合，重点面向实际任务能力、可控交互和结构化商业环境中的部署应用。",
                "ET-H conecta la robótica humanoide con el soporte de servicios, la infraestructura de movilidad, los flujos logísticos y la asistencia industrial. Se centra en la capacidad de tareas prácticas, la interacción controlada y el despliegue en entornos comerciales estructurados.",
                "يربط ET-H الروبوتات بشرية الشكل بدعم الخدمات وبنية التنقل وسير العمل اللوجستي والمساعدة الصناعية. ويركز على القدرة العملية على تنفيذ المهام، والتفاعل المنضبط، والنشر في بيئات تجارية منظمة."
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