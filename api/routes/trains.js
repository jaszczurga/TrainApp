const express = require("express")

//wyciagam Router
const router = express.Router()

router.get("/",(req,res,next)=>{
    res.status(200).json({
        wiadomosc: "lista wszystkich pociagow"
    })
})

router.post("/",(req,res,next)=>{
    const train = {
        name : req.body.name,
        from : req.body.from,
        to : req.body.to
    }
    res.status(201).json({
        wiadomosc: "utworzenie nowego pociagu",
        info: train
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

//CRUDZIK
// create -> POST /trains -> utworzenie pociagu nowego
// read -> GET /trains/100 -> info o pocaigu o nimerze 100
// update -> PUT /trains/100 -> zmiana pocaigu o numerze 100
// delet -> DELETE /trains/100 -> usuwa pociag o numerze 100

//nodemon


module.exports=router
