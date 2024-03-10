import React from "react"
import { workExperience } from "../../../const/workExperience"
import { PageIndex } from "../../atoms"
import { WorkExperience, YearsOfExperience } from "../../molecules"
import "./experience.css"

const Experience = () => {
  return (
    <section
      className="bg-primary text-black experience-container"
      id="experience"
    >
      <PageIndex number={3} page="Experience" />
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
  )
}

export default Experience
