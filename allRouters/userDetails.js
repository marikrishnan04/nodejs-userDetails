const express = require('express');
const userDetailsRouter = express.Router();
const bodyParser = require('body-parser');
const loginUsers = require('../models/Users'); // Import your Users model or module as needed.

// Use bodyParser middleware to parse URL-encoded data
userDetailsRouter.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Define a route to retrieve user details
userDetailsRouter.get('/', async (req, res) => {
  try {
    const users = await loginUsers.find();
    res.json(users);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

module.exports = userDetailsRouter;
