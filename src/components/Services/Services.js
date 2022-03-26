import React, { useEffect, useState } from 'react';
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
        console.log(service);
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
                    <h3>Get Your Service</h3>
                    <p>{cart.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Services;