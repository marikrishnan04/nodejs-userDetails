const regRouter = require("express").Router();
const bcrypt = require("bcrypt");
const loginUsers = require("../models/Users");
const Joi = require("joi");


// Registration API
regRouter.post("/", async (req, res) => {
  try {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      Repeat_Password: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const { email, password, Repeat_Password } = req.body;

    if (password !== Repeat_Password) {
      return res.status(400).send("Passwords do not match");
    }

    // Use async/await for bcrypt functions
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new loginUsers({ email, password: hashedPassword });

    // Use async/await for saving the user
    await newUser.save();

    res.json("User added successfully!");
  } catch (err) {
    console.error("Error: ", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = regRouter;
