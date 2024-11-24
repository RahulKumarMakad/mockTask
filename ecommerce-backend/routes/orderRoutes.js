const express = require("express");
const { placeOrder, getUserOrders } = require("../controllers/orderController");
const { protect } = require("../middleware/authMiddleware"); // Auth middleware for protecting routes

const router = express.Router();

router.post("/", protect, placeOrder); // Place an order
router.get("/", protect, getUserOrders); // Fetch user orders

module.exports = router;
