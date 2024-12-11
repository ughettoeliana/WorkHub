import { useEffect, useState } from "react";
import "./Home.css";
import Card from "../../components/Card";
import { getUsers } from "../../services/user";

function Home() {
  const [users, setUsers] = useState([]);
  const [isWideScreen, setIsWideScreen] = useState(
    window.matchMedia("(min-width: 600px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 600px)");
    const handler = (event) => {
      setIsWideScreen(event.matches);
    };

    mediaQuery.addEventListener("change", handler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, []);

  useEffect(() => {
    async function fetchData() {
      const usersRef = await getUsers();
      setUsers(usersRef);
    }

    fetchData();
  }, []);

  return (
    <div>
      <div className="home__banner">
        <div className="home__banner-logo">
          <div className="home__banner-logo-placeholder">
            <img src="/public/logo-desktop.svg" />
          </div>
          {/* <h1 className="home__header">workhub</h1> */}
        </div>
        <p className="home__subheader">
          The place where <strong>talents</strong> and{" "}
          <strong>opportunities</strong> come together
        </p>
        <a className="wh-button wh-button--primary">Getting started</a>
      </div>
      <section className="home__section">
        <h2 className="home__section-header wh-text-center">
          How does <span className="wh-color-secondary">workhub</span> works?
        </h2>
        <div className="home__section description-container">
          <p className="home__section description-text wh-fs-lg">
            <strong>workhub</strong> is a platform that uses detailed user
            profiles to match people with{" "}
            <strong>job opportunities or clients</strong>.{" "}
            <strong>Our top priority is honesty and integrity</strong>, so we
            strive to make every interaction on our platform genuine and
            trustworthy. Feel confident and safe using our platform, knowing
            that <strong>everything you see is real.</strong>
          </p>

          <div className="home__section description-img-container">
            <img src="/src/assets/imgs/home__tech-people-img.png" />
          </div>
        </div>
        <h2 className="wh-text-center wh-fs-xl">Most popular profiles</h2>

        <div className="cards">
          {users.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>

        <h2 className="wh-text-center wh-fs-xl">Join us</h2>
        <div className="promotion__container">
          <div className="promotion__banner promotion__banner-1">
            <div className="person-icon-container">
              <img
                src="/src/assets/svg/male-animation.svg"
                alt="an animation of a male person"
              />
            </div>
            <div className="promotion__banner-text">
              <p>Create your profile and start your job searching journey </p>
              <a className="wh-button wh-button--secondary">Create profile</a>
            </div>
          </div>
          <div
            className={
              isWideScreen
                ? "promotion__banner promotion__banner-2"
                : "display-none"
            }
          >
            <div className="person-icon-container">
              <img
                src="/src/assets/svg/female-animation.svg"
                alt="an animation of a male person"
              />
            </div>
            <div className="promotion__banner-text">
              <p>Create your profile and start your job searching journey </p>
              <a className="wh-button wh-button--primary">Create profile</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
