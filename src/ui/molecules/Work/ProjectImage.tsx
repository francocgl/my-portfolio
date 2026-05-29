import React from "react";
import AnimatedText from "../../atoms/AnimatedText";
import { motion } from "framer-motion";
import { i18n } from "../../../strings";
import "./ProjectImage.css";

interface ProjectImageProps {
  category: string;
  date: string;
  description: string;
  image: string;
  index: number;
  link: string;
  name: string;
}

const ProjectImage = ({
  category,
  date,
  description,
  index,
  link,
  image,
  name,
}: ProjectImageProps) => {
  const isImageFirst = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`project-item flex flex-col gap-8 md:gap-12 mb-24 md:mb-40 px-4 md:px-16 lg:px-24 ${
        isImageFirst ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="project-item__image-wrap relative block overflow-hidden w-full md:w-3/4 rounded-xl"
        aria-label={`Navigate to ${name} project`}
      >
        <img
          alt={name}
          src={"/static/images/" + image}
          className="project-item__img w-full h-full object-cover"
        />
      </a>

      <div className="w-full md:w-1/4 flex flex-col justify-center">
        <span className="text-secondary text-sm uppercase tracking-[0.2em] mb-3">
          <AnimatedText text={category} once />
        </span>
        <h4 className="text-3xl md:text-4xl  mb-4">
          <AnimatedText text={name} once />
        </h4>
        <div className="bg-black h-px w-12 mb-5" />
        <p className="text-base md:text-lg leading-relaxed text-black/70 mb-6">
          <AnimatedText text={i18n(description)} once duration={0.6} />
        </p>
        <motion.a
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
          href={link}
          target="_blank"
          rel="noreferrer"
          className="project-item__view group inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] mb-6 w-fit"
          aria-label={`Navigate to ${name} project`}
        >
          <span className="project-item__view-label relative">
            {i18n("portViewProject")}
          </span>
          <svg
            className="project-item__view-arrow w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectImage;
