import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const { img, name, seller, price, stock } = props.products;

    return (
        <div className="product">
            <div className="img">
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>$ {price}</p>
                <br/>
                <p><small>Only {stock} left in stock- order soon</small></p>
                <button className="main-button"
                    onClick={ () => props.handleAddProduct(props.products)}
                >
                    <FontAwesomeIcon icon={faShoppingCart} />Add to cart
                </button>
            </div>

        </div>
    );
};

export default Product;