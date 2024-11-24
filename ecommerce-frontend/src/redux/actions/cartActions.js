import axios from "../../utils/api";

// Action Types
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";
export const FETCH_CART = "FETCH_CART";

// Fetch Cart
export const fetchCart = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/cart");
    dispatch({ type: FETCH_CART, payload: data });
  } catch (error) {
    console.error("Error fetching cart:", error.message);
  }
};

// Add Item to Cart
export const addToCart = (productId, quantity = 1) => async (dispatch) => {
  try {
    const { data } = await axios.post("/cart", { productId, quantity });
    dispatch({ type: ADD_TO_CART, payload: data });
  } catch (error) {
    console.error("Error adding to cart:", error.message);
  }
};

// Update Cart Item
export const updateCartItem = (productId, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/cart/${productId}`, { quantity });
    dispatch({ type: UPDATE_CART_ITEM, payload: data });
  } catch (error) {
    console.error("Error updating cart item:", error.message);
  }
};

// Remove Item from Cart
export const removeFromCart = (productId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/cart/${productId}`);
    dispatch({ type: REMOVE_FROM_CART, payload: data });
  } catch (error) {
    console.error("Error removing from cart:", error.message);
  }
};
