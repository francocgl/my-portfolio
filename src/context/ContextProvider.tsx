import React, { createContext, useState, ReactNode } from "react";

export enum Lang {
  ES = "ES",
  EN = "EN",
}

interface ContextProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const Context = createContext<ContextProps | undefined>(undefined);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState(Lang.EN);

  return (
    <Context.Provider value={{ lang, setLang }}>{children}</Context.Provider>
  );
};
