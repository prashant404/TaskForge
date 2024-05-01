// Homepage.js
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Lottie from "lottie-react";
import animationData from "../assets/animate.json"

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/" className="logo">TaskForge</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/forgot-password">Forgot Password</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="hero-section">
        <div className="container">
          <h1>Welcome to TaskForge</h1>
          <p>Your ultimate task management solution</p>
          <Button as={Link} to="/register" variant="primary">Get Started</Button>
          <Lottie animationData = {animationData} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
