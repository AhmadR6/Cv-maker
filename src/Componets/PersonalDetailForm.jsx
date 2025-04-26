export default function PersonalDetailForm({ handelFormChange }) {
  return (
    <form className="form">
      <h1>Personal Details</h1>
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          onChange={handelFormChange}
          type="text"
          id="name"
          name="fullName"
          placeholder="Josephine Meyers"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          onChange={handelFormChange}
          type="email"
          id="email"
          name="email"
          placeholder="joesphine.meyers@mail.com"
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          onChange={handelFormChange}
          type="tel"
          id="phone"
          name="phoneNumber"
          placeholder="+123-456-7890"
        />
      </div>
      <div className="form-group">
        <label htmlFor="occupation">Occupation</label>
        <input
          onChange={handelFormChange}
          type="text"
          id="occupation"
          name="occupation"
          placeholder="Marketing Manager"
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          onChange={handelFormChange}
          type="text"
          id="address"
          name="address"
          placeholder="London, UK"
        />
      </div>
    </form>
  );
}
