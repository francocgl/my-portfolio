import en from "./en"

export type LanguageObject = typeof en

export type StringObject = {
  [key in keyof LanguageObject]?: string
}
