import React from "react";
import { v4 as uuidv4 } from "uuid";
import CvPreview from "./Componets/CvPreview";
import FormComponets from "./Componets/FormComponets";
import { EducationForm, SkillForm } from "./forms";
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
  const [skillFormData, setSkillFormData] = React.useState([
    {
      skillName: "teamWork",
    },
  ]);
  const educationistElements = educationFormData.map((items) => {
    return (
      <div className="education-list" key={uuidv4()}>
        <h3>{items.schoolName}</h3>
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
  console.log(skillFormData);
  return (
    <>
      <main>
        <section className="form-section">
          <PersonalDetailForm handelFormChange={handelFormChange} />
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
        </section>
        <CvPreview data={formData} educationForm={educationFormData} />
      </main>
    </>
  );
}
