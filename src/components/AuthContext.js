// AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (username, password) => {
    try {
      // Perform login logic by making an API call to your backend server
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        setIsLoggedIn(true);
        setError('');
      } else {
        setIsLoggedIn(false);
        setError('Invalid username or password');
      }
    } catch (error) {
      setIsLoggedIn(false);
      setError('Login failed. Please try again.');
    }
  };

  const logout = () => {
    // Perform logout logic and set isLoggedIn to false
    setIsLoggedIn(false);
    setError('');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
