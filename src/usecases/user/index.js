const User = require("../../models/user").model;
const encrypt = require("../../lib/encrypt");

const get = async () => {
  return await User.find({}).exec();
};

const getById = async (id) => {
  return await User.findById(id).exec();
};

const authenticate = async (user, password) => {
  const hash = await encrypt.hashpswd(password);
  return await encrypt.verifyPswd(password, hash);
};

const create = async (userData) => {
  const { user, password, role } = userData;
  const newUser = new User({
    user,
    password,
    role,
  });
  const saveUser = await newUser.save();
  return saveUser;
};

module.exports = {
  get,
  getById,
  authenticate,
  create,
};
