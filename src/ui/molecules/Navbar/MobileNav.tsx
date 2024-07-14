import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import LangButtons from "../LangButtons";
import MobileMenuItem from "./MobileMenuItem";

const MobileNav = ({ menu }) => {
  const [isMenuOpen, seIsMenuOpen] = useState(false);

  const handleMenuClick = (isOpen: boolean) => {
    seIsMenuOpen(isOpen);
  };

  const variants = {
    open: {
      x: 0,
      transition: { duration: 0.7, delay: 0.3 },
    },
    closed: {
      x: "110%",
      transition: { duration: 0.6, delay: 0.8 },
    },
  };

  const buttonVariants = {
    hidden: {
      x: -100,
    },
    visible: {
      x: 0,
      transition: { duration: 0.5, delay: 1.2 },
    },
  };

  return (
    <>
      <nav className="flex w-full justify-between absolute top-0 left-0 text-black">
        <motion.button
          initial="hidden"
          animate="visible"
          whileTap={{
            rotate: 180,
            transition: { type: "spring", duration: 0.2 },
          }}
          variants={buttonVariants}
          onClick={() => handleMenuClick(true)}
        >
          <FontAwesomeIcon icon={faBars} className="text-3xl" />
        </motion.button>
        <LangButtons />
      </nav>

      <motion.div
        initial={{ x: "100%" }}
        animate={isMenuOpen ? "open" : "closed"}
        variants={variants}
        className="bg-black fixed top-0 w-full h-screen p-4 z-30"
      >
        <div className="flex justify-end mb-5">
          <motion.button
            whileTap={{
              rotate: 90,
              transition: { type: "spring", duration: 0.2 },
            }}
            onClick={() => handleMenuClick(false)}
          >
            <FontAwesomeIcon
              icon={faClose}
              className="text-4xl text-secondary"
            />
          </motion.button>
        </div>
        <ul className="flex flex-col justify-between overflow-hidden">
          {menu.map((item, index) => (
            <MobileMenuItem
              key={`${item.name}-${index}`}
              index={index}
              isMenuOpen={isMenuOpen}
              item={item}
              onClick={() => handleMenuClick(false)}
            />
          ))}
        </ul>
      </motion.div>
    </>
  );
};

export default MobileNav;
