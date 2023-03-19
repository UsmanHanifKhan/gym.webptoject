const e = require("express")
const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1/contactMe",{
    useNewUrlParser: true,
    useUniFiedTopology:true
}).then(()=>{
    console.log("connection successfull............")
})
.catch((e)=>{
    console.log(e)
})