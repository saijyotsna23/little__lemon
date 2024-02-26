// Card.js

import React from 'react';
import '../Card.css'; // Import CSS file for card styling

const Card = ({ imageUrl, name, price, description }) => {
return (
    <div className="card">
    <img src={imageUrl} alt={name} className="card-image" />
    <div className="card-content">
        <div className="card-header">
        <h2 className="card-name">{name}</h2>
        <p className="card-price">${price}</p>
        </div>
        <p className="card-description">{description}</p>
    </div>
    </div>
);
}

export default Card;


