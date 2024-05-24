import React from 'react';
import './Breadcrum.css';
import { Link } from 'react-router-dom';

const Breadcrums = (props) => {

  const {product} = props;

  return (
    <div className="breadcrum">
      <Link style={{color: '#C7C8C9'}} to='../'>HOME</Link> / <Link style={{color: '#C7C8C9'}} to='../Shop'>PRODUCTS</Link> / {product.Category} / {product.name}
    </div>
  );
};

export default Breadcrums;