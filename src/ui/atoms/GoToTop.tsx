import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import useWindowSize from "../../hooks/useWindowSize";
import { i18n } from "../../strings";

const GoToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { isMobile } = useWindowSize();
  const { scrollY } = useScroll();
  const topVariants = {
    hidden: {
      originX: "50%",
      originY: "50%",
      scaleX: 0,
      scaleY: 0,
      opacity: 0,
    },
    visible: {
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
    },
  };

  const viewportSize = isMobile ? 400 : 1000;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollProgress(latest);
  });

  return (
    <motion.a
      initial="hidden"
      animate={scrollProgress > viewportSize ? "visible" : "hidden"}
      variants={topVariants}
      whileHover={{ scale: 1.2, backgroundColor: "#B9BBBE" }}
      transition={{ scale: { type: "spring", stiffness: 100 }, duration: 1 }}
      href="#header"
      data-scroll-to
      data-scroll-href="#header"
      data-scroll-to-duration="2"
      className="text-sm right-2 bottom-2 w-[70px] h-[70px] flex md:text-lg bg-secondary rounded-full fixed md:w-[100px] md:h-[100px] md:right-7 md:bottom-7 justify-center items-center z-10"
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
      >
        {i18n("toTopButton")}
      </motion.span>
    </motion.a>
  );
};

export default GoToTop;
