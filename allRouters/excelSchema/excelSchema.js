const TimeSheet=require("../../models/excelUser")
const TimeSheetrouter = require("express").Router();

TimeSheetrouter.post('/timesheet', async (req, res) => {
    try {
      const newTimeSheet = new TimeSheet(req.body);
      await newTimeSheet.save();
      res.status(201).json(newTimeSheet);
    } catch (err) {
      res.status(400).json({ error: 'Invalid input' });
    }
  });

  module.exports=TimeSheetrouter;