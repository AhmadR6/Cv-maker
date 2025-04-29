import React from "react";
import { v4 as uuidv4 } from "uuid";
import CvPreview from "./Componets/CvPreview";
import FormComponets from "./Componets/FormComponets";
import avatar from "./assets/avatarPlaceholder.png";
import { EducationForm, SkillForm, ExperienceForm } from "./forms";
import "./App.css";
import PersonalDetailForm from "./Componets/PersonalDetailForm";
export default function App() {
  const [formData, setFormData] = React.useState({
    fullName: "Josephine Meyers",
    email: "joesphine.meyers@mail.com",
    phoneNumber: "+123-456-7890",
    occupation: "Marketing Manager",
    address: "London, UK",
  });

  const [educationFormData, setEducationFormData] = React.useState([
    {
      schoolName: "Goverment College university of Faisalabad",
      degree: "BS(CS)",
      startDate: "2-6-2021",
      endDate: "2-6-2025",
    },
  ]);
  const [experienceFormData, setExperienceFormData] = React.useState([
    {
      companyName: "ABC Company",
      positionTitle: "Software Engineer",
      startDate: "2-6-2021",
      endDate: "2-6-2025",
      location: "London, UK",
      description: "Worked on various projects",
    },
  ]);
  const [skillFormData, setSkillFormData] = React.useState([
    {
      skillName: "teamWork",
    },
  ]);
  const [image, setImage] = React.useState(avatar);
  const [preview, setPreview] = React.useState(null);
  const educationistElements = educationFormData.map((items) => {
    return (
      <div className="education-list" key={uuidv4()}>
        <h3>{items.schoolName}</h3>
      </div>
    );
  });
  const experienceListElements = experienceFormData.map((items) => {
    return (
      <div className="education-list" key={uuidv4()}>
        <h3>{items.companyName}</h3>
      </div>
    );
  });
  const skillListElements = skillFormData.map((items) => {
    return (
      <div className="education-list" key={uuidv4()}>
        <h3>{items.skillName}</h3>
      </div>
    );
  });
  function handelFormChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }
  function handleEducationForm(e) {
    e.preventDefault();
    const { schoolName, degree, startDate, endDate } = e.target;

    setEducationFormData((prev) => {
      return [
        ...prev,
        {
          schoolName: schoolName.value,
          degree: degree.value,
          startDate: startDate.value,
          endDate: endDate.value,
        },
      ];
    });
  }
  function handleSkillForm(e) {
    e.preventDefault();
    const { skillName } = e.target;
    setSkillFormData((prev) => {
      return [
        ...prev,
        {
          skillName: skillName.value,
        },
      ];
    });
  }
  function handleExperienceForm(e) {
    e.preventDefault();
    const {
      companyName,
      positionTitle,
      startDate,
      endDate,
      location,
      description,
    } = e.target;
    setExperienceFormData((prev) => {
      return [
        ...prev,
        {
          companyName: companyName.value,
          positionTitle: positionTitle.value,
          startDate: startDate.value,
          endDate: endDate.value,
          location: location.value,
          description: description.value,
        },
      ];
    });
  }
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgsrc = URL.createObjectURL(file);
      setImage(imgsrc);
      setPreview(URL.createObjectURL(file)); // show preview
    }
  };
  console.log(image);
  return (
    <>
      <main>
        <section className="form-section">
          <PersonalDetailForm handelFormChange={handelFormChange} />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          ></input>
          <FormComponets
            form={EducationForm}
            handleFormSubmition={handleEducationForm}
            name="Education"
            listItems={educationistElements}
          />
          <FormComponets
            form={SkillForm}
            handleFormSubmition={handleSkillForm}
            listItems={skillListElements}
            name="Skills"
          />
          <FormComponets
            form={ExperienceForm}
            handleFormSubmition={handleExperienceForm}
            listItems={experienceListElements}
            name="Experience"
          />
        </section>

        <CvPreview
          data={formData}
          educationForm={educationFormData}
          experienceForm={experienceFormData}
          skillForm={skillFormData}
          image={image}
        />
      </main>

      <button onClick={() => window.print()}>Print / Save as PDF</button>
    </>
  );
}
