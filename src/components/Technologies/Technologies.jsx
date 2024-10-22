import React from "react";
import skills from "../../data/skills.json";
import "./Technologies.css";

function Technologies() {
  return (
    <section className="technologies-container" id="technologies">
      <h2 className="section-title">Dovednosti</h2>
      <div className="technologies-content">
        <div className="skills">
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
        </div>
      </div>
    </section>
  );
}

export default Technologies;
