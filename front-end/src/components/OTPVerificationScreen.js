import React, { useState } from 'react';
const OTPVerificationScreen = ({ onOTPVerification }) => {
const [otpCode, setOtpCode] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onOTPVerification(otpCode);
  };
  return (
    <div className="otp-verification-screen">
      <h2>OTP Verification Screen</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter OTP Code"
          value={otpCode}
          onChange={(e) => setOtpCode(e.target.value)}
        />
        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
};
export default OTPVerificationScreen;
