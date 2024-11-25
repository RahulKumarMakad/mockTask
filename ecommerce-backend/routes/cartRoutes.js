const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { addToCart, removeFromCart, getCart } = require('../controllers/cartController');

const router = express.Router();

// Protect these routes using the authMiddleware
router.post('/', authMiddleware, addToCart);
router.get('/', authMiddleware, getCart);
router.delete('/:id', authMiddleware, removeFromCart);

module.exports = router;
