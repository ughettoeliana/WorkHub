import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./RateProfile.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RateProfile() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [successfullyDone, setSuccessfullyDone] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    setSuccessfullyDone(!successfullyDone);
  };

  const handleGoBack = () => {
    navigate('/profile');
  };

  return (
    <div>
      {successfullyDone ? (
        <div className="rate-profile__successfully">
          <h1>Successfully submited!</h1>
          <div className="img-container">
            <img src="/src/assets/svg/check-img.svg" alt="success check" />
          </div>
          <div>
            <button
              className="wh-button wh-button--primary"
              onClick={handleGoBack}
            >
              Go back
            </button>
          </div>
        </div>
      ) : (
        <form
          className="rate-profile_container"
          action="#"
          onSubmit={handleSubmit}
        >
          <h1>
            Leave your feedback for{" "}
            <strong className="wh-color-primary">Tomas Alvarez</strong>{" "}
          </h1>
          <div>
            <h2>Please rate your experience from 1 to 5 stars </h2>
            <div className="star-rating">
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <button
                    type="button"
                    key={index}
                    className={index <= (hover || rating) ? "on" : "off"}
                    onClick={() => setRating(index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                  >
                    <FontAwesomeIcon icon={faStar} className="star" />
                  </button>
                );
              })}
            </div>
          </div>
          <div className="rate-profile_comment-section">
            <h3>Your thoughts are important to us. Leave a comment!</h3>
            <textarea
              className="rate-profile_textarea"
              placeholder="Leave a comment"
            ></textarea>
          </div>
          <div className="rate-profile_button">
            <button className="wh-button wh-button--primary" type="submit">
              Send
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default RateProfile;
