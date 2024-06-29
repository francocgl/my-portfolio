import React from "react";
import { motion } from "framer-motion";

import { MenuLinks } from "../../../typings/MenuLinks";

const MobileMenuItem = ({
  item,
  onClick,
}: {
  item: MenuLinks;
  onClick: () => void;
}) => {
  return (
    <motion.li
      whileTap={{ x: "20%", scale: 1.1 }}
      className="pt-10 pb-10"
      onClick={onClick}
    >
      <a
        href={item.link}
        className="text-5xl font-normal underline block"
        aria-label={`Navigate to section ${item.name}`}
      >
        {item.name}
      </a>
    </motion.li>
  );
};

export default MobileMenuItem;
