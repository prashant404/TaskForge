import React, { useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const sendOTP = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        { email }
      );
      setSuccessMessage(response.data.msg);
      setError("");
    } catch (err) {
      setError(err.response.data.msg);
      setSuccessMessage("");
    }
  };

  const resetPassword = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/reset-password",
        { email, otp, newPassword }
      );
      setSuccessMessage(response.data.msg);
      setError("");
    } catch (err) {
      setError(err.response.data.msg);
      setSuccessMessage("");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4" style={{ maxWidth: "30rem" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Forgot Password</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {successMessage && <Alert variant="success">{successMessage}</Alert>}
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={sendOTP} className="w-100 mb-3">
              Send OTP
            </Button>
            <Form.Group controlId="formBasicOTP">
              <Form.Label>Enter OTP</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicNewPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={resetPassword} className="w-100 mb-3">
              Reset Password
            </Button>
          </Form>
          <div className="mt-3 text-center">
            <Link to="/" className="btn btn-secondary">
              Back to Login
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ForgotPasswordForm;
