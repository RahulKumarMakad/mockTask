import React from 'react'; // Keep only React import
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions'; // Cart action to remove items
import { Link } from 'react-router-dom'; // To navigate to checkout

function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cart); // Get cart items from Redux store

    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id)); // Dispatch action to remove item
    };

    const getTotalAmount = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0); // Calculate total
    };

    return (
        <div>
            <h3>Shopping Cart</h3>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item._id}>
                                <h4>{item.name}</h4>
                                <p>Price: ${item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <button onClick={() => handleRemoveItem(item._id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <h4>Total: ${getTotalAmount()}</h4>
                    <Link to="/checkout">Proceed to Checkout</Link>
                </div>
            )}
        </div>
    );
}

export default Cart;
