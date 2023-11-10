const { allemployeeDelete } = require("../controllers/All-empolyee/all-employee-deleted");
const { allemployeeSearch } = require("../controllers/All-empolyee/all-employee-search");
const { allemployeeUpadated } = require("../controllers/All-empolyee/all-employee-upadated");
const { allemployeeList } = require("../controllers/All-empolyee/all-employee.view");
const { allemployeeAdd } = require("../controllers/All-empolyee/all-empolyee-save");
const { ClientsDelete } = require("../controllers/Clients/Clients-deleted");
const { ClientsAdd } = require("../controllers/Clients/Clients-save");
const { ClientsUpdated } = require("../controllers/Clients/Clients-updated");
const { ClientsList } = require("../controllers/Clients/Clients-view");
const { ClientsSearch } = require("../controllers/Clients/Clients_search");
const { empolyeeTicketsDeleted } = require("../controllers/EmpolyeeTickets/EmpolyeeTickets-deleted");
const { empolyeeTicketsAdd } = require("../controllers/EmpolyeeTickets/EmpolyeeTickets-save");
const { empolyeeTicketsUpdated } = require("../controllers/EmpolyeeTickets/EmpolyeeTickets-updated");
const { empolyeeTicketsList } = require("../controllers/EmpolyeeTickets/EmpolyeeTickets-view");
const { empolyeeTicketsSearch } = require("../controllers/EmpolyeeTickets/EmpolyeeTickets_search");
const { ProjectsDelete } = require("../controllers/ProjectControllers/projects-employee-deleted");
const { ProjectsAdd } = require("../controllers/ProjectControllers/projects-employee-save");
const { ProjectsUpdated } = require("../controllers/ProjectControllers/projects-employee-updated");
const { ProjectsList } = require("../controllers/ProjectControllers/projects-employee-view");
const { ProjectsSearch } = require("../controllers/ProjectControllers/projects_empolyee_search");
const { promotionDelete } = require("../controllers/PromotionControllers/promotion-employee-deleted");
const { promotionAdd } = require("../controllers/PromotionControllers/promotion-employee-save");
const { promotionUpdated } = require("../controllers/PromotionControllers/promotion-employee-updated");
const { promotionList } = require("../controllers/PromotionControllers/promotion-employee-view");
const { promotionSearch } = require("../controllers/PromotionControllers/promotion_employee_search");
const { resendOTP } = require("../controllers/ResendOTP");
const { uploadFiles } = require("../controllers/UploadFile/UploadStorage");
const { verifyOTP } = require("../controllers/Verify_OTP/Verify_otp");
const { UserDeleted } = require("../controllers/userDeleted");
const { Userlist } = require("../controllers/userDetails");
const { forgotpassword } = require("../controllers/userForgotPassword");
const { loginUser } = require("../controllers/userLogin");
const { register } = require("../controllers/userRegistration");
const { UserUpdated } = require("../controllers/userUpdate");
const router = require("express").Router();



router.post('/registration',register)

router.post('/login',loginUser)


router.patch('/UserUpdated/:id',UserUpdated)

router.delete('/UserDeleted/:id',UserDeleted)


router.post('/forgotpassword',forgotpassword)


router.get('/Userlist',Userlist)

router.post('/verifyOTP',verifyOTP)

router.post('/resendOTP',resendOTP)


router.post('/allemployeeAdd',allemployeeAdd)
router.get('/allemployeeList',allemployeeList)
router.delete('/allemployeeDelete/:id',allemployeeDelete)
router.get('/allemployeeSearch/:key',allemployeeSearch)
router.patch('/allemployeeUpadated/:id',allemployeeUpadated)




router.get('/ClientsList',ClientsList)
router.patch('/ClientsUpdated/:id',ClientsUpdated)
router.post('/ClientsAdd',ClientsAdd)
router.delete('/ClientsDelete/:id',ClientsDelete)
router.get('/ClientsSearch/:key',ClientsSearch)




router.get('/empolyeeTicketsSearch/:key',empolyeeTicketsSearch)
router.delete('/empolyeeTicketsDeleted/:id',empolyeeTicketsDeleted)
router.patch('/empolyeeTicketsUpdated/:id',empolyeeTicketsUpdated)
router.post('/empolyeeTicketsAdd',empolyeeTicketsAdd)
router.get('/empolyeeTicketsList',empolyeeTicketsList)

router.get('/ProjectsSearch/:key',ProjectsSearch)
router.patch('/ProjectsUpdated/:id',ProjectsUpdated)
router.delete('/ProjectsDelete/:id',ProjectsDelete)
router.post('/ProjectsAdd',ProjectsAdd)
router.get('/ProjectsList',ProjectsList)


router.get('/promotionSearch/:key',promotionSearch)
router.delete('/promotionDelete/:id',promotionDelete)
router.patch('/promotionUpdated/:id',promotionUpdated)
router.post('/promotionAdd',promotionAdd)
router.get('/promotionList',promotionList)


router.post('/uploadFiles',uploadFiles)


module.exports=router;