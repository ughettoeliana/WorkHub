import { useState } from 'react';
import './Navbar.css'

function NavBar() {
  const [isMenuOpen, setIsMenuOpen]  = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="nav">
        <div>
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
        <div className={`nav__links ${isMenuOpen ? "nav__links--open" : ""}`}>
          <a className="nav__link">Job Search</a>
          <a className="nav__link">About us</a>
          <a className="nav__link">Contact us</a>
          <div>
            <a className="base-button">Login</a>
          </div>
        </div>
        <div><img src="/public/logo.svg" alt="" /></div>
      </nav>
    </>
  );
}

export default NavBar;
