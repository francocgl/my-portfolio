import React from "react";
import { motion } from "framer-motion";

import { MenuLinks } from "../../../typings/MenuLinks";
import { i18n } from "../../../strings";

interface MobileMenuItemProps {
  item: MenuLinks;
  index: number;
  isMenuOpen: boolean;
  onClick: () => void;
}

const MobileMenuItem = ({
  item,
  index,
  onClick,
  isMenuOpen,
}: MobileMenuItemProps) => (
  <li className="pt-10 pb-10 overflow-hidden" onClick={onClick}>
    <motion.a
      initial={{ x: "-30%", opacity: 0 }}
      animate={{
        x: isMenuOpen ? "0%" : "-30%",
        opacity: isMenuOpen ? 1 : 0,
        transition: { delay: index * 0.3, duration: 0.5 },
      }}
      whileTap={{
        color: "darkcyan",
        transition: {
          type: "linear",
          bounce: 0.4,
          duration: 1.2,
          ease: "easeIn",
        },
      }}
      href={item.link}
      className="text-5xl font-normal underline block"
      aria-label={`Navigate to section ${item.name}`}
    >
      {i18n(item.name)}
    </motion.a>
  </li>
);

export default MobileMenuItem;
