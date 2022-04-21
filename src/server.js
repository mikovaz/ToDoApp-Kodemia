const express = require("express");
const db = require("./lib/db")
const config = require("./lib/config")
const app = express();
const port = config.app.port;

app.use(express.json());



app.listen(port, () => {
    console.log(
        `Bienvenido a ${config.app.name}, escuchando desde el puerto ${port}`
    );

    db.connect()
        .then(() => {
            console.log("Conectado a la base de datos");
        })
        .catch((err) => {
            console.log("Conexion denegada a la base de datos:", err);
        });
});