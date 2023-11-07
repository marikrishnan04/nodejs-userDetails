const allemployeeRouter = require("../controllers/All-empolyee/allEmployee");
const ClientsallApi = require("../controllers/Clients/Clients");
const EmpolyeeTicketsallApi = require("../controllers/EmpolyeeTickets/EmpolyeeTickets");
const ProjectAllemployee = require("../controllers/ProjectControllers/projectsEmployee");
const promotionAllemployee = require("../controllers/PromotionControllers/promotionEmployee");
const uploadFiles = require("../controllers/UploadFile/UploadStorage");
const EmpUserapiRouter = require("../mainUserRouters/Emp_user_api");
const services = require("express").Router();


services.use('/user', EmpUserapiRouter); 
services.use("/allemployee",allemployeeRouter)
services.use('/promotionemployee',promotionAllemployee)
services.use("/ProjectAllemployee",ProjectAllemployee)
services.use("/EmpolyeeTickets",EmpolyeeTicketsallApi)
services.use("/Clients",ClientsallApi)
services.use("/UploadFile",uploadFiles)








module.exports=services;