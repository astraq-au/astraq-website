 /**
 * ASTRAQ Navbar — Dark Sci-Fi Design
 * With globe language selector: English / Chinese / Spanish / Arabic
 */

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

const FONT_FAMILY =
  "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

type LangCode = "en" | "zh" | "es" | "ar";

const languageOptions: { code: LangCode; label: string; shortLabel: string }[] = [
  { code: "en", label: "English", shortLabel: "EN" },
  { code: "zh", label: "中文", shortLabel: "中" },
  { code: "es", label: "Español", shortLabel: "ES" },
  { code: "ar", label: "العربية", shortLabel: "AR" },
];

const navLinks = [
  {
    key: "home",
    labels: {
      en: "HOME",
      zh: "首页",
      es: "INICIO",
      ar: "الرئيسية",
    },
    href: "/",
  },
  {
    key: "heavyTruck",
    labels: {
      en: "HEAVY TRUCK",
      zh: "重型卡车",
      es: "CAMIONES PESADOS",
      ar: "الشاحنات الثقيلة",
    },
    href: "/#products",
  },
  {
    key: "energySystem",
    labels: {
      en: "ENERGY SYSTEM",
      zh: "能源系统",
      es: "SISTEMA ENERGÉTICO",
      ar: "نظام الطاقة",
    },
    href: "/products/solar-charging-station",
  },
  {
    key: "aiTechnology",
    labels: {
      en: "AI TECHNOLOGY",
      zh: "AI 科技",
      es: "TECNOLOGÍA IA",
      ar: "تقنية الذكاء الاصطناعي",
    },
    href: "/products/humanoid-robot",
  },
  {
    key: "store",
    labels: {
      en: "STORE",
      zh: "商店",
      es: "TIENDA",
      ar: "المتجر",
    },
    href: "/store",
  },
  {
    key: "about",
    labels: {
      en: "ABOUT",
      zh: "关于我们",
      es: "SOBRE NOSOTROS",
      ar: "من نحن",
    },
    href: "/about",
  },
];

const mobileNavLinks = [
  {
    key: "home",
    labels: {
      en: "HOME",
      zh: "首页",
      es: "INICIO",
      ar: "الرئيسية",
    },
    href: "/",
  },
  {
    key: "heavyTruck",
    labels: {
      en: "HEAVY TRUCK",
      zh: "重型卡车",
      es: "CAMIONES PESADOS",
      ar: "الشاحنات الثقيلة",
    },
    href: "/#products",
  },
  {
    key: "energySystem",
    labels: {
      en: "ENERGY SYSTEM",
      zh: "能源系统",
      es: "SISTEMA ENERGÉTICO",
      ar: "نظام الطاقة",
    },
    href: "/products/solar-charging-station",
  },
  {
    key: "humanoidRobot",
    labels: {
      en: "HUMANOID ROBOT",
      zh: "人形机器人",
      es: "ROBOT HUMANOIDE",
      ar: "روبوت بشري",
    },
    href: "/products/humanoid-robot",
  },
  {
  key: "massageRobot",
  labels: {
    en: "MASSAGE ROBOT",
    zh: "按摩机器人",
    es: "ROBOT DE MASAJE",
    ar: "روبوت مساج",
  },
  href: "/products/massage-robot",
},
  {
    key: "store",
    labels: {
      en: "STORE",
      zh: "商店",
      es: "TIENDA",
      ar: "المتجر",
    },
    href: "/store",
  },
  {
    key: "about",
    labels: {
      en: "ABOUT",
      zh: "关于我们",
      es: "SOBRE NOSOTROS",
      ar: "من نحن",
    },
    href: "/about",
  },
];

const aboutLinks = [
  {
    labels: {
      en: "ABOUT US",
      zh: "关于我们",
      es: "SOBRE NOSOTROS",
      ar: "من نحن",
    },
    href: "/about",
  },
  {
    labels: {
      en: "NEWS",
      zh: "新闻",
      es: "NOTICIAS",
      ar: "الأخبار",
    },
    href: "/news",
  },
  {
    labels: {
      en: "INVESTOR RELATIONS",
      zh: "投资者关系",
      es: "RELACIÓN CON INVERSORES",
      ar: "علاقات المستثمرين",
    },
    href: "#",
  },
  {
    labels: {
      en: "JOIN US",
      zh: "加入我们",
      es: "ÚNETE A NOSOTROS",
      ar: "انضم إلينا",
    },
    href: "#",
  },
];

const heavyTruckGroups = [
  {
    labels: {
      en: "DIESEL TRUCK",
      zh: "柴油卡车",
      es: "CAMIÓN DIÉSEL",
      ar: "شاحنة ديزل",
    },
    typeKey: "diesel",
    href: "/products/diesel-truck",
    models: [
      {
        name: "DM1",
        href: "/products/diesel-truck",
        image: "/diesel1.png",
        imageScale: 1.35,
        imageOffsetY: 10,
      },
      {
        name: "DPM1",
        href: "/products/diesel-truck-2",
        image: "/diesel2.png",
        imageScale: 1.08,
        imageOffsetY: 0,
      },
    ],
  },
  {
    labels: {
      en: "ELECTRIC TRUCK",
      zh: "电动卡车",
      es: "CAMIÓN ELÉCTRICO",
      ar: "شاحنة كهربائية",
    },
    typeKey: "electric",
    href: "/products/electric-truck",
    models: [
      {
        name: "EPM1",
        href: "/products/electric-truck",
        image: "/electric1.png",
        imageScale: 1.05,
        imageOffsetY: 0,
      },
      {
        name: "EL1",
        href: "/products/electric-truck-2",
        image: "/electric2.png",
        imageScale: 1.38,
        imageOffsetY: 8,
      },
    ],
  },
];

const aiTechnologyGroups = [
  {
    labels: {
      en: "ROBOT",
      zh: "机器人",
      es: "ROBOT",
      ar: "روبوت",
    },
    typeKey: "robot",
    href: "/products/humanoid-robot",
    models: [
      {
        labels: {
          en: "Humanoid Robot",
          zh: "人形机器人",
          es: "Robot Humanoide",
          ar: "روبوت بشري",
        },
        href: "/products/humanoid-robot",
        image: "/robot1.png",
      },
      {
  labels: {
    en: "Massage Robot",
    zh: "按摩机器人",
    es: "Robot de Masaje",
    ar: "روبوت مساج",
  },
  href: "/products/massage-robot",
  image: "/robot2.png",
},
    ],
  },
];

const navTextStyle = {
  fontFamily: FONT_FAMILY,
  fontWeight: 600,
  fontSize: "clamp(0.82rem, 1vw, 1.45rem)",
  letterSpacing: "clamp(0.035em, 0.07vw, 0.08em)",
  textTransform: "uppercase" as const,
  color: "rgba(255,255,255,0.85)",
  textDecoration: "none",
  whiteSpace: "nowrap" as const,
};

const menuTabTextStyle = {
  fontFamily: FONT_FAMILY,
  fontWeight: 600,
  fontSize: "clamp(0.95rem, 1.1vw, 1.45rem)",
  letterSpacing: "0.06em",
  textTransform: "uppercase" as const,
};

const modelNameTextStyle = {
  fontFamily: FONT_FAMILY,
  fontWeight: 600,
  fontSize: "clamp(0.9rem, 1vw, 1.3rem)",
  letterSpacing: "0.04em",
  textTransform: "uppercase" as const,
};

export default function Navbar() {
  const { language, setLanguage } = useLanguage();

  const currentLanguage: LangCode =
    language === "zh" || language === "es" || language === "ar"
      ? language
      : "en";

  const currentLanguageOption =
    languageOptions.find((item) => item.code === currentLanguage) ||
    languageOptions[0];

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [truckMenuOpen, setTruckMenuOpen] = useState(false);
  const [activeTruckType, setActiveTruckType] = useState("diesel");

  const [aiMenuOpen, setAiMenuOpen] = useState(false);
  const [activeAiType, setActiveAiType] = useState("robot");

  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const closeTruckMenuTimer = useRef<number | null>(null);
  const closeAiMenuTimer = useRef<number | null>(null);
  const desktopLanguageMenuRef = useRef<HTMLDivElement | null>(null);
  const mobileLanguageMenuRef = useRef<HTMLDivElement | null>(null);

  const getLabel = (labels: Record<LangCode, string>) => {
    return labels[currentLanguage] || labels.en;
  };

  const changeLanguage = (newLanguage: LangCode) => {
    setLanguage(newLanguage);
    setLanguageMenuOpen(false);
  };

  const openTruckMenu = () => {
    if (closeTruckMenuTimer.current) {
      window.clearTimeout(closeTruckMenuTimer.current);
    }

    if (closeAiMenuTimer.current) {
      window.clearTimeout(closeAiMenuTimer.current);
    }

    setTruckMenuOpen(true);
    setAiMenuOpen(false);
  };

  const closeTruckMenu = () => {
    closeTruckMenuTimer.current = window.setTimeout(() => {
      setTruckMenuOpen(false);
    }, 200);
  };

  const openAiMenu = () => {
    if (closeAiMenuTimer.current) {
      window.clearTimeout(closeAiMenuTimer.current);
    }

    if (closeTruckMenuTimer.current) {
      window.clearTimeout(closeTruckMenuTimer.current);
    }

    setAiMenuOpen(true);
    setTruckMenuOpen(false);
  };

  const closeAiMenu = () => {
    closeAiMenuTimer.current = window.setTimeout(() => {
      setAiMenuOpen(false);
    }, 200);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;

    const clickedDesktopMenu =
      desktopLanguageMenuRef.current &&
      desktopLanguageMenuRef.current.contains(target);

    const clickedMobileMenu =
      mobileLanguageMenuRef.current &&
      mobileLanguageMenuRef.current.contains(target);

    if (!clickedDesktopMenu && !clickedMobileMenu) {
      setLanguageMenuOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);

  useEffect(() => {
    document.documentElement.lang = currentLanguage;

    /**
     * 这里不要改成 rtl。
     * 当前网页整体布局是按照英文/中文从左到右设计的，
     * 直接 rtl 会导致导航栏、下拉菜单和页面排版错位。
     */
    document.documentElement.dir = "ltr";
  }, [currentLanguage]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(5,5,5,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        fontFamily: FONT_FAMILY,
      }}
    >
      <div className="w-full max-w-[96vw] 2xl:max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 2xl:px-24">
        <div className="flex items-center justify-between h-[clamp(72px,6vw,120px)]">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3 group -ml-2 lg:-ml-6 xl:-ml-10 2xl:-ml-16"
          >
            <img
              src="/astraq-logo.png"
              alt="ASTRAQ Logo"
              className="w-[clamp(95px,7vw,170px)] h-auto object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-[clamp(0.9rem,1.55vw,3rem)] ml-auto">
            {navLinks.map((link) => {
              if (link.key === "heavyTruck") {
                return (
                  <div
                    key={link.key}
                    className="relative"
                    onMouseEnter={openTruckMenu}
                    onMouseLeave={closeTruckMenu}
                  >
                    <button
                      type="button"
                      className="relative hover:text-[#C9A46A] transition-colors"
                      style={{
                        ...navTextStyle,
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      {getLabel(link.labels)}
                    </button>

                    {/* Heavy Truck Mega Menu */}
                    <div
                      onMouseEnter={openTruckMenu}
                      onMouseLeave={closeTruckMenu}
                      className={`fixed left-0 right-0 top-[clamp(68px,6vw,116px)] ${
                        truckMenuOpen ? "block" : "hidden"
                      }`}
                    >
                      <div
                        className="w-full border-t border-white/10 border-b border-white/10"
                        style={{
                          background: "rgba(255,255,255,0.98)",
                          backdropFilter: "blur(18px)",
                          boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
                        }}
                      >
                        <div className="max-w-[1600px] mx-auto px-10 py-[clamp(2.5rem,3vw,4rem)]">
                          <div className="flex justify-center gap-[clamp(3rem,5vw,8rem)] mb-[clamp(2rem,3vw,4rem)]">
                            {heavyTruckGroups.map((group) => (
                              <button
                                key={group.typeKey}
                                type="button"
                                onClick={() =>
                                  setActiveTruckType(group.typeKey)
                                }
                                className="relative pb-3 transition-colors"
                                style={{
                                  ...menuTabTextStyle,
                                  color:
                                    activeTruckType === group.typeKey
                                      ? "rgba(0,0,0,0.9)"
                                      : "rgba(0,0,0,0.55)",
                                  background: "transparent",
                                  border: "none",
                                  cursor: "pointer",
                                }}
                              >
                                {getLabel(group.labels)}

                                <span
                                  className="absolute left-1/2 bottom-0 h-[2px] -translate-x-1/2 transition-all duration-300"
                                  style={{
                                    width:
                                      activeTruckType === group.typeKey
                                        ? "100%"
                                        : "0",
                                    background: "#C9A46A",
                                  }}
                                />
                              </button>
                            ))}
                          </div>

                          <div className="max-w-[clamp(900px,65vw,1400px)] mx-auto">
                            {heavyTruckGroups
                              .filter(
                                (group) => group.typeKey === activeTruckType
                              )
                              .map((group) => (
                                <div key={group.typeKey}>
                                  <div className="grid grid-cols-2 gap-[clamp(3rem,5vw,8rem)]">
                                    {group.models.map((model) => (
                                      <a
                                        key={model.name}
                                        href={model.href}
                                        className="group/card block text-center no-underline"
                                      >
                                        <div className="h-[clamp(150px,12vw,260px)] flex items-center justify-center px-4">
                                          <img
                                            src={model.image}
                                            alt={model.name}
                                            className="max-h-[clamp(150px,11vw,240px)] max-w-full object-contain transition-transform duration-300"
                                            style={{
                                              mixBlendMode: "multiply",
                                              transform: `translateY(${
                                                model.imageOffsetY ?? 0
                                              }px) scale(${
                                                model.imageScale ?? 1
                                              })`,
                                            }}
                                          />
                                        </div>

                                        <div
                                          className="mt-4 text-black/80 group-hover/card:text-black transition-colors"
                                          style={modelNameTextStyle}
                                        >
                                          {model.name}
                                        </div>
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              if (link.key === "aiTechnology") {
                return (
                  <div
                    key={link.key}
                    className="relative"
                    onMouseEnter={openAiMenu}
                    onMouseLeave={closeAiMenu}
                  >
                    <button
                      type="button"
                      className="relative hover:text-[#C9A46A] transition-colors"
                      style={{
                        ...navTextStyle,
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      {getLabel(link.labels)}
                    </button>

                    {/* AI Technology Mega Menu */}
                    <div
                      onMouseEnter={openAiMenu}
                      onMouseLeave={closeAiMenu}
                      className={`fixed left-0 right-0 top-[clamp(68px,6vw,116px)] ${
                        aiMenuOpen ? "block" : "hidden"
                      }`}
                    >
                      <div
                        className="w-full border-t border-white/10 border-b border-white/10"
                        style={{
                          background: "rgba(255,255,255,0.98)",
                          backdropFilter: "blur(18px)",
                          boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
                        }}
                      >
                        <div className="max-w-[1600px] mx-auto px-10 py-[clamp(1.4rem,2vw,2.6rem)]">
                          <div className="flex justify-center gap-[clamp(3rem,5vw,8rem)] mb-[clamp(1rem,1.5vw,2rem)]">
                            {aiTechnologyGroups.map((group) => (
                              <button
                                key={group.typeKey}
                                type="button"
                                onClick={() => setActiveAiType(group.typeKey)}
                                className="relative pb-3 transition-colors"
                                style={{
                                  ...menuTabTextStyle,
                                  color:
                                    activeAiType === group.typeKey
                                      ? "rgba(0,0,0,0.9)"
                                      : "rgba(0,0,0,0.55)",
                                  background: "transparent",
                                  border: "none",
                                  cursor: "pointer",
                                }}
                              >
                                {getLabel(group.labels)}

                                <span
                                  className="absolute left-1/2 bottom-0 h-[2px] -translate-x-1/2 transition-all duration-300"
                                  style={{
                                    width:
                                      activeAiType === group.typeKey
                                        ? "100%"
                                        : "0",
                                    background: "#C9A46A",
                                  }}
                                />
                              </button>
                            ))}
                          </div>

                          <div className="max-w-[clamp(950px,68vw,1450px)] mx-auto">
                            {aiTechnologyGroups
                              .filter(
                                (group) => group.typeKey === activeAiType
                              )
                              .map((group) => (
                                <div key={group.typeKey}>
                                  <div className="grid grid-cols-2 gap-[clamp(4rem,7vw,10rem)]">
                                    {group.models.map((model) => (
                                      <a
                                        key={model.href}
                                        href={model.href}
                                        className="group/card block text-center no-underline"
                                      >
                                        <div className="h-[clamp(180px,13vw,260px)] flex items-center justify-center px-4">
                                          <img
                                            src={model.image}
                                            alt={getLabel(model.labels)}
                                            className="max-h-[clamp(170px,12vw,250px)] max-w-full object-contain transition-transform duration-300 scale-[1.12] group-hover/card:scale-[1.18]"
                                            style={{
                                              mixBlendMode: "multiply",
                                            }}
                                          />
                                        </div>

                                        <div
                                          className="mt-2 text-black/80 group-hover/card:text-black transition-colors"
                                          style={modelNameTextStyle}
                                        >
                                          {getLabel(model.labels)}
                                        </div>
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              if (link.key === "about") {
                return (
                  <div key={link.key} className="relative group">
                    <button
                      type="button"
                      className="relative hover:text-[#C9A46A] transition-colors"
                      style={{
                        ...navTextStyle,
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      {getLabel(link.labels)}
                    </button>

                    <div className="absolute left-1/2 top-full hidden min-w-[clamp(240px,16vw,340px)] -translate-x-1/2 pt-5 group-hover:block">
                      <div
                        className="overflow-hidden"
                        style={{
                          background: "rgba(20,20,20,0.92)",
                          backdropFilter: "blur(18px)",
                          boxShadow: "0 18px 45px rgba(0,0,0,0.35)",
                        }}
                      >
                        {aboutLinks.map((item) => (
                          <a
                            key={item.labels.en}
                            href={item.href}
                            onClick={(e) => {
                              if (item.href === "#") {
                                e.preventDefault();
                              }
                            }}
                            className="block px-6 py-4 hover:bg-white/10 transition-colors"
                            style={{
                              fontFamily: FONT_FAMILY,
                              fontWeight: 600,
                              fontSize: "clamp(0.8rem, 0.85vw, 1.15rem)",
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              color:
                                item.href === "#"
                                  ? "rgba(255,255,255,0.38)"
                                  : "rgba(255,255,255,0.85)",
                              textDecoration: "none",
                              cursor:
                                item.href === "#" ? "default" : "pointer",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {getLabel(item.labels)}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={link.key}
                  href={link.href}
                  className="relative hover:text-[#C9A46A] transition-colors"
                  style={navTextStyle}
                >
                  {getLabel(link.labels)}
                </a>
              );
            })}

            {/* Desktop Globe Language Selector */}
            <div className="relative" ref={desktopLanguageMenuRef}>
              <button
                type="button"
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                aria-label="Select language"
                className="relative hover:text-[#C9A46A] transition-colors"
                style={{
                  fontFamily: FONT_FAMILY,
                  fontWeight: 600,
                  fontSize: "clamp(0.82rem, 0.9vw, 1.15rem)",
                  letterSpacing: "0.04em",
                  color: "rgba(255,255,255,0.92)",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.28)",
                  borderRadius: "999px",
                  padding:
                    "clamp(7px, 0.6vw, 10px) clamp(12px, 1vw, 18px)",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ fontSize: "1.05em", lineHeight: 1 }}>🌐</span>
                <span>{currentLanguageOption.label}</span>
                <span
                  style={{
                    fontSize: "0.7em",
                    transform: languageMenuOpen
                      ? "rotate(180deg)"
                      : "rotate(0)",
                    transition: "transform 0.25s ease",
                  }}
                >
                  ▼
                </span>
              </button>

              {languageMenuOpen && (
                <div
                  className="absolute right-0 mt-3 overflow-hidden"
                  style={{
                    width: "190px",
                    background: "rgba(20,20,20,0.96)",
                    border: "1px solid rgba(255,255,255,0.16)",
                    borderRadius: "18px",
                    backdropFilter: "blur(18px)",
                    boxShadow: "0 18px 45px rgba(0,0,0,0.38)",
                    zIndex: 80,
                  }}
                >
                  {languageOptions.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => changeLanguage(item.code)}
                      style={{
                        width: "100%",
                        display: "block",
                        padding: "13px 18px",
                        background:
                          currentLanguage === item.code
                            ? "rgba(201,164,106,0.18)"
                            : "transparent",
                        border: "none",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                        color:
                          currentLanguage === item.code
                            ? "#FFFFFF"
                            : "rgba(255,255,255,0.76)",
                        textAlign: "left",
                        fontFamily: FONT_FAMILY,
                        fontWeight: currentLanguage === item.code ? 700 : 500,
                        fontSize: "0.95rem",
                        cursor: "pointer",
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Right Controls */}
          <div className="md:hidden flex items-center gap-3">
            {/* Mobile Globe Language Selector */}
            <div className="relative" ref={mobileLanguageMenuRef}>
              <button
                type="button"
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                aria-label="Select language"
                style={{
                  fontFamily: FONT_FAMILY,
                  fontWeight: 600,
                  fontSize: "0.82rem",
                  letterSpacing: "0.04em",
                  color: "rgba(255,255,255,0.92)",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.28)",
                  borderRadius: "999px",
                  padding: "7px 11px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span>🌐</span>
                <span>{currentLanguageOption.shortLabel}</span>
              </button>

              {languageMenuOpen && (
                <div
                  className="absolute right-0 mt-3 overflow-hidden"
                  style={{
                    width: "175px",
                    background: "rgba(20,20,20,0.96)",
                    border: "1px solid rgba(255,255,255,0.16)",
                    borderRadius: "18px",
                    backdropFilter: "blur(18px)",
                    boxShadow: "0 18px 45px rgba(0,0,0,0.38)",
                    zIndex: 80,
                  }}
                >
                  {languageOptions.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => changeLanguage(item.code)}
                      style={{
                        width: "100%",
                        display: "block",
                        padding: "13px 18px",
                        background:
                          currentLanguage === item.code
                            ? "rgba(201,164,106,0.18)"
                            : "transparent",
                        border: "none",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                        color:
                          currentLanguage === item.code
                            ? "#FFFFFF"
                            : "rgba(255,255,255,0.76)",
                        textAlign: "left",
                        fontFamily: FONT_FAMILY,
                        fontWeight: currentLanguage === item.code ? 700 : 500,
                        fontSize: "0.95rem",
                        cursor: "pointer",
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="text-white text-2xl"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{
                fontFamily: FONT_FAMILY,
              }}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden transition-all duration-300 overflow-hidden"
        style={{
          maxHeight: mobileOpen ? "560px" : "0",
          background: "rgba(5,5,5,0.95)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div className="px-6 py-6 flex flex-col gap-6 border-t border-white/5">
          {mobileNavLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: FONT_FAMILY,
                fontWeight: 600,
                fontSize: "1rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
              }}
            >
              {getLabel(link.labels)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}