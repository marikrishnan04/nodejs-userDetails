const express = require('express');
const bodyParser = require('body-parser');
const loginDetails = require('./config/db.confi');
const regRouter = require('./allRouters/userRegistration');
const loginRouter = require('./allRouters/userLogin');
const forgotRouter = require('./allRouters/userForgotPassword');
const resetRouter = require('./allRouters/userReset');
const userDetailsRouter = require('./allRouters/userDetails');
const promotionAllemployee = require('./controllers/PromotionControllers/promotionEmployee');
const ProjectAllemployee = require('./controllers/ProjectControllers/projectsEmployee');
const allemployeeRouter = require('./controllers/All-empolyee/allEmployee');
const app = express();
const port = process.env.PORT || 3000; // Add a default port (e.g., 3000) if not provided in the environment
require('dotenv').config();

// Connect to the database using loginDetails()
loginDetails();

app.use(express.json()); // Parse JSON request bodies
app.use(bodyParser.json()); // Parse JSON request bodies (deprecated, you can remove this line)

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/user/details', userDetailsRouter); // View user details
app.use('/user/registration', regRouter); // User registration API
app.use('/user/login', loginRouter); // User login API
app.use('/user/forgot-password', forgotRouter); // User forgot password API
app.use('/user/reset', resetRouter); // User reset API with userId token


app.use("/allemployee",allemployeeRouter)
app.use('/promotionemployee',promotionAllemployee)
app.use("/ProjectAllemployee",ProjectAllemployee)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
