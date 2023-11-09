const loginUsers = require('../models/Users'); // Import your Users model or module as needed.


// Define a route to retrieve user details
exports.Userlist=( async (req, res) => {
  try {
    const users = await loginUsers.find();
    res.send(users);
  } catch (err) {
    res.status(400).send('Error: ' + err);
  }
});

