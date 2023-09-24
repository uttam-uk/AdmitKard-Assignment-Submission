
// import dotenv from 'dotenv';
// dotenv.config();

// import { initClient } from 'messagebird';

// const messagebirdClient = initClient(process.env.MESSAGEBIRD_API_KEY);

// class UserController {
//     static userLogin = async (req, res) => {
//         const { phonenumber } = req.body;

//         const newPhoneNumber = "+91" + phonenumber;
//         const params = {
//             template: 'Your Login OTP is %token',
//             timeout: 300,
//         };

//         messagebirdClient.verify.create(newPhoneNumber, params, (err, response) => {
//             if (err) {
                
//                 console.log("OTP Send Error : Phone number invalid ", err);

//                 res.status(200).send({ "status": "failed", "message": "Unable to Send OTP" });
//             } else {
                
//                 console.log("OTP Send Response:", response);

//                 res.status(200).send({ "status": "success", "message": "OTP Sent Successfully", "id": response.id });
//             }
//         });
//     }


//   static verifyOTP = async (req, res) => {
//     const { id, otpcode } = req.body

//     messagebirdClient.verify.verify(id, otpcode, (err, response) => {
//         if (err) {

//           console.log("OTP Verification Error:", err)

//           res.status(200).send({ "status": "failed", "message": "Invalid OTP" })
//         } else {

//           console.log("OTP Verification Response:", response)

//           res.status(200).send({ "status": "success", "message": "Login Success" })
//         }

//       });

//   }

// }

// export default UserController;


