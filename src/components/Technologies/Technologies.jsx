import { useLanguage } from "../../context/LanguageContext";
import skills from "../../data/skills.json";
import "./Technologies.css";
import Technology from "./Technology";

function Technologies() {
  const { globalTexts } = useLanguage();
  return (
    <section className="container" id="skills">
      <h2 className="section-title">{globalTexts.sectionSkills}</h2>

      <div className="technologies">
        {skills.map((skill, id) => {
          return <Technology skill={skill} id={id} />;
        })}
      </div>
    </section>
  );
}

export default Technologies;
