/**
 * ASTRAQ Navbar — Dark Sci-Fi Design
 */

import { useEffect, useRef, useState } from "react";

const FONT_FAMILY =
  "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "HEAVY TRUCK", href: "/#products" },
  { name: "ENERGY SYSTEM", href: "/products/solar-charging-station" },
  { name: "AI TECHNOLOGY", href: "/products/humanoid-robot" },
  { name: "STORE", href: "/store" },
  { name: "ABOUT", href: "/about" },
];

const mobileNavLinks = [
  { name: "HOME", href: "/" },
  { name: "HEAVY TRUCK", href: "/#products" },
  { name: "ENERGY SYSTEM", href: "/products/solar-charging-station" },
  { name: "HUMANOID ROBOT", href: "/products/humanoid-robot" },
  { name: "MASSAGE AI", href: "/massage-ai" },
  { name: "STORE", href: "/store" },
  { name: "ABOUT", href: "/about" },
];

const aboutLinks = [
  { name: "ABOUT US", href: "/about" },
  { name: "NEWS", href: "/news" },
  { name: "INVESTOR RELATIONS", href: "#" },
  { name: "JOIN US", href: "#" },
];

const heavyTruckGroups = [
  {
    name: "DIESEL TRUCK",
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
    name: "ELECTRIC TRUCK",
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
    name: "AI ROBOT",
    href: "/products/humanoid-robot",
    models: [
      {
        name: "Humanoid Robot",
        href: "/products/humanoid-robot",
        image: "/robot1.png",
      },
      {
        name: "Massage Robot",
        href: "/massage-ai",
        image: "/robot2.png",
      },
    ],
  },
];

const navTextStyle = {
  fontFamily: FONT_FAMILY,
  fontWeight: 600,
  fontSize: "clamp(0.9rem, 1.15vw, 1.65rem)",
  letterSpacing: "clamp(0.04em, 0.08vw, 0.08em)",
  textTransform: "uppercase" as const,
  color: "rgba(255,255,255,0.85)",
  textDecoration: "none",
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
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [truckMenuOpen, setTruckMenuOpen] = useState(false);
  const [activeTruckType, setActiveTruckType] = useState("DIESEL TRUCK");

  const [aiMenuOpen, setAiMenuOpen] = useState(false);
  const [activeAiType, setActiveAiType] = useState("AI ROBOT");

  const closeTruckMenuTimer = useRef<number | null>(null);
  const closeAiMenuTimer = useRef<number | null>(null);

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
          <div className="hidden md:flex items-center gap-[clamp(1.2rem,2.2vw,4.2rem)] ml-auto">
            {navLinks.map((link) => {
              if (link.name === "HEAVY TRUCK") {
                return (
                  <div
                    key={link.name}
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
                      {link.name}
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
                                key={group.name}
                                type="button"
                                onClick={() => setActiveTruckType(group.name)}
                                className="relative pb-3 transition-colors"
                                style={{
                                  ...menuTabTextStyle,
                                  color:
                                    activeTruckType === group.name
                                      ? "rgba(0,0,0,0.9)"
                                      : "rgba(0,0,0,0.55)",
                                  background: "transparent",
                                  border: "none",
                                  cursor: "pointer",
                                }}
                              >
                                {group.name}

                                <span
                                  className="absolute left-1/2 bottom-0 h-[2px] -translate-x-1/2 transition-all duration-300"
                                  style={{
                                    width:
                                      activeTruckType === group.name
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
                              .filter((group) => group.name === activeTruckType)
                              .map((group) => (
                                <div key={group.name}>
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

              if (link.name === "AI TECHNOLOGY") {
                return (
                  <div
                    key={link.name}
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
                      {link.name}
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
                                key={group.name}
                                type="button"
                                onClick={() => setActiveAiType(group.name)}
                                className="relative pb-3 transition-colors"
                                style={{
                                  ...menuTabTextStyle,
                                  color:
                                    activeAiType === group.name
                                      ? "rgba(0,0,0,0.9)"
                                      : "rgba(0,0,0,0.55)",
                                  background: "transparent",
                                  border: "none",
                                  cursor: "pointer",
                                }}
                              >
                                {group.name}

                                <span
                                  className="absolute left-1/2 bottom-0 h-[2px] -translate-x-1/2 transition-all duration-300"
                                  style={{
                                    width:
                                      activeAiType === group.name ? "100%" : "0",
                                    background: "#C9A46A",
                                  }}
                                />
                              </button>
                            ))}
                          </div>

                          <div className="max-w-[clamp(950px,68vw,1450px)] mx-auto">
                            {aiTechnologyGroups
                              .filter((group) => group.name === activeAiType)
                              .map((group) => (
                                <div key={group.name}>
                                  <div className="grid grid-cols-2 gap-[clamp(4rem,7vw,10rem)]">
                                    {group.models.map((model) => (
                                      <a
                                        key={model.name}
                                        href={model.href}
                                        className="group/card block text-center no-underline"
                                      >
                                        <div className="h-[clamp(180px,13vw,260px)] flex items-center justify-center px-4">
                                          <img
                                            src={model.image}
                                            alt={model.name}
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

              if (link.name === "ABOUT") {
                return (
                  <div key={link.name} className="relative group">
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
                      {link.name}
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
                            key={item.name}
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
                              cursor: item.href === "#" ? "default" : "pointer",
                            }}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative hover:text-[#C9A46A] transition-colors"
                  style={navTextStyle}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-white text-2xl"
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

      {/* Mobile Menu */}
      <div
        className="md:hidden transition-all duration-300 overflow-hidden"
        style={{
          maxHeight: mobileOpen ? "520px" : "0",
          background: "rgba(5,5,5,0.95)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div className="px-6 py-6 flex flex-col gap-6 border-t border-white/5">
          {mobileNavLinks.map((link) => (
            <a
              key={link.name}
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
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}