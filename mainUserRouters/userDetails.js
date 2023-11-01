const express = require('express');
const userDetailsRouter = express.Router();
const loginUsers = require('../models/Users'); // Import your Users model or module as needed.


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
