import React from 'react';
import { Link } from 'react-router-dom';  // For navigation
import { useSelector } from 'react-redux';  // Access Redux store for authentication

function Navbar() {
    const { token } = useSelector((state) => state.auth);  // Get auth token from Redux store

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
                <li>
                    {token ? (
                        <Link to="/logout">Logout</Link>  // Show logout if logged in
                    ) : (
                        <Link to="/login">Login</Link>  // Show login if not authenticated
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
