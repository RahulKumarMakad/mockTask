require("dotenv").config();
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const Product = require("../models/Product");

// MongoDB connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Load products from JSON file
const loadProducts = async () => {
  const filePath = path.join(__dirname, "products.json");
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

// Seed the database
const seedData = async () => {
  try {
    await connectDB();

    // Clear existing products
    await Product.deleteMany();
    console.log("Existing products cleared!");

    // Insert new products
    const products = await loadProducts();
    await Product.insertMany(products);
    console.log("Products added to the database!");

    process.exit();
  } catch (error) {
    console.error(`Error seeding data: ${error.message}`);
    process.exit(1);
  }
};

seedData();
