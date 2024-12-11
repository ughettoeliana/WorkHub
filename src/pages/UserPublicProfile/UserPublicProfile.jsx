import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById } from "../../services/user";
import "./UserPublicProfile.css";

export default function UserPublicProfile() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUserData() {
      const userData = await getUserById(userId);
      setUser(userData);
    }
    fetchUserData();
  }, [userId]);

   function handleHireUser() {
    navigate('./hireUser')
  }

  return (
    <>
      <div className="user__header">
        <h1>
          {user.firstName} {user.lastName}
        </h1>
        <div>
          <button className="wh-button wh-button--primary" onClick={handleHireUser}>
            Hire {user.firstName}
          </button>
        </div>
      </div>

      <div className="user__info">
        <div className="user__info-card">
          <div>
            <div className="user__additional-details grey-rounded-border">
              <div>
                <h3>Additional Details</h3>
                <div className="user__additional-details-container">
                  <div className="label-container">
                    <img src="/src/assets/svg/icons/email-icon.svg" />
                    <p className="wh-color-gray-2">Email</p>
                  </div>
                  <p className="user__additional-details-text">
                    <strong>{user.email}</strong>
                  </p>
                </div>
                <div className="user__additional-details-container">
                  <div className="label-container">
                    <img src="/src/assets/svg/icons/phone-icon.svg" />
                    <p className="wh-color-gray-2">Phone</p>
                  </div>
                  <p className="user__additional-details-text">
                    <strong>+123456789</strong>
                  </p>
                </div>
                <div className="user__additional-details-container">
                  <div className="label-container">
                    <img src="/src/assets/svg/icons/language-icon.svg" />
                    <p className="wh-color-gray-2">Languages</p>
                  </div>
                  <p className="user__additional-details-text">
                    <strong>Spanish, English</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="user__additional-details grey-rounded-border">
              <div>
                <h3>Social Links</h3>
                <div className="user__additional-details-container">
                  <div className="label-container">
                    <img src="/src/assets/svg/icons/instagram-icon.svg" />
                    <p className="wh-color-gray-2">Instagram</p>
                  </div>
                  <p className="user__additional-details-text wh-color-primary">
                    www.instagram.com
                  </p>
                </div>
                <div className="user__additional-details-container">
                  <div className="label-container">
                    <img src="/src/assets/svg/icons/facebook-icon.svg" />
                    <p className="wh-color-gray-2">Facebook</p>
                  </div>
                  <p className="user__additional-details-text wh-color-primary">
                    www.facebook.com
                  </p>
                </div>
                <div className="user__additional-details-container">
                  <div className="label-container">
                    <img src="/src/assets/svg/icons/twitter-icon.svg" />
                    <p className="wh-color-gray-2">X</p>
                  </div>
                  <p className="user__additional-details-text wh-color-primary">www.x.com </p>
                </div>
              </div>
            </div>
          </div>

          <div className="user__details-container">
            <div className="grey-rounded-border">
              <div className="background-holder"></div>
              <div className="details-wraper">
                <div className="img-container">
                  <img src="/src/assets/imgs/woman-picture.avif" />
                </div>
                <div className="user__details">
                  <h2>
                    {user.firstName} {user.lastName}
                  </h2>
                  <div className="wh-color-gray-2">
                    {user.jobTitle ? <p>{user.jobTitle}</p> : ""}
                    {user.hourlyRate ? <p>${user.hourlyRate}</p> : ""}
                  </div>
                  {user.address ? (
                    <div className="user__location-container">
                      <div>
                        <img src="/src/assets/svg/icons/location-icon.svg" />
                      </div>
                      <p className="wh-color-gray-2">{user.address}</p>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="user__details-available">
                    <img src="/src/assets/svg/icons/flag-icon.svg" />
                    <p>Open for opportunities</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="user__about-me grey-rounded-border">
              <h3>About me</h3>
              <p className="wh-color-gray-2">
                I am a dedicated and hardworking individual with a passion for
                excellence in my field. With a diverse background and a
                commitment to continuous learning, I bring a unique perspective
                and a strong work ethic to every project. I am eager to
                contribute my skills and experience to new opportunities and
                thrive in collaborative environments where I can grow and make a
                meaningful impact.
              </p>
            </div>
            <div className="user__about-me grey-rounded-border">
              <h3>Education</h3>
              <h4 className=" wh-color-primary ">
                Bachelor’s Degree, University of Buenos Aires, Argentina
              </h4>
              <p className="wh-color-gray-3">December 2015</p>
              <p>
                Completed a comprehensive curriculum with a focus on
                mathematics.
              </p>
              <div className="user__experiences">
                <h4 className="wh-color-primary ">
                  High School Diploma, Buenos Aires, Argentina
                </h4>
                <p className="wh-color-gray-3">December 2010</p>
                <p>
                  Completed a comprehensive curriculum with a focus on
                  mathematics.
                </p>
              </div>
            </div>
            <div className="user__about-me grey-rounded-border">
              <h3>Skills</h3>
              <div className="skills-highlight-container">
                <div className="skills-highlight wh-bg-tertiary">
                  <p className="wh-color-primary">Problem-Solving</p>
                </div>
                <div className="skills-highlight wh-bg-tertiary">
                  <p className="wh-color-primary">Communication</p>
                </div>
                <div className="skills-highlight wh-bg-tertiary">
                  <p className="wh-color-primary">Team colaboration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
