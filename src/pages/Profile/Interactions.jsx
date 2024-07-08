import { useNavigate } from 'react-router-dom';
import './Interactions.css'

function Interactions() {
const navigate = useNavigate()


  const handleRateProfile = () =>{
    navigate('./rate-profile')
  }

  return (
    <div className="interaction_cards">
      <div className="card" onClick={handleRateProfile}>
        <div className="img-container">
          <img
            src="/src/assets/imgs/Male.jpeg"
            className="img"
            alt="user-profile"
          />
        </div>
        <div className="userData">
          <h4 className="userName">
            Tomas Alvarez
          </h4>
          <p className="userRol">Yoga instructor</p>
              <p className="userHourlyRate">$20</p>
          <div>
            <button className='wh-button wh-button--primary' onClick={handleRateProfile}>Review</button>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Interactions;
