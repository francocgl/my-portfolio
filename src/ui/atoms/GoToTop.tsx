import React, { useState } from "react"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

const GoToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const { scrollY } = useScroll()
  const topVariants = {
    hidden: {
      originX: "50%",
      originY: "50%",
      scaleX: 0,
      scaleY: 0,
      opacity: 0,
    },
    visible: {
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
    },
  }

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollProgress(latest)
  })

  return (
    <motion.a
      initial="hidden"
      animate={scrollProgress > 1000 ? "visible" : "hidden"}
      variants={topVariants}
      whileHover={{ scale: 1.2, backgroundColor: "#B9BBBE" }}
      transition={{ scale: { type: "spring", stiffness: 100 }, duration: 1 }}
      href="#header"
      data-scroll-to
      data-scroll-href="#header"
      data-scroll-to-duration="2"
      className="hidden md:flex bg-secondary rounded-full fixed w-[100px] h-[100px] right-7 bottom-7 justify-center items-center z-10"
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
      >
        To Top
      </motion.span>
    </motion.a>
  )
}

export default GoToTop
