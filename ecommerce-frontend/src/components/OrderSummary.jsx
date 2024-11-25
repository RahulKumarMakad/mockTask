import React, { useState, useEffect } from 'react'; // Combined imports for React and useEffect
import PropTypes from 'prop-types'; // Added PropTypes for props validation
import { useDispatch } from 'react-redux';
import { createOrder } from '../redux/actions/orderActions';

function OrderSummary({ cart, userId }) {
    const dispatch = useDispatch();
    const [totalAmount, setTotalAmount] = useState(0);

    // Calculate total amount
    useEffect(() => {
        setTotalAmount(cart.reduce((sum, item) => sum + item.price * item.quantity, 0));
    }, [cart]);

    const handleCheckout = () => {
        const orderData = {
            userId,
            products: cart,
            totalAmount,
        };
        dispatch(createOrder(orderData));
    };

    return (
        <div>
            <h3>Order Summary</h3>
            <p>Total: ${totalAmount}</p>
            <button onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
    );
}

// Add PropTypes validation
OrderSummary.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            price: PropTypes.number.isRequired, // Ensure each cart item has a price
            quantity: PropTypes.number.isRequired, // Ensure each cart item has a quantity
        })
    ).isRequired, // The cart prop is required
    userId: PropTypes.string.isRequired, // Ensure userId is a string and required
};

export default OrderSummary;
