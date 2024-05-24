import React from 'react'
import Hero from '../Components/Hero';
import Contents from '../Components/Contents';
import ProductGallery from '../Components/Breadcrums/ProductGallery/ProductGallery';

const homepage = () => {

  return (
    <div>
      <Hero/>
      <Contents/>
      <ProductGallery/>
    </div>
  )
}

export default homepage