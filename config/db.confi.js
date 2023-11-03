const mongoose =require('mongoose');
const uri ="mongodb://127.0.0.1:27017/employeeUers";
// const uri ="mongodb+srv://12345:mari1234@user.tyzhkrm.mongodb.net/?retryWrites=true&w=majority";
require('dotenv').config();


// mongodb connect.................

 function connectToDatabase() {

    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    
      const db = mongoose.connection;
    
      db.on('error', (error) => {
        console.error('MongoDB connection error:', error);
      });
    
      db.once('open', () => {
        console.log('Connected to MongoDB successfully!');
      });
    
}

module.exports=connectToDatabase;