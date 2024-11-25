import axios from 'axios';

// Create Order
export const createOrder = (orderData) => async (dispatch) => {
    try {
        const { data } = await axios.post('/api/orders', orderData); // Post request to create an order
        dispatch({ type: 'CREATE_ORDER_SUCCESS', payload: data });  // Dispatch success action
    } catch (error) {
        dispatch({ type: 'CREATE_ORDER_FAIL', payload: error.message });  // Dispatch fail action
    }
};

// Fetch order history by user ID
export const fetchOrderHistory = (userId) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/api/orders/${userId}`); // Get request to fetch orders by user ID
        dispatch({ type: 'FETCH_ORDER_HISTORY_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'FETCH_ORDER_HISTORY_FAIL', payload: error.message });
    }
};
