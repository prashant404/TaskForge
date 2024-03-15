import React from 'react';
import Register from '../components/Register';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <Register />
      <Link to="/">Back to Login</Link>
    </div>
  );
};

export default RegisterPage;
