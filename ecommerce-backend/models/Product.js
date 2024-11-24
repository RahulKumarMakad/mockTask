const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  shortDescription: { type: String },
  salePrice: { type: Number, required: true },
  manufacturer: { type: String },
  categories: { type: [String] },
  image: { type: String },
  url: { type: String },
  customerReviewCount: { type: Number },
  shipping: { type: String },
  salePrice_range: { type: String },
});

module.exports = mongoose.model("Product", ProductSchema);
