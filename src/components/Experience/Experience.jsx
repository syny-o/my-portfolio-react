import React from "react";
import "./Experience.css";
import career from "../../data/career.json";
import skills from "../../data/skills.json";
import ExperienceElement from "./ExperienceElement";

function Experience() {
  return (
    <section className="container" id="experience">
      <h2 className="section-title">Zkušenosti</h2>

      <ul className="career">
        {career.map((careerItem, id) => {
          return <ExperienceElement id={id} careerItem={careerItem} />;
        })}
      </ul>
    </section>
  );
}

export default Experience;
