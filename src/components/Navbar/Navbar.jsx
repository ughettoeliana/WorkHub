import { useEffect, useState } from "react";
import "./Navbar.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(
    window.matchMedia("(min-width: 600px)").matches
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    <>
      <div className="nav-container">
        <nav className="nav">
          <div>
            <img src="/public/logo.svg" alt="" />
          </div>
          <div className={`nav__links ${isMenuOpen ? "nav__links--open" : ""}`}>
            <a className="nav__link">Job Search</a>
            <a className="nav__link">About us</a>
            <a className="nav__link">Contact us</a>
            <div>
              <a className="base-button">Login</a>
            </div>
          </div>
          <div className={isWideScreen ? "display-none" : ""}>
            {isMenuOpen ? (
              <img
                src="/src/assets/x-icon.svg"
                alt="Close Menu"
                onClick={toggleMenu}
              />
            ) : (
              <img
                src="/src/assets/hamburger-icon.svg"
                alt="Open Menu"
                onClick={toggleMenu}
              />
            )}
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
