function Home() {
  return (
    <div className="container">
      <div className="banner">
        <h1>WorkHub</h1>
        <p>The place where talents and opportunities come together</p>
        <a className="baseButton">Getting started</a>
      </div>
      <section className="content">
        <h2>How does WorkHub works?</h2>
        <p>
          WorkHub is a platform that uses detailed user profiles to match people
          with job opportunities or clients. Our top priority is honesty and
          integrity, so we strive to make every interaction on our platform
          genuine and trustworthy. Feel confident and safe using our platform,
          knowing that everything you see is real.
        </p>
        <h3>Most popular profiles</h3>
        <div className="cards">
          <div className="card">
            <div className="img-container">
              <img
                src="/src/assets/User/Male.png"
                className="img"
                alt="user-profile"
              />
            </div>
            <div className="userData">
              <h4 className="userName">Kapil Ojha</h4>
              <p className="userRol">UX/UI Designer</p>
              <p className="userHourlyRate">$25 hr</p>
              <div className="userRatings">
                <p>4.5/5</p>
                <img src="/src/assets/User/star-icon.svg" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="img-container">
              <img
                src="/src/assets/User/Male.png"
                className="img"
                alt="user-profile"
              />
            </div>
            <div className="userData">
              <h4 className="userName">Kapil Ojha</h4>
              <p className="userRol">UX/UI Designer</p>
              <p className="userHourlyRate">$25 hr</p>
              <div className="userRatings">
                <p>4.5/5</p>
                <img src="/src/assets/User/star-icon.svg" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="img-container">
              <img
                src="/src/assets/User/Male.png"
                className="img"
                alt="user-profile"
              />
            </div>
            <div className="userData">
              <h4 className="userName">Kapil Ojha</h4>
              <p className="userRol">UX/UI Designer</p>
              <p className="userHourlyRate">$25 hr</p>
              <div className="userRatings">
                <p>4.5/5</p>
                <img src="/src/assets/User/star-icon.svg" />
              </div>{" "}
            </div>
          </div>
          <div className="card">
            <div className="img-container">
              <img
                src="/src/assets/User/Male.png"
                className="img"
                alt="user-profile"
              />
            </div>
            <div className="userData">
              <h4 className="userName">Kapil Ojha</h4>
              <p className="userRol">UX/UI Designer</p>
              <p className="userHourlyRate">$25 hr</p>
              <div className="userRatings">
                <p>4.5/5</p>
                <img src="/src/assets/User/star-icon.svg" />
              </div>
            </div>
          </div>
        </div>
        <h2>Join us</h2>
        <div className="promotion-banner">
          <div className="person-icon-container">
            <img
              src="/src/assets/User/animation-person.svg"
              alt="an animation of a male person"
            />
          </div>
          <div className="promotion-text">
            <p>Create your profile and start your job searching journey </p>
            <a className="baseButton bg-Darkblue">Create profile</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
