import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Added Navigate for redirects
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import OrderSummary from "./components/OrderSummary";  
import "./App.css"; 

const PrivateRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem("token"); // Check if the token exists in localStorage
  return token ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<PrivateRoute element={<Cart />} />} />  {/* Protect cart route */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/order-summary" element={<PrivateRoute element={<OrderSummary />} />} />  {/* Protect order summary route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
