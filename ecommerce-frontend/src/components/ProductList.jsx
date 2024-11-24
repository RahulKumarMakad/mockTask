import React, { useState, useEffect } from "react";
import axios from "../utils/api"; // Import the Axios instance
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  // Fetch products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/products");
        setProducts(response.data); // Assuming the response contains product data
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <div>
        {products.map((product) => (
          <div key={product._id}>
            <Link to={`/product/${product._id}`}>
              <h3>{product.name}</h3>
              <img src={product.image} alt={product.name} />
              <p>${product.salePrice}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
