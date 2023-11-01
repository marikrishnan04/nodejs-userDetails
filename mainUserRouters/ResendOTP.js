const express = require("express");
const ResendOTPRouter = express.Router();
const otp_Verification = require("../models/OTP_Verification/OTP_Verification");
const { sendOTPVerification } = require("./sendOTPVerification");

ResendOTPRouter.use(express.json()); // Use express.json() for parsing JSON data

ResendOTPRouter.post("/", async (req, res) => {
  try {
    const { userId, email } = req.body;
    if (!userId || !email) {
      res.status(400).json({ error: "User ID and email are required" });
    } else {
      // Delete existing OTP records for the user
      await otp_Verification.deleteMany({ userId });

      // Send a new OTP
      sendOTPVerification({ _id: userId, email }, res);

      res.json({ message: "Success: OTP has been resent" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = ResendOTPRouter;
