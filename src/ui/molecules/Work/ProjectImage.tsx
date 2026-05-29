import React from "react";
import AnimatedText from "../../atoms/AnimatedText";
import { motion } from "framer-motion";
import "./ProjectImage.css";

interface ProjectImageProps {
  category: string;
  date: string;
  image: string;
  index: number;
  link: string;
  name: string;
}

const ProjectImage = ({
  category,
  date,
  index,
  link,
  image,
  name,
}: ProjectImageProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="project-item pb-6"
  >
    {/*     <div className="flex justify-between items-center px-4 md:px-8 py-4 border-t border-black/10">
      <span className="text-xs text-secondary font-mono tracking-widest">
        {String(index).padStart(2, "0")}
      </span>
      <span className="text-xs text-secondary uppercase tracking-[0.2em]">
        {category}
      </span>
      <span className="text-xs text-secondary">{date}</span>
    </div> */}

    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="project-item__image-wrap relative block overflow-hidden rounded-xl"
      aria-label={`Navigate to ${name} project`}
    >
      <img
        alt={name}
        src={"/static/images/" + image}
        className="project-item__img w-full h-full object-cover"
      />
      <div className="project-item__overlay absolute inset-0 flex items-end p-8 md:p-12">
        <h4 className="text-white text-4xl md:text-6xl xl:text-7xl font-medium leading-tight">
          <AnimatedText text={name} />
        </h4>
      </div>
    </a>
  </motion.div>
);

export default ProjectImage;
