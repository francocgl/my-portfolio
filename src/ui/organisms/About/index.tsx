import React from "react";
import { GoToTop, PageIndex } from "../../atoms";
import { motion } from "framer-motion";
import AnimatedText from "../../atoms/AnimatedText";
import { i18n } from "../../../strings";

const About = () => {
  const variants = {
    hidden: {
      y: -200,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      zIndex: -1,
      transition: { duration: 3, type: "spring", delay: 1 },
    },
  };

  return (
    <section id="about" data-scroll-section>
      <PageIndex number={1} page={i18n("menuAbout")} />
      <div className="grid-container">
        <div className="col-start-2 px-4 md:px-0 relative">
          <div className="block md:hidden grayscale w-100 overflow-hidden mb-10">
            <motion.img
              initial="hidden"
              whileInView="visible"
              variants={variants}
              viewport={{ once: true }}
              src="/static/images/profile.jpg"
              alt="profile picture"
            />
          </div>
          <h3 className="col-start-2 z-1 text-primary relative text-2xl lg:leading-relaxed xl:leading-relaxed lg:text-3xl xl:text-5xl mb-10 md:mb-20">
            <AnimatedText once text={i18n("aboutIntroduction")} />
          </h3>
          <div
            className="hidden md:block grayscale lg:absolute w-[350px] z-0 overflow-hidden"
            data-scroll="0"
            data-scroll-speed="0.2"
          >
            <motion.img
              initial="hidden"
              whileInView="visible"
              variants={variants}
              viewport={{ once: true }}
              src="/static/images/profile.jpg"
              alt="profile picture"
            />
          </div>
        </div>
        <div className="col-start-2 row-start-2 mb-10 lg:md-0 px-4 lg:px-10 overflow-hidden relative">
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            variants={variants}
            transition={{ duration: 1.5, type: "spring" }}
            viewport={{ once: true }}
            className="text-secondary lg:text-right text-xl"
          >
            <AnimatedText once text={i18n("aboutLifeTitle")} />
          </motion.p>
        </div>
        <div className="mb-10 md:mb-20 px-4 md:px-0 col-start-3 row-start-2">
          <p className="mb-10 leading-relaxed sm:text-xl md:text-xl z-1 relative">
            <AnimatedText
              once
              text={i18n("aboutDescriptionOne")}
              duration={0.7}
            />
          </p>
          <p className="leading-relaxed sm:text-xl md:text-xl z-1 relative">
            <AnimatedText
              once
              text={i18n("aboutDescriptionTwo")}
              duration={0.7}
            />
          </p>
        </div>
      </div>
      <GoToTop />
    </section>
  );
};

export default About;
