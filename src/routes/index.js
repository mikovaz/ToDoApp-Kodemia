const taskRoute = require("./tasks")

const apiRouter= (app)=>{
    app.use("/todo",taskRoute)
}

module.exports=apiRouter