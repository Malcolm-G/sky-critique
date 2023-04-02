
import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            SkyCritique
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
            <Link
                to="/"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Get Started
              </Link>
            </li>
            <li className="nav-item">

              <Link
                to="/home"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/flights"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Flights
              </Link>
            </li>
          
            <li className="nav-item">
              <Link
                to="/logout"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Log Out
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;