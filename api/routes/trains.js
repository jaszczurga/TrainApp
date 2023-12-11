const express = require("express")

//importuje model pociagu
const Train = require("../models/trains")

//wyciagam Router
const router = express.Router()


// zabezpieczenie routów
const checkAuth = require("../middleware/checkoutAuth")

router.get("/",(req,res,next)=>{
    Train.find()
        .then(result => {
            res.status(200).json({
                wiadomosc: "lista wszystkich pociagow",
                info: result
            })
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

//zrobimy wlasnego middleware
router.post("/",checkAuth,(req,res,next)=>{
    const train = new Train({
        name : req.body.name,
        from : req.body.from,
        to : req.body.to
    })
    train.save()
        .then(result => {
            res.status(201).json({
                wiadomosc: "utworzenie nowego pociagu",
                info: result
            })
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.get("/:id",(req,res,next)=>{
    const id = req.params.id

    Train.findById(id)
        .then(result => {
            res.status(200).json({
                wiadomosc: "szczegoly o numerze "+id,
                info: result
            })
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.put("/:id",(req,res,next)=>{
    const id = req.params.id

    Train.findByIdAndUpdate(id,{
        name : req.body.name,
        from : req.body.from,
        to : req.body.to
    })
        .then(result => {
            res.status(200).json({
                wiadomosc: "zmiana danych o numerze "+id,
                info: result
            })
        })
        .catch(error => {
            res.status(500).json(error)
        })
})
router.delete("/:id",(req,res,next)=>{
    const id = req.params.id

    Train.findByIdAndDelete(id,{
        name : req.body.name,
        from : req.body.from,
        to : req.body.to
    })
        .then(result => {
            res.status(200).json({
                wiadomosc: "usuniecie danych o numerze "+id,
                info: result
            })
        })
        .catch(error => {
            res.status(500).json(error)
    })
})

//CRUDZIK
// create -> POST /trains -> utworzenie pociagu nowego
// read -> GET /trains/100 -> info o pocaigu o nimerze 100
// update -> PUT /trains/100 -> zmiana pocaigu o numerze 100
// delet -> DELETE /trains/100 -> usuwa pociag o numerze 100

//nodemon


module.exports=router
