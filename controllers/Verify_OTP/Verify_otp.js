const otp_Verification = require('../../models/OTP_Verification/OTP_Verification');
const loginUsers = require('../../models/Users');
const bcrypt = require("bcrypt");

exports.verifyOTP=( async (req, res) => {
  try {
    const { userId, otp } = req.body;

    if (!userId || !otp) {
      res.status(400).send("Both userId and OTP are required.");
    } else {
      const verify_otp = await otp_Verification.find({ userId });

      if (verify_otp.length <= 0) {
        res.status(400).send("No matching OTP verification record found.");
      } else {
        const { expiresAt } = verify_otp[0];
        const hashedOTP = verify_otp[0].otp;

        if (expiresAt < Date.now()) {
          await otp_Verification.deleteMany({ userId });
          res.status(400).send("OTP code has expired.");
        } else {
          const validOTP = await bcrypt.compare(otp, hashedOTP);

          if (!validOTP) {
            res.status(400).send("Invalid OTP code.");
          } else {
            await loginUsers.updateOne({ _id: userId }, { verified: true });
            await otp_Verification.deleteMany({ userId });
            res.status(200).json({
              status: "verified",
              message: "User email verified"
            });
          }
        }
      }
    }
  } catch (error) {
    // Handle errors appropriately
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

