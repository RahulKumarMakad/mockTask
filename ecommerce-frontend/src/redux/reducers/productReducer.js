const initialState = {
    products: [],
    error: null,
    product: {}, // Added for single product fetching
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_PRODUCTS_SUCCESS":
        return { ...state, products: action.payload, error: null };
      case "FETCH_PRODUCT_SUCCESS": // Handle successful single product fetch
        return { ...state, product: action.payload, error: null };
      case "FETCH_PRODUCTS_FAIL":
      case "FETCH_PRODUCT_FAIL":
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  
  export default productReducer;
  