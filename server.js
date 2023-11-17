//importuje biblioteke http
const http = require("http")

//importuje ustawienia
const app = require("./app")

//ustawiam port 3000
const port = process.env.PORT || 3000

//tworze serwer
const server = http.createServer(app)

//odpalam serwer
server.listen(port)

// create -> POST /trains -> utworzenie pociagu nowego
// read -> GET /trains/100 -> info o pocaigu o nimerze 100
// update -> PUT /trains/100 -> zmiana pocaigu o numerze 100
// delet -> DELETE /trains/100 -> usuwa pociag o numerze 100