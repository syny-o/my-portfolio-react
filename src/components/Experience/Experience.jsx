import React from "react";
import "./Experience.css";
import ExperienceElement from "./ExperienceElement";
import { useLanguage } from "../../context/LanguageContext";

function Experience() {
  const { language, careerData } = useLanguage(); // Získání aktuálního jazyka a textů z kontextu

  return (
    <section className="container" id="experience">
      <h2 className="section-title">
        {language === "cs" ? "Zkušenosti" : "Experience"}
      </h2>
      <ul className="career">
        {careerData.map((careerItem, id) => (
          <ExperienceElement key={id} careerItem={careerItem} />
        ))}
      </ul>
    </section>
  );
}

export default Experience;
