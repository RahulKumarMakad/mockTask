const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");  // Import CORS middleware
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");

dotenv.config();

const app = express();

// Enable CORS for all routes
app.use(cors());  // Enable CORS middleware

app.use(express.json());

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  }
};

// Connect to MongoDB
connectDB();

// API Routes
app.use("/api/auth", authRoutes);  // Authentication routes
app.use("/api/products", productRoutes);  // Product routes
app.use("/api/cart", cartRoutes);  // Cart routes
app.use("/api/orders", orderRoutes);  // Order routes

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
