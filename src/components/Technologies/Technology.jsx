import "./Technology.css";

function Technology({ skill, id }) {
  return (
    <div key={id} className="technology">
      <div className="technology-image-container">
        <img src={skill.imageSrc} alt={skill.title} />
      </div>
      <p>{skill.title}</p>
    </div>
  );
}

export default Technology;
