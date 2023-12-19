import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

import './ProductCard.css'
const ProductCard = ({ product }) => {
    const navigate=useNavigate()

    const handleCardClick = () => {
        navigate(`/productdetails/${product.id}`);
      };
  return (
    <div className='cardss'>
      <div className='productcard' onClick={handleCardClick} >
        <img className='productIMG'   src={product.image} alt={product.title} />
        <h3 className='producttitle'>{product.title.slice(0, 35)}...</h3>
      <h2 className='price'>${product.price}</h2>
    </div>
    </div>
  );
};

export default ProductCard;
