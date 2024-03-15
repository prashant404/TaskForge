// LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';
import Login from '../components/Login';

const LoginPage = () => {
  const [error, setError] = useState('');

  const handleLogin = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        username,
        password,
      });
      console.log(response.data); // handle successful login
    } catch (error) {
      if (error.response) {
        setError(error.response.data.msg); // handle login error
      } else {
        setError('An error occurred while logging in');
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Login onLogin={handleLogin} />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default LoginPage;
