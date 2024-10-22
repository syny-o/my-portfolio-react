import React from "react";
import "./Experience.css";
import career from "../../data/career.json";
import skills from "../../data/skills.json";

function Experience() {
  return (
    <section className="experience-container" id="experience">
      <h2 className="section-title">Zkušenosti</h2>
      <div className="experience-content">
        {/* <div className="skills">
          {skills.map((skill, id) => {
            return (
              <div key={id} className="skill">
                <div className="skill-image-container">
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div> */}
        <ul className="career">
          {career.map((careerItem, id) => {
            return (
              <li key={id} className="career-item">
                <img
                  src={careerItem.imageSrc}
                  alt={`${careerItem.organisation} Logo`}
                />
                <div className="career-item-details">
                  <h3>{`${careerItem.role}, ${careerItem.organisation}`}</h3>
                  <p className="color-special">{`${careerItem.startDate} - ${careerItem.endDate}`}</p>
                  <ul>
                    {careerItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Experience;
