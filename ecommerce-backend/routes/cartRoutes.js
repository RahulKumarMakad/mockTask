const express = require("express");
const {
  getCart,
  addToCart,
  removeFromCart,
  updateCartItem,
} = require("../controllers/cartController"); // Import the controller functions
const { protect } = require("../middleware/authMiddleware"); // Protect routes

const router = express.Router();

// Protected routes for cart management
router.get("/", protect, getCart);  // Get cart details
router.post("/", protect, addToCart);  // Add an item to the cart
router.delete("/:productId", protect, removeFromCart);  // Remove an item from the cart
router.put("/:productId", protect, updateCartItem);  // Update cart item quantity

module.exports = router; // Export the router
