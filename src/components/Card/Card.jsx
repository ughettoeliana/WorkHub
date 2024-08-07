import { useNavigate } from "react-router-dom";
import "./Card.css";
import PropTypes from "prop-types";

function Card({ user }) {
  const navigate = useNavigate();
  function handleGoToUserProfile() {
    navigate(`/user-public-profile/${user.id}`);
  }
  return (
    <>
      <div className="card" onClick={handleGoToUserProfile}>
        <div className="img-container">
          <img
            src="/src/assets/imgs/woman-picture.avif"
            className="img"
            alt="user-profile"
          />
        </div>
        <div className="userData">
          <h4 className="userName">
            {user.firstName} {user.lastName}
          </h4>
          <p className="userRol">{user.jobTitle}</p>
          {user.hourlyRate ? (
            <>
              <p className="userHourlyRate">${user.hourlyRate}</p>
            </>
          ) : (
            ""
          )}
          <div className="userRatings">
            <p>4.5</p>
            <img src="/src/assets/svg/star-icon.svg" />
          </div>
          <div className="userRatings">
            {user.ratings ? (
              <>
                <p>{user.ratings}</p>
                <img src="/src/assets/svg/star-icon.svg" />
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    jobTitle: PropTypes.string,
    hourlyRate: PropTypes.string,
    ratings: PropTypes.string,
  }).isRequired,
};

export default Card;
