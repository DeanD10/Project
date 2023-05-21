import React, { useState } from 'react';
import countries from '../utils/countries';
import NavBar from './Navbar';

const RenewalFormPage = () => {
const [selectedCountry, setSelectedCountry] = useState('');
const [update_stay_duration, setUpdateStayDuration] = useState('');

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
      <h1>Visa Renewal Form</h1>
      <form onSubmit={handleSubmit}>
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
        <br />
        <br />
        <label>
          Update Stay Duration:
          <input type="date" value={update_stay_duration} onChange={handleUpdateStayDurationChange} />
        </label>
        <br />
        <br />
      
        <button type="submit">Submit Renewal</button>
      </form>
    </div>
  );
};

export default RenewalFormPage;
