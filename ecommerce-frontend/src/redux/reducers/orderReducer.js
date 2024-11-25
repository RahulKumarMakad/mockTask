const initialState = { orders: [], error: null };

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_ORDER_SUCCESS':
            return { ...state, orders: [...state.orders, action.payload] };
        case 'FETCH_ORDER_HISTORY_SUCCESS':
            return { ...state, orders: action.payload };
        case 'CREATE_ORDER_FAIL':
        case 'FETCH_ORDER_HISTORY_FAIL':
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default orderReducer;
