import React from "react"
import AnimatedText from "../../atoms/AnimatedText"
import { motion } from "framer-motion"
import "./ProjectImage.css"

interface ProjectImageProps {
  category: string
  date: string
  image: string
  link: string
  name: string
}

const ProjectImage = ({
  category,
  date,
  link,
  image,
  name,
}: ProjectImageProps) => {
  const projectVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 1.5 },
      viewport: { once: true },
    },
  }

  return (
    <div className="mb-20 project-image-container overflow-hidden rounded-lg">
      <motion.a
        initial="hidden"
        whileInView="visible"
        variants={projectVariants}
        href={link}
        target="_blank"
        className="relative shadow-md block overflow-hidden"
      >
        <img
          alt=""
          src={"/src/" + image}
          className="h-full w-full object-cover "
        />
        <div className="project-image-container__details">
          <div className="py-5">
            <h6 className="text-white uppercase mb-2">
              <AnimatedText text={category} />
            </h6>
            <h4 className="text-white mb-4 text-5xl">
              <AnimatedText text={name} />
            </h4>
            <span className="text-white text-xl">
              <AnimatedText text={date} />
            </span>
          </div>
        </div>
      </motion.a>
    </div>
  )
}

export default ProjectImage
