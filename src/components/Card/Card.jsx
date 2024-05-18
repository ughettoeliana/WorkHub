import "./Card.css";
import PropTypes from "prop-types";

function Card({ user }) {
  return (
    <div className="cards">
      <div className="card">
        <div className="img-container">
          <img
            src="/src/assets/imgs/Male.jpeg"
            className="img"
            alt="user-profile"
          />
        </div>
        <div className="userData">
          <h4 className="userName">{user.fullName}</h4>
          <p className="userRol">{user.email}</p>
          <p className="userRol">{user.rol}</p>
          <p className="userHourlyRate">{user.hourlyRate}</p>
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
    </div>
  );
}

Card.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    rol: PropTypes.string,
    hourlyRate: PropTypes.string,
    ratings: PropTypes.string,
  }).isRequired,
};

export default Card;
