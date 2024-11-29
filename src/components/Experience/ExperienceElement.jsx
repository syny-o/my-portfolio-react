import "./ExperienceElement.css";

function ExperienceElement({ careerItem, id }) {
  return (
    <li key={id} className="career-item">
      <img src={careerItem.imageSrc} alt={`${careerItem.organisation} Logo`} />
      <div className="career-item-details">
        <h3>
          {`${careerItem.role}`},{" "}
          <span className="color-special">{` ${careerItem.organisation}`}</span>
        </h3>
        <p className="color-special">{`${careerItem.startDate} - ${careerItem.endDate}`}</p>
        <ul>
          {careerItem.experiences.map((experience, id) => {
            return <li key={id}>{experience}</li>;
          })}
        </ul>
      </div>
    </li>
  );
}

export default ExperienceElement;
