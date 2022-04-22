const route = require("express").Router();
//const users = require('../models/user')
const usr = require("../usecases/user");

route.get("/", async (req, res) => {
  try {
    const userGet = await usr.get();
    res.json({
      message: true,
      playload: userGet,
    });
  } catch (error) {}
});

route.post("/", async (req, res) => {
  const { user, password, role } = req.body;
  const createUser = await usr.create({
    user,
    password,
    role,
  });
  res.json({
    success: true,
    playload: createUser,
  });
});

module.exports = route;
