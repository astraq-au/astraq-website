/**
 * MassageRobotPage
 * ET-M Intelligent Massage Robot
 * English / Chinese supported
 */

import { useState } from "react";
import Footer from "../components/Footer";
import { useLanguage } from "../i18n/LanguageContext";

const HERO_IMAGE = "/images/massage-robot/ET-M-hero.png";

const FUNCTION_IMAGES = {
  massage: "/images/massage-robot/ET-M-function1.png",
  shockwave: "/images/massage-robot/ET-M-function2.png",
  heat: "/images/massage-robot/ET-M-function3.png",
};

const FEATURE_IMAGES = {
  acupoint: "/images/massage-robot/ET-M-feature1.png",
  control: "/images/massage-robot/ET-M-feature2.png",
  interaction: "/images/massage-robot/ET-M-feature3.png",
};

const APPLICATIONS = [
  {
    key: "therapy",
    image: "/images/massage-robot/ET-M-application-therapy-room.png",
    icon: "☯",
    title: "Therapy Practice Room",
    zhTitle: "康复理疗室",
    description:
      "Support daily treatment work with controlled robotic massage and repeatable therapy settings.",
    zhDescription:
      "通过可控的机器人按摩和可重复的治疗设置，辅助日常康复理疗工作。",
  },
  {
    key: "beauty",
    image: "/images/massage-robot/ET-M-application-beauty-clinic.png",
    icon: "☺",
    title: "Wellness & Beauty Clinic",
    zhTitle: "康养美容机构",
    description:
      "Add robotic therapy support to wellness services and improve treatment workflow consistency.",
    zhDescription:
      "为康养护理服务加入机器人理疗辅助，提高服务流程的一致性。",
  },
  {
    key: "sports",
    image: "/images/massage-robot/ET-M-application-sports-rehab.png",
    icon: "♙",
    title: "Sports Recovery Center",
    zhTitle: "运动恢复中心",
    description:
      "Assist recovery routines with targeted treatment support for training and rehabilitation settings.",
    zhDescription:
      "为训练恢复和运动康复场景提供针对性的理疗辅助支持。",
  },
] as const;

const SPEC_PDF = "/specifications/ET-M-Specification.pdf";

const FONT_FAMILY =
  "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

const COLORS = {
  pageBg: "#F7F3EE",
  textMain: "#303030",
  textSoft: "rgba(48,48,48,0.72)",

  accent: "#B98A62",
  accentDark: "#A77855",
  accentBorder: "rgba(185,138,98,0.42)",
};

const FUNCTIONS = [
  {
    key: "massage",
    label: "Robotic Massage",
    zhLabel: "机器人按摩",
    icon: "〰",
    image: FUNCTION_IMAGES.massage,
    imageTitle: "Controlled Robotic Massage",
    zhImageTitle: "可控机器人按摩",
    imageDescription:
      "Provides consistent massage movement to support muscle relaxation and daily recovery routines.",
    zhImageDescription:
      "通过稳定的按摩动作，辅助肌肉放松和日常恢复流程。",
  },
  {
    key: "shockwave",
    label: "Magneto Shockwave",
    zhLabel: "磁震波理疗",
    icon: "◎",
    image: FUNCTION_IMAGES.shockwave,
    imageTitle: "Deep Tissue Stimulation",
    zhImageTitle: "深层组织刺激",
    imageDescription:
      "High-frequency stimulation supports deeper tissue response under therapist-guided treatment settings.",
    zhImageDescription:
      "在治疗师指导下，通过高频刺激辅助深层组织响应。",
  },
  {
    key: "heat",
    label: "Endogenous Heat",
    zhLabel: "内源热支持",
    icon: "≋",
    image: FUNCTION_IMAGES.heat,
    imageTitle: "Thermal Treatment Support",
    zhImageTitle: "热疗辅助支持",
    imageDescription:
      "Controlled thermal support helps improve treatment comfort and supports circulation-focused routines.",
    zhImageDescription:
      "可控热疗辅助有助于提升治疗舒适度，并支持循环改善类护理流程。",
  },
] as const;

const FEATURES = [
  {
    key: "acupoint",
    label: "Body Point Mapping",
    zhLabel: "身体点位识别",
    icon: "◎",
    image: FEATURE_IMAGES.acupoint,
    title: "AI-Assisted Point Recognition",
    zhTitle: "AI 辅助点位识别",
    description:
      "AI-assisted body mapping helps identify treatment areas with greater consistency across sessions.",
    zhDescription:
      "AI 辅助身体映射有助于在不同治疗过程中更稳定地识别目标区域。",
  },
  {
    key: "control",
    label: "Motion Control",
    zhLabel: "运动控制",
    icon: "⌖",
    image: FEATURE_IMAGES.control,
    title: "Stable Force and Motion Control",
    zhTitle: "稳定的力度与运动控制",
    description:
      "Controlled force and trajectory execution support repeatable massage performance.",
    zhDescription:
      "通过对力度和运动轨迹的控制，支持更可重复的按摩执行效果。",
  },
  {
    key: "interaction",
    label: "Therapist Interaction",
    zhLabel: "治疗师交互",
    icon: "☝",
    image: FEATURE_IMAGES.interaction,
    title: "Therapist-Guided Operation",
    zhTitle: "治疗师引导式操作",
    description:
      "Touch interface and guided control help integrate the robot into existing treatment workflows.",
    zhDescription:
      "触控界面和引导式控制，帮助机器人更自然地融入现有治疗流程。",
  },
] as const;

type FunctionKey = (typeof FUNCTIONS)[number]["key"];
type FeatureKey = (typeof FEATURES)[number]["key"];

export default function MassageRobotPage() {
  const { language } = useLanguage();

  const [activeFunction, setActiveFunction] =
    useState<FunctionKey>("massage");
  const [activeFeature, setActiveFeature] =
    useState<FeatureKey>("acupoint");

  const activeItem = FUNCTIONS.find((item) => item.key === activeFunction)!;
  const activeFeatureItem = FEATURES.find(
    (item) => item.key === activeFeature
  )!;

  const getLabel = (en: string, zh: string) => {
    return language === "zh" ? zh : en;
  };

  const textTransform =
    language === "zh" ? ("none" as const) : ("uppercase" as const);
  const titleLetterSpacing = language === "zh" ? "-0.04em" : "-0.055em";
  const smallLetterSpacing = language === "zh" ? "0.04em" : "0.06em";

  return (
    <main
      className="min-h-screen massage-page"
      style={{
        background: COLORS.pageBg,
        color: COLORS.textMain,
        fontFamily: FONT_FAMILY,
      }}
    >
      {/* Hero Banner */}
      <section
        className="relative overflow-hidden massage-hero"
        style={{
          background: COLORS.pageBg,
        }}
      >
        <img
          src={HERO_IMAGE}
          alt="ET-M intelligent massage robot for wellness and recovery"
          className="block w-full massage-hero-image"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
          }}
        />

        <div
          className="absolute z-10 flex flex-col items-start massage-hero-content"
          style={{
            left: "6.7%",
            top: "33%",
            maxWidth: "clamp(460px, 50vw, 960px)",
          }}
        >
          <h1
            className="massage-hero-title"
            style={{
              margin: 0,
              color: COLORS.textMain,
              fontWeight: 600,
              fontSize:
                language === "zh"
                  ? "clamp(2.6rem, 4.4vw, 6.4rem)"
                  : "clamp(2.8rem, 4.8vw, 7rem)",
              lineHeight: 1.04,
              letterSpacing: titleLetterSpacing,
            }}
          >
            {language === "zh" ? (
              <>
                智能按摩
                <br />
                辅助恢复
              </>
            ) : (
              <>
                Smarter Massage
                <br />
                Better Recovery
              </>
            )}
          </h1>

          <p
            className="massage-hero-subtitle"
            style={{
              marginTop: "clamp(22px, 2vw, 40px)",
              marginBottom: 0,
              color: COLORS.textSoft,
              fontWeight: 400,
              fontSize: "clamp(1.05rem, 1.35vw, 2rem)",
              lineHeight: 1.5,
              letterSpacing: language === "zh" ? "0.01em" : "-0.01em",
            }}
          >
            {language === "zh" ? (
              <>
                面向康养、理疗和恢复场景的
                <br />
                机器人辅助治疗平台。
              </>
            ) : (
              <>
                Robotic therapy support for wellness,
                <br />
                treatment and recovery workflows.
              </>
            )}
          </p>

          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 massage-hero-buttons"
            style={{
              marginTop: "clamp(34px, 3vw, 58px)",
            }}
          >
            <a
              href={SPEC_PDF}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center"
              style={{
                width: "clamp(190px, 12vw, 260px)",
                height: "clamp(48px, 3.2vw, 62px)",
                border: `1px solid ${COLORS.accentBorder}`,
                borderRadius: "8px",
                color: COLORS.accentDark,
                background: "rgba(255,255,255,0.62)",
                fontWeight: 600,
                fontSize: "clamp(0.82rem, 0.82vw, 1rem)",
                letterSpacing: smallLetterSpacing,
                textTransform,
                textDecoration: "none",
                transition: "all 0.3s ease",
                boxShadow: "0 14px 38px rgba(90,60,40,0.08)",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = COLORS.accent;
                e.currentTarget.style.background = "rgba(255,255,255,0.92)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = COLORS.accentBorder;
                e.currentTarget.style.background = "rgba(255,255,255,0.62)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {getLabel("View Specifications", "查看参数")}
            </a>

            <a
              href="/store"
              className="inline-flex items-center justify-center"
              style={{
                width: "clamp(170px, 11vw, 240px)",
                height: "clamp(48px, 3.2vw, 62px)",
                border: `1px solid ${COLORS.accent}`,
                borderRadius: "8px",
                color: "#FFFFFF",
                background: COLORS.accent,
                fontWeight: 600,
                fontSize: "clamp(0.82rem, 0.82vw, 1rem)",
                letterSpacing: smallLetterSpacing,
                textTransform,
                textDecoration: "none",
                transition: "all 0.3s ease",
                boxShadow: "0 16px 42px rgba(185,138,98,0.24)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = COLORS.accentDark;
                e.currentTarget.style.borderColor = COLORS.accentDark;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = COLORS.accent;
                e.currentTarget.style.borderColor = COLORS.accent;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {getLabel("Buy Now", "立即购买")}
            </a>
          </div>
        </div>
      </section>

      {/* Product Functions - Interactive */}
      <section
        id="functions"
        className="relative overflow-hidden massage-function-section"
        style={{
          background: COLORS.pageBg,
        }}
      >
        <img
          key={activeItem.image}
          src={activeItem.image}
          alt={getLabel(activeItem.label, activeItem.zhLabel)}
          className="massage-function-bg"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
          }}
        />

        <div
          className="absolute z-10 massage-function-content"
          style={{
            left: "6.2%",
            top: "7%",
            width: "clamp(420px, 33vw, 680px)",
          }}
        >
          <h2
            className="massage-function-title"
            style={{
              margin: 0,
              color: COLORS.textMain,
              fontWeight: 600,
              fontSize:
                language === "zh"
                  ? "clamp(2.2rem, 3.2vw, 4.6rem)"
                  : "clamp(2.4rem, 3.4vw, 5rem)",
              lineHeight: 1.06,
              letterSpacing: language === "zh" ? "-0.04em" : "-0.045em",
              maxWidth: "clamp(420px, 34vw, 720px)",
            }}
          >
            {getLabel("Therapy Functions", "理疗功能")}
          </h2>

          <div
            className="massage-function-tabs"
            style={{
              marginTop: "clamp(32px, 3.2vw, 58px)",
              display: "flex",
              flexDirection: "column",
              gap: "clamp(12px, 1vw, 20px)",
            }}
          >
            {FUNCTIONS.map((item) => {
              const isActive = item.key === activeFunction;

              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActiveFunction(item.key)}
                  className="massage-function-tab"
                  style={{
                    width: "100%",
                    minHeight: "clamp(58px, 4.4vw, 84px)",
                    display: "grid",
                    gridTemplateColumns: "clamp(46px, 3.6vw, 64px) 1fr auto",
                    alignItems: "center",
                    gap: "clamp(14px, 1.3vw, 24px)",
                    padding:
                      "clamp(10px, 1vw, 18px) clamp(14px, 1.4vw, 26px)",
                    borderRadius: "14px",
                    border: isActive
                      ? `1px solid ${COLORS.accentBorder}`
                      : "1px solid transparent",
                    background: isActive
                      ? "rgba(255,255,255,0.68)"
                      : "rgba(255,255,255,0.12)",
                    boxShadow: isActive
                      ? "0 12px 32px rgba(90,60,40,0.08)"
                      : "none",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.28s ease",
                    backdropFilter: isActive ? "blur(8px)" : "none",
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  <span
                    style={{
                      width: "clamp(46px, 3.6vw, 64px)",
                      height: "clamp(46px, 3.6vw, 64px)",
                      borderRadius: "999px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(255,255,255,0.86)",
                      color: COLORS.accentDark,
                      fontSize: "clamp(1.05rem, 1.25vw, 1.7rem)",
                      boxShadow: "0 8px 22px rgba(90,60,40,0.08)",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </span>

                  <span
                    style={{
                      display: "block",
                      color: COLORS.textMain,
                      fontWeight: 600,
                      fontSize: "clamp(1.08rem, 1.22vw, 1.6rem)",
                      lineHeight: 1.15,
                      letterSpacing: language === "zh" ? "-0.01em" : "-0.015em",
                    }}
                  >
                    {getLabel(item.label, item.zhLabel)}
                  </span>

                  <span
                    style={{
                      color: COLORS.accentDark,
                      fontSize: "clamp(1.2rem, 1.4vw, 2rem)",
                      lineHeight: 1,
                    }}
                  >
                    ›
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div
          className="absolute z-10 massage-function-image-text"
          style={{
            left: "50%",
            bottom: "8%",
            transform: "translateX(-50%)",
            width: "clamp(620px, 56vw, 1080px)",
            padding: "0 clamp(24px, 3vw, 60px)",
            background: "transparent",
            boxShadow: "none",
            backdropFilter: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              margin: 0,
              color: COLORS.textMain,
              fontWeight: 600,
              fontSize:
                language === "zh"
                  ? "clamp(1.9rem, 2.4vw, 3.9rem)"
                  : "clamp(2rem, 2.6vw, 4.3rem)",
              lineHeight: 1.08,
              letterSpacing: language === "zh" ? "-0.035em" : "-0.04em",
              maxWidth: "960px",
              textShadow: "0 2px 12px rgba(255,255,255,0.8)",
            }}
          >
            {getLabel(activeItem.imageTitle, activeItem.zhImageTitle)}
          </h3>

          <p
            style={{
              marginTop: "clamp(14px, 1vw, 22px)",
              marginBottom: 0,
              color: "rgba(48,48,48,0.84)",
              fontWeight: 400,
              fontSize: "clamp(1.08rem, 1.3vw, 1.8rem)",
              lineHeight: 1.5,
              maxWidth: "860px",
              textShadow: "0 2px 10px rgba(255,255,255,0.78)",
            }}
          >
            {getLabel(
              activeItem.imageDescription,
              activeItem.zhImageDescription
            )}
          </p>
        </div>
      </section>

      {/* Intelligent Therapy Capabilities - Interactive */}
      <section
        id="technology"
        className="relative overflow-hidden massage-feature-section"
        style={{
          background: COLORS.pageBg,
        }}
      >
        <img
          key={activeFeatureItem.image}
          src={activeFeatureItem.image}
          alt={getLabel(activeFeatureItem.label, activeFeatureItem.zhLabel)}
          className="massage-feature-bg"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
          }}
        />

        <div
          className="absolute z-10 massage-feature-content"
          style={{
            left: "6.2%",
            top: "5.5%",
            width: "clamp(560px, 44vw, 820px)",
          }}
        >
          <h2
            className="massage-feature-title"
            style={{
              margin: 0,
              color: COLORS.textMain,
              fontWeight: 600,
              fontSize:
                language === "zh"
                  ? "clamp(2.2rem, 3.2vw, 4.6rem)"
                  : "clamp(2.4rem, 3.4vw, 5rem)",
              lineHeight: 1.04,
              letterSpacing: language === "zh" ? "-0.04em" : "-0.05em",
              maxWidth: "none",
              whiteSpace: "nowrap",
            }}
          >
            {getLabel(
              "Therapy Intelligence and Control",
              "理疗感知与控制能力"
            )}
          </h2>

          <div
            style={{
              width: "54px",
              height: "2px",
              background: COLORS.accentDark,
              marginTop: "clamp(20px, 1.8vw, 34px)",
              marginBottom: "clamp(20px, 1.8vw, 34px)",
            }}
          />

          <p
            style={{
              margin: 0,
              color: COLORS.textSoft,
              fontWeight: 400,
              fontSize: "clamp(1.05rem, 1.15vw, 1.55rem)",
              lineHeight: 1.55,
              maxWidth: "620px",
              letterSpacing: language === "zh" ? "0.01em" : "-0.01em",
            }}
          >
            {getLabel(
              "AI-assisted perception, controlled execution and therapist-guided interaction for structured treatment workflows.",
              "通过 AI 辅助感知、可控执行和治疗师引导式交互，服务结构化理疗流程。"
            )}
          </p>

          <div
            className="massage-feature-tabs"
            style={{
              marginTop: "clamp(46px, 4.5vw, 88px)",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              border: `1px solid ${COLORS.accentBorder}`,
              borderRadius: "20px 20px 0 0",
              overflow: "hidden",
              background: "rgba(255,255,255,0.42)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 18px 46px rgba(90,60,40,0.10)",
            }}
          >
            {FEATURES.map((item) => {
              const isActive = item.key === activeFeature;

              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActiveFeature(item.key)}
                  className="massage-feature-tab"
                  style={{
                    minHeight: "clamp(78px, 5.4vw, 118px)",
                    padding: "clamp(18px, 1.6vw, 30px)",
                    border: "none",
                    borderRight:
                      item.key !== "interaction"
                        ? `1px solid rgba(185,138,98,0.24)`
                        : "none",
                    background: isActive
                      ? "rgba(255,255,255,0.78)"
                      : "rgba(255,255,255,0.26)",
                    color: isActive ? COLORS.accentDark : COLORS.textMain,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "clamp(12px, 1vw, 20px)",
                    fontFamily: FONT_FAMILY,
                    fontWeight: isActive ? 600 : 500,
                    fontSize: "clamp(1rem, 1.12vw, 1.5rem)",
                    lineHeight: 1.2,
                    letterSpacing: language === "zh" ? "-0.01em" : "-0.015em",
                    transition: "all 0.25s ease",
                  }}
                >
                  <span
                    style={{
                      fontSize: "clamp(1.25rem, 1.5vw, 2rem)",
                      lineHeight: 1,
                    }}
                  >
                    {item.icon}
                  </span>
                  <span>{getLabel(item.label, item.zhLabel)}</span>
                </button>
              );
            })}
          </div>

          <div
            className="massage-feature-info"
            style={{
              padding: "clamp(38px, 3.2vw, 68px)",
              minHeight: "clamp(210px, 15vw, 330px)",
              border: `1px solid ${COLORS.accentBorder}`,
              borderTop: "none",
              borderRadius: "0 0 20px 20px",
              background: "rgba(255,255,255,0.54)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 18px 46px rgba(90,60,40,0.08)",
            }}
          >
            <h3
              style={{
                margin: 0,
                color: COLORS.textMain,
                fontWeight: 600,
                fontSize: "clamp(1.75rem, 2.1vw, 3.2rem)",
                lineHeight: 1.12,
                letterSpacing: language === "zh" ? "-0.03em" : "-0.035em",
              }}
            >
              {getLabel(activeFeatureItem.title, activeFeatureItem.zhTitle)}
            </h3>

            <div
              style={{
                width: "42px",
                height: "2px",
                background: COLORS.accentDark,
                marginTop: "clamp(14px, 1.1vw, 22px)",
                marginBottom: "clamp(14px, 1.1vw, 22px)",
              }}
            />

            <p
              style={{
                margin: 0,
                color: COLORS.textSoft,
                fontWeight: 400,
                fontSize: "clamp(1.1rem, 1.22vw, 1.65rem)",
                lineHeight: 1.6,
                maxWidth: "620px",
                letterSpacing: language === "zh" ? "0.01em" : "-0.01em",
              }}
            >
              {getLabel(
                activeFeatureItem.description,
                activeFeatureItem.zhDescription
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Application Scenarios */}
      <section
        id="applications"
        className="massage-application-section"
        style={{
          background: COLORS.pageBg,
          padding: "clamp(70px, 6vw, 120px) clamp(18px, 3vw, 64px)",
        }}
      >
        <div
          className="massage-application-inner"
          style={{
            maxWidth: "2180px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <div
            className="massage-application-header"
            style={{
              textAlign: "center",
              maxWidth: "960px",
              margin: "0 auto clamp(44px, 4.4vw, 76px)",
            }}
          >
            <h2
              style={{
                margin: 0,
                color: COLORS.textMain,
                fontWeight: 500,
                fontSize:
                  language === "zh"
                    ? "clamp(2.8rem, 4.2vw, 5.8rem)"
                    : "clamp(3.1rem, 4.6vw, 6.2rem)",
                lineHeight: 1.05,
                letterSpacing: language === "zh" ? "-0.04em" : "-0.045em",
              }}
            >
              {getLabel("Application Scenarios", "应用场景")}
            </h2>

            <div
              style={{
                width: "50px",
                height: "2px",
                background: COLORS.accentDark,
                margin:
                  "clamp(18px, 1.6vw, 28px) auto clamp(18px, 1.8vw, 30px)",
              }}
            />
          </div>

          <div className="massage-application-grid">
            {APPLICATIONS.map((item) => (
              <article key={item.key} className="massage-application-card">
                <img
                  src={item.image}
                  alt={getLabel(item.title, item.zhTitle)}
                  className="massage-application-image"
                />

                <div className="massage-application-body">
                  <div className="massage-application-icon">{item.icon}</div>

                  <div className="massage-application-text">
                    <h3 className="massage-application-title">
                      {getLabel(item.title, item.zhTitle)}
                    </h3>
                    <p className="massage-application-description">
                      {getLabel(item.description, item.zhDescription)}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .massage-page {
          width: 100%;
          overflow-x: hidden;
        }

        .massage-hero,
        .massage-function-section,
        .massage-feature-section {
          width: 100%;
        }

        .massage-hero-image,
        .massage-function-bg,
        .massage-feature-bg,
        .massage-section-image {
          user-select: none;
        }

        .massage-function-section {
          height: min(100vh, 980px);
          min-height: 720px;
        }

        .massage-feature-section {
          height: min(110vh, 1080px);
          min-height: 820px;
        }

        .massage-function-tab:hover,
        .massage-feature-tab:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,0.72) !important;
        }

        .massage-application-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: clamp(22px, 2vw, 40px);
          width: 100%;
        }

        .massage-application-card {
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.86);
          border-radius: clamp(14px, 1vw, 20px);
          background: rgba(255,255,255,0.58);
          box-shadow: 0 22px 56px rgba(90,60,40,0.09);
          backdrop-filter: blur(8px);
        }

        .massage-application-image {
          display: block;
          width: 100%;
          aspect-ratio: 1.45 / 1;
          object-fit: cover;
          object-position: center;
          user-select: none;
        }

        .massage-application-body {
          display: grid;
          grid-template-columns: clamp(58px, 4.6vw, 92px) 1fr;
          gap: clamp(18px, 1.6vw, 32px);
          align-items: center;
          padding: clamp(28px, 2.4vw, 48px) clamp(28px, 2.6vw, 52px);
        }

        .massage-application-icon {
          color: ${COLORS.accentDark};
          font-size: clamp(2.6rem, 3.1vw, 4.6rem);
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .massage-application-title {
          margin: 0;
          color: ${COLORS.textMain};
          font-weight: 600;
          font-size: clamp(1.35rem, 1.45vw, 2.15rem);
          line-height: 1.18;
          letter-spacing: ${language === "zh" ? "-0.02em" : "-0.025em"};
        }

        .massage-application-description {
          margin: clamp(10px, 0.8vw, 16px) 0 0;
          color: ${COLORS.textSoft};
          font-weight: 400;
          font-size: clamp(1.02rem, 1.06vw, 1.42rem);
          line-height: 1.56;
          letter-spacing: ${language === "zh" ? "0.01em" : "-0.01em"};
        }

        @media (max-width: 1440px) {
          .massage-application-section {
            padding-left: clamp(18px, 2.8vw, 44px) !important;
            padding-right: clamp(18px, 2.8vw, 44px) !important;
          }

          .massage-application-body {
            padding: clamp(24px, 2vw, 38px) clamp(22px, 2vw, 38px);
          }
        }

        @media (max-width: 1280px) {
          .massage-hero-content {
            left: 6.5% !important;
            top: 31% !important;
            max-width: 42vw !important;
          }

          .massage-function-section {
            height: min(100vh, 860px);
            min-height: 660px;
          }

          .massage-feature-section {
            height: min(110vh, 980px);
            min-height: 780px;
          }

          .massage-function-content {
            left: 5.6% !important;
            top: 6.5% !important;
            width: 34vw !important;
          }

          .massage-feature-content {
            left: 5.6% !important;
            top: 5.2% !important;
            width: 46vw !important;
          }

          .massage-function-image-text {
            bottom: 7% !important;
            width: 60vw !important;
          }

          .massage-application-grid {
            gap: clamp(18px, 1.8vw, 30px);
          }

          .massage-application-body {
            grid-template-columns: 54px 1fr;
          }
        }

        @media (max-width: 1024px) {
          .massage-hero-content {
            left: 6% !important;
            top: 28% !important;
            max-width: 46vw !important;
          }

          .massage-function-section {
            height: min(100vh, 780px);
            min-height: 620px;
          }

          .massage-feature-section {
            height: min(112vh, 900px);
            min-height: 760px;
          }

          .massage-function-content {
            left: 5% !important;
            top: 6% !important;
            width: 38vw !important;
          }

          .massage-feature-content {
            left: 5% !important;
            top: 5% !important;
            width: 52vw !important;
          }

          .massage-function-title,
          .massage-feature-title {
            font-size: clamp(2.1rem, 3.4vw, 3.6rem) !important;
          }

          .massage-function-image-text {
            bottom: 6% !important;
            width: 66vw !important;
          }

          .massage-application-grid {
            grid-template-columns: 1fr;
            max-width: 820px;
            margin: 0 auto;
          }

          .massage-application-image {
            aspect-ratio: 1.6 / 1;
          }

          .massage-application-body {
            grid-template-columns: 70px 1fr;
          }
        }

        @media (max-width: 768px) {
          .massage-hero,
          .massage-function-section,
          .massage-feature-section {
            display: flex;
            flex-direction: column;
          }

          .massage-hero-image {
            min-height: 520px;
            object-fit: cover;
            object-position: 68% center;
          }

          .massage-hero-content {
            position: static !important;
            max-width: none !important;
            padding: 34px 24px 48px;
            background: ${COLORS.pageBg};
            justify-content: center;
            align-items: stretch;
          }

          .massage-hero-title {
            font-size: clamp(2.6rem, 12vw, 4.2rem) !important;
          }

          .massage-hero-subtitle {
            font-size: clamp(1.05rem, 5vw, 1.4rem) !important;
          }

          .massage-hero-buttons {
            width: 100%;
          }

          .massage-hero-buttons a {
            width: 100% !important;
          }

          .massage-function-section,
          .massage-feature-section {
            height: auto;
            min-height: 0;
          }

          .massage-function-bg,
          .massage-feature-bg {
            order: 2;
            height: 520px !important;
            object-fit: cover !important;
            object-position: 62% center !important;
          }

          .massage-function-content,
          .massage-feature-content {
            order: 1;
            position: static !important;
            width: auto !important;
            padding: 40px 24px 32px;
            background: ${COLORS.pageBg};
          }

          .massage-function-title,
          .massage-feature-title {
            font-size: clamp(2.4rem, 10vw, 4rem) !important;
            white-space: normal !important;
          }

          .massage-function-tabs,
          .massage-feature-tabs {
            margin-top: 30px !important;
          }

          .massage-function-tab {
            min-height: 76px !important;
          }

          .massage-feature-tabs {
            grid-template-columns: 1fr !important;
            border-radius: 20px !important;
          }

          .massage-feature-tab {
            min-height: 82px !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(185,138,98,0.22) !important;
            justify-content: flex-start !important;
          }

          .massage-feature-info {
            margin-top: 18px !important;
            min-height: auto !important;
            border: 1px solid ${COLORS.accentBorder} !important;
            border-radius: 20px !important;
          }

          .massage-function-image-text {
            order: 3;
            position: static !important;
            width: auto !important;
            padding: 34px 24px 56px !important;
            transform: none !important;
            background: ${COLORS.pageBg} !important;
            box-shadow: none !important;
            backdrop-filter: none !important;
          }

          .massage-application-section {
            padding: 56px clamp(16px, 4vw, 28px) !important;
          }

          .massage-application-header {
            text-align: left !important;
            margin-bottom: 34px !important;
          }

          .massage-application-header div {
            margin-left: 0 !important;
            margin-right: 0 !important;
          }

          .massage-application-grid {
            max-width: none;
          }

          .massage-application-image {
            aspect-ratio: 1.35 / 1;
          }

          .massage-application-body {
            grid-template-columns: 54px 1fr;
            padding: 24px 22px;
          }
        }

        @media (max-width: 520px) {
          .massage-hero-buttons {
            flex-direction: column;
          }

          .massage-function-tab {
            grid-template-columns: 50px 1fr auto !important;
            gap: 14px !important;
            padding: 14px 16px !important;
          }

          .massage-application-body {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .massage-application-icon {
            justify-content: flex-start;
          }
        }
      `}</style>
    </main>
  );
}