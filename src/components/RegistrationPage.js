import React, { useState } from 'react';
import NavBar from './Navbar';
//import { Link } from 'react-router-dom';
//import Button from '@mui/material/Button';
import registrationBackgroundImage from '../images/register.jpg';
//import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [error, setError] = useState('');
  //const navigate = useNavigate();


  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/user/register', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRFTOKEN': 'umr0HOI5tHn4mfRGaT3LdqVq94v888CObv2BLBCYJQGuQPU3xYzwuoKqmkpSnW70',

        },
        body: JSON.stringify({ username, password, email, first_name, last_name }),
      });

      if (response.status === 201) {
        // Successful registration logic
        // Redirect to the desired page
        //navigate.push('/login');
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration failed:', error);
      setError('Registration failed. Please try again.');
    }
  };

  const registrationPageStyle = {
    backgroundImage: `url(${registrationBackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  };

  const formContainerStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the background color and opacity
    padding: '20px',
    borderRadius: '8px',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const formItemStyle = {
    marginBottom: '10px',
  };

  // const handleUsernameChange = (event) => {
  //   setUsername(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const handleFirstNameChange = (event) => {
  //   setFirstName(event.target.value);
  // };

  // const handleLastNameChange = (event) => {
  //   setLastName(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Add registration logic here
  // };

  return (
    <div>
      <NavBar></NavBar>
      <div style={registrationPageStyle}>
      <div style={formContainerStyle}>
      <h1 style={headingStyle}>Registration</h1>
      <form onSubmit={handleRegistration}>
      <div style={formItemStyle}>
        <label htmlFor="username">
          Username:
          </label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <br />
        <br />
        <div style={formItemStyle}>
        <label htmlFor="password">
          Password:
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        </div>
        <br />
        <br />
        <div style={formItemStyle}>
        <label htmlFor="email">
          Email:
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        </div>
        <br />
        <br />
        <div style={formItemStyle}>
        <label htmlFor="firstname">
          First Name:
          <input type="text" id="firstname" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        </div>
        <br />
        <br />
        <div style={formItemStyle}>
        <label htmlFor="lastname">
          Last Name:
          <input type="text" id="lastname" value={last_name} onChange={(e) => setLastName(e.target.value)} />
        </label>
        </div>
        {error && <div>{error}</div>}
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default RegistrationPage;
