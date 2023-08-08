const user = require("../models/UserModel");

const getUsers = (req, res) => {
  res.send("Handling users routes");
};

module.exports = getUsers;
