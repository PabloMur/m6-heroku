"use strict";
exports.__esModule = true;
var express = require("express");
var port = process.env.PORT || 3200;
var app = express();
app.use(express.json());
console.log(process.env);
app.get("/hola", function (req, res) {
    res.json({
        message: "Hola, soy el servidor jiji :3"
    });
});
app.listen(port, function () {
    console.log("iniciado en " + port);
});
// class User {
//   nombre: string;
//   getNombre() {
//     return this.nombre;
//   }
// }
// const pablo = new User();
// pablo.nombre = "Pablo";
// console.log(pablo.getNombre());
