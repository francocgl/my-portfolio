import { useContext } from "react"
import MainContext from "../MainContext"
import { StringObject } from "./lang/typings"
import translations from "./lang"

export default (lang: StringObject, data?: Record<string, any>) => {
  const { lang: language } = useContext(MainContext)
  const strings = translations[language as string]
  const messageKey = Object.keys(lang)[0]
  const message = strings[messageKey][lang[messageKey]]
  let result: any

  if (data) {
    console.log(data)

    if (typeof message === "string") {
      result = message
      const args = Object.keys(data)
      args.forEach((arg: string) => {
        result = (result as string).replace(`%${arg}%`, data[arg])
      })
      console.log(result)
    }
  } else {
    result = data
  }

  return result || (message as string)
}
