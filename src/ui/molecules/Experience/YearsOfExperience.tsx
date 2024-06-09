import { motion, useInView } from "framer-motion"
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

  useEffect(() => {
    const timer = setTimeout(() => {
      if (yearsInView < calculateYears && isInView) {
        setYearsInView(yearsInView + 1)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [isInView, yearsInView])

  return (
    <div ref={ref} className="grid-container text-black">
      <div className="mx-10 flex col-start-2 years-of-experience-numbers-container overflow-hidden">
        <span className="inline-block years-of-experience-numbers">
          <motion.span
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, type: "spring" }}
            viewport={{ once: true }}
            className="inline-block whitespace-pre"
          >
            {yearsInView}
          </motion.span>
        </span>
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
