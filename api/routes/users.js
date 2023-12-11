const express = require("express")
const bcrypt = require("bcrypt")

//importuje model pociagu
const User = require("../models/user")

//wyciagam Router
const router = express.Router()


// zakładanie konta
router.post("/signin", (req, res, next) => {
    //TODO: sprawdzenie czy juz przypadkiem nie mamy takiego username w bazie ale tego nie zrobimy
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

// logowanie
router.post("/login", (req, res, next) => {
    // pobieram z bazy usera
    User.findOne({username: req.body.username})
        .then(user => {
            if(!user)
                return res.status(404).json({wiadomosc: "Nie ma takiego username"})
            // wiem że jest user to porównuję hasła
            bcrypt.compare(req.body.password, user.password).then((result) => {
                if(!result)
                    return res.status(404).json({wiadomosc: "Złe hasło"})
                // zalogowano
                return res.status(200).json({wiadomosc: "Zalogowano użytkownika"})
            });

        })
        .catch(err => res.status(500).json(err))
})


module.exports = router