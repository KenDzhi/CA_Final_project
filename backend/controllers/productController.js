const Product = require("../models/ProductsModel");

const getProducts = (req, res) => {
  res.send("Handling product routes");
};

module.exports = getProducts;
