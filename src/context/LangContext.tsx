import { createContext, useContext, useState, type ReactNode } from "react";
import type { Lang } from "@/lib/i18n";

interface LangContextType {
  lang: Lang;
  toggle: () => void;
}

const LangContext = createContext<LangContextType>({ lang: "en", toggle: () => {} });

export const useLang = () => useContext(LangContext);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "fr" : "en"));
  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>;
};
