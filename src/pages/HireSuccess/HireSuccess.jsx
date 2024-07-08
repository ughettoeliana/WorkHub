import { useLocation, useNavigate } from "react-router-dom";
import "./HireSuccess.css";

function HireSuccess() {
  const location = useLocation();
  const { selectedDate, time, firstName, lastName } = location.state || {};
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/");
  };
  return (
    <div className="hire-success__container">
      <div className="hire-success__card grey-rounded-border">
        <div className="img-container">
          <img src="/src/assets/imgs/woman-picture.avif" />
        </div>
        <div>
          <h1>
            You hire{" "}
            <strong className="wh-color-primary">
              {firstName} {lastName}
            </strong>
          </h1>
          <h2>
            For{" "}
            <strong className="wh-color-primary">
              {selectedDate && new Date(selectedDate).toLocaleDateString()}
            </strong>{" "}
            at <strong className="wh-color-primary">{time}</strong>
          </h2>
          <div className="img-container">
            <img src="/src/assets/svg/check-img.svg" alt="success check" />
          </div>
          <div>
            <button
              className="wh-button wh-button--primary"
              onClick={handleOnClick}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireSuccess;
