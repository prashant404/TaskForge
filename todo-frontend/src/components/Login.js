import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <form className="mt-3" onSubmit={handleSubmit}>
      <div className="mb-3 text-center">
        <h3 className="mb-4 logo-text">TaskForge</h3>
        <p className="logo-text">Your tasks at one place</p>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
      <div className="mt-3 text-center">
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
      <div className="mt-3 text-center">
        Don't have an account? <Link to="/register">Register</Link>
      </div>
    </form>
  );
};

export default Login;
