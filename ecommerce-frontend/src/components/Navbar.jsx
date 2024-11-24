import React from "react";
import { Link } from "react-router-dom";
import { getAuthToken } from "../utils/api"; // Import the function to get the token

const Navbar = () => {
  const token = getAuthToken(); // Check if the token exists in localStorage

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {token ? (
          <>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/orders">Orders</Link></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
