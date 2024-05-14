import { useEffect, useState } from "react";
import "./Home.css";
import Card from "../../components/Card";

function Home() {
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

  return (
    <div>
      <div className="home__banner">
        <h1 className="home__header">WorkHub</h1>
        <p className="home__subheader ">
          The place where talents and opportunities come together
        </p>
        <a className="wh-button wh-button--primary">Getting started</a>
      </div>
      <section className="home__section">
        <h2 className="home__section-header wh-text-center">How does WorkHub works?</h2>
        <p className="home__section-description">
          WorkHub is a platform that uses detailed user profiles to match people
          with job opportunities or clients. Our top priority is honesty and
          integrity, so we strive to make every interaction on our platform
          genuine and trustworthy. Feel confident and safe using our platform,
          knowing that everything you see is real.
        </p>
        <h2 className="wh-text-center wh-fs-xl">Most popular profiles</h2>

        <Card />

        <h2 className="wh-text-center wh-fs-xl">Join us</h2>
        <div className="promotion__container">
          <div className="promotion__banner promotion__banner-1">
            <div className="person-icon-container">
              <img
                src="/src/assets/male-animation.svg"
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
                src="/src/assets/female-animation.svg"
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
