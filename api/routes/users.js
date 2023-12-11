const express = require("express")
const bcrypt = require("bcrypt")

//importuje model pociagu
const User = require("../models/user")

//wyciagam Router
const router = express.Router()


// zakładanie konta
router.post("/signin", (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then((hash) => {
        const user = new User({
            username: req.body.username,
            password: hash
        })
        user.save()
            .then(() => res.status(201).json({wiadomosc: "Dodano użytkownika"}))
            .catch(err => res.status(500).json(err))
    })
})


module.exports = router