// AuthService.js

class AuthService {
    async login(credentials) {
      // Implement login logic here, make API call to backend
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const data = await response.json();
      return data.user; // Assuming the API returns user information
    }
  
    async register(userInfo) {
      // Implement registration logic here, make API call to backend
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });
  
      if (!response.ok) {
        throw new Error('Registration failed');
      }
  
      const data = await response.json();
      return data.user; // Assuming the API returns user information
    }
  
    async logout() {
      // Implement logout logic here, make API call to backend
      const response = await fetch('http://localhost:5000/api/auth/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming you're using JWT
        },
      });
  
      if (!response.ok) {
        throw new Error('Logout failed');
      }
  
      localStorage.removeItem('token');
    }
  
    async isAuthenticated() {
      // Implement logic to check if the user is authenticated
      const token = localStorage.getItem('token');
      if (!token) {
        return null;
      }
  
      // You might want to verify the token with the backend to ensure it's still valid
      // Here, we'll assume the token is valid and return user information
      return { username: 'exampleUser' }; // Replace with actual user data
    }
  }
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default new AuthService();
  