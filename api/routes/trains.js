const express = require("express")

//wyciagam Router
const router = express.Router()

router.get("/",(req,res,next)=>{
    res.status(200).json({
        wiadomosc: "lista wszystkich pociagow"
    })
})

router.post("/",(req,res,next)=>{
    res.status(201).json({
        wiadomosc: "utworzenie nowego pociagu"
    })
})

router.get("/:id",(req,res,next)=>{
    const id = req.params.id
    res.status(200).json({wiadomosc: "szczegoly o numerze "+id})
})

router.put("/:id",(req,res,next)=>{
    const id = req.params.id
    res.status(200).json({wiadomosc: "zmiana danych o numerze "+id})
})
router.delete("/:id",(req,res,next)=>{
    const id = req.params.id
    res.status(200).json({wiadomosc: "usuniecie danych o numerze "+id})
})


// create -> POST /trains -> utworzenie pociagu nowego
// read -> GET /trains/100 -> info o pocaigu o nimerze 100
// update -> PUT /trains/100 -> zmiana pocaigu o numerze 100
// delet -> DELETE /trains/100 -> usuwa pociag o numerze 100

//nodemon


module.exports=router
