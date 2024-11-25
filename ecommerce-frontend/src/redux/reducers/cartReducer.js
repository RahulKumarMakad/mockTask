const initialState = { cart: [], error: null };

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART_SUCCESS':
            return { ...state, cart: [...state.cart, action.payload] };
        case 'REMOVE_FROM_CART_SUCCESS':
            return { ...state, cart: state.cart.filter((item) => item._id !== action.payload) };
        case 'ADD_TO_CART_FAIL':
        case 'REMOVE_FROM_CART_FAIL':
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default cartReducer;
