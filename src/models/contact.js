const mongoose = require("mongoose")
const validator = require("validator")

const emailSchema = new mongoose.Schema({
    email:{
        type : String,
        unique : true,
        validator(value){
            if(!(validator.isEmail(value))){
                throw new Error("Email Invaild")
            }
        }
    }
})
const contact = new mongoose.model("contact",emailSchema)
module.exports=contact