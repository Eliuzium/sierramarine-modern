import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Lang, type Translation, LANGS } from "./translations";

type LangContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translation;
  dir: "ltr" | "rtl";
};

const LangContext = createContext<LangContextType | null>(null);

const STORAGE_KEY = "sierra-lang";

function detectInitialLang(): Lang {
  if (typeof window === "undefined") return "tr";
  const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (stored && translations[stored]) return stored;
  const browser = navigator.language.slice(0, 2).toLowerCase();
  if (browser === "en" || browser === "de" || browser === "fa") return browser;
  return "tr";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("tr");
  const [dir, setDir] = useState<"ltr" | "rtl">("ltr");

  useEffect(() => {
    const initial = detectInitialLang();
    setLangState(initial);
  }, []);

  useEffect(() => {
    const langDir = LANGS.find((l) => l.code === lang)?.dir ?? "ltr";
    setDir(langDir);
    document.documentElement.lang = lang;
    document.documentElement.dir = langDir;
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = (newLang: Lang) => setLangState(newLang);

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang], dir }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
