import React from "react"
import ReactDOM from "react-dom/client"
import MainContext from "./MainContext"
import Portfolio from "./ui/templates/Portfolio"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

const initialConfig = {
  lang: "en",
}

root.render(
  <MainContext.Provider value={initialConfig}>
    <Portfolio />
  </MainContext.Provider>
)
