//import expressa

const express = require("express")

//routy
const trainRoutes = require("./api/routes/trains")


//instancja expressa
const app = express()



app.use("/trains",trainRoutes)
app.use((req,res,next)=>{
    res.status(200).json({wiadomosc:"Wszystko smiga"})
})
//exportuje app
module.exports = app