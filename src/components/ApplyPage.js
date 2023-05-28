import React, { useState } from 'react';
import countries from '../utils/countries';
import NavBar from './Navbar';
import applyBackgroundImage from '../images/apply.jpg';
import ViewVisaPage from './ViewVisaPage';

  const ApplyPage = () => {

    const [visaData, setVisaData] = useState(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile_number, setMobileNumber] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDOB] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [pan_card, setPanCard] = useState('');
  const [photo, setPhoto] = useState('');
  const [signature, setSignature] = useState('');
  const [selectedDestinationCountry, setDestinationCountry] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [purpose, setPurpose] = useState('');

  const applyPageStyle = {
    backgroundImage: `url(${applyBackgroundImage})`,
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

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleDOBChange = (event) => {
    setDOB(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
  };

  const handleAadharChange = (event) => {
    setAadhar(event.target.value);
  };

  const handlePanCardChange = (event) => {
    setPanCard(event.target.value);
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.value);
  };

  const handleSignatureChange = (event) => {
    setSignature(event.target.value);
  };

  const handleDestinationCountryChange = (event) => {
    setDestinationCountry(event.target.value);
  };

  const handlePassportNumberChange = (event) => {
    setPassportNumber(event.target.value);
  };

  const handlePurposeChange = (event) => {
    setPurpose(event.target.value);
  };

  const handleSubmit = (formData) => {
    // Process the form data and store it
    setVisaData(formData);
  };

  return (
    <div>
      <NavBar></NavBar>
      <div>
      {visaData ? (
        <ViewVisaPage visaData={visaData} />
      ) : (
      <div className='applyforvisa' style={applyPageStyle}>
      <div style={formContainerStyle}>
      <h1 style={headingStyle}>Apply for E-Visa</h1>
      <br />
      <form onSubmit={handleSubmit}>
      <div style={formItemStyle}>
        <label>
          Full Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        </div>
        <br />
        <br />
        <div style={formItemStyle}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        </div>
        <br />
        <br />
        <div style={formItemStyle}>
        <label>
          Mobile Number:
          <input type="int" value={mobile_number} onChange={handleMobileNumberChange} />
        </label>
        </div>
        <br />
        <br />
        <div style={formItemStyle}>
        <label>
          Gender:
          <input type="text" value={gender} onChange={handleGenderChange} />
        </label>
        </div>
        <br />
        <br />
        <div style={formItemStyle}>
        <label>
          DOB:
          <input type="date" value={dob} onChange={handleDOBChange} />
        </label>
        </div>
        <br />
        <br />
        <div style={formItemStyle}>
        <label>
          Age:
          <input type="number" value={age} onChange={handleAgeChange} />
        </label>
        </div>
        <br />
        <br />
        <div style={formItemStyle}>
        <label>
          Address:
          <input type="text" value={address} onChange={handleAddressChange} />
        </label>
        </div>
        <br />
        <br />
        <div style={formItemStyle}>
        <label>
          Pincode:
          <input type="number" value={pincode} onChange={handlePincodeChange} />
        </label>
        </div>
        <br />
        <br />
        <div style={formItemStyle}>
        <label>
          Aadhar:
          <input type="file" value={aadhar} onChange={handleAadharChange} />
        </label>
        </div>
        <br />
        <br />
        <div style={formItemStyle}>
        <label>
          Pan Card:
          <input type="file" value={pan_card} onChange={handlePanCardChange} />
        </label>
        </div>
        <br />
        <br />
        </form>
        <form onSubmit={handleSubmit}>
        <div style={formItemStyle}>
        <label>
          Photo:
          <input type="file" value={photo} onChange={handlePhotoChange} />
        </label>
        </div>
        <br />
        <br />
        <div style={formItemStyle}>
        <label>
          Signature:
          <input type="file" value={signature} onChange={handleSignatureChange} />
        </label>
        </div>
        <br />
        <br />
        <div style={formItemStyle}>
        <label>
          Destination Country:
          <select value={selectedDestinationCountry} onChange={handleDestinationCountryChange}>
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
          Passport Number:
          <input type="text" value={passportNumber} onChange={handlePassportNumberChange} />
        </label>
        </div>
        <br />
        <br />
        <div style={formItemStyle}>
        <label>
          Purpose:
          <textarea value={purpose} onChange={handlePurposeChange} />
        </label>
        </div>
        <br />
        <br />  
        <button onClick={() => handleSubmit(/* Form data here */)}>Submit</button>
      </form>
    </div>
    </div>
    )}
    </div>
    </div>
  );
  };    

export default ApplyPage;
