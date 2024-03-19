// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ logout }) => {
  return (
    <nav>
      <ul>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/" onClick={logout}>Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
