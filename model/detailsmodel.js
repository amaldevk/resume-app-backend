const mongoose=require("mongoose")

const detailsScheme=new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"resumes"
        },
        profile:{
            type:String,
            required:true
        },
        qualification:{
            type:Date,
            default:Date.now
        },
        cgpa:{
            type:String,
            required:true
        },
        skills:{
            type:String,
            required:true
        },
        certificate:{
           type:String,
        required:true
        },
        photourl:{
            type:String,
            required:true

        }
    }
)

module.exports=mongoose.model("details",detailsScheme)