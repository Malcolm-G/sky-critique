import React from "react";
import { NavLink } from "react-router-dom";
//import "./NavBar.css";

function NavBar() {

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
         <i>  😃  </i>
         <i>   flights </i>
         <i>   logout  </i>

        </div>
      </nav>
    </>
  );
}

export default NavBar;