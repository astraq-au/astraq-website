/**
 * ASTRAQ Footer — Light Premium Design
 * Heavy Truck links directly to Products section
 * English / Chinese / Spanish / Arabic supported
 */

import { useState } from "react";
import { toast } from "sonner";
import { useLanguage } from "../i18n/LanguageContext";

const FONT_FAMILY =
  "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

const FOOTER_BG = "#cac5ba";
const FOOTER_TEXT = "rgba(35,35,35,0.68)";
const FOOTER_TEXT_STRONG = "rgba(35,35,35,0.88)";
const FOOTER_TEXT_MUTED = "rgba(35,35,35,0.42)";
const FOOTER_LINE = "rgba(35,35,35,0.14)";
const FOOTER_DROPDOWN_BG = "rgba(238,233,224,0.96)";
const ACCENT_COLOR = "#9B7A45";

type LangCode = "en" | "zh" | "es" | "ar";

type FooterLink = {
  label: Record<LangCode, string>;
  href: string;
  active?: boolean;
};

const footerLinks: FooterLink[] = [
  {
    label: {
      en: "Home",
      zh: "首页",
      es: "Inicio",
      ar: "الرئيسية",
    },
    href: "/",
    active: true,
  },
  {
    label: {
      en: "Heavy Truck",
      zh: "重型卡车",
      es: "Camiones Pesados",
      ar: "الشاحنات الثقيلة",
    },
    href: "/#products",
    active: true,
  },
  {
    label: {
      en: "Energy System",
      zh: "能源系统",
      es: "Sistema Energético",
      ar: "نظام الطاقة",
    },
    href: "/products/solar-charging-station",
    active: true,
  },
  {
    label: {
      en: "AI Technology",
      zh: "AI 科技",
      es: "Tecnología IA",
      ar: "تقنية الذكاء الاصطناعي",
    },
    href: "/products/humanoid-robot",
    active: true,
  },
  {
    label: {
      en: "Store",
      zh: "商店",
      es: "Tienda",
      ar: "المتجر",
    },
    href: "/store",
    active: true,
  },
  {
    label: {
      en: "About",
      zh: "关于我们",
      es: "Sobre Nosotros",
      ar: "من نحن",
    },
    href: "/about",
    active: true,
  },
];

const aiTechnologyLinks: FooterLink[] = [
  {
    label: {
      en: "Humanoid Robot",
      zh: "人形机器人",
      es: "Robot Humanoide",
      ar: "روبوت بشري",
    },
    href: "/products/humanoid-robot",
    active: true,
  },
  {
    label: {
      en: "Massage Robot",
      zh: "按摩机器人",
      es: "Robot de Masaje",
      ar: "روبوت مساج",
    },
    href: "/massage-ai",
    active: true,
  },
];

const aboutLinks: FooterLink[] = [
  {
    label: {
      en: "About Us",
      zh: "关于我们",
      es: "Sobre Nosotros",
      ar: "من نحن",
    },
    href: "/about",
    active: true,
  },
  {
    label: {
      en: "News",
      zh: "新闻",
      es: "Noticias",
      ar: "الأخبار",
    },
    href: "/news",
    active: true,
  },
  {
    label: {
      en: "Investor Relations",
      zh: "投资者关系",
      es: "Relación con Inversores",
      ar: "علاقات المستثمرين",
    },
    href: "#",
    active: false,
  },
  {
    label: {
      en: "Join Us",
      zh: "加入我们",
      es: "Únete a Nosotros",
      ar: "انضم إلينا",
    },
    href: "#",
    active: false,
  },
];

const footerText = {
  en: {
    comingSoon: "Coming soon",
    underDevelopment: "page is under development.",
    rights: "All rights reserved.",
    slogan: "Future Mobility",
  },
  zh: {
    comingSoon: "即将上线",
    underDevelopment: "页面正在开发中。",
    rights: "版权所有。",
    slogan: "未来出行",
  },
  es: {
    comingSoon: "Próximamente",
    underDevelopment: "página en desarrollo.",
    rights: "Todos los derechos reservados.",
    slogan: "Movilidad del Futuro",
  },
  ar: {
    comingSoon: "قريبًا",
    underDevelopment: "الصفحة قيد التطوير.",
    rights: "جميع الحقوق محفوظة.",
    slogan: "تنقل المستقبل",
  },
};

function normalizeLanguage(language: string): LangCode {
  if (language === "zh" || language === "es" || language === "ar") {
    return language;
  }

  return "en";
}

export default function Footer() {
  const { language } = useLanguage();
  const currentLanguage = normalizeLanguage(language);

  const [aiOpen, setAiOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const isZh = currentLanguage === "zh";
  const isAr = currentLanguage === "ar";

  const getLabel = (label: Record<LangCode, string>) => {
    return label[currentLanguage] || label.en;
  };

  const handleClick = (link: FooterLink, e: React.MouseEvent) => {
    if (link.active === false || link.href === "#") {
      e.preventDefault();

      toast(footerText[currentLanguage].comingSoon, {
        description: `${getLabel(link.label)} ${
          footerText[currentLanguage].underDevelopment
        }`,
      });

      return;
    }

    const isHomePage = window.location.pathname === "/";
    const hasHash = link.href.includes("#");

    if (isHomePage && hasHash) {
      const hash = link.href.split("#")[1];
      const target = document.querySelector(`#${hash}`);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }

      return;
    }

    window.location.href = link.href;
  };

  const footerLinkStyle = {
    fontFamily: FONT_FAMILY,
    fontWeight: 600,
    fontSize: "clamp(0.85rem, 0.95vw, 1.3rem)",
    letterSpacing: isZh || isAr ? "0.04em" : "0.06em",
    textTransform: isZh || isAr ? ("none" as const) : ("uppercase" as const),
    color: FOOTER_TEXT,
    textDecoration: "none",
    transition: "color 0.3s ease",
    cursor: "pointer",
    whiteSpace: "nowrap" as const,
  };

  const dropdownLinkStyle = {
  display: "block",
  padding: "0.55rem 0",
  fontFamily: FONT_FAMILY,
  fontWeight: 600,
  fontSize: "clamp(0.78rem, 0.82vw, 1.02rem)",
  letterSpacing: isZh || isAr ? "0.04em" : "0.06em",
  textTransform: isZh || isAr ? ("none" as const) : ("uppercase" as const),
  color: FOOTER_TEXT,
  textDecoration: "none",
  transition: "all 0.25s ease",
  whiteSpace: "nowrap" as const,
  textAlign: "center" as const,
};

  const dropdownWrapperStyle = {
    position: "relative" as const,
    paddingTop: "0.75rem",
    paddingBottom: "0.75rem",
    marginTop: "-0.75rem",
    marginBottom: "-0.75rem",
  };

    const renderDropdown = (links: FooterLink[]) => (
  <div
    style={{
      position: "absolute",
      left: "50%",
      top: "100%",
      transform: "translateX(-50%)",
      minWidth: "clamp(220px, 13vw, 300px)",
      background: "transparent",
      padding: "0.7rem 0 0",
      marginTop: "0.2rem",
      zIndex: 999,
      backdropFilter: "none",
      boxShadow: "none",
      fontFamily: FONT_FAMILY,
    }}
  >
      {links.map((item) => (
        <a
          key={item.label.en}
          href={item.href}
          onClick={(e) => handleClick(item, e)}
          style={{
            ...dropdownLinkStyle,
            color:
              item.active === false || item.href === "#"
                ? "rgba(35,35,35,0.32)"
                : FOOTER_TEXT,
            cursor:
              item.active === false || item.href === "#" ? "default" : "pointer",
          }}
          onMouseEnter={(e) => {
            if (item.active === false || item.href === "#") return;
            e.currentTarget.style.color = FOOTER_TEXT_STRONG;
            e.currentTarget.style.background = "transparent";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color =
              item.active === false || item.href === "#"
                ? "rgba(35,35,35,0.32)"
                : FOOTER_TEXT;
            e.currentTarget.style.background = "transparent";
          }}
        >
          {getLabel(item.label)}
        </a>
      ))}
    </div>
  );

  return (
    <footer
      style={{
        background: FOOTER_BG,
        borderTop: `1px solid ${FOOTER_LINE}`,
        paddingTop: "clamp(4rem, 6vw, 7rem)",
        paddingBottom: "clamp(2.5rem, 4vw, 4.5rem)",
        overflow: "visible",
        fontFamily: FONT_FAMILY,
        direction: "ltr",
      }}
    >
      <div className="w-full max-w-[92vw] 2xl:max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-16 mb-[clamp(3rem,5vw,5rem)]">
          {/* Logo + tagline */}
          <div>
            <img
              src="/astraq-logo.png"
              alt="ASTRAQ"
              className="w-[clamp(130px,9vw,230px)] h-auto object-contain mb-4"
              style={{
                filter: "brightness(0)",
                opacity: 0.82,
              }}
            />

            <p
              style={{
                fontFamily: FONT_FAMILY,
                fontWeight: 400,
                fontSize: "clamp(0.9rem, 0.95vw, 1.15rem)",
                color: FOOTER_TEXT,
                maxWidth: "clamp(280px, 22vw, 420px)",
                lineHeight: 1.65,
                letterSpacing: "-0.01em",
              }}
            ></p>
          </div>

          {/* Nav links */}
          <div className="flex flex-nowrap items-center gap-x-[clamp(1.2rem,2vw,3rem)] whitespace-nowrap">
            {footerLinks.map((link) => {
              if (link.label.en === "AI Technology") {
                return (
                  <div
                    key={link.label.en}
                    style={dropdownWrapperStyle}
                    onMouseEnter={() => setAiOpen(true)}
                    onMouseLeave={() => setAiOpen(false)}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleClick(link, e)}
                      style={footerLinkStyle}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = FOOTER_TEXT_STRONG;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = FOOTER_TEXT;
                      }}
                    >
                      {getLabel(link.label)}
                    </a>

                    {aiOpen && renderDropdown(aiTechnologyLinks)}
                  </div>
                );
              }

              if (link.label.en === "About") {
                return (
                  <div
                    key={link.label.en}
                    style={dropdownWrapperStyle}
                    onMouseEnter={() => setAboutOpen(true)}
                    onMouseLeave={() => setAboutOpen(false)}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleClick(link, e)}
                      style={footerLinkStyle}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = FOOTER_TEXT_STRONG;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = FOOTER_TEXT;
                      }}
                    >
                      {getLabel(link.label)}
                    </a>

                    {aboutOpen && renderDropdown(aboutLinks)}
                  </div>
                );
              }

              return (
                <a
                  key={link.label.en}
                  href={link.href}
                  onClick={(e) => handleClick(link, e)}
                  style={footerLinkStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = FOOTER_TEXT_STRONG;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = FOOTER_TEXT;
                  }}
                >
                  {getLabel(link.label)}
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div
          className="mb-8"
          style={{
            width: "100%",
            height: "1px",
            background: FOOTER_LINE,
          }}
        />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            style={{
              fontFamily: FONT_FAMILY,
              fontWeight: 400,
              fontSize: "clamp(0.75rem, 0.75vw, 0.95rem)",
              color: FOOTER_TEXT_MUTED,
              letterSpacing: "0.02em",
            }}
          >
            © {new Date().getFullYear()} ASTRAQ.{" "}
            {footerText[currentLanguage].rights}
          </p>

          <div className="flex items-center gap-2">
            <span
              className="block w-[clamp(16px,1.5vw,28px)] h-px"
              style={{ background: "rgba(155,122,69,0.55)" }}
            />

            <span
              style={{
                fontFamily: FONT_FAMILY,
                fontWeight: 600,
                fontSize:
                  currentLanguage === "ar"
                    ? "clamp(1.6rem, 1.9vw, 2.25rem)"
                    : "clamp(2rem, 2.2vw, 2.5rem)",
                letterSpacing: isZh || isAr ? "0.05em" : "0.08em",
                textTransform:
                  isZh || isAr ? ("none" as const) : ("uppercase" as const),
                color: ACCENT_COLOR,
                whiteSpace: "nowrap",
              }}
            >
              {footerText[currentLanguage].slogan}
            </span>

            <span
              className="block w-[clamp(16px,1.5vw,28px)] h-px"
              style={{ background: "rgba(155,122,69,0.55)" }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}