import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';

function ProductList() {
    const dispatch = useDispatch();
    const { products, error } = useSelector((state) => state.productReducer);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div>
            {error ? <p>{error}</p> : products.map((product) => (
                <div key={product._id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
// After successful login
localStorage.setItem('token', 'your-jwt-token-here');
