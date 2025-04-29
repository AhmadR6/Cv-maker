import { v4 as uuidv4 } from "uuid";
export default function CvPreview(props) {
  console.log("props", props);
  return (
    <section className="live-preview-section">
      <header>
        <h1>{props.data.fullName.toUpperCase()}</h1>
        <p>{props.data.occupation}</p>
      </header>
      <main>
        <section className="contact-info">
          <div className="img-container">
            <img src={props.image} alt="profile image" />
          </div>
          <div className="contact-info-container">
            <h2>CONTACT</h2>
            <ul>
              <li>{props.data.phoneNumber}</li>
              <li>{props.data.email}</li>
              <li>{props.data.address}</li>
            </ul>
          </div>
          <div className="skills-container">
            <h2>SKILLS</h2>
            <ul>
              {props.skillForm.map((skill) => {
                return <li key={uuidv4()}>{skill.skillName}</li>;
              })}
            </ul>
          </div>
        </section>
        <section className="academic-experience-section">
          <h2>EDUCATION</h2>
          <div>
            {props.educationForm.map((education) => {
              return (
                <div key={uuidv4()}>
                  <h3>{education.schoolName}</h3>
                  <p>{education.degree}</p>
                  <p>{education.startDate}</p>
                  <p>{education.endDate}</p>
                </div>
              );
            })}
          </div>
          <h2>EXPERIENCE</h2>
          <div>
            {props.experienceForm.map((experience) => {
              return (
                <div key={uuidv4()}>
                  <h3>{experience.companyName}</h3>
                  <p>{experience.positionTitle}</p>
                  <p>{experience.startDate}</p>
                  <p>{experience.endDate}</p>
                  <p>{experience.location}</p>
                  <p>{experience.description}</p>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </section>
  );
}
