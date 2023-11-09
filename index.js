const express = require('express');
const bodyParser = require('body-parser');
const connectToDatabase = require('./config/db.confi');
const { getMiddleware } = require('./middleware/middleware'); // Import the middleware
const app = express();
const port = process.env.PORT_URL // Add a default port (e.g., 3000) if not provided in the environment
const router = require('./router/router');



// Connect to the database using loginDetails()
connectToDatabase();

// Use the CORS middleware before defining your routes
app.use(getMiddleware);

app.use(express.json()); // Parse JSON request bodies
app.use(bodyParser.json()); // Parse JSON request bodies (deprecated, you can remove this line)

app.get('/', (req, res) => {
    res.send('Hello, World!!!');
});

app.use("/hrms",router)//all api 


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
