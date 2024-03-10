import React from "react"
import { motion, useScroll, useSpring } from "framer-motion"

const ProgressBar = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  })

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 h-1 bg-secondary z-10"
      style={{ scaleX, transformOrigin: "0%" }}
    />
  )
}

export default ProgressBar
