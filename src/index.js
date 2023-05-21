import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import ContactUsPage from './components/ContactUsPage';
import reportWebVitals from './reportWebVitals';
import RenewalFormPage from './components/RenewalFormPage';
import ApplyPage from './components/ApplyPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "login",
    element: <LoginPage/>,
  },
  {
    path: "register",
    element: <RegistrationPage/>,
  },
  {
    path: "contactus",
    element: <ContactUsPage/>,
  },
  {
    path: "apply",
    element: <ApplyPage/>,
  },
  {
    path: "renew_visa",
    element: <RenewalFormPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();