import { v4 as uuidv4 } from "uuid";
export default function CvPreview(props) {
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
            <h2 className="heading">CONTACT</h2>
            <ul>
              <li>{props.data.phoneNumber}</li>
              <li>{props.data.email}</li>
              <li>{props.data.address}</li>
            </ul>
          </div>
          <div className="skills-container">
            <h2 className="heading">SKILLS</h2>
            <ul>
              {props.skillForm.map((skill) => {
                return <li key={uuidv4()}>{skill.skillName}</li>;
              })}
            </ul>
          </div>
        </section>
        <section className="academic-experience-section">
          <h2 className="heading">EDUCATION</h2>
          <div>
            {props.educationForm.map((education) => {
              return (
                <div className="education-list" key={uuidv4()}>
                  <div>
                    <h3>{education.degree}</h3>
                    <p>{education.schoolName}</p>
                  </div>
                  <div className="date">
                    <p>{education.startDate}</p>
                    <span>-</span>
                    <p>{education.endDate}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <h2 className="heading">EXPERIENCE</h2>
          <div>
            {props.experienceForm.map((experience) => {
              return (
                <div className="experience-list" key={uuidv4()}>
                  <div>
                    <h3>{experience.companyName}</h3>
                    <p>{experience.positionTitle}</p>
                    <p>{experience.location}</p>
                    <p>{experience.description}</p>
                  </div>

                  <div className="date">
                    <p>{experience.startDate}</p>
                    <span>-</span>
                    <p>{experience.endDate}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </section>
  );
}
