const express = require("express");
const userDetailsRouter = require("./userDetails");
const regRouter = require("./userRegistration");
const loginRouter = require("./userLogin");
const forgotRouter = require("./userForgotPassword");
const verifyOTP = require("./Verify_OTP/Verify_otp");
const ResendOTPRouter = require("./ResendOTP");
const loginUsersUpdateRouter = require("./userUpdate");
const loginUsersdeletedRouter = require("./userDeleted");
const EmpUserapiRouter= express.Router();

EmpUserapiRouter.use("/details",userDetailsRouter)
EmpUserapiRouter.use('/registration', regRouter); // User registration API
EmpUserapiRouter.use('/login', loginRouter); // User login API
EmpUserapiRouter.use('/forgot-password', forgotRouter); // User forgot password API
EmpUserapiRouter.use('/resendOTP', ResendOTPRouter); // User ResendOTPRouter API
EmpUserapiRouter.use('/verifyOTP', verifyOTP); // User verifyOTP API 
EmpUserapiRouter.use('/usersUpdate', loginUsersUpdateRouter); // User usersUpdate API 
EmpUserapiRouter.use('/usersdeleted', loginUsersdeletedRouter); // User Usersdeleted API 




module.exports=EmpUserapiRouter;