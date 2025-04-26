import React from "react";
import CvPreview from "./Componets/CvPreview";
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

  function handelFormChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }
  console.log(formData);
  return (
    <>
      <main>
        <section className="form-section">
          <PersonalDetailForm handelFormChange={handelFormChange} />
        </section>
        <CvPreview data={formData} />
      </main>
    </>
  );
}
