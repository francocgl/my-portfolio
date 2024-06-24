import React from "react";
import { PageIndex } from "../../atoms";
import ProjectImage from "../../molecules/Work/ProjectImage";
import AnimatedText from "../../atoms/AnimatedText";
import { motion } from "framer-motion";
import { portfolio } from "../../../const/portfolio";

const Work = () => {
  const variantSpan = {
    hidden: {
      opacity: 0,
      y: -40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        delay: 0.5,
        staggerChildren: 1,
      },
    },
  };

  return (
    <section
      className="bg-white text-black pb-5 md:pb-40"
      id="work"
      data-scroll-section
    >
      <PageIndex number={2} page="Work"></PageIndex>
      <div className="grid-container">
        <div className="col-start-1 col-span-2">
          <div className="md:sticky top-0 px-2 md:px-0">
            <h3 className="mb-10 lg:mb-0 lg:ml-[-1rem] text-6xl md:text-8xl xl:text-9xl w-2/3 whitespace-pre leading-[5rem] md:leading-[8rem] xl:leading-[10rem]">
              <AnimatedText text="My" letters once />
              <br />
              <AnimatedText text="graphic" letters once />
              <br />
              <AnimatedText text="design" letters once />
              <br />
              <AnimatedText text="work" letters once />
            </h3>
          </div>
        </div>
        <div className="col-start-3">
          <div className="mb-20 md:mb-40 px-2 md:px-0">
            <p className="text-secondary sm:text-2xl w-100 md:w-2/3 sm:leading-relaxed">
              <AnimatedText
                text="During my years at university, I have honed my skills in graphic design, and I am excited to share some of my work."
                once
              />
            </p>
          </div>
          <div className="grid md:grid-cols-1 col-start-3 col-span-1">
            {portfolio.map(({ category, date, img, name, url }) => (
              <ProjectImage
                key={name}
                name={name}
                date={date}
                category={category}
                image={img}
                link={url}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
