import { FETCH_PRODUCTS, FETCH_PRODUCT } from "../actions/productActions";

const initialState = {
  products: [],
  product: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    case FETCH_PRODUCT:
      return { ...state, product: action.payload };
    default:
      return state;
  }
};

export default productReducer;
