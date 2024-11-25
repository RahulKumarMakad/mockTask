import axios from 'axios';

export const createOrder = (orderData) => async (dispatch) => {
    try {
        const { data } = await axios.post('/api/orders', orderData);
        dispatch({ type: 'CREATE_ORDER_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'CREATE_ORDER_FAIL', payload: error.message });
    }
};

export const fetchOrderHistory = (userId) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/api/orders/${userId}`);
        dispatch({ type: 'FETCH_ORDER_HISTORY_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'FETCH_ORDER_HISTORY_FAIL', payload: error.message });
    }
};
