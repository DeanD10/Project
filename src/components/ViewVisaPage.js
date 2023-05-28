import React from 'react';

const ViewVisaPage = ({ visaData }) => {
  return (
    <div>
      <h1>View Visa</h1>
      {visaData ? (
        <div>
          <h2>Visa Details</h2>
          <p><strong>Visa Number:</strong> {visaData.visaNumber}</p>
          <p><strong>Full Name:</strong> {visaData.fullName}</p>
          <p><strong>Nationality:</strong> {visaData.nationality}</p>
          <p><strong>Expiration Date:</strong> {visaData.expirationDate}</p>
        </div>
      ) : (
        <p>No visa data available.</p>
      )}
    </div>
  );
};

export default ViewVisaPage;
