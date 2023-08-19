/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";

const Nav = ({ dogs }) => {
  const navLinks = dogs.map((dog) => (
    <NavLink key={dog.id} exact to={`/dogs/${dog.name.toLowerCase()}`}>
      {dog.name}
    </NavLink>
  ));

  return (
    <nav className="navbar">
      <NavLink key="home" exact to="/dogs">
        Home
      </NavLink>
      {navLinks}
    </nav>
  );
};

export default Nav;
