import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {


    const getOneServicebtn = () => {
        let index = 0;
        if (cart.length > 0) {
            const min = 0;
            const max = cart.length - 1;
            let index2 = min + Math.random() * (max - min);
            index = Math.floor(Math.random() * (max - min + 1)) + min;
        }


    }

    const clearCart = (cart) => {
        while (cart.length > 0) {
            cart.pop();
        }
    }

    let serviceName = " "
    for (const service of cart) {
        serviceName = serviceName + service.name;
        serviceName = serviceName + "\n"

    }

    return (
        <div className='cart'>
            <h3>Get Your Service</h3>
            <p>{cart.length}</p>
            <p>{serviceName}{ }</p>
            <button onClick={getOneServicebtn}>Get One Service</button>
            <button>Clear Cart</button>
        </div>
    );
};

export default Cart;