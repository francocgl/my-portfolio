import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedTextProps {
  text: string
  once?: boolean
  letters?: boolean
  duration?: number
}

const AnimatedText = ({
  text,
  once,
  letters,
  duration = 1,
}: AnimatedTextProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 1, once })
  const split = letters ? "" : " "
  const defaultAnimations = {
    hidden: {
      opacity: 0,
      y: -80,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: duration },
    },
  }

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        staggerChildren: 0.07,
      }}
      aria-hidden
    >
      {text.split(split).map((word, index) => (
        <span className="inline-block overflow-hidden" key={`${word}-${index}`}>
          <motion.span className="inline-block" variants={defaultAnimations}>
            {word}
          </motion.span>
          {!letters && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </motion.span>
  )
}

export default AnimatedText
