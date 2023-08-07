const mongoose = require("mongoose");
const categorySchema = mongose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: { type: String, default: "Category description" },
  image: { type: String, default: "/images/category/consoles.jpg" },
  attributes: [{ key: { type: String }, value: [{ type: String }] }],
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
