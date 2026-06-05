/**
 * ASTRAQ Store Page
 * Design: Dark industrial style — warm dark background, white text, gold accent
 * Content: Store enquiry form only
 * English / Chinese supported
 */

import Footer from "../components/Footer";
import { useLanguage } from "../i18n/LanguageContext";

const ACCENT_COLOR = "#C9A46A";

export default function Store() {
  const { language } = useLanguage();

  const getLabel = (en: string, zh: string) => {
    return language === "zh" ? zh : en;
  };

  const textTransform =
    language === "zh" ? ("none" as const) : ("uppercase" as const);

  const titleLetterSpacing = language === "zh" ? "-0.04em" : "0.05em";
  const smallLetterSpacing = language === "zh" ? "0.04em" : "0.03em";
  const buttonLetterSpacing = language === "zh" ? "0.04em" : "0.08em";

  const inputStyle: React.CSSProperties = {
    height: "58px",
    padding: "0 1.1rem",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.22)",
    color: "#FFFFFF",
    fontFamily:
      "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSize: "1.18rem",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily:
      "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontWeight: 700,
    fontSize: "1.15rem",
    color: "rgba(255,255,255,0.86)",
    letterSpacing: language === "zh" ? "0.02em" : "0",
  };

  return (
    <main
      className="min-h-screen text-white"
      style={{
        background: "#3F3432",
      }}
    >
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          minHeight: "100vh",
          paddingTop: "clamp(8rem, 10vw, 12rem)",
          paddingBottom: "clamp(5rem, 8vw, 9rem)",
          background:
            "linear-gradient(180deg, #2E2726 0%, #3F3432 55%, #342B29 100%)",
        }}
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 42%, rgba(201,164,106,0.12) 0%, transparent 55%)",
          }}
        />

        {/* Subtle dark overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.08) 45%, rgba(0,0,0,0.35) 100%)",
          }}
        />

        <div className="relative z-10 w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24">
          {/* Page title */}
          <div className="text-center mb-12">
            <h1
              style={{
                fontFamily:
                  "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontWeight: 700,
                fontSize:
                  language === "zh"
                    ? "clamp(3rem, 5vw, 6.4rem)"
                    : "clamp(3rem, 5.2vw, 6.8rem)",
                lineHeight: 0.98,
                letterSpacing: titleLetterSpacing,
                textTransform,
                color: "#FFFFFF",
                marginBottom: "1.2rem",
              }}
            >
              {getLabel("Contact Us", "联系我们")}
            </h1>

            <p
              style={{
                fontFamily:
                  "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontWeight: 500,
                fontSize: "clamp(1.05rem, 1.15vw, 1.45rem)",
                lineHeight: 1.6,
                letterSpacing: smallLetterSpacing,
                color: "rgba(255,255,255,0.68)",
              }}
            >
              {getLabel(
                "Tell us what you are interested in, and our team will get back to you shortly.",
                "请告诉我们您关注的产品或合作需求，我们的团队会尽快与您联系。"
              )}
            </p>
          </div>

          {/* Form card */}
          <div className="mx-auto w-full max-w-[720px]">
            <div
              className="rounded-2xl"
              style={{
                background: "rgba(20, 18, 17, 0.72)",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 24px 80px rgba(0,0,0,0.32)",
                padding: "clamp(2rem, 3vw, 3.4rem)",
                backdropFilter: "blur(14px)",
              }}
            >
              <h2
                style={{
                  fontFamily:
                    "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.9rem, 2.2vw, 2.8rem)",
                  lineHeight: 1.1,
                  letterSpacing: language === "zh" ? "-0.02em" : "0.03em",
                  color: "#FFFFFF",
                  marginBottom: "0.65rem",
                }}
              >
                {getLabel("Send us a Message", "提交咨询信息")}
              </h2>

              <p
                style={{
                  fontFamily:
                    "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(1rem, 1vw, 1.15rem)",
                  lineHeight: 1.55,
                  color: "rgba(255,255,255,0.58)",
                  marginBottom: "2rem",
                }}
              >
                {getLabel(
                  "Please leave your details below. We will contact you with product availability and purchase information.",
                  "请在下方留下您的联系信息。我们会根据您的产品兴趣提供后续沟通和采购信息。"
                )}
              </p>

              <form className="space-y-7">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block mb-3" style={labelStyle}>
                    {getLabel("Name *", "姓名 *")}
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder={getLabel("Your full name", "请输入您的姓名")}
                    required
                    className="w-full rounded-md outline-none transition-all placeholder:text-white/36"
                    style={inputStyle}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-3"
                    style={labelStyle}
                  >
                    {getLabel("Email *", "邮箱 *")}
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={getLabel(
                      "your.email@company.com",
                      "your.email@company.com"
                    )}
                    required
                    className="w-full rounded-md outline-none transition-all placeholder:text-white/36"
                    style={inputStyle}
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block mb-3"
                    style={labelStyle}
                  >
                    {getLabel("Company", "公司")}
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder={getLabel(
                      "Your company name",
                      "请输入公司名称"
                    )}
                    className="w-full rounded-md outline-none transition-all placeholder:text-white/36"
                    style={inputStyle}
                  />
                </div>

                {/* Product Interest */}
                <div>
                  <label
                    htmlFor="product"
                    className="block mb-3"
                    style={labelStyle}
                  >
                    {getLabel("Product Interest *", "感兴趣的产品 *")}
                  </label>

                  <select
                    id="product"
                    name="product"
                    required
                    className="w-full rounded-md outline-none transition-all"
                    defaultValue=""
                    style={inputStyle}
                  >
                    <option value="" disabled style={{ color: "#111" }}>
                      {getLabel("Select a product", "请选择产品")}
                    </option>

                    <option value="diesel-truck" style={{ color: "#111" }}>
                      {getLabel("Diesel Truck", "柴油卡车")}
                    </option>

                    <option value="electric-truck" style={{ color: "#111" }}>
                      {getLabel("Electric Truck", "电动卡车")}
                    </option>

                    <option value="solar-energy" style={{ color: "#111" }}>
                      {getLabel(
                        "Solar-Storage-Charging Station",
                        "光储充一体化站"
                      )}
                    </option>

                    <option value="humanoid-robot" style={{ color: "#111" }}>
                      {getLabel("ET-H Humanoid Robot", "ET-H 人形机器人")}
                    </option>

                    <option value="massage-robot" style={{ color: "#111" }}>
                      {getLabel("ET-M Massage Robot", "ET-M 按摩机器人")}
                    </option>

                    <option value="other" style={{ color: "#111" }}>
                      {getLabel("Other", "其他")}
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-3"
                    style={labelStyle}
                  >
                    {getLabel("Message *", "留言 *")}
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    placeholder={getLabel(
                      "Tell us about your enquiry...",
                      "请简单说明您的需求..."
                    )}
                    required
                    rows={6}
                    className="w-full rounded-md outline-none resize-none transition-all placeholder:text-white/36"
                    style={{
                      padding: "1.1rem",
                      minHeight: "175px",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.22)",
                      color: "#FFFFFF",
                      fontFamily:
                        "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                      fontSize: "1.18rem",
                      lineHeight: 1.5,
                    }}
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full rounded-md transition-all duration-300 hover:opacity-90 active:scale-[0.99]"
                  style={{
                    height: "62px",
                    background: ACCENT_COLOR,
                    color: "#1F1A18",
                    fontFamily:
                      "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    letterSpacing: buttonLetterSpacing,
                    textTransform,
                    border: "none",
                    marginTop: "1.8rem",
                  }}
                >
                  {getLabel("Send Enquiry", "提交咨询")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}