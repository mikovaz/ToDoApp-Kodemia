const express = require("express");
const db = require("./src/lib/db")
const config = require("./src/lib/config")
const app = express();
const port = config.app.port;
const apiRouter = require("./src/routes")

app.use(express.json());
apiRouter(app)
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