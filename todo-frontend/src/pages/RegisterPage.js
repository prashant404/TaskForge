import React, { useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = formData;
    // Perform form validation here
    if (!username || !password) {
      setError("All fields are required");
      setShowError(true);
      setTimeout(() => setShowError(false), 3000); // Hide error message after 3 seconds
      return;
    }

    // If form is valid, submit the data
    console.log("Form submitted:", formData);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="w-100 w-md-75 w-lg-50"> {/* Adjust width here */}
        <Card className="p-4">
          <Card.Body>
            <h3 className="mb-4 logo-text text-center">TaskForge</h3>
            <h2 className="text-center mb-4">Register</h2>
            <Form onSubmit={handleSubmit}>
              {/* Your registration form fields */}
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
            {showError && (
              <div className="mt-3 text-center">
                <Alert variant="danger">{error}</Alert>
              </div>
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default RegisterForm;
