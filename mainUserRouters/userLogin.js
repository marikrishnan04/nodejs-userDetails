const express = require("express");
const bcrypt = require("bcrypt");
const loginUsers = require("../models/Users"); // Import your loginUsers model or module as needed.
const loginRouter = express.Router();
const Joi = require("joi");

// login api.......................

loginRouter.post("/", async (req, res) => {
  try {
    // Find a user with the provided email password
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const loginUser = await loginUsers.findOne({ email: req.body.email });

    if (!loginUser) {
      // If no user is found, return a 400 status and a message
      return res.status(401).send("Invalid Password or Email");
    }

    // Compare the provided password with the stored hashed password
    const validPassword = await bcrypt.compare(
      req.body.password,
      loginUser.password
    );

    if (!validPassword) {
      // If the password is incorrect, return an appropriate message
      return res.status(401).send("Invalid Password or Email");
    }

    // If both email and password are valid, send a success message
    res.send("Login success!!!");
  } catch (err) {
    // If an error occurs, send an error response
    res.status(400).json("Error: " + err);
  }
});

module.exports = loginRouter;
