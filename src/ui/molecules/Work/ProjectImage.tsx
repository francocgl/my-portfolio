import React from "react";
import AnimatedText from "../../atoms/AnimatedText";
import { motion } from "framer-motion";
import "./ProjectImage.css";
import useWindowSize from "../../../hooks/useWindowSize";

interface ProjectImageProps {
  category: string;
  date: string;
  image: string;
  link: string;
  name: string;
}

const ProjectImage = ({
  category,
  date,
  link,
  image,
  name,
}: ProjectImageProps) => {
  const { isMobile } = useWindowSize();
  const projectVariants = {
    hidden: {
      opacity: 0,
      y: "-110%",
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-20 project-image-container overflow-y-hidden"
    >
      <motion.a
        viewport={{ once: true }}
        variants={projectVariants}
        href={link}
        target="_blank"
        className="relative block shadow-md mb-5"
        aria-label={`Navigate to ${name} project link`}
      >
        <img
          alt=""
          src={"/static/images/" + image}
          className="h-full w-full object-cover"
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
      {isMobile && (
        <div className="mt-5">
          <p className="text-lg">
            <AnimatedText text={`${name} - ${category}`} once />
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectImage;
