const ClientsdeletedRouter = require("./Clients-deleted");
const ClientsAddRouter = require("./Clients-save");
const ClientssUpdateRouter = require("./Clients-updated");
const ClientsviewRouter = require("./Clients-view");
const ClientsallApi= require("express").Router();


ClientsallApi.use('/Clients-save',ClientsAddRouter)
ClientsallApi.use('/Clients-deleted',ClientsdeletedRouter)
ClientsallApi.use('/Clients-Update',ClientssUpdateRouter)
ClientsallApi.use('/Clients-viewDetails',ClientsviewRouter)






module.exports=ClientsallApi