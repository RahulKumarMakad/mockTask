import axios from "../../utils/api";

// Action Types
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCT = "FETCH_PRODUCT";

// Fetch all products
export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get("/products");
    dispatch({ type: FETCH_PRODUCTS, payload: response.data });
  } catch (error) {
    console.error("Error fetching products:", error.message);
  }
};

// Fetch a single product
export const fetchProduct = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/products/${id}`);
    dispatch({ type: FETCH_PRODUCT, payload: response.data });
  } catch (error) {
    console.error("Error fetching product:", error.message);
  }
};
