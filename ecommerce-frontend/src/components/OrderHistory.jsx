import React, { useState, useEffect } from "react";
import axios from "../utils/api"; // Import the Axios instance

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  // Fetch order history when the component mounts
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("/orders");
        setOrders(response.data); // Assuming response contains orders
      } catch (error) {
        console.error("Error fetching orders:", error.message);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Your Order History</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            Order #{order._id} - Status: {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
