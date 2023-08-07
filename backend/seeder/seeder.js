const connectToDB = require("../config/db");
connectToDB();

const categoryData = require("./categories");
const productData = require("./products");
const reviewData = require("./reviews");

const Category = require("../models/CategoryModel");
const Product = require("../models/ProductsModel");
const Review = require("../models/ReviewModel");

const importData = async () => {
  try {
    await Category.collection.dropIndexes();
    await Product.collection.dropIndexes();

    await Category.collection.deleteMany({});
    await Product.collection.deleteMany({});
    await Review.collection.deleteMany({});

    await Category.insertMany(categoryData);
    
    const reviews = await Review.insertMany(reviewData);
    const sampleProducts = productData.map((product) => {
      reviews.map((review) => {
        product.reviews.push(review._id);
      });
      return { ...product };
    });
    await Product.insertMany(sampleProducts);

    console.log("Seeder planted data succesfully");
    process.exit();
  } catch (error) {
    console.log("Seeder failed to plant a data", error);
    process.exit(1);
  }
};
importData();
