import React from 'react';
import './App.css';
import { Route, Routes,} from 'react-router-dom';
import NavBar from './components/Navbar';
import LoginPage from './components/Login';
import RegistrationPage from './components/RegistrationPage';
import ApplyPage from './components/ApplyPage';
import RenewalFormPage from './components/RenewalFormPage';
import ContactUsPage from './components/ContactUsPage';
import Image from './images/img.jpg';
// import { AuthProvider } from './AuthContext';
// import PrivateRoute from './PrivateRoute';

const App = () => {
  const homepageStyle = {
    fontFamily: 'Courier New, monospace',
    textAlign: 'center',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 63,
    left: 0,
    width: '100%',
    height: '134%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the overlay color and opacity
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  };

  const headerStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
  };

  const contentStyle = {
    fontSize: '16px',
    lineHeight: '1.5',
  };

  const footerStyle = {
    fontSize: '14px',
    color: '#888',
  };
  return (
    <div className = "App">
      <NavBar />
      <div style={homepageStyle}>
      <img src={Image} alt="" style={{ width: '100%', height: 'auto' }} />
      <div style={overlayStyle}>
        <h1 style={headerStyle}>Welcome to our E-Visa Website</h1>
        <br/><br/>
        <p style={contentStyle}>Discover the convenience of applying for visas online.</p>
        <br/><br/><br/><br/>
        E-visas benefit travellers in several ways:
        <br />
       <p> The applicant applies for an e-visa online, from their office, their home, or another place convenient to them.</p>
           This saves time and energy, and in the case of a health crisis (like the COVID pandemic), is safer for everyone. 
          <p>Because e-visas are issued or denied before the applicant travels, they reduce the risk of the applicant travelling to a country only to be turned back.</p> 
             This takes some of the anxiety out of the visa application process.
        <p>The applicant need not leave their passport with the destination country’s diplomatic office as part of their application.</p>
         This allows the applicant to travel while  waiting for their application to be processed, and reduces the risk that their passport will be lost.
         <br/><br/><br/>
        <footer style={footerStyle}>
        <p>&copy; 2023 E-Visa Website. All rights reserved.</p>
      </footer>
      </div>
      </div>
      {/* <AuthProvider> */}
      <Routes>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/apply" component={ApplyPage} />
        <Route path="/renewal-form" component={RenewalFormPage} />
        <Route path="/contactus" component={ContactUsPage} />
        <Route path="/applyforvisa" component={ApplyPage} />

      </Routes>
      {/* </AuthProvider> */}
    </div>
  );
};

export default App;
