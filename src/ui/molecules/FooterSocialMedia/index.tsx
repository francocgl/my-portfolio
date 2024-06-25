import React, { type ReactElement } from "react";
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
          <li className="mr-6" key={index}>
            <a
              className="text-secondary hover:text-primary text-xl whitespace-pre"
              href={el.link}
              target="blank"
              aria-label={`Navigate to social media ${el.name}`}
            >
              <AnimatedText text={el.name} once letters />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterSocialMedia;
