import React from 'react';
import './products.css';
import { Link } from 'react-router-dom';


const Items = (props) => {
  return (
    <div className="products">
      <Link to={`/product/${props.id}`}>
        <img className='prod-img' src={props.image} alt="" />
      </Link>
      <p>{props.category}</p>
      <div className='sksk'>
      <p className='prod-name'>{props.name}</p>
      <p className='prod-price'>₱{props.price}</p>
      </div>
    </div>
  );
};

export default Items;