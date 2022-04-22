const bcrypt = require("bcrypt");

const hashpswd = async (pswd) => {
  return await bcrypt.hash(pswd, 10);
};

const verifyPswd = async (pswd, hash) => {
  return await bcrypt.compare(pswd, hash);
};

module.exports = {
  hashpswd,
  verifyPswd,
};
