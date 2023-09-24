import dotenv from 'dotenv';
dotenv.config();

import express  from 'express';
const app = express();

import bodyParser from 'body-parser'
import twilio from 'twilio'

const port = process.env.PORT || 8000;

const accountSid = process.env.ACCOUNTSID
const authToken = process.env.AUTHTOKEN ;
const twilioPhoneNumber = process.env.MYPHONENUMBERGIVENBYTWILLO;

const client = new twilio(accountSid, authToken);

const otps = new Map();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/sendotp', (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  const otp = Math.floor(1000 + Math.random() * 9000); 
  otps.set(phoneNumber, otp);
  client.messages
    .create({
      body: `Your OTP for login: ${otp}`,
      from: twilioPhoneNumber,
      to: phoneNumber,
    })
    .then(() => {
      res.json({ success: true, message: 'OTP sent successfully' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ success: false, message: 'Failed to send OTP' });
    });
});

app.post('/api/verifyotp', (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  const userEnteredOtp = req.body.otp;
  const storedOtp = otps.get(phoneNumber);
  if (userEnteredOtp == storedOtp) {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Login failed. Invalid OTP.' });
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
