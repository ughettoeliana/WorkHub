import { useEffect, useState } from "react";
import { getUser, updateUserData } from "../../services/user";
import EditUserForm from "./EditUserForm";
import "./Profile.css";

export default function Profile() {
  const [user, setUser] = useState({});
  const [editMode, setEditMode] = useState(false);

  function toggleEditMode() {
    setEditMode((prev) => !prev);
  }

  async function handleUpdateUser(updatedUser) {
    try {
      await updateUserData(user.id, updatedUser);
      setUser(updatedUser);
      toggleEditMode();
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  }

  useEffect(() => {
    async function fetchUserData() {
      const userData = await getUser();
      setUser(userData);
    }

    fetchUserData();
  }, []);

  return (
    <div className="user-profile__body">
      <section className="user-profile_aside-section wh-bg-tertiary">
        <div className="user-profile-aside">
          <div className="user-profile__img-container">
            <img src="/src/assets/imgs/woman-picture.avif" />
          </div>
          <div>
            <div className="user-profile_aside-section__link">
              <div className="user-profile_aside-section__icons-container">
                <img src="/src/assets/svg/icons/user-icon.svg" />
              </div>
              <div>
                <p>My profile</p>
              </div>
            </div>
            <div className="user-profile_aside-section__link">
              <div className="user-profile_aside-section__icons-container">
                <img
                  src="/src/assets/svg/icons/interactions-icon.svg"
                  alt="Interactions Icon"
                  className="normal-icon"
                />
                {/* <img
                  src="/src/assets/svg/icons/interactions-icon-light.svg"
                  alt="Interactions Icon Hover"
                  className="hover-icon"
                /> */}
              </div>
              <div>
                <p>Interactions</p>
              </div>
            </div>
            <div className="user-profile_aside-section__link">
              <div className="user-profile_aside-section__icons-container">
                <img src="/src/assets/svg/icons/favorites-icon.svg" />
              </div>
              <div>
                <p>Favorites</p>
              </div>
            </div>
            <div className="user-profile_aside-section__link">
              <div className="user-profile_aside-section__icons-container">
                <img src="/src/assets/svg/icons/notifications-icon.svg" />
              </div>
              <div>
                <p>Notifications</p>
              </div>
            </div>
            <div className="user-profile_aside-section__link">
              <div className="user-profile_aside-section__icons-container">
                <img src="/src/assets/svg/icons/settings-icon.svg" />
              </div>
              <div>
                <p>Settings</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="user-profile_data-section">
        <h1 className="user-profile_data-section__title">
          Welcome{" "}
          <span className="wh-color-primary">
            {user.firstName} {user.lastName}
          </span>
        </h1>

        <div>
          {!editMode && (
            <>
              <div className="login__form">
                <div className="login__form-container">
                  <label className="login__form-label" htmlFor="firstName">
                    First Name:
                  </label>
                  <input
                    className="login__form-input"
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={user.firstName}
                    disabled
                  />
                </div>
                <div className="login__form-container">
                  <label className="login__form-label" htmlFor="lastName">
                    Last Name:
                  </label>
                  <input
                    className="login__form-input"
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={user.lastName}
                    disabled
                  />
                </div>
                <div className="login__form-container">
                  <label className="login__form-label" htmlFor="email">
                    Email:
                  </label>
                  <input
                    className="login__form-input"
                    type="email"
                    name="email"
                    id="email"
                    value={user.email}
                    disabled
                  />
                </div>
                <div className="login__form-container">
                  <label className="login__form-label" htmlFor="Address">
                    Address:
                  </label>
                  <input
                    className="login__form-input"
                    type="text"
                    name="address"
                    id="address"
                    value={user.address}
                    disabled
                  />
                </div>

                <div className="login__form-container">
                  <label className="login__form-label" htmlFor="jobTitle">
                    Job Title:
                  </label>
                  <select
                    className="login__form-input login__form-select"
                    name="jobTitle"
                    id="jobTitle"
                    value={user.jobTitle}
                    disabled
                  >
                    <option value="" disabled>
                      Select a job title
                    </option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Data Scientist">Data Scientist</option>
                    <option value="Product Manager">Product Manager</option>
                    <option value="Marketing Manager">Marketing Manager</option>
                    <option value="Sales Representative">
                      Sales Representative
                    </option>
                    <option value="Customer Support Specialist">
                      Customer Support Specialist
                    </option>
                    <option value="Graphic Designer">Graphic Designer</option>
                    <option value="Content Writer">Content Writer</option>
                    <option value="Human Resources Manager">
                      Human Resources Manager
                    </option>
                    <option value="Financial Analyst">Financial Analyst</option>
                    <option value="Operations Manager">
                      Operations Manager
                    </option>
                    <option value="Business Analyst">Business Analyst</option>
                    <option value="Project Manager">Project Manager</option>
                    <option value="Quality Assurance Engineer">
                      Quality Assurance Engineer
                    </option>
                    <option value="IT Support Specialist">
                      IT Support Specialist
                    </option>
                    <option value="UX/UI Designer">UX/UI Designer</option>
                    <option value="Digital Marketing Specialist">
                      Digital Marketing Specialist
                    </option>
                    <option value="Account Manager">Account Manager</option>
                    <option value="Network Administrator">
                      Network Administrator
                    </option>
                    <option value="Database Administrator">
                      Database Administrator
                    </option>
                    <option value="Nurse">Nurse</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Mechanical Engineer">
                      Mechanical Engineer
                    </option>
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
                <div className="login__form-container">
                  <label className="login__form-label" htmlFor="hourlyRate">
                    Hourly rate: $
                  </label>
                  <input
                    className="login__form-input"
                    type="number"
                    name="hourlyRate"
                    id="hourlyRate"
                    value={user.hourlyRate}
                    disabled
                  />
                </div>
                <div className="buttons-container">
                  <button
                    className="edit-profile_button wh-button wh-button--secondary"
                    onClick={toggleEditMode}
                  >
                    Edit my profile
                  </button>
                </div>
              </div>
            </>
          )}
          {editMode && (
            <EditUserForm
              user={user}
              handleUpdateUser={handleUpdateUser}
              toggleEditMode={toggleEditMode}
            />
          )}
        </div>
      </section>
    </div>
  );
}
