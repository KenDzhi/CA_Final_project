const order = require("../models/OrderModel");

const getOrders = (req, res) => {
  res.send("Handling order routes");
};

module.exports = getOrders;