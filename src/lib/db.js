const mongoose = require("mongoose");
const config = require("./config");

const connect = () => {
    
    return new Promise((resolve, reject) => {
        console.log("test connect")
        mongoose.connect(
            `mongodb+srv://${config.db.user}:${config.db.password}@${config.db.host}/${config.db.baseCollection}?retryWrites=true&w=majority`,
            { useNewUrlParser: true }
        )
        const db = mongoose.connection;
    
        db.on("open", () => {
            console.log("Conexión a base de datos exitosa");
            resolve(mongoose)
        });

        db.on("error", (err) => {
            console.error("Conexión fallida", err);
            reject(err);
        })
    })

};

module.exports = { connect };