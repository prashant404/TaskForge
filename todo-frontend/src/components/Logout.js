// Logout.js
import React from 'react';
import axios from 'axios';
import authService from '../services/AuthService'; // Import your auth service

const Logout = () => {
  const handleLogout = async () => {
    try {
      await axios.post(
        `${authService.getBaseUrl()}/api/auth/logout`, // Complete URL including base URL
        null, // No data required for logout request
        {
          headers: {
            Authorization: `Bearer ${authService.getToken()}`, // Include the JWT token in the headers
          },
        }
      );
      console.log('Logout successful'); // handle successful logout
      // You may want to redirect the user to the login page or perform other actions after logout
    } catch (error) {
      console.error('Logout failed:', error.response.data.msg); // handle logout error
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
