import React from "react";
import { v4 as uuidv4 } from "uuid";
import { MdDelete } from "react-icons/md";
import CvPreview from "./Componets/CvPreview";
import FormComponets from "./Componets/FormComponets";
import avatar from "./assets/avatarPlaceholder.png";
import { EducationForm, SkillForm, ExperienceForm } from "./forms";
import "./App.css";
import PersonalDetailForm from "./Componets/PersonalDetailForm";
export default function App() {
  // Personal Info
  const [formData, setFormData] = React.useState({
    id: uuidv4(),
    fullName: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "+1 234 567 8901",
    occupation: "Full Stack Developer",
    address: "123 Main St, Cityville, Country",
  });

  // Education
  const [educationFormData, setEducationFormData] = React.useState([
    {
      id: uuidv4(),
      schoolName: "University of Technology",
      degree: "Bachelor of Science in Information Technology",
      startDate: "02-06-2015",
      endDate: "02-06-2019",
    },
    {
      id: uuidv4(),
      schoolName: "International Business School",
      degree: "Master of Science in Business Analytics",
      startDate: "02-06-2020",
      endDate: "02-06-2022",
    },
  ]);

  // Experience
  const [experienceFormData, setExperienceFormData] = React.useState([
    {
      id: uuidv4(),
      companyName: "Tech Innovators",
      positionTitle: "Senior Software Developer",
      startDate: "02-06-2020",
      endDate: "Present",
      location: "Cityville, Country",
      description:
        "Leading a team of developers to design, implement, and maintain web applications for clients across various industries.",
    },
    {
      id: uuidv4(),
      companyName: "Creative Solutions Ltd.",
      positionTitle: "Software Engineer",
      startDate: "02-06-2018",
      endDate: "02-12-2019",
      location: "Cityville, Country",
      description:
        "Developed and optimized front-end and back-end applications, working closely with clients to gather requirements.",
    },
  ]);

  // Skills
  const [skillFormData, setSkillFormData] = React.useState([
    {
      id: uuidv4(),
      skillName: "JavaScript",
    },
    {
      id: uuidv4(),
      skillName: "React.js",
    },
    {
      id: uuidv4(),
      skillName: "Node.js",
    },
    {
      id: uuidv4(),
      skillName: "MongoDB",
    },
    {
      id: uuidv4(),
      skillName: "Agile Development",
    },
  ]);

  const [image, setImage] = React.useState(avatar);

  function deleteEntry(id, event) {
    const parentElement = event.currentTarget.closest(".list");
    const parentId = parentElement.className;
    if (parentId === "list education") {
      setEducationFormData((prev) => prev.filter((item) => item.id !== id));
    } else if (parentId === "list experience") {
      setExperienceFormData((prev) => prev.filter((item) => item.id !== id));
    } else if (parentId === "list skills") {
      setSkillFormData((prev) => prev.filter((item) => item.id !== id));
    }
  }
  const educationistElements = educationFormData
    .filter((item) => item.schoolName !== "")
    .map((items) => {
      return (
        <div className="list education" key={items}>
          <h3>{items.schoolName}</h3>
          <button onClick={(event) => deleteEntry(items.id, event)}>
            <MdDelete className="delete-btn" />
          </button>
        </div>
      );
    });
  const experienceListElements = experienceFormData
    .filter((item) => item.companyName !== "")
    .map((items) => {
      return (
        console.log(items),
        (
          <div className="list experience" key={items.id}>
            <h3>{items.companyName}</h3>
            <button onClick={(event) => deleteEntry(items.id, event)}>
              <MdDelete className="delete-btn" />
            </button>
          </div>
        )
      );
    });
  const skillListElements = skillFormData
    .filter((item) => item.skillName !== "")
    .map((item) => (
      <div className="list skills" key={item.id}>
        <h3>{item.skillName}</h3>
        <button onClick={(event) => deleteEntry(item.id, event)}>
          <MdDelete className="delete-btn" />
        </button>
      </div>
    ));

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
          id: uuidv4(),
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
      return [...prev, { id: uuidv4(), skillName: skillName.value }];
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
          id: uuidv4(),
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
    }
  };
  function clearExample() {
    setFormData({
      id: uuidv4(),
      fullName: "",
      email: "",
      phoneNumber: "",
      occupation: "",
      address: "",
    });

    setEducationFormData([
      {
        id: uuidv4(),
        schoolName: "",
        degree: "",
        startDate: "",
        endDate: "",
      },
    ]);

    setExperienceFormData([
      {
        id: uuidv4(),
        companyName: "",
        positionTitle: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
      },
    ]);

    setSkillFormData([
      {
        id: uuidv4(),
        skillName: "",
      },
    ]);
  }

  function loadExample() {
    setFormData({
      id: uuidv4(),
      fullName: "John Doe",
      email: "john.doe@example.com",
      phoneNumber: "+1 234 567 8901",
      occupation: "Full Stack Developer",
      address: "123 Main St, Cityville, Country",
    });

    setEducationFormData([
      {
        id: uuidv4(),
        schoolName: "University of Technology",
        degree: "Bachelor of Science in Information Technology",
        startDate: "02-06-2015",
        endDate: "02-06-2019",
      },
      {
        id: uuidv4(),
        schoolName: "International Business School",
        degree: "Master of Science in Business Analytics",
        startDate: "02-06-2020",
        endDate: "02-06-2022",
      },
    ]);

    setExperienceFormData([
      {
        id: uuidv4(),
        companyName: "Tech Innovators",
        positionTitle: "Senior Software Developer",
        startDate: "02-06-2020",
        endDate: "Present",
        location: "Cityville, Country",
        description:
          "Leading a team of developers to design, implement, and maintain web applications for clients across various industries.",
      },
      {
        id: uuidv4(),
        companyName: "Creative Solutions Ltd.",
        positionTitle: "Software Engineer",
        startDate: "02-06-2018",
        endDate: "02-12-2019",
        location: "Cityville, Country",
        description:
          "Developed and optimized front-end and back-end applications, working closely with clients to gather requirements.",
      },
    ]);

    setSkillFormData([
      {
        id: uuidv4(),
        skillName: "JavaScript",
      },
      {
        id: uuidv4(),
        skillName: "React.js",
      },
      {
        id: uuidv4(),
        skillName: "Node.js",
      },
      {
        id: uuidv4(),
        skillName: "MongoDB",
      },
      {
        id: uuidv4(),
        skillName: "Agile Development",
      },
    ]);
  }

  return (
    <>
      <main className="app">
        <section className="form-section">
          <div className="form form-btn">
            <button onClick={clearExample} className="example-btn">
              Clear Example
            </button>
            <button onClick={loadExample} className="example-btn">
              Load Example
            </button>
          </div>
          <PersonalDetailForm handelFormChange={handelFormChange} />
          <input
            className="print-btn"
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
          <button className="print-btn" onClick={() => window.print()}>
            Print / Save as PDF
          </button>
        </section>

        <CvPreview
          data={formData}
          educationForm={educationFormData}
          experienceForm={experienceFormData}
          skillForm={skillFormData}
          image={image}
        />
      </main>
    </>
  );
}
