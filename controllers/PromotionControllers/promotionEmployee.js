const promotionAdd = require("./promotion-employee-save");
const promotiondelete = require("./promotion-employee-deleted");
const promotionUpdate = require("./promotion-employee-updated");
const promotionview = require("./promotion-employee-view");
const promotionAllemployee = require("express").Router();


promotionAllemployee.use("/promotion-employee-save",promotionAdd)
promotionAllemployee.use("/promotion-employee-deleted",promotiondelete)
promotionAllemployee.use("/promotion-employee-updated",promotionUpdate)
promotionAllemployee.use("/",promotionview)





module.exports=promotionAllemployee;