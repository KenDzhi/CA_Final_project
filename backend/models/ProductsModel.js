const mongoose = require("mongoose");
const Review = require("./ReviewModel");

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
    // images: issiaiskinti kaip dealinti su nuotrauku ikelimu,
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: Review }],
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
productSchema.index({ name: "text" }, { name: "TextIndex" });

module.exports = Product;
