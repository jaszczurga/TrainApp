const express = require("express")

//importuje model pociagu
const User = require("../models/user")

//wyciagam Router
const router = express.Router()


//zakladanie konta
router.post("/",(req,res,next)=>{
    const user = new User({
        username : req.body.username,
        password : req.body.password
    })
    user.save()
        .then(result => {
            res.status(201).json({
                wiadomosc: "utworzenie nowego konta",
                info: result
            })
        })
        .catch(error => {
            res.status(500).json(error)
        })
    }
)


module.exports = router