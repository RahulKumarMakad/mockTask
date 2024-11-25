import api from "../utils/api";

// Fetch all products
export const fetchProducts = () => async (dispatch) => {
  const token = localStorage.getItem("token");  // Get token from local storage

  try {
    const { data } = await api.get("/products", {
      headers: {
        Authorization: `Bearer ${token}`, // Add token to Authorization header
      },
    }); // GET request to fetch products
    dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: data }); // Dispatch success action
  } catch (error) {
    dispatch({
      type: "FETCH_PRODUCTS_FAIL",
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Fetch a single product by ID
export const fetchProductById = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");  // Get token from local storage

  try {
    const { data } = await api.get(`/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Add token to Authorization header
      },
    }); // GET request for product details
    dispatch({ type: "FETCH_PRODUCT_SUCCESS", payload: data }); // Dispatch success action
  } catch (error) {
    dispatch({
      type: "FETCH_PRODUCT_FAIL",
      payload: error.response?.data?.message || error.message,
    });
  }
};
