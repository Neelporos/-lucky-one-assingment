import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const addToCart = (service) => {
        if (cart.length >= 4) {
            console.log("max limit crossed")
            return;
        }
        for (const service2 of cart) {
            if (service.id === service2.id) {
                console.log("already added")
                return;
            }
        }
        const newCart = [...cart, service];
        setCart(newCart);
    }
    return (
        <div>
            <h1 className='header'>Best Home Services In USA</h1>
            <div className='services-container'>
                <div className="services">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                            addToCart={addToCart}
                        ></Service>)
                    }
                </div>

                <div className="services-cart">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Services;