import React from 'react';
import './Service.css';

const Service = (props) => {
    const { picture, name, price, phone } = props.service;
    return (
        <div className="service">
            <img src={picture} alt="" />
            <div className='service-info'>
                <h3 className='service-name'>Name: {name}</h3>
                <p>Price: {price}</p>
                <h4>Contact: {phone}</h4>
            </div>
            <button className='Add-btn'>
                <p>Add Service To Cart</p>
            </button>
        </div>
    );
};

export default Service;