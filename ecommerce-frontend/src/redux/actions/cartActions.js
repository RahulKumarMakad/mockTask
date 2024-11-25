import api from "../utils/api";

// Add item to cart
export const addToCart = (productId, quantity) => async (dispatch) => {
  try {
    const { data } = await api.post("/cart", { productId, quantity }); // POST request to add item
    dispatch({ type: "ADD_TO_CART_SUCCESS", payload: data }); // Dispatch success action
  } catch (error) {
    dispatch({ type: "ADD_TO_CART_FAIL", payload: error.response?.data?.message || error.message });
  }
};

// Remove item from cart
export const removeFromCart = (cartItemId) => async (dispatch) => {
  try {
    await api.delete(`/cart/${cartItemId}`); // DELETE request to remove item
    dispatch({ type: "REMOVE_FROM_CART_SUCCESS", payload: cartItemId }); // Dispatch success action
  } catch (error) {
    dispatch({ type: "REMOVE_FROM_CART_FAIL", payload: error.response?.data?.message || error.message });
  }
};

// Fetch cart data
export const fetchCart = () => async (dispatch) => {
  try {
    const { data } = await api.get("/cart"); // GET request to fetch cart
    dispatch({ type: "FETCH_CART_SUCCESS", payload: data }); // Dispatch success action
  } catch (error) {
    dispatch({ type: "FETCH_CART_FAIL", payload: error.response?.data?.message || error.message });
  }
};
