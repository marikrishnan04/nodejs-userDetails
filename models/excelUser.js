const mongoose = require("mongoose");
// Define the TimeSheet schema
    const timeSheetSchema = new mongoose.Schema({
        id: {
            description: 'The unique identifier for a product',
            type:Number,
            
          },
        employeeName:String,
        date: Date,
        hoursWorked: Number,
        project: String,
        notes: String,
      });

module.exports = mongoose.model("Customer", timeSheetSchema);