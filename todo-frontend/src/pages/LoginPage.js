import React from 'react';
import Login from '../components/Login';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <Login />
      <Link to="/register">Register</Link>
    </div>
  );
};

export default LoginPage;
