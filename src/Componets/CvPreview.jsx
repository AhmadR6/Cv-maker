import avatar from "../assets/avatarPlaceholder.png";
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
            <img src={avatar} alt="profile image" />
          </div>
          <div>
            <h2>CONTACT</h2>
            <ul>
              <li>{props.data.phoneNumber}</li>
              <li>{props.data.email}</li>
              <li>{props.data.address}</li>
            </ul>
          </div>
        </section>
        <section className="academic-experience-section"></section>
      </main>
    </section>
  );
}
