const express = require('express');
const bodyParser = require('body-parser');
const connectToDatabase = require('./config/db.confi');
const promotionAllemployee = require('./controllers/PromotionControllers/promotionEmployee');
const ProjectAllemployee = require('./controllers/ProjectControllers/projectsEmployee');
const allemployeeRouter = require('./controllers/All-empolyee/allEmployee');
const EmpUserapiRouter = require('./allRouters/Emp_user_api');
const EmpolyeeTicketsallApi = require('./controllers/EmpolyeeTickets/EmpolyeeTickets');
const ClientsallApi = require('./controllers/Clients/Clients');
const app = express();
const port = process.env.PORT || 3000; // Add a default port (e.g., 3000) if not provided in the environment
require('dotenv').config();

// Connect to the database using loginDetails()
connectToDatabase();

app.use(express.json()); // Parse JSON request bodies
app.use(bodyParser.json()); // Parse JSON request bodies (deprecated, you can remove this line)

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/user', EmpUserapiRouter); 
app.use("/allemployee",allemployeeRouter)
app.use('/promotionemployee',promotionAllemployee)
app.use("/ProjectAllemployee",ProjectAllemployee)
app.use("/EmpolyeeTickets",EmpolyeeTicketsallApi)
app.use("/Clients",ClientsallApi)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
