import React from 'react';
import NavBar from '../components/Navbar';
import contactBackgroundImage from '../images/contact.avif';

const ContactUsPage = () => {
  const contactPageStyle = {
    backgroundImage: `url(${contactBackgroundImage})`,
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

  const contentContainerStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the background color and opacity
    padding: '20px',
    borderRadius: '8px',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const infoItemStyle = {
    marginBottom: '10px',
  };

   return (
    <div>
      <NavBar></NavBar>
    <div style={contactPageStyle}>
      <div style={contentContainerStyle}>
        <h1 style={headingStyle}>Contact Us</h1>
        <div style={infoItemStyle}>
          <h3>Phone:</h3>
          <p>+1234567890</p>
        </div>
        <div style={infoItemStyle}>
          <h3>Email:</h3>
          <p>example@example.com</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUsPage;
