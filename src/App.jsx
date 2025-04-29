import React from "react";
import CvPreview from "./Componets/CvPreview";
import FormComponets from "./Componets/FormComponets";
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

  const [educationForm, setEducationForm] = React.useState([
    {
      schoolName: "Goverment College university of Faisalabad",
      degree: "BS(CS)",
      startDate: "2-6-2021",
      endDate: "2-6-2025",
    },
  ]);

  function handelFormChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }
  function handleEducationForm(e) {
    e.preventDefault();
    const { schoolName, degree, startDate, endDate } = e.target;

    setEducationForm((prev) => {
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
    // setIsFormShown((prevState) => !prevState);
    // setIsEducationListShown((prevState) => !prevState);
  }

  console.log(educationForm);
  return (
    <>
      <main>
        <section className="form-section">
          <PersonalDetailForm handelFormChange={handelFormChange} />
          <FormComponets
            educationForm={educationForm}
            handleEducationForm={handleEducationForm}
            name="Education"
          />
          <FormComponets
            educationForm={educationForm}
            handleEducationForm={handleEducationForm}
            name="Skills"
          />
        </section>
        <CvPreview data={formData} educationForm={educationForm} />
      </main>
    </>
  );
}
