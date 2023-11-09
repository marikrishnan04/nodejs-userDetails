
const { sendOTPVerification } = require("./sendOTPVerification");
const Joi = require("joi");



exports.resendOTP=( async (req, res) => {
  try {
    const schema = Joi.object({
      email: Joi.string().email().required(),
    
    });

    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    const { email } = req.body;
    if ( !email) {
      res.status(400).send({ error: "User ID and email are required" });
    } else {
      // Delete existing OTP records for the user

      // Send a new OTP
      sendOTPVerification({ email }, res);

      res.send({ message: "Success: OTP has been resent" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

