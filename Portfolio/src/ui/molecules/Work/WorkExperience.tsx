import React, { ReactElement } from "react"
import AnimatedText from "../../atoms/AnimatedText"
import { motion } from "framer-motion"

interface WorkExperienceProps {
  period: string
  position: string
  description: string
  enterprise: string
}

const WorkExperience = ({
  period,
  position,
  description,
  enterprise,
}: WorkExperienceProps): ReactElement => {
  return (
    <div
      className="grid-container items-start"
      data-scroll
      data-scroll-speed="0.2"
    >
      <div className="col-start-2 text-right px-0 lg:px-10 ">
        <h5 className="text-secondary">
          <AnimatedText text={period} duration={0.6} once />
        </h5>
      </div>
      <div className="col-start-3">
        <h4 className="mb-2">
          <AnimatedText text={position} duration={0.6} once />
        </h4>
        <h5 className="text-black">
          <AnimatedText text={enterprise} duration={0.6} once />
        </h5>
        <div className="">
          <motion.div
            initial={{ originX: "0%", scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 2.5, delay: 0.5, type: "spring" }}
            viewport={{ once: true }}
            className="bg-black h-[0.5px] mb-10 w-2/4"
          />
        </div>
        <p>
          <AnimatedText text={description} once />
        </p>
      </div>
    </div>
  )
}

export default WorkExperience
