const Category = require("../models/CategoryModel");

const getCategories = (req, res) => {
  res.send("Handling category routes");
};

module.exports = getCategories;