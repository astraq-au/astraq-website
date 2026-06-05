/**
 * ASTRAQ Footer — Light Premium Design
 * Heavy Truck links directly to Products section
 * English / Chinese supported
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

const footerLinks = [
  { label: "Home", zhLabel: "首页", href: "/", active: true },
  { label: "Heavy Truck", zhLabel: "重型卡车", href: "/#products", active: true },
  {
    label: "Energy System",
    zhLabel: "能源系统",
    href: "/products/solar-charging-station",
    active: true,
  },
  {
    label: "AI Technology",
    zhLabel: "AI 科技",
    href: "/products/humanoid-robot",
    active: true,
  },
  { label: "Store", zhLabel: "商店", href: "/store", active: true },
  { label: "About", zhLabel: "关于我们", href: "/about", active: true },
];

const aiTechnologyLinks = [
  {
    label: "Humanoid Robot",
    zhLabel: "人形机器人",
    href: "/products/humanoid-robot",
    active: true,
  },
  {
    label: "Massage Robot",
    zhLabel: "按摩机器人",
    href: "/massage-ai",
    active: true,
  },
];

const aboutLinks = [
  { label: "About Us", zhLabel: "关于我们", href: "/about", active: true },
  { label: "News", zhLabel: "新闻", href: "/news", active: true },
  {
    label: "Investor Relations",
    zhLabel: "投资者关系",
    href: "#",
    active: false,
  },
  { label: "Join Us", zhLabel: "加入我们", href: "#", active: false },
];

type FooterLink = {
  label: string;
  zhLabel: string;
  href: string;
  active?: boolean;
};

export default function Footer() {
  const { language } = useLanguage();

  const [aiOpen, setAiOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const getLabel = (en: string, zh: string) => {
    return language === "zh" ? zh : en;
  };

  const handleClick = (link: FooterLink, e: React.MouseEvent) => {
    if (link.active === false || link.href === "#") {
      e.preventDefault();

      toast(language === "zh" ? "即将上线" : "Coming soon", {
        description:
          language === "zh"
            ? `${link.zhLabel}页面正在开发中。`
            : `${link.label} page is under development.`,
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
    letterSpacing: language === "zh" ? "0.04em" : "0.06em",
    textTransform: language === "zh" ? ("none" as const) : ("uppercase" as const),
    color: FOOTER_TEXT,
    textDecoration: "none",
    transition: "color 0.3s ease",
    cursor: "pointer",
    whiteSpace: "nowrap" as const,
  };

  const dropdownLinkStyle = {
    display: "block",
    padding: "0.85rem 1.4rem",
    fontFamily: FONT_FAMILY,
    fontWeight: 600,
    fontSize: "clamp(0.8rem, 0.85vw, 1.08rem)",
    letterSpacing: language === "zh" ? "0.04em" : "0.06em",
    textTransform: language === "zh" ? ("none" as const) : ("uppercase" as const),
    color: FOOTER_TEXT,
    textDecoration: "none",
    transition: "all 0.25s ease",
    whiteSpace: "nowrap" as const,
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
        minWidth: "clamp(240px, 15vw, 340px)",
        background: FOOTER_DROPDOWN_BG,
        padding: "1rem 0",
        marginTop: "0.45rem",
        zIndex: 999,
        backdropFilter: "blur(14px)",
        boxShadow: "none",
        fontFamily: FONT_FAMILY,
      }}
    >
      {links.map((item) => (
        <a
          key={item.label}
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
            e.currentTarget.style.background = "rgba(35,35,35,0.06)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color =
              item.active === false || item.href === "#"
                ? "rgba(35,35,35,0.32)"
                : FOOTER_TEXT;
            e.currentTarget.style.background = "transparent";
          }}
        >
          {getLabel(item.label, item.zhLabel)}
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
              if (link.label === "AI Technology") {
                return (
                  <div
                    key={link.label}
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
                      {getLabel(link.label, link.zhLabel)}
                    </a>

                    {aiOpen && renderDropdown(aiTechnologyLinks)}
                  </div>
                );
              }

              if (link.label === "About") {
                return (
                  <div
                    key={link.label}
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
                      {getLabel(link.label, link.zhLabel)}
                    </a>

                    {aboutOpen && renderDropdown(aboutLinks)}
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
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
                  {getLabel(link.label, link.zhLabel)}
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
            {getLabel("All rights reserved.", "版权所有。")}
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
                fontSize: "clamp(2rem, 2.2vw, 2.5rem)",
                letterSpacing: language === "zh" ? "0.05em" : "0.08em",
                textTransform:
                  language === "zh" ? ("none" as const) : ("uppercase" as const),
                color: ACCENT_COLOR,
              }}
            >
              {getLabel("Logistics, Reimagining", "物流，重新定义")}
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