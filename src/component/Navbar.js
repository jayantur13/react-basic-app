import React from "react";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";

//Link is normally for url
//To make a link active url NavLink with a className & CSS to show it as active

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="row justify-content-center text-center">
        <div className="col-sm-3 nav-opt px-0">
          <NavLink
            to="/getuser"
            className={({ isActive }) => (!isActive ? "inactive" : "active")}
          >
           <div> Get user</div>
          </NavLink>
        </div>
        <div className="col-sm-3 nav-opt px-0">
          <NavLink
            to="/addnewuser"
            className={({ isActive }) => (!isActive ? "inactive" : "active")}
          >
           <div> Add New User</div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
