const Train = require ("../models/trains");
exports.train_get_all = (req,res,next)=>{
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
}
exports.train_create_train = (req,res,next)=>{
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
}

exports.train_get_by_id = (req,res,next)=>{
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
}

exports.train_update_by_id = (req,res,next)=>{
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
}

exports.train_delete_by_id = (req,res,next)=>{
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
}