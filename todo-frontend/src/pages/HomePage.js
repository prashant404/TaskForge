// Homepage.js
import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
      <header>
        <nav className="navbar">
          <div className="container">
            <Link to="/" className="logo">
              TaskForge
            </Link>
            <ul className="nav-links">
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/forgot-password">Forgot Password</Link></li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="hero-section">
        <div className="container">
          <h1>Welcome to TaskForge</h1>
          <p>Your ultimate task management solution</p>
          <Link to="/register" className="btn btn-primary">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
