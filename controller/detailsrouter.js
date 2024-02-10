const express=require("express")
const router=express.Router()
const detailsModel=require("../model/detailsmodel")

router.post("/add",async(req,res)=>{
    let data=req.body
    let details=new detailsModel(data)
    let result=await details.save()
    res.json({status:"success"})
})

module.exports=router