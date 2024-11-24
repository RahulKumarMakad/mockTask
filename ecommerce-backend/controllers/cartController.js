const Cart = require("../models/Cart"); // Import Cart model

// Controller to fetch the cart details for a user
exports.getCart = async (req, res) => {
  try {
    const userId = req.user.id; // Get user ID from the request (after using protect middleware)

    // Fetch cart data from the database using the userId
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json(cart); // Return the cart data
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch cart data", error: error.message });
  }
};

// Controller to add an item to the cart
exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;  // Expecting productId and quantity in the request body
    const userId = req.user.id;  // Get user ID from the request (from middleware)

    // Find the cart for the user
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // If no cart exists for the user, create a new cart
      cart = new Cart({
        userId,
        items: [{ productId, quantity }],
      });
    } else {
      // If cart exists, check if the product is already in the cart
      const productIndex = cart.items.findIndex(item => item.productId.toString() === productId);

      if (productIndex > -1) {
        // If product is already in the cart, update the quantity
        cart.items[productIndex].quantity += quantity;
      } else {
        // If product is not in the cart, add it
        cart.items.push({ productId, quantity });
      }
    }

    // Save the updated cart
    await cart.save();
    res.status(200).json({ message: "Item added to cart", cart });
  } catch (error) {
    res.status(500).json({ message: "Failed to add item to cart", error: error.message });
  }
};

// Controller to remove an item from the cart
exports.removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;  // Get productId from URL parameter
    const userId = req.user.id; // Get user ID from the request (from middleware)

    // Find the cart for the user
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Find the product in the cart
    const productIndex = cart.items.findIndex(item => item.productId.toString() === productId);

    if (productIndex === -1) {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    // Remove the product from the cart
    cart.items.splice(productIndex, 1);

    // Save the updated cart
    await cart.save();

    res.status(200).json({ message: "Item removed from cart", cart });
  } catch (error) {
    res.status(500).json({ message: "Failed to remove item from cart", error: error.message });
  }
};

// Controller to update cart item (e.g., quantity)
exports.updateCartItem = async (req, res) => {
  try {
    const { productId } = req.params;  // Get productId from URL parameter
    const { quantity } = req.body;  // Expecting the new quantity in the request body
    const userId = req.user.id; // Get user ID from the request (from middleware)

    // Find the cart for the user
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Find the product in the cart
    const productIndex = cart.items.findIndex(item => item.productId.toString() === productId);

    if (productIndex === -1) {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    // Update the quantity of the product in the cart
    cart.items[productIndex].quantity = quantity;

    // Save the updated cart
    await cart.save();

    res.status(200).json({ message: "Cart item updated", cart });
  } catch (error) {
    res.status(500).json({ message: "Failed to update cart item", error: error.message });
  }
};
