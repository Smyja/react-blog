import React,{useContext} from "react";
import axios from "axios";
import { NavLink,useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { api } from "../api"

const Navbar = () => {
  const { user,logout } = useContext(AuthContext)
  const navigate = useNavigate()

  function handleSubmit() {
    axios.post(api.auth.logout)
      .then(res => {
        logout()
        navigate('/login')
      })
  }
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

      {user ? (
        <>
          <div
            style={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={handleSubmit}
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
