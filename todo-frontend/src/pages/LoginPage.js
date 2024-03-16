import React, { useState } from "react";
import axios from "axios";
import Login from "../components/Login";

const LoginPage = () => {
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = async (username, password) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          username,
          password,
        }
      );
      console.log(response.data); // handle successful login
      setSuccessMessage("Login successful");
      setTimeout(() => setSuccessMessage(""), 3000); // Clear success message after 3 seconds
    } catch (error) {
      if (error.response) {
        setError(error.response.data.msg); // handle login error
        setTimeout(() => setError(""), 3000); // Clear error message after 3 seconds
      } else {
        setError("An error occurred while logging in");
        setTimeout(() => setError(""), 3000); // Clear error message after 3 seconds
      }
    }
  };

  return (
    <div className="d-flex flex-column align-items-center vh-100 justify-content-center">
      <Login onLogin={handleLogin} />
      {error && (
        <div className="alert alert-danger mt-3" role="alert">
          {error}
        </div>
      )}
      {successMessage && (
        <div className="alert alert-success mt-3" role="alert">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default LoginPage;
