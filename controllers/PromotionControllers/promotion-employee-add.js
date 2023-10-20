const promotion = require("../../models/PromotionSchema/promotion");
const promotionAdd = require("express").Router();



promotionAdd.post("/", async (req, res) => {
    try{
        const promotion_employee= { 
             promotion_id :req.body.promotion_id,
              promotion_employee:req.body,
              depertment:req.body.depertment,
              promotion_from:req.body.promotion_from,
              promotion_to:req.body.promotion_to, 
              promotion_date:req.body.promotion_date
             } 
            const promotion_employees= new promotion.create({promotion_employee})
             await promotion_employees.save();
    } catch(err){
     res.send("err");
    }
   });

   module.exports=promotionAdd;