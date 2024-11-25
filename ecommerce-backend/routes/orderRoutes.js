const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { createOrder, getOrdersByUser } = require('../controllers/orderController');

const router = express.Router();

// Protect these routes using the authMiddleware
router.post('/', authMiddleware, createOrder);  // Create an order
router.get('/:userId', authMiddleware, getOrdersByUser);  // Get orders by user

module.exports = router;
