import React from 'react';
import notAvailable from '../../assets/images/112815904-no-image-available-icon-flat-vector-illustration.jpg'
import './ProductCard.css'

const ProductCard = (props) => {
    const image = () => {
        if (props.image) {
            return 'http://localhost:8000/public/uploads/' + props.image
        } else {
            return notAvailable
        }
    }

    return (
        <div className="card">
           <div className="image"><img src={image()} alt="img"/></div>
            <div className="info">
                <p className="title">{props.title}</p>
                <p className="price">{props.price} Сом</p>
            </div>
        </div>
    );
};

export default ProductCard;