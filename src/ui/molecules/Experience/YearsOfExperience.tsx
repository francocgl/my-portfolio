import { useInView } from "framer-motion"
import React, { useEffect, useMemo, useRef, useState } from "react"
import { AnimatedText } from "../../atoms"
import "./yearsOfExperience.css"

const YearsOfExperience = () => {
  const [yearsInView, setYearsInView] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref)
  const currentYear = new Date().getFullYear()
  const startingYear = 2018
  const calculateYears = useMemo(() => {
    return currentYear - startingYear
  }, [])
  const yearsOfExperience = Array.from(
    { length: calculateYears + 1 },
    (_, index) => index
  ).reverse()

  console.log("isInView", isInView)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (yearsInView < 6 && isInView) {
        setYearsInView(yearsInView + 1)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [yearsInView])

  return (
    <div ref={ref} className="grid-container text-black">
      <div className="mx-10 flex w-100 col-start-2 years-of-experience-numbers-container">
        <div className="w-[220px] overflow-hidden">
          <span className="inline-block years-of-experience-numbers">
            <span className="inline-block whitespace-pre">{yearsInView}</span>
          </span>
        </div>
      </div>
      <div>
        <div className="col-start-3 years-of-experience-text-container">
          <h2 className="years-of-experience-text">
            <AnimatedText text="Years of experience working as" once />
          </h2>
        </div>
      </div>
    </div>
  )
}

export default YearsOfExperience
