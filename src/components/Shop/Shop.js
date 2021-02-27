import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    const handleAddProduct = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    };
    return (
        <div className="shop-container">
            <div className="product-container">
                
                    {
                        products.map(product => <Product 
                            handleAddProduct = {handleAddProduct}
                            products = {product} ></Product>)
                    }
                
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
                <h5>Items Ordered: {cart.length}</h5>

            </div>


        </div>
    );
};

export default Shop;