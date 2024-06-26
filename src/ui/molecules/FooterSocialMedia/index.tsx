import React, { type ReactElement } from "react";
import { motion } from "framer-motion";
import { MenuLinks } from "../../../typings/MenuLinks";
import { AnimatedText } from "../../atoms";

interface FooterSocialMediaProps {
  socialMedia: MenuLinks[];
}

const FooterSocialMedia = ({
  socialMedia,
}: FooterSocialMediaProps): ReactElement => {
  return (
    <>
      <h5 className="text-primary ">
        <AnimatedText text="Socials" once letters />
      </h5>
      <ul className="flex">
        {socialMedia.map((el, index) => (
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mr-6"
            key={index}
          >
            <a
              className="text-secondary hover:text-primary text-xl whitespace-pre"
              href={el.link}
              target="blank"
              aria-label={`Navigate to social media ${el.name}`}
            >
              <AnimatedText text={el.name} once letters />
            </a>
          </motion.li>
        ))}
      </ul>
    </>
  );
};

export default FooterSocialMedia;
