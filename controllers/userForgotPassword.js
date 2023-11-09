const loginUsers = require("../models/Users");
const Joi = require("joi");
const { sendOTPVerification } = require("./sendOTPVerification");



exports.forgotpassword=( async (req, res) => {
  try {
    const schema = Joi.object({ email: Joi.string().email().required() });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const loginUser = await loginUsers.findOne({ email: req.body.email });
    if (!loginUser)
      return res.status(401).send("User with the given email doesn't exist");

    await sendOTPVerification(loginUser, res); // Corrected function call
    res.json({ message: "Password reset email sent" });
  } catch (err) {
    // Handle errors appropriately
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});






