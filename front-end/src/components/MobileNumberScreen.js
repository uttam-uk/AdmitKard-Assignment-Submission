import React, { useState } from 'react';
const MobileNumberScreen = ({ onMobileNumberSubmit }) => {
const [phoneNumber, setPhoneNumber] = useState('');
const handleSubmit = (e) => {
    e.preventDefault();
    onMobileNumberSubmit(phoneNumber);
};
  return (
    <div className="mobile-number-screen">
      <h2>Mobile Number Screen</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Mobile Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit">Send OTP</button>
      </form>
    </div>
  );
};
export default MobileNumberScreen;
