module.exports = (req, res, next) => {
    try {
        var decoded = jwt.verify(req.body.token, process.env.JWT_KEY);
        next();
    } catch(err) {
        return res.status(403).json({
            wiadomosc: "Błąd autoryzacji"
        });
    }
}