const Product = require("../models/ProductsModel");

const getProducts = (req, res) => {
  Product.create({ name: "Xbox" });
  res.send("Handling product routes, e.g search for products");
};

module.exports = getProducts;
