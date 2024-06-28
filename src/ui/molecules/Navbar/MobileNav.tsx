import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { delay, motion } from "framer-motion";
import MobileMenuItem from "./MobileMenuItem";

const MobileNav = ({ menu }) => {
  const [isMenuOpen, seIsMenuOpen] = useState(false);

  const handleMenuClick = (isOpen: boolean) => {
    seIsMenuOpen(isOpen);
  };

  const variants = {
    open: {
      x: 0,
      transition: { duration: 0.6, delay: 0.4 },
    },
    closed: {
      x: "110%",
      transition: { duration: 0.6, delay: 0.3 },
    },
  };

  const buttonVariants = {
    hidden: {
      x: 100,
    },
    visible: {
      x: 0,
      transition: { duration: 0.5, delay: 1.2 },
    },
  };

  return (
    <>
      <nav className="absolute top-0 right-0 text-black">
        <motion.button
          initial="hidden"
          animate="visible"
          whileTap={{ rotate: 180, transition: { duration: 0.2 } }}
          variants={buttonVariants}
          onClick={() => handleMenuClick(true)}
        >
          <FontAwesomeIcon icon={faBars} className="text-3xl" />
        </motion.button>
      </nav>

      <motion.div
        initial={{ x: "100%" }}
        animate={isMenuOpen ? "open" : "closed"}
        variants={variants}
        className="bg-black fixed top-0 w-full h-screen p-4 z-10"
      >
        <div className="flex justify-end mb-5">
          <motion.button
            whileTap={{ rotate: 90, transition: { duration: 0.2 } }}
            onClick={() => handleMenuClick(false)}
          >
            <FontAwesomeIcon
              icon={faClose}
              className="text-4xl text-secondary"
            />
          </motion.button>
        </div>
        <motion.ul
          variants={variants}
          className="flex flex-col justify-between overflow-hidden"
        >
          {menu.map((item, index) => (
            <MobileMenuItem
              key={`${item.name}-${index}`}
              item={item}
              onClick={() => handleMenuClick(false)}
            />
          ))}
        </motion.ul>
      </motion.div>
    </>
  );
};

export default MobileNav;
