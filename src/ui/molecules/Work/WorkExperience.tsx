import React, { type ReactElement } from "react";
import { motion } from "framer-motion";
import AnimatedText from "../../atoms/AnimatedText";
import { i18n } from "../../../strings";

interface WorkExperienceProps {
  period: string;
  position: string;
  description: string;
  enterprise: string;
}

const WorkExperience = ({
  period,
  position,
  description,
  enterprise,
}: WorkExperienceProps): ReactElement => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="px-4 md:px-0 grid-container items-start last:mb-0"
    >
      <div className="col-start-2 px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-secondary text-sm md:text-base uppercase tracking-wider"
        >
          <AnimatedText text={period} duration={0.5} once />
        </motion.div>
      </div>
      <div className="col-start-3 px-4 md:px-0">
        <div className="mb-6">
          <h4 className="mb-1 font-light">
            <AnimatedText text={position} duration={0.5} once />
          </h4>
          <h5 className="text-black font-semibold">
            <AnimatedText text={enterprise} duration={0.5} once />
          </h5>
        </div>
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="bg-black h-px mb-6 w-12"
        />
        <p className="text-base md:text-lg leading-relaxed text-black/70">
          <AnimatedText text={i18n(description)} once duration={0.6} />
        </p>
      </div>
    </motion.div>
  );
};

export default WorkExperience;
