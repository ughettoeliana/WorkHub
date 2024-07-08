import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./EditUserForm.css";
import AddressAutocomplete from "./AddressAutocomplete";

export default function EditUserForm({
  user,
  handleUpdateUser,
  toggleEditMode,
}) {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    address: "",
    hourlyRate: "",
    aboutMe: "",
  });

  useEffect(() => {
    setFormState({
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      email: user.email || "",
      jobTitle: user.jobTitle || "",
      address: user.address || "",
      hourlyRate: user.hourlyRate || "",
      aboutMe: user.aboutMe || "",
    });
  }, [user]);

  function handleChange(eventOrName, value) {
    if (typeof eventOrName === "object" && eventOrName.target) {
      const { name, value } = eventOrName.target;
      setFormState((prev) => ({ ...prev, [name]: value }));
    } else {
      const name = eventOrName;
      setFormState((prev) => ({ ...prev, [name]: value }));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleUpdateUser({ ...user, ...formState });
  }

  return (
    <>
      <h1 className="user-profile_data-section__title">
        Edit your information
      </h1>
      <form className="profile__form" action="#" onSubmit={handleSubmit}>
        <div className="profile__form-container">
          <label className="profile__form-label" htmlFor="firstName">
            First Name:
          </label>
          <input
            className="profile__form-input"
            type="text"
            name="firstName"
            id="firstName"
            onChange={handleChange}
            value={formState.firstName}
            required
          />
        </div>
        <div className="profile__form-container">
          <label className="profile__form-label" htmlFor="lastName">
            Last Name:
          </label>
          <input
            className="profile__form-input"
            type="text"
            name="lastName"
            id="lastName"
            onChange={handleChange}
            value={formState.lastName}
            required
          />
        </div>
        <div className="profile__form-container">
          <label className="profile__form-label" htmlFor="aboutMe">
            About me:
          </label>
          <textarea
            className="profile__form-input about-me"
            name="aboutMe"
            id="aboutMe"
            value={formState.aboutMe}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="profile__form-container">
          <label className="profile__form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="profile__form-input"
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={formState.email}
            required
          />
        </div>
        <div className="profile__form-container">
          <label className="profile__form-label" htmlFor="Address">
            Address:
          </label>
          <AddressAutocomplete
            onChange={(value) => handleChange("address", value)}
            value={formState.address}
          />
          {/* <input
          className="profile__form-input"
          type="text"
          name="address"
          id="address"
          onChange={handleChange}
          value={formState.address}
          required
        /> */}
        </div>

        <div className="profile__form-container">
          <label className="profile__form-label" htmlFor="jobTitle">
            Job Title:
          </label>
          <select
            className="profile__form-input login__form-select"
            name="jobTitle"
            id="jobTitle"
            onChange={handleChange}
            value={formState.jobTitle}
            required
          >
            <option value="" disabled>
              Select a job title
            </option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Data Scientist">Data Scientist</option>
            <option value="Product Manager">Product Manager</option>
            <option value="Marketing Manager">Marketing Manager</option>
            <option value="Sales Representative">Sales Representative</option>
            <option value="Customer Support Specialist">
              Customer Support Specialist
            </option>
            <option value="Graphic Designer">Graphic Designer</option>
            <option value="Content Writer">Content Writer</option>
            <option value="Human Resources Manager">
              Human Resources Manager
            </option>
            <option value="Financial Analyst">Financial Analyst</option>
            <option value="Operations Manager">Operations Manager</option>
            <option value="Business Analyst">Business Analyst</option>
            <option value="Project Manager">Project Manager</option>
            <option value="Quality Assurance Engineer">
              Quality Assurance Engineer
            </option>
            <option value="IT Support Specialist">IT Support Specialist</option>
            <option value="UX/UI Designer">UX/UI Designer</option>
            <option value="Digital Marketing Specialist">
              Digital Marketing Specialist
            </option>
            <option value="Account Manager">Account Manager</option>
            <option value="Network Administrator">Network Administrator</option>
            <option value="Database Administrator">
              Database Administrator
            </option>
            <option value="Nurse">Nurse</option>
            <option value="Teacher">Teacher</option>
            <option value="Mechanical Engineer">Mechanical Engineer</option>
            <option value="Civil Engineer">Civil Engineer</option>
            <option value="Architect">Architect</option>
            <option value="Pharmacist">Pharmacist</option>
            <option value="Chef">Chef</option>
            <option value="Lawyer">Lawyer</option>
            <option value="Dentist">Dentist</option>
            <option value="Veterinarian">Veterinarian</option>
            <option value="Electrician">Electrician</option>
            <option value="Plumber">Plumber</option>
            <option value="Carpenter">Carpenter</option>
            <option value="Tailor">Tailor</option>
            <option value="Flight Attendant">Flight Attendant</option>
            <option value="Journalist">Journalist</option>
            <option value="Photographer">Photographer</option>
            <option value="Musician">Musician</option>
            <option value="Actor">Actor</option>
            <option value="Fitness Trainer">Fitness Trainer</option>
          </select>
        </div>
        <div className="profile__form-container">
          <label className="profile__form-label" htmlFor="hourlyRate">
            Hourly rate: $
          </label>
          <input
            className="profile__form-input"
            type="number"
            name="hourlyRate"
            id="hourlyRate"
            onChange={handleChange}
            value={formState.hourlyRate}
            required
          />
        </div>
        <div className="buttons-container">
          <button
            className="wh-button wh-color-gray-1 wh-bg-gray-4"
            type="button"
            onClick={toggleEditMode}
          >
            Close
          </button>
          <button className="wh-button wh-button--primary" type="submit">
            Save
          </button>
        </div>
      </form>
    </>
  );
}

EditUserForm.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    jobTitle: PropTypes.string,
    address: PropTypes.string,
    hourlyRate: PropTypes.string,
    aboutMe: PropTypes.string,
  }).isRequired,
  handleUpdateUser: PropTypes.func.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
};
