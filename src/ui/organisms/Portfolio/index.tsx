import React from "react";
import { PageIndex } from "../../atoms";
import ProjectImage from "../../molecules/Work/ProjectImage";
import AnimatedText from "../../atoms/AnimatedText";
import { portfolio } from "../../../const/portfolio";
import { i18n } from "../../../strings";

const Portfolio = () => {
  const heading = i18n("portGraphicDesign").split(" ");

  return (
    <section
      className="bg-white text-black pb-5 md:pb-40"
      id="portfolio"
      data-scroll-section
    >
      <PageIndex number={2} page={i18n("menuPortfolio")}></PageIndex>
      <div className="grid-container mb-16 md:mb-24">
        <div className="col-start-1 col-span-2">
          <div className="md:sticky top-0 px-2 md:px-0">
            <h3 className="mb-10 lg:mb-0 lg:ml-[-1rem] text-6xl md:text-8xl xl:text-9xl w-2/3 whitespace-pre leading-[5rem] md:leading-[8rem] xl:leading-[10rem]">
              {heading.map((word) => (
                <React.Fragment key={word}>
                  <AnimatedText text={word} letters once />
                  <br />
                </React.Fragment>
              ))}
            </h3>
          </div>
        </div>
        <div className="col-start-3 col-span-2 flex items-start px-2 md:px-0">
          <p className="text-secondary sm:text-2xl md:w-2/3 sm:leading-relaxed">
            <AnimatedText text={i18n("portIntro")} once />
          </p>
        </div>
      </div>

      <div>
        {portfolio.map(({ category, month, year, img, name, url }, index) => (
          <ProjectImage
            key={name}
            index={index + 1}
            name={name}
            date={`${month} ${year}`}
            category={category}
            image={img}
            link={url}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
