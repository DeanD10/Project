import React from 'react';
import './App.css';
import { Route, Routes,} from 'react-router-dom';
import NavBar from './components/Navbar';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import ApplyPage from './components/ApplyPage';
import RenewalFormPage from './components/RenewalFormPage';
import ContactUsPage from './components/ContactUsPage';



const App = () => {
  return (
    <div className = "App">
      <NavBar />
      <Routes>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/apply" component={ApplyPage} />
        <Route path="/renewal-form" component={RenewalFormPage} />
        <Route path="/contactus" component={ContactUsPage} />
      </Routes>
    </div>
  );
};

export default App;
