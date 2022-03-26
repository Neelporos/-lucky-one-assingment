import React from 'react';
import './Service.css';

const Service = (props) => {
    const { picture, name, price } = props.service;
    return (
        <div className="service">
            <img src={picture} alt="" />
            <h3>Name: {name}</h3>
            <p>Price: {price}</p>

        </div>
    );
};

export default Service;