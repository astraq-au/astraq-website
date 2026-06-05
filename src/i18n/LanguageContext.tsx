import { createContext, useContext, useEffect, useState } from "react";
import { translations, type Language } from "./translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: typeof translations.en;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("astraq-language");

    if (savedLanguage === "zh" || savedLanguage === "en") {
      return savedLanguage;
    }

    return "en";
  });

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem("astraq-language", newLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}