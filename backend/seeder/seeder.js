const connectToDB = require("../config/db");
connectToDB();

const categoryData = require("./categories");
const productData = require("./products");

const Category = require("../models/CategoryModel");
const Product = require("../models/ProductsModel");

const importData = async () => {
  try {
    await Category.collection.dropIndexes();
    await Product.collection.dropIndexes();

    await Category.collection.deleteMany({});
    await Product.collection.deleteMany({});

    await Category.insertMany(categoryData);
    await Product.insertMany(productData);

    console.log("Seeder planted data succesfully");
    process.exit();
  } catch (error) {
    console.log("Seeder failed to plant a data", error);
    process.exit(1);
  }
};
importData();
