import { useNavigate } from 'react-router-dom';
import './BookedServices.css'

function BookedServices() {
const navigate = useNavigate()


  const handleRateProfile = () =>{
    navigate('./rate-profile')
  }

  return (
    <div className="bookedServices_cards">
      <div className="card" onClick={handleRateProfile}>
        <div className="img-container">
          <img
            src="/src/assets/imgs/woman-picture.avif"
            className="img"
            alt="user-profile"
          />
        </div>
        <div className="userData">
          <h4 className="userName">
            Andrea Perez
          </h4>
          <p className="userRol">Photographer</p>
              <p className="userHourlyRate">$40</p>
          <div>
            <button className='wh-button wh-button--primary' onClick={handleRateProfile}>Review</button>
          </div>
        </div>
      </div>
    </div>
  );
}



export default BookedServices;
