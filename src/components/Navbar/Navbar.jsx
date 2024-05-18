import { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebase";
import { listenToAuthChanges } from "../../services/auth";
//import { isUserLogged } from "../../services/auth";

function NavBar() {
  const [authUser, setAuthUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(
    window.matchMedia("(min-width: 600px)").matches
  );

  const navigate = useNavigate();

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

  useEffect(() => {
    const listen = listenToAuthChanges(auth, setAuthUser);

    return () => {
      listen();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        console.log("User sign out");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="nav-container">
        <nav className="nav">
          <div>
            <Link to="/">
              <img src="/public/logo-mobile.svg" alt="workhub logo" />
            </Link>
          </div>
          <div className={`nav__links ${isMenuOpen ? "nav__links--open" : ""}`}>
            <Link className="nav__link" to="/profiles">
              Search
            </Link>
            <a className="nav__link">About us</a>
            <a className="nav__link">Contact us</a>
            {authUser !== null ? (
              <>
                <Link to='/'>My profile</Link>
                <Link
                  onClick={handleSignOut}
                  className="wh-button wh-button--primary"
                >
                  Sign Out
                </Link>
              </>
            ) : (
              <Link to="/login" className="wh-button wh-button--primary">
                Log in
              </Link>
            )}
          </div>
          <div className={isWideScreen ? "display-none" : ""}>
            {isMenuOpen ? (
              <img
                src="/src/assets/svg/x-icon.svg"
                alt="Close Menu"
                onClick={toggleMenu}
              />
            ) : (
              <img
                src="/src/assets/svg/hamburger-icon.svg"
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
