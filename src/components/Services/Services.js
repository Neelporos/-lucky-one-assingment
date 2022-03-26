import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1>Best Home Services In USA</h1>
            <div className='services-container'>
                <div className="services">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>

                <div className="services-cart">
                    <h3>Get Your Service</h3>
                </div>
            </div>
        </div>
    );
};

export default Services;