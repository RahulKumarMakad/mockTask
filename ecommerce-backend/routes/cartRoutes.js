const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { addToCart, removeFromCart, getCart } = require('../controllers/cartController');

const router = express.Router();

// Protect these routes using the authMiddleware
router.post('/', authMiddleware, addToCart);  // Add to cart
router.get('/', authMiddleware, getCart);     // Get cart items
router.delete('/:id', authMiddleware, removeFromCart);  // Remove from cart

module.exports = router;
