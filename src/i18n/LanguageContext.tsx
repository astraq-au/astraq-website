import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Language = "en" | "zh" | "es" | "ar";

type TranslationObject = Record<string, any>;

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  isRTL: boolean;
  t: TranslationObject;
};

const translations: Record<Language, TranslationObject> = {
  en: {
    nav: {
      home: "HOME",
      heavyTruck: "HEAVY TRUCK",
      energySystem: "ENERGY SYSTEM",
      aiTechnology: "AI TECHNOLOGY",
      store: "STORE",
      about: "ABOUT",
    },
    products: {
      title: "Products",
      subtitle: "Explore ASTRAQ's mobility and energy solutions.",
      heavyTruck: "Heavy Truck",
      energySystem: "Energy System",
      aiTechnology: "AI Technology",
      dieselTruck: "Diesel Truck",
      electricTruck: "Electric Truck",
      humanoidRobot: "Humanoid Robot",
      massageRobot: "Massage Robot",
      solarChargingStation: "Solar-Storage-Charging Integrated Station",
    },
  },

  zh: {
    nav: {
      home: "首页",
      heavyTruck: "重型卡车",
      energySystem: "能源系统",
      aiTechnology: "AI 科技",
      store: "商店",
      about: "关于我们",
    },
    products: {
      title: "产品",
      subtitle: "探索 ASTRAQ 的移动出行与能源解决方案。",
      heavyTruck: "重型卡车",
      energySystem: "能源系统",
      aiTechnology: "AI 科技",
      dieselTruck: "柴油卡车",
      electricTruck: "电动卡车",
      humanoidRobot: "人形机器人",
      massageRobot: "按摩机器人",
      solarChargingStation: "光储充一体化电站",
    },
  },

  es: {
    nav: {
      home: "INICIO",
      heavyTruck: "CAMIONES PESADOS",
      energySystem: "SISTEMA ENERGÉTICO",
      aiTechnology: "TECNOLOGÍA IA",
      store: "TIENDA",
      about: "SOBRE NOSOTROS",
    },
    products: {
      title: "Productos",
      subtitle:
        "Explore las soluciones de movilidad y energía de ASTRAQ.",
      heavyTruck: "Camiones Pesados",
      energySystem: "Sistema Energético",
      aiTechnology: "Tecnología IA",
      dieselTruck: "Camión Diésel",
      electricTruck: "Camión Eléctrico",
      humanoidRobot: "Robot Humanoide",
      massageRobot: "Robot de Masaje",
      solarChargingStation:
        "Estación Integrada de Energía Solar, Almacenamiento y Carga",
    },
  },

  ar: {
    nav: {
      home: "الرئيسية",
      heavyTruck: "الشاحنات الثقيلة",
      energySystem: "نظام الطاقة",
      aiTechnology: "تقنية الذكاء الاصطناعي",
      store: "المتجر",
      about: "من نحن",
    },
    products: {
      title: "المنتجات",
      subtitle: "استكشف حلول ASTRAQ للتنقل والطاقة.",
      heavyTruck: "الشاحنات الثقيلة",
      energySystem: "نظام الطاقة",
      aiTechnology: "تقنية الذكاء الاصطناعي",
      dieselTruck: "شاحنة ديزل",
      electricTruck: "شاحنة كهربائية",
      humanoidRobot: "روبوت بشري",
      massageRobot: "روبوت مساج",
      solarChargingStation: "محطة متكاملة للطاقة الشمسية والتخزين والشحن",
    },
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("astraq-language");

    if (
      savedLanguage === "en" ||
      savedLanguage === "zh" ||
      savedLanguage === "es" ||
      savedLanguage === "ar"
    ) {
      return savedLanguage;
    }

    return "en";
  });

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem("astraq-language", newLanguage);
  };

  const isRTL = language === "ar";

  useEffect(() => {
    document.documentElement.lang = language;

    // 先保持网页整体从左到右，避免阿拉伯语导致 Navbar 和页面布局错位
    document.documentElement.dir = "ltr";
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      isRTL,
      t: translations[language],
    }),
    [language, isRTL]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}