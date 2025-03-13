import React from 'react';
import './homeCard.scss';

const HomeCard = ({name, image, description}) => {
    return (
        <div className='homeCard'>
            <img src={image} alt="product image" />
            <h3>{name}</h3>
            <p>{description}</p>
            <button>Hello</button>
        </div>
    );
};

export default HomeCard;