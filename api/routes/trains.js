const express = require("express")

//wyciagam Router
const router = express.Router()

router.get("/",(req,res,next)=>{
    res.status(200).json({
        wiadomosc: "lista wszystkich pociagow"
    })
})

router.get("/",(req,res,next)=>{
    res.status(200).json({
        wiadomosc: "utworzenie nowego pociagu"
    })
})

module.exports=router
