const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,  // Name is required
  },
  shortDescription: {
    type: String,
    required: true,  // Short description is required
  },
  bestSellingRank: {
    type: Number,
    required: false,  // Best selling rank is optional
  },
  thumbnailImage: {
    type: String,
    required: true,  // Thumbnail image is required
  },
  salePrice: {
    type: Number,
    required: true,  // Sale price is required
  },
  manufacturer: {
    type: String,
    required: true,  // Manufacturer is required
  },
  url: {
    type: String,
    required: true,  // URL is required
  },
  type: {
    type: String,
    required: true,  // Product type is required
  },
  image: {
    type: String,
    required: true,  // Main image is required
  },
  customerReviewCount: {
    type: Number,
    required: false,  // Customer review count is optional
  },
  shipping: {
    type: String,
    required: true,  // Shipping info is required
  },
  salePrice_range: {
    type: String,
    required: false,  // Sale price range is optional
  },
  objectID: {
    type: String,
    required: true,  // objectID is required
  },
  categories: {
    type: [String],
    required: true,  // Categories are required (array of strings)
  }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
