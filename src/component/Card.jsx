import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className="card-container">
            <div className="card">
                <img src={props.image} alt={props.title} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
