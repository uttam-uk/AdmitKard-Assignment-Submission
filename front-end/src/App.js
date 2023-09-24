import React, { useState } from 'react';
import './App.css';
import MobileNumberScreen from './components/MobileNumberScreen';
import OTPVerificationScreen from './components/OTPVerificationScreen';
import SuccessScreen from './components/SuccessScreen';
function App() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [error, setError] = useState(null); // State to store error messages

  const handleMobileNumberSubmit = (phoneNumber) => {
    setPhoneNumber(phoneNumber);
    setStep(2);
  };

  const handleOTPVerification = (otpCode) => {
    const requestBody = {
      phoneNumber: phoneNumber,
      otp: otpCode,
    };

    fetch('/api/verifyotp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setStep(3); 
        } else {
          setError(data.message); 
          console.error(data.message); 
        }
      })
      .catch((error) => {
        setError('An error occurred. Please try again later.'); 
        console.error(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>OTP Authentication Example</h1>
        {step === 1 && (
          <MobileNumberScreen onMobileNumberSubmit={handleMobileNumberSubmit} />
        )}
        {step === 2 && (
          <OTPVerificationScreen
            onOTPVerification={handleOTPVerification}
            error={error} 
          />
        )}
        {step === 3 && <SuccessScreen />}
      </header>
    </div>
  );
}

export default App;
