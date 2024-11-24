const Order = require("../models/Order");
const Cart = require("../models/Cart");

// Place an order
exports.placeOrder = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming authMiddleware sets req.user
    const cart = await Cart.findOne({ userId });

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty!" });
    }

    const order = new Order({
      userId,
      items: cart.items,
      totalAmount: cart.items.reduce(
        (sum, item) => sum + item.quantity * item.productId.price,
        0
      ),
    });

    await order.save();
    await Cart.findOneAndDelete({ userId }); // Clear the cart after placing the order
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: "Order placement failed", error: error.message });
  }
};

// Get all orders for a user
exports.getUserOrders = async (req, res) => {
  try {
    const userId = req.user.id;
    const orders = await Order.find({ userId }).populate("items.productId");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders", error: error.message });
  }
};
