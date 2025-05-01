function EducationForm(props) {
  return (
    <form onSubmit={props.handleFormSubmition} className="form">
      <div className="form-group">
        <label htmlFor="schoolName">School</label>
        <input type="text" name="schoolName" />

        <label htmlFor="degree">Degree</label>
        <input type="text" name="degree" />
      </div>
      <div className="form-group">
        <label htmlFor="startDate">Start Date</label>
        <input type="date" name="startDate" />

        <label htmlFor="endDate">End Date</label>
        <input type="date" name="endDate" />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
function SkillForm(props) {
  return (
    <form onSubmit={props.handleFormSubmition} className="form">
      <div className="form-group">
        <label htmlFor="sillName"></label>
        <input type="text" id="skillName" name="skillName" />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
function ExperienceForm(props) {
  return (
    <form onSubmit={props.handleFormSubmition} className="form">
      <div className="form-group">
        <label htmlFor="companyName">Company Name</label>
        <input type="text" id="companyName" name="companyName" />
      </div>
      <div className="form-group">
        <label htmlFor="positionTitle">Position Title</label>
        <input type="text" id="positionTitle" name="positionTitle" />
      </div>
      <div className="form-group">
        <label htmlFor="startDate">Start Date</label>
        <input type="date" id="startDate" name="startDate" />
      </div>

      <div className="form-group">
        <label htmlFor="endDate">End Date</label>
        <input type="date" id="endDate" name="endDate" />
      </div>
      <div className="form-group">
        <label htmlFor="location">location</label>
        <input type="text" id="location" name="location" />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input type="text" id="description" name="description" />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
export { EducationForm, SkillForm, ExperienceForm };
