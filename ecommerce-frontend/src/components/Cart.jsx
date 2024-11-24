import React, { useState, useEffect } from "react";
import axios from "../utils/api"; // Import the Axios instance

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items when the component mounts
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get("/cart");
        setCartItems(response.data); // Assuming the response contains cart items
      } catch (error) {
        console.error("Error fetching cart:", error.message);
      }
    };
    fetchCartItems();
  }, []);

  const handleRemoveItem = async (productId) => {
    try {
      await axios.delete(`/cart/${productId}`);
      // Re-fetch the cart items after deletion
      const response = await axios.get("/cart");
      setCartItems(response.data);
    } catch (error) {
      console.error("Error removing item from cart:", error.message);
    }
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.productId}>
            {item.name} - {item.quantity}
            <button onClick={() => handleRemoveItem(item.productId)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
