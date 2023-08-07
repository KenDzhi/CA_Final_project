const mongoose = require("mongoose");
const Review = require("./ReviewModel");

const imageSchema = mongoose.Schema({
  path: { type: String, required: true },
});

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    stockCount: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
    },
    reviewsNumber: {
      type: Number,
    },
    sales: {
      type: Number,
      default: 0,
    },
    attributes: [{ key: { type: String }, value: { type: String } }],
    images: [imageSchema],
    reviews: [Review],
  },
  {
    timestamps: true,
  }
);
productSchema.index();

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
