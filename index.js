const express = require('express');
const bodyParser = require('body-parser');
const connectToDatabase = require('./config/db.confi');
const app = express();
const port = process.env.PORT || 3000; // Add a default port (e.g., 3000) if not provided in the environment
const services = require('./services/services');



// Connect to the database using loginDetails()
connectToDatabase();

app.use(express.json()); // Parse JSON request bodies
app.use(bodyParser.json()); // Parse JSON request bodies (deprecated, you can remove this line)

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use("/",services)//all api 


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
