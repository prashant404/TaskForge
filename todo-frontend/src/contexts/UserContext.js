// UserContext.js

import React, { createContext, useState, useEffect } from 'react';
import AuthService from '../services/AuthService';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await AuthService.isAuthenticated();
        setUser(user);
      } catch (error) {
        console.error('Error checking authentication:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (credentials) => {
    try {
      const user = await AuthService.login(credentials);
      setUser(user);
      // Save token to local storage
      localStorage.setItem('token', user.token); // Assuming the API returns a JWT token
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const register = async (userInfo) => {
    try {
      const user = await AuthService.register(userInfo);
      setUser(user);
      // Save token to local storage
      localStorage.setItem('token', user.token); // Assuming the API returns a JWT token
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const logout = async () => {
    try {
      await AuthService.logout();
      setUser(null);
      // Remove token from local storage
      localStorage.removeItem('token');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <UserContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};
