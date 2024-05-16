import "./Card.css";

function Card() {
  return (
    <div className="cards">
      <div className="card">
        <div className="img-container">
          <img src="/src/assets/Male.jpeg" className="img" alt="user-profile" />
        </div>
        <div className="userData">
          <h4 className="userName">Kapil Ojha</h4>
          <p className="userRol">UX/UI Designer</p>
          <p className="userHourlyRate">$25 hr</p>
          <div className="userRatings">
            <p>4.5/5</p>
            <img src="/src/assets/svg/star-icon.svg" />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="img-container">
          <img src="/src/assets/imgs/Male.jpeg" className="img" alt="user-profile" />
        </div>
        <div className="userData">
          <h4 className="userName">Kapil Ojha</h4>
          <p className="userRol">UX/UI Designer</p>
          <p className="userHourlyRate">$25 hr</p>
          <div className="userRatings">
            <p>4.5/5</p>
            <img src="/src/assets/svg/star-icon.svg" />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="img-container">
          <img src="/src/assets/imgs/Male.jpeg" className="img" alt="user-profile" />
        </div>
        <div className="userData">
          <h4 className="userName">Kapil Ojha</h4>
          <p className="userRol">UX/UI Designer</p>
          <p className="userHourlyRate">$25 hr</p>
          <div className="userRatings">
            <p>4.5/5</p>
            <img src="/src/assets/svg/star-icon.svg" />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="img-container">
          <img src="/src/assets/imgs/Male.jpeg" className="img" alt="user-profile" />
        </div>
        <div className="userData">
          <h4 className="userName">Kapil Ojha</h4>
          <p className="userRol">UX/UI Designer</p>
          <p className="userHourlyRate">$25 hr</p>
          <div className="userRatings">
            <p>4.5/5</p>
            <img src="/src/assets/svg/star-icon.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
