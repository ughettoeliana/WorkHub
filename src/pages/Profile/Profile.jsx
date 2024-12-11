import { useEffect, useState } from "react";
import { getUser, updateUserData } from "../../services/user";
import EditUserForm from "./EditUserForm";
import "./Profile.css";
import BookedServices from "./BookedServices";

export default function Profile() {
  const [user, setUser] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [selectedSection, setSelectedSection] = useState("profile");

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

  // Function to handle section selection
  function handleSectionSelect(section) {
    setSelectedSection(section);
  }

  return (
    <div className="user-profile__body">
      <section className="user-profile_aside-section wh-bg-tertiary">
        <div className="user-profile-aside">
          <div className="user-profile__img-container">
            <img src="/src/assets/imgs/woman-picture.avif" alt="User Avatar" />
          </div>
          <div>
            <div
              className={`user-profile_aside-section__link ${
                selectedSection === "profile" ? "active" : ""
              }`}
              onClick={() => handleSectionSelect("profile")}
            >
              <div className="user-profile_aside-section__icons-container user-icon"></div>
              <div>
                <p>My profile</p>
              </div>
            </div>
            <div
              className={`user-profile_aside-section__link ${
                selectedSection === "bookedServices" ? "active" : ""
              }`}
              onClick={() => handleSectionSelect("bookedServices")}
            >
              <div className="user-profile_aside-section__icons-container bookedServices"></div>
              <div className="bookedServices">
                <p>Booked Services</p>
              </div>
            </div>
            <div
              className={`user-profile_aside-section__link ${
                selectedSection === "interactions" ? "active" : ""
              }`}
              onClick={() => handleSectionSelect("interactions")}
            >
              <div className="user-profile_aside-section__icons-container interactions"></div>
              <div className="interactions">
                <p>Interactions</p>
              </div>
            </div>
            <div
              className={`user-profile_aside-section__link ${
                selectedSection === "favorites" ? "active" : ""
              }`}
              onClick={() => handleSectionSelect("favorites")}
            >
              <div className="user-profile_aside-section__icons-container favorites"></div>
              <div>
                <p>Favorites</p>
              </div>
            </div>
            <div
              className={`user-profile_aside-section__link ${
                selectedSection === "notifications" ? "active" : ""
              }`}
              onClick={() => handleSectionSelect("notifications")}
            >
              <div className="user-profile_aside-section__icons-container notifications"></div>
              <div>
                <p>Notifications</p>
              </div>
            </div>
            <div
              className={`user-profile_aside-section__link ${
                selectedSection === "settings" ? "active" : ""
              }`}
              onClick={() => handleSectionSelect("settings")}
            >
              <div className="user-profile_aside-section__icons-container settings"></div>
              <div>
                <p>Settings</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="user-profile_data-section">
        {selectedSection === "profile" && (
          <div>
            {!editMode && (
              <>
                <h1 className="user-profile_data-section__title">
                  Welcome{" "}
                  <span className="wh-color-primary">
                    {user.firstName} {user.lastName}
                  </span>
                </h1>
                <div className="profile__form">
                  <div className="profile__form-container">
                    <label className="profile__form-label" htmlFor="firstName">
                      First Name:
                    </label>
                    <input
                      className="profile__form-input"
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={user.firstName}
                      disabled
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
                      value={user.lastName}
                      disabled
                    />
                  </div>
                  <div className="profile__form-container">
                    <label className="profile__form-label" htmlFor="aboutMe">
                      About me:
                    </label>
                    <textarea
                      className="profile__form-input"
                      id="aboutMe"
                      value={user.aboutMe}
                      disabled
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
                      value={user.email}
                      disabled
                    />
                  </div>
                  <div className="profile__form-container">
                    <label className="profile__form-label" htmlFor="Address">
                      Address:
                    </label>
                    <input
                      className="profile__form-input"
                      type="text"
                      name="address"
                      id="address"
                      value={user.address}
                      disabled
                    />
                  </div>

                  <div className="profile__form-container">
                    <label className="profile__form-label" htmlFor="jobTitle">
                      Job Title:
                    </label>
                    <select
                      className="profile__form-input login__form-select"
                      name="jobTitle"
                      id="jobTitle"
                      value={user.jobTitle}
                      disabled
                    >
                      <option value="" disabled>
                        Select a job title
                      </option>
                      <option value="Software Engineer">
                        Software Engineer
                      </option>
                      <option value="Data Scientist">Data Scientist</option>
                      <option value="Product Manager">Product Manager</option>
                      <option value="Marketing Manager">
                        Marketing Manager
                      </option>
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
                      <option value="Financial Analyst">
                        Financial Analyst
                      </option>
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
                  <div className="profile__form-container">
                    <label className="profile__form-label" htmlFor="hourlyRate">
                      Hourly rate: $
                    </label>
                    <input
                      className="profile__form-input"
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
        )}

        {selectedSection === "bookedServices" && (
          <div>
            <h1>Booked Services</h1>
            <BookedServices user={user} />
          </div>
        )}

        {selectedSection === "interactions" && (
          <div>
            <h1>Interactions</h1>
            <p className="wh-color-gray-2">
              You don&apos;t have any interactions yet
            </p>
          </div>
        )}

        {selectedSection === "favorites" && (
          <div>
            <h1>Favorites</h1>
            <p className="wh-color-gray-2">
              You don&apos;t have any favorite profiles yet
            </p>
          </div>
        )}

        {selectedSection === "notifications" && (
          <div>
            <h1>Notifications</h1>
            <p className="wh-color-gray-2">
              You don&apos;t have any notifications to show
            </p>{" "}
          </div>
        )}

        {selectedSection === "settings" && (
          <div>
            <h1>Settings</h1>
            <p className="wh-color-gray-2">This section is in process</p>{" "}
          </div>
        )}
      </section>
    </div>
  );
}
