import React from "react";
import skills from "../../data/skills.json";
import "./Technologies.css";
import Technology from "./Technology";

function Technologies() {
  return (
    <section className="container" id="skills">
      <h2 className="section-title">Dovednosti</h2>

      <div className="technologies">
        {skills.map((skill, id) => {
          return <Technology skill={skill} id={id} />;
        })}
      </div>
    </section>
  );
}

export default Technologies;
