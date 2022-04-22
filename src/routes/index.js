const taskRoute = require("./tasks");
const userRoute = require("./users");
const authRoute = require("./auth");
const apiRouter = (app) => {
  app.use("/todo", taskRoute);
  app.use("/user", userRoute);
  app.use("/auth", authRoute);
};

module.exports = apiRouter;
