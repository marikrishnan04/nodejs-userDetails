const EmpolyeeTicketsdeletedRouter = require("./EmpolyeeTickets-deleted");
const EmpolyeeTicketsAddRouter = require("./EmpolyeeTickets-save");
const EmpolyeeTicketsUpdateRouter = require("./EmpolyeeTickets-updated");
const EmpolyeeTicketsviewRouter = require("./EmpolyeeTickets-view");
const EmpolyeeTicketsallApi= require("express").Router();


EmpolyeeTicketsallApi.use("/EmpolyeeTickets_save",EmpolyeeTicketsAddRouter)
EmpolyeeTicketsallApi.use("/EmpolyeeTickets_deleted",EmpolyeeTicketsdeletedRouter)
EmpolyeeTicketsallApi.use("/EmpolyeeTickets_updated",EmpolyeeTicketsUpdateRouter)
EmpolyeeTicketsallApi.use("/EmpolyeeTickets_view",EmpolyeeTicketsviewRouter)






module.exports=EmpolyeeTicketsallApi