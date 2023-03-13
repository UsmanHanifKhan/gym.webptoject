const express = require('express')
const app = express()
const port = 8000
const path = require('path')
const hbs = require('hbs')

const staticPath = path.join(__dirname,"../templates/public")
const templatePath = path.join(__dirname,"../templates/views")
const partialsPath = path.join(__dirname,"../templates/partials")
app.set("view engine","hbs")
app.set("views",templatePath)

hbs.registerPartials(partialsPath)
app.use(express.static(staticPath ))

app.get('/',(req,res)=>{
    res.render("index")
})

app.get('/about',(req,res)=>{
    res.render("about")
})

app.get('/features',(req,res)=>{
    res.render("features")
})
app.get('/price',(req,res)=>{
    res.render("price")
})
app.get('/trainer',(req,res)=>{
    res.render("trainer")
})



app.get('*',(req,res)=>{
    res.render("404")
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))