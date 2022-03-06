import React,{useEffect} from "react";
import { NavLink, Navigate } from "react-router-dom";
import { authenticationService } from "../services/authenticatiion";


const Navbar = (authenticationService.isAuthenticated) => {
  return (
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

      {authenticationService.isAuthenticated ? (
        <>
          <div
            style={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => authenticationService.logout()}
          >
            <h3>Logout</h3>
          </div>
          <NavLink to="/create">
            <h3>Create a Post</h3>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login">
            {" "}
            <h3>Login</h3>
          </NavLink>{" "}
        </>
      )}

      <NavLink to="/contact">
        {" "}
        <h3>Contact</h3>
      </NavLink>
    </div>
  );
};

export default Navbar;
