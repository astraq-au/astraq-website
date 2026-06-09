import { useState } from "react";
import { languageOptions } from "../i18n";
import { useLanguage } from "../LanguageContext";

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const currentLanguage = languageOptions.find((item) => item.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
        aria-label="Select language"
      >
        <span className="text-lg leading-none">🌐</span>
        <span className="hidden sm:inline">{currentLanguage?.label}</span>
        <span
          className={`text-xs transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-3 w-44 overflow-hidden rounded-2xl border border-white/15 bg-[#111827]/95 shadow-2xl backdrop-blur-xl">
          {languageOptions.map((item) => (
            <button
              key={item.code}
              onClick={() => {
                setLanguage(item.code);
                setOpen(false);
              }}
              className={`block w-full px-4 py-3 text-left text-sm transition-all duration-200 hover:bg-white/10 ${
                language === item.code
                  ? "bg-white/10 text-white"
                  : "text-white/75"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
