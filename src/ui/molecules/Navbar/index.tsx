import React, { type ReactElement } from "react";
import { motion } from "framer-motion";
import useWindowSize from "../../../hooks/useWindowSize";
import type { MenuLinks } from "../../../typings/MenuLinks";
import MobileNav from "./MobileNav";
import { i18n } from "../../../strings";

interface NavbarProps {
  menu: MenuLinks[];
}

const Navbar = ({ menu }: NavbarProps): ReactElement => {
  const { isMobile } = useWindowSize();
  const navVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 1, type: "spring", delay: 0.2 * index },
    }),
  };
  console.log(i18n("about"));
  if (isMobile) {
    return <MobileNav menu={menu} />;
  }

  return (
    <nav className="z-10 grid-container no-margin absolute top-5 right-0 left-0 flex justify-between text-black">
      <div className="col-start-2 overflow-hidden">
        <motion.p
          initial="hidden"
          whileInView="visible"
          className="hidden lg:block text-xl text-secondary"
          variants={navVariants}
        >
          {i18n("digitalDesigner")}
        </motion.p>
      </div>
      <div className="col-start-3">
        <ul className="flex justify-between">
          {menu.map((item, index) => (
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial="hidden"
              whileInView="visible"
              key={index}
              custom={index}
              variants={navVariants}
            >
              <a
                href={item.link}
                data-scroll-href={item.link}
                data-scroll-to
                data-scroll-to-duration="2"
                className="text-xl font-normal underline hover:text-secondary"
              >
                {i18n(item.name)}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
