const express=require('express')
const rateLimit=require('express-rate-limit')
const router=express.Router()
const limiter = rateLimit({
    max: 10, 
    windowMs: 86400000, 
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
      legacyHeaders: false, 
  });

const { getAllMember,
    getSingleMenber,
    createAuto,
    deleteAuto,
updateAuto}=require("../controller/auto")

router.route('/:e').get(getSingleMenber).delete(deleteAuto).patch(updateAuto)
router.route('/').get(getAllMember).post(limiter,createAuto)

module.exports=router