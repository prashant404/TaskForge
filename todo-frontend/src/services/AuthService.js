// AuthService.js (Frontend)

const AuthService = {
  async login(credentials) {
    try {
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
      // Show notification for successful login
      showNotification('Login Successful', 'You have successfully logged in.');
      return data.user;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  },

  async register(userInfo) {
    try {
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
      // Show notification for successful registration
      showNotification('Registration Successful', 'You have successfully registered.');
      return data.user;
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  },
};

// Function to show notification
function showNotification(title, message) {
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification(title, { body: message });
  } else {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        new Notification(title, { body: message });
      }
    });
  }
}
