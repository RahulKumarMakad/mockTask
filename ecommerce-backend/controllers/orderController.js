const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
    try {
        const { userId, products, totalAmount } = req.body;
        const order = new Order({ userId, products, totalAmount });
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getOrdersByUser = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId });
        res.status(200).json(orders);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
