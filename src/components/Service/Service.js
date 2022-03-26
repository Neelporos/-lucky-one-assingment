import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Service.css';

const Service = ({ service, addToCart }) => {
    const { picture, name, price, phone } = service;
    return (
        <div className="service">
            <img src={picture} alt="" />
            <div className='service-info'>
                <h3 className='service-name'>Name: {name}</h3>
                <p>Price: ${price}</p>
                <h4>Contact: {phone}</h4>
            </div>
            <button onClick={() => addToCart(service)} className='Add-btn'>
                <p className='btn-text'>Add Service To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Service;