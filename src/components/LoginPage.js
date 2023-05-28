import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Image1 from '../images/log.jpg';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Successful login logic
        setError('');
        // Redirect to the desired page
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('Login failed. Please try again.');
    }
  };

  const loginPageStyle = {
    position: 'relative',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  };

  const contentContainerStyle = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adjust the background color and opacity
    padding: '20px',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const inputStyle = {
    width: '300px',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  return (
    <div>
      <Navbar />
      
      <div style={loginPageStyle}>
      <img src={Image1} alt="" style={{ width: '100%', height: 'auto' }} />
      <div style={contentContainerStyle}>
        <h1 style={headingStyle}>Login</h1>
        <form onSubmit={handleLogin}>
          <div>
          <input type="text" placeholder="Username" id="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={inputStyle} />
          </div>
          <div>
          <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
          </div>
          {error && <div>{error}</div>}
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '4px' }}>Login</button>
          <br/>
          Not yet Registered? Register Now: <Button variant="outlined" size="small" color="inherit" component={Link} to ='/register'>Register</Button>
        </form>
      </div>
      </div>
      </div>
      
  );
};

export default LoginPage;
