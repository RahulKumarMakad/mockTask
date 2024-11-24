const express = require("express");
const {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { protect, admin } = require("../middleware/authMiddleware"); // Middleware to check admin role

const router = express.Router();

// Public routes
router.get("/", getAllProducts);  // Get all products
router.get("/:id", getProductById);  // Get a product by ID

// Admin-only routes
router.post("/", protect, admin, addProduct);  // Add a new product
router.put("/:id", protect, admin, updateProduct);  // Update a product
router.delete("/:id", protect, admin, deleteProduct);  // Delete a product

module.exports = router;
