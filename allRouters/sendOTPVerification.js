const sendEmail = require("../models/sendEmail");
const bcrypt = require("bcrypt");
const otp_Verification = require("../models/OTP_Verification/OTP_Verification");


exports.sendOTPVerification = async (loginUser, res) => {
    try {
      const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
      const link = ` Enter ${otp} in the app to verify your email `;
  
      // Assuming loginUsers has an email property
      await sendEmail(loginUser.email, "Password reset", link);
  
      const saltRounds = 10;
      const hashedOTP = await bcrypt.hash(otp, saltRounds);
  
      // Assuming you have the user's ID in loginUser
      const newOtpVerification = new otp_Verification({
        userId: loginUser._id, // Corrected usage of _id
        otp: hashedOTP,
        createAt: Date.now(),
        expiresAt: Date.now() + 3600000,
      });
  
      await newOtpVerification.save();
    } catch (error) {
      // Handle errors appropriately
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };