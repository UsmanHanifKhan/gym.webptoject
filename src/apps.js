const express = require('express')
const app = express()
const port = 8000
const path = require('path')
const contact = require('./models/contact')
require("./db/conn")
const eMail = require("./models/contact")

// console.log(path.join(__dirname,"/db/conn.js"))

const staticPath = path.join(__dirname,"../templates/public")
const templatePath = path.join(__dirname,"../templates/views")

app.set("view engine","hbs")
app.set("views",templatePath)

app.use(express.static(staticPath ))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.get('/',(req,res)=>{
    res.render("index")
})

app.post("/",async(req,res)=>{
    try {
        const register = new contact({
            email: req.body.mail
        })
        const registered = await register.save()
        res.status(201).render("index")

    } catch (error) {
        res.status(400).send(error)
        console.log(error);
    }
})

app.get('*',(req,res)=>{
    res.render("404")
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))