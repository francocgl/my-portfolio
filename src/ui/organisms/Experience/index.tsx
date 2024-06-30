import React from "react";
import { workExperience } from "../../../const/workExperience";
import { i18n } from "../../../strings";
import { PageIndex } from "../../atoms";
import { WorkExperience, YearsOfExperience } from "../../molecules";

const Experience = () => {
  return (
    <section
      className="bg-primary text-black experience-container"
      id="experience"
    >
      <PageIndex number={3} page={i18n("menuExperience")} />
      <YearsOfExperience />
      {workExperience.map(
        ({ period, enterprise, description, position }, index) => (
          <WorkExperience
            key={`${enterprise}-${index}`}
            period={period}
            enterprise={enterprise}
            description={description}
            position={position}
          />
        )
      )}
    </section>
  );
};

export default Experience;
