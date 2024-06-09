import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"

const CursorPointer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", mouseMove)
    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  const cursorVariants = {
    default: { x: mousePosition.x - 16, y: mousePosition.y - 16 },
  }

  return (
    <motion.div
      variants={cursorVariants}
      animate="default"
      className="h-[32px] w-[32px] bg-secondary rounded-[50%] fixed z-10"
    />
  )
}

export default CursorPointer
