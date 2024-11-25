import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";  // Get product ID from URL
import { fetchProductById } from "../redux/actions/productActions";  // Action to fetch product details

function ProductDetails() {
  const { id } = useParams();  // Get product ID from the URL
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);  // Access product from Redux store
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(fetchProductById(id));  // Fetch product details by ID
  }, [dispatch, id]);

  const handleAddToCart = () => {
    // Add product to cart (dispatch the addToCart action)
  };

  return (
    <div>
      {product ? (
        <div>
          <h3>{product.name}</h3>
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
          />
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductDetails;
