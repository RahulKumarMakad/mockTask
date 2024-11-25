import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrderHistory } from '../redux/actions/orderActions';

function OrderHistory({ userId }) {
    const dispatch = useDispatch();
    const { orders, error } = useSelector((state) => state.orderReducer);

    useEffect(() => {
        dispatch(fetchOrderHistory(userId));
    }, [dispatch, userId]);

    return (
        <div>
            <h3>Order History</h3>
            {error ? <p>{error}</p> : orders.map((order) => (
                <div key={order._id}>
                    <h4>Order {order._id}</h4>
                    <p>Status: {order.status}</p>
                    <p>Total: ${order.totalAmount}</p>
                </div>
            ))}
        </div>
    );
}

export default OrderHistory;
