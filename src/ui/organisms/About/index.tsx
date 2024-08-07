import React from "react";
import { GoToTop, PageIndex } from "../../atoms";
import { motion } from "framer-motion";
import AnimatedText from "../../atoms/AnimatedText";

const About = () => {
  const introduction =
    "Hi! I am Franco a creative developer and designer based in Argentina.";
  const description1 =
    "As an Argentinean football fanatic and sports enthusiast, I bring my passion for the game into my work as a developer. Working from the comfort of my home, I delve into the intricacies of code, crafting elegant solutions and pushing the boundaries of web development.";
  const description2 =
    "Aside from my technical skills such as React, Next, Typescript, Redux, Jest, Cypress, Material, Git and others, I possess excellent communication and problem-solving abilities. I believe in effective teamwork, and I love contributing ideas and solutions on team discussions and brainstorming sessions to deliver the best product possible.";

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
      <PageIndex number={1} page="About" />
      <div className="grid-container">
        <div className="col-start-2 px-4 md:px-0 relative">
          <div className="block md:hidden grayscale w-100 overflow-hidden rounded mb-10">
            <motion.img
              initial="hidden"
              whileInView="visible"
              variants={variants}
              viewport={{ once: true }}
              src="/static/images/profile.jpg"
              alt="profile picture"
            />
          </div>
          <p className="col-start-2 z-1 text-primary relative text-2xl lg:leading-relaxed xl:leading-relaxed lg:text-3xl xl:text-5xl mb-10 md:mb-20">
            <AnimatedText once text={introduction} />
          </p>
          <div
            className="hidden md:block grayscale lg:absolute w-[350px] z-0 overflow-hidden rounded"
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
            <AnimatedText once text="Hobby and life" />
          </motion.p>
        </div>
        <div className="mb-10 md:mb-20 px-4 md:px-0 col-start-3 row-start-2">
          <p className="mb-10 leading-relaxed sm:text-xl md:text-xl z-1 relative">
            <AnimatedText once text={description1} duration={0.7} />
          </p>
          <p className="leading-relaxed sm:text-xl md:text-xl z-1 relative">
            <AnimatedText once text={description2} duration={0.7} />
          </p>
        </div>
      </div>
      <GoToTop />
    </section>
  );
};

export default About;
