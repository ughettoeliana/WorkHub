import { useNavigate, useParams } from "react-router-dom";
import { getUser, getUserById } from "../../services/user";
import { useEffect, useState } from "react";
import "./HireUser.css";
import PaymentOption from "./PaymentOption";

export default function HireUser() {
  const [user, setUser] = useState({});
  const [loggedUser, setLoggedUser] = useState({});
  const { userId } = useParams();
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionTitle, setSelectedOptionTitle] = useState("");
  const [contractTitle, setContractTitle] = useState("");
  const navigate = useNavigate();

  const handleContractTitleChange = (e) => {
    setContractTitle(e.target.value);
  };

  const handleSelection = (option, title) => {
    setSelectedOption(option);
    setSelectedOptionTitle(title);
  };

  const handleOnclick = () => {
    navigate("./set-schedule", {
      state: {
        contractTitle,
      },
    });
  };

  useEffect(() => {
    async function fetchUserData() {
      const userData = await getUserById(userId);
      setUser(userData);
    }
    fetchUserData();
  }, [userId]);

  useEffect(() => {
    async function fetchUserData() {
      const userData = await getUser();
      setLoggedUser(userData);
    }

    fetchUserData();
  }, []);


  return (
    <>
      <div className="user__header">
        <h1>
          Ready to work with{" "}
          <strong className="wh-color-primary">
            {user.firstName} {user.lastName}?
          </strong>
        </h1>
      </div>
      <div className="job-info-container">
        <div className="details-wraper grey-rounded-border">
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
        <div className="job-info">
          <h3>Job details</h3>
          <div className="job-info__hiring-team">
            <p>Hiring team</p>
            <select className="hiring-team__select">
              <option value={loggedUser.userId}>
                {loggedUser.firstName} {loggedUser.lastName}
              </option>
            </select>
          </div>
          <div className="job-info__contract__title">
            <p>Contract title</p>
            <input
              className="contract__input"
              type="text"
              name="contractTitle"
              id="contractTitle"
              value={contractTitle}
              onChange={handleContractTitleChange}
              placeholder="Add the job contract title"
              required
            />
          </div>
        </div>
      </div>
      <div className="payment__section">
        <h3>Payment Method</h3>
        <div className="payment-options-container">
          <div className="payment-option-wrapper">
            <PaymentOption
              title="Pay by the hour"
              description="Pay based on the actual time spent on the job. Perfect for projects that may change in scope or need ongoing adjustments."
              optionValue="hourly"
              selectedOption={selectedOption}
              handleSelection={handleSelection}
            />
          </div>
          <div className="payment-option-wrapper">
            <PaymentOption
              title="Pay a fixed price"
              description="Pay a single, agreed-upon amount for the entire project. Ideal for well-defined tasks with clear deliverables."
              optionValue="fixed"
              selectedOption={selectedOption}
              handleSelection={handleSelection}
            />
          </div>
        </div>
        <div className="payment__selected-description">
          <h4>{selectedOptionTitle}</h4>
          <h4> {user.hourlyRate ? <p>${user.hourlyRate} / hr</p> : ""}</h4>
          <p className="wh-color-gray-3">
            {user.firstName} {user.lastName} profile rate per hour is $
            {user.hourlyRate} / hr
          </p>
        </div>
        <div>
          <h4>Weekly Limit</h4>
          <h4>40 hrs/week</h4>
        </div>
      </div>
      <div className="extra-comments">
        <h3>Work description</h3>
        <textarea placeholder="Add a description of the work " />
        <div className="terms-container">
          <input type="checkbox" name="agreeToTerms" id="terms" />
          <label id="terms">
            Yes, I understand and agree to the{" "}
            <strong className="wh-color-primary">
              workhub Terms of Service
            </strong>
            , including the{" "}
            <strong className="wh-color-primary">
              User Agreement and Privacy Policy
            </strong>
            .
          </label>
        </div>
        <div>
          <button
            className="wh-button wh-button--primary"
            onClick={handleOnclick}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
