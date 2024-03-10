import { createContext } from "react"

export type SupportedLanguage = "en" | "es"

export interface Context {
  lang: string
}

const MainContext = createContext<Partial<Context>>({})

export default MainContext
