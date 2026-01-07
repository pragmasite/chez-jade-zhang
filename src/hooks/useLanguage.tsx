import { createContext, useContext, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { translations, Language } from "@/lib/translations";

interface LanguageContextType {
  lang: Language;
  t: typeof translations.fr;
  otherLangs: Language[];
  getPath: (lang: Language) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  // Determine language from URL path
  let lang: Language = "fr";
  if (location.pathname.startsWith("/en")) {
    lang = "en";
  } else if (location.pathname.startsWith("/zh")) {
    lang = "zh";
  }

  const t = translations[lang];
  const otherLangs: Language[] = ["fr", "en", "zh"].filter(l => l !== lang) as Language[];

  const getPath = (targetLang: Language): string => {
    if (targetLang === "fr") return "/";
    return `/${targetLang}`;
  };

  return (
    <LanguageContext.Provider value={{ lang, t, otherLangs, getPath }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
