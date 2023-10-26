const mongoose =require('mongoose');
const uri ="mongodb://127.0.0.1:27017/employeeUers";
// const uri ="mongodb+srv://12345:mari1234@user.tyzhkrm.mongodb.net/?retryWrites=true&w=majority";
require('dotenv').config();


// mongodb connect.................

 function loginDetails() {
    mongoose.connect(uri)

    mongoose.connection.once('open',()=>{
        console.log('connected success');
    })
}

module.exports=loginDetails;