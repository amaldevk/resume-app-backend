const mongoose=require("mongoose")
const resumeScheme=new mongoose.Schema(
    {
        Name:String,
        Age:String,
        Mobile:String,
        Email:String,
        Password:String
    }
)

module.exports=mongoose.model("resumes",resumeScheme)