// Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link
import { useHistory } from 'react-router-dom'; // Import useHistory

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // Initialize useHistory

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        username,
        password,
      });
      console.log(response.data); // handle successful registration
      // Redirect to login page after successful registration
      history.push('/login');
    } catch (error) {
      console.error('Registration failed:', error.response.data.msg); // handle registration error
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
        {/* Add button to navigate back to login page */}
        <Link to="/">Back to Login</Link>
      </form>
    </div>
  );
};

export default Register;
