import React from "react";
import { AnimatedText } from "../../atoms";
import { socialMedia } from "../../../const/socialMedia";
import { FooterSocialMedia } from "../../molecules";

export default function Footer() {
  return (
    <footer data-scroll-section>
      <div className="flex flex-wrap lg:flex-col">
        <div className="col-start-2 mb-10">
          <FooterSocialMedia socialMedia={socialMedia} />
        </div>
        <div>
          <h5 className="text-primary">
            <AnimatedText text="Version" once letters />
          </h5>
          <p className=" text-secondary leading-relaxed">
            <AnimatedText
              text="Designed and coded by Franco Martin Cagliolo"
              once
            />
            <br />
            <AnimatedText text="@2024" once />
          </p>
        </div>
      </div>
    </footer>
  );
}
