import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <div className="links">
        <Link to="/"> SHOP </Link>
        <Link to="/cart">Res</Link>
      </div>
    </div>
  );
};

export default Navbar;
