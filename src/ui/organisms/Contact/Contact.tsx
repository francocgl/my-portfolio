import React from "react"
import { motion } from "framer-motion"
import i18n from "../../../strings/i18n"
import PageIndex from "../../atoms/PageIndex"
import AnimatedText from "../../atoms/AnimatedText"
import Footer from "../Footer/Footer"
import "./contact.css"

const Contact = () => {
  const myEmail = "cagliolo@gmail.com"

  return (
    <section id="contact" className="contact-section" data-scroll-container>
      <PageIndex number={3} page={i18n({ contact: "contact" })} />
      <div className="grid-container lg:items-end contact-section__content  px-4 md:px-0">
        <div className="md:col-start-2">
          <Footer />
        </div>
        <div className="md:col-start-3">
          <div className="w-1/2">
            <h2 className="text-5xl lg:text-6xl xl:text-8xl mb-10">
              <AnimatedText text="Let´s work together" once />
            </h2>
          </div>
          <div className="mb-20 lg:mb-0">
            <h6 className="mb-4 text-white">
              <AnimatedText text="- Available for projects!" once />
            </h6>
            <motion.div
              initial={{ opacity: 0, y: -80 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 1.2, delay: 0.5 },
              }}
            >
              <a
                href={`mailto:${myEmail}`}
                className="text-primary text-3xl lg:text-4xl xl:text-6xl overflow-visible"
              >
                {myEmail}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
