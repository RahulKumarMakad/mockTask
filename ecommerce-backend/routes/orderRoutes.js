const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { createOrder, getOrdersByUser } = require('../controllers/orderController');

const router = express.Router();

// Protect these routes using the authMiddleware
router.post('/', authMiddleware, createOrder);
router.get('/:userId', authMiddleware, getOrdersByUser);

module.exports = router;
