const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", // Assuming you have a User model
    required: true 
  },
  items: [
    {
      productId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Product", // Assuming you have a Product model
        required: true 
      },
      quantity: { 
        type: Number, 
        required: true, 
        default: 1 
      },
    },
  ],
});

module.exports = mongoose.model("Cart", CartSchema);