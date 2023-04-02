
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./UserDataProvider";

function NavBar() {
  const [click, setClick] = useState(false);
  const [user,setUser] = useContext(UserContext);
  const navigate = useNavigate()

  const handleClick = () => setClick(!click);
  function nameClicked(){
    if(window.confirm('Do you wish to Sign out?')){
      fetch('/logout',{
        method:'DELETE'
      })
      .then(data=>{
        setUser(null)
      })
      navigate('/');
  }
  }
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
                Home
              </Link>
            </li>
            <li className="nav-item">

              <Link
                to="/my-bookings"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                My-Bookings
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
              {!user?
              <Link
                to="/login"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Log In
              </Link>
              :
              <Link
              // activeClassName="active"
              className="nav-links"
              onClick={nameClicked}
              >
              {user?.name}
            </Link>
              }
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