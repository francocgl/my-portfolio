import React from "react"
import { GoToTop, PageIndex } from "../../atoms"
import { motion } from "framer-motion"
import AnimatedText from "../../atoms/AnimatedText"

const About = () => {
  const introduction =
    "Hi! I am Franco a creative developer and designer based in Argentina."
  const description1 =
    "Aside from my technical skills, I possess excellent communication and problem-solving abilities. I believe in effective teamwork, and I actively contribute ideas and solutions during team discussions and brainstorming sessions."
  const description2 =
    "I am confident in my ability to contribute to your team and help drive the success of your projects. My strong analytical skills enable me to quickly identify and resolve issues, ensuring a smooth and efficient development process."

  return (
    <section id="about" data-scroll-section>
      <PageIndex number={1} page="About" />
      <div className="grid-container">
        <div className="col-start-2 px-4 md:px-0 ">
          <p className="col-start-2 text-primary text-3xl lg:leading-relaxed lg:text-4xl xl:leading-relaxed  xl:text-6xl mb-20">
            <AnimatedText once text={introduction} />
          </p>
        </div>
        <div className="col-start-2 row-start-2 mb-10 lg:md-0 px-4 lg:px-10 overflow-hidden">
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, type: "spring" }}
            viewport={{ once: true }}
            className="text-secondary lg:text-right text-xl"
          >
            <AnimatedText once text="Hobby and life" />
          </motion.p>
        </div>
        <div className="mb-10 md:mb-20 px-4 md:px-0  col-start-3 row-start-2">
          <p className="mb-10 leading-relaxed sm:text-xl md:text-2xl">
            <AnimatedText once text={description1} duration={0.7} />
          </p>
          <p className="leading-relaxed sm:text-xl md:text-2xl">
            <AnimatedText once text={description2} duration={0.7} />
          </p>
        </div>
      </div>
      <GoToTop />
    </section>
  )
}

export default About
