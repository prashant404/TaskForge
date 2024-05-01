// RegisterForm.js
import React, { useState } from "react";
import { Card, Form, Button, Alert, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../utils/url"; 
import Lottie from "lottie-react";
import animationData from "../assets/registeranimation.json"

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${baseURL}/api/auth/register`,
        {
          username: formData.username,
          password: formData.password,
          email: formData.email
        }
      );
      console.log(response.data); // handle successful registration
      setSuccessMessage("You are registered! Always remember the password for future use.");
      // Clear form data
      setFormData({
        username: "",
        password: "",
        email: ""
      });
    } catch (error) {
      console.error("Registration failed:", error.response.data.msg); // handle registration error
      setError("Registration failed: " + error.response.data.msg); // Update error state to display error message
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card className="p-4" style={{ maxWidth: "30rem" }}>
              <Card.Body>
              <Lottie animationData = {animationData} />
                <h3 className="mb-4 logo-text text-center">TaskForge</h3>
                <h2 className="text-center mb-4">Register</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {successMessage && <Alert variant="success">{successMessage}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Register
                  </Button>
                </Form>
                <div className="mt-3 text-center">
                  <Link to="/" className="btn btn-secondary">
                    Back to Login
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterForm;
