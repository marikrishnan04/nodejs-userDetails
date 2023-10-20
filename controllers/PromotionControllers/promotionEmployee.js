const promotionAdd = require("./promotion-employee-add");
const promotionAllemployee = require("express").Router();


promotionAllemployee.use("/promotion-employee-add",promotionAdd)




module.exports=promotionAllemployee;