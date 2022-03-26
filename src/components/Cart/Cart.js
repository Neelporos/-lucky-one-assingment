import React, { useEffect, useState } from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let serviceName = " "
    for (const service of cart) {
        serviceName = serviceName + service.name;
        serviceName = serviceName + "\n"
    }

    return (
        <div className='cart'>
            <h3>Get Your Service</h3>
            <p>{cart.length}</p>
            <p>{serviceName}</p>
            <p></p>
            <button>Get One Service</button>
            <button>Clear Cart</button>
        </div>
    );
};

export default Cart;