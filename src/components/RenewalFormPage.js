import React, { useState } from 'react';
import countries from '../utils/countries';
import NavBar from './Navbar';
import renewalFormBackgroundImage from '../images/renew.webp';

const RenewalFormPage = () => {
const [selectedCountry, setSelectedCountry] = useState('');
const [update_stay_duration, setUpdateStayDuration] = useState('');

const renewalFormPageStyle = {
  backgroundImage: `url(${renewalFormBackgroundImage})`,
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
  fontSize: '24px',
  marginBottom: '10px',
  fontWeight: 'bold',
};

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleUpdateStayDurationChange = (event) => {
    setUpdateStayDuration(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add renewal form submission logic here
    console.log('Update Stay Duration:', update_stay_duration);
    console.log('Country:', selectedCountry);
  };

  return (
    <div>
      <NavBar />
      <div style={renewalFormPageStyle}>
      <div style={formContainerStyle}>
      <h1 style={headingStyle}>Visa Renewal Form</h1>
      <div style={formItemStyle}></div>
      <form onSubmit={handleSubmit}>
      <div style={formItemStyle}>
      <label>
  Country:
  <select value={selectedCountry} onChange={handleCountryChange}>
    <option value="">Select a country</option>
    {countries.map((country, index) => (
      <option key={index} value={country}>
        {country}
      </option>
    ))}
  </select>
    </label>
    </div>
        <br />
        <br />
        <div style={formItemStyle}>
        <label>
          Update Stay Duration:
          <input type="date" value={update_stay_duration} onChange={handleUpdateStayDurationChange} />
        </label>
        </div>
        <br />
        <br />      
        <button type="submit">Submit Renewal</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default RenewalFormPage;
