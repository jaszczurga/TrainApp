const express = require("express")


//przerzucam model do kontrolera
// //importuje model pociagu
// const Train = require("../models/trains")

//wyciagam Router
const router = express.Router()


// zabezpieczenie routów
const checkAuth = require("../middleware/checkoutAuth")

//kontroler
const trainController = require("../controllers/train")

router.get("/",trainController.train_get_all)

//zrobimy wlasnego middleware
router.post("/",checkAuth,trainController.train_create_train)

router.get("/:id",trainController.train_get_by_id)

router.put("/:id",trainController.train_update_by_id)
router.delete("/:id",trainController.train_delete_by_id)

//CRUDZIK
// create -> POST /trains -> utworzenie pociagu nowego
// read -> GET /trains/100 -> info o pocaigu o nimerze 100
// update -> PUT /trains/100 -> zmiana pocaigu o numerze 100
// delet -> DELETE /trains/100 -> usuwa pociag o numerze 100

//nodemon


module.exports=router
