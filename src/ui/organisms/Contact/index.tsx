import React from "react";
import { motion } from "framer-motion";
import { i18n } from "../../../strings";
import PageIndex from "../../atoms/PageIndex";
import AnimatedText from "../../atoms/AnimatedText";
import Footer from "../Footer/Footer";
import "./contact.css";

const Contact = () => {
  const myEmail = "cagliolo@gmail.com";

  return (
    <section id="contact" className="contact-section" data-scroll-container>
      <PageIndex number={3} page={i18n("menuContact")} />
      <div className="grid-container lg:items-end contact-section__content px-4 md:px-0">
        <div className="md:col-start-2">
          <Footer />
        </div>
        <div className="md:col-start-3">
          <div className="w-1/2">
            <h2 className="text-5xl lg:text-6xl xl:text-[5em] mb-10  lg:mt-[-30px]">
              <AnimatedText text={i18n("contactWorkHeading")} once />
            </h2>
          </div>
          <div className="mb-20 lg:mb-0">
            <p className="mb-4 text-white">
              <AnimatedText text={i18n("contactAvailable")} once />
            </p>
            <div>
              <motion.a
                initial={{ opacity: 0, y: -80 }}
                viewport={{ once: true }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.2, delay: 1 },
                }}
                href={`mailto:${myEmail}`}
                className="text-primary text-3xl lg:text-4xl xl:text-6xl "
              >
                {myEmail}
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
