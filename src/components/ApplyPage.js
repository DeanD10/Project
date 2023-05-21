import React, { useState } from 'react';
import countries from '../utils/countries';
import NavBar from './Navbar';

  const ApplyPage = () => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add apply logic here
  };

  return (
    <div>
      <NavBar></NavBar>
      <h1>Apply for E-Visa</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <br />
        <label>
          Mobile Number:
          <input type="int" value={mobile_number} onChange={handleMobileNumberChange} />
        </label>
        <br />
        <br />
        <label>
          Gender:
          <input type="text" value={gender} onChange={handleGenderChange} />
        </label>
        <br />
        <br />
        <label>
          DOB:
          <input type="date" value={dob} onChange={handleDOBChange} />
        </label>
        <br />
        <br />
        <label>
          Age:
          <input type="number" value={age} onChange={handleAgeChange} />
        </label>
        <br />
        <br />
        <label>
          Address:
          <input type="text" value={address} onChange={handleAddressChange} />
        </label>
        <br />
        <br />
        <label>
          Pincode:
          <input type="number" value={pincode} onChange={handlePincodeChange} />
        </label>
        <br />
        <br />
        <label>
          Aadhar:
          <input type="file" value={aadhar} onChange={handleAadharChange} />
        </label>
        <br />
        <br />
        <label>
          Pan Card:
          <input type="file" value={pan_card} onChange={handlePanCardChange} />
        </label>
        <br />
        <br />
        </form>
        <form onSubmit={handleSubmit}>
        <label>
          Photo:
          <input type="file" value={photo} onChange={handlePhotoChange} />
        </label>
        <br />
        <br />
        <label>
          Signature:
          <input type="file" value={signature} onChange={handleSignatureChange} />
        </label>
        <br />
        <br />
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
        <br />
        <br />
        <label>
          Passport Number:
          <input type="text" value={passportNumber} onChange={handlePassportNumberChange} />
        </label>
        <br />
        <br />
        <label>
          Purpose:
          <textarea value={purpose} onChange={handlePurposeChange} />
        </label>
        <br />
        <br />
        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default ApplyPage;
