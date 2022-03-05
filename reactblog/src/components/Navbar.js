import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "Space-around",
    }}
  >
    <NavLink to="/">
      {" "}
      <h3>Posts</h3>
    </NavLink>
    <NavLink to="/create">
      {" "}
      <h3>Create a Post</h3>
    </NavLink>
    <NavLink to="/about">
      {" "}
      <h3>About</h3>
    </NavLink>
    <NavLink to="/contact">
      {" "}
      <h3>Contact</h3>
    </NavLink>
  </div>
);

export default Navbar;
