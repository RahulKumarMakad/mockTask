import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM, FETCH_CART } from "../actions/cartActions";

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CART:
      return { ...state, items: action.payload.items, totalAmount: action.payload.totalAmount };
    case ADD_TO_CART:
      return { ...state, items: action.payload.items, totalAmount: action.payload.totalAmount };
    case UPDATE_CART_ITEM:
      return { ...state, items: action.payload.items, totalAmount: action.payload.totalAmount };
    case REMOVE_FROM_CART:
      return { ...state, items: action.payload.items, totalAmount: action.payload.totalAmount };
    default:
      return state;
  }
};

export default cartReducer;
