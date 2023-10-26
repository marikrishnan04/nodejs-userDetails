const ResendOTPRouter = require("express").Router();
const bodyParser = require("body-parser");//////////
const bcrypt = require("bcrypt");
const loginUsers = require("../models/Users");
const Joi = require("joi");
const sendEmail = require("../models/sendEmail");
const otp_Verification = require("../models/OTP_Verification/OTP_Verification");
const { sendOTPVerification } = require("./sendOTPVerification");

ResendOTPRouter.post('/',async (req,res)=>{
    try{
        const {userId,email}=req.body
        if(!userId || !email){
            res.send('empty user not send ')
        }else{
            await otp_Verification.deleteMany({ userId });
            sendOTPVerification({_id:userId,email},res);
            res.send('success')
        }
  
    }catch(error){
  
    }
  })

  module.exports=ResendOTPRouter;