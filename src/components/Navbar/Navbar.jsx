import { useState } from 'react';

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
              src="/public/x-icon.svg"
              alt="Close Menu"
              onClick={toggleMenu}
            />
          ) : (
            <img
              src="/public/hamburger-icon.svg"
              alt="Open Menu"
              onClick={toggleMenu}
            />
          )}
        </div>
        <div className={`links ${isMenuOpen ? "open" : ""}`}>
          <a className="link">Job Search</a>
          <a className="link">About us</a>
          <a className="link">Contact us</a>
          <div>
            <a className="baseButton">Login</a>
          </div>
        </div>
        <div><img src="/public/logo.svg" alt="" /></div>
      </nav>
    </>
  );
}

export default NavBar;
