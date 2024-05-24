import React from "react";
import "./products.css";
import second_drop from "../Assets/second_drop";
import Product from "./Items";

const SecondDrop = () => {
  return (
    <section className="Second-drop-container">
      <div className="Second_drop">
        <h1>SECOND DROP</h1>
        <div className="second_drop_items">
          {second_drop.map((product, i) => {
            return (
              <Product
                key={i}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                className='product'
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecondDrop;
