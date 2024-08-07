import { motion } from "framer-motion"
import React from "react"

interface PageIndexProps {
  number: number
  page: string
}

const PageIndex = ({ number, page }: PageIndexProps) => {
  const pageNumber = `0${number}.`

  const variants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.1, delay: 0.3, type: "spring" },
    },
  }

  return (
    <div className="grid-container" data-scroll data-scroll-speed="-0.05">
      <div className="col-start-2 overflow-hidden">
        <motion.span
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: true, amount: 0.5 }}
          className="pageNumber-number text-lg font-bold block"
        >
          {pageNumber}
        </motion.span>
      </div>
      <div className="col-start-3 overflow-hidden">
        <motion.h6
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: true, amount: 0.5 }}
          className="pageNumber-page uppercase"
        >
          {page}
        </motion.h6>
      </div>
    </div>
  )
}

export default PageIndex
