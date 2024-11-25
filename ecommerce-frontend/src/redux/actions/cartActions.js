import api from "../utils/api";

// Add item to cart
export const addToCart = (productId, quantity) => async (dispatch) => {
  const token = localStorage.getItem("token");  // Retrieve token from localStorage
  try {
    const { data } = await api.post(
      "/cart", 
      { productId, quantity },
      { headers: { Authorization: `Bearer ${token}` } }  // Attach Authorization header
    );
    dispatch({ type: "ADD_TO_CART_SUCCESS", payload: data });  // Dispatch success action
  } catch (error) {
    dispatch({ type: "ADD_TO_CART_FAIL", payload: error.response?.data?.message || error.message });
  }
};

// Remove item from cart
export const removeFromCart = (cartItemId) => async (dispatch) => {
  const token = localStorage.getItem("token");  // Retrieve token from localStorage
  try {
    await api.delete(`/cart/${cartItemId}`, {
      headers: { Authorization: `Bearer ${token}` }  // Attach Authorization header
    });
    dispatch({ type: "REMOVE_FROM_CART_SUCCESS", payload: cartItemId });  // Dispatch success action
  } catch (error) {
    dispatch({ type: "REMOVE_FROM_CART_FAIL", payload: error.response?.data?.message || error.message });
  }
};

// Fetch cart data
export const fetchCart = () => async (dispatch) => {
  const token = localStorage.getItem("token");  // Retrieve token from localStorage
  try {
    const { data } = await api.get("/cart", {
      headers: { Authorization: `Bearer ${token}` }  // Attach Authorization header
    });
    dispatch({ type: "FETCH_CART_SUCCESS", payload: data });  // Dispatch success action
  } catch (error) {
    dispatch({ type: "FETCH_CART_FAIL", payload: error.response?.data?.message || error.message });
  }
};
