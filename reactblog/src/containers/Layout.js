import React from "react";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
