import React from "react";
import "./products.css";
import first_drop from "../Assets/first_drop";
import Product from "./Items";

const FirstDrop = () => {
  return (
    <section className="first-drop-container">
      <div className="first_drop">
        <h1>FIRST DROP</h1>
        <div className="first_drop_items">
          {first_drop.map((product, i) => {
            return (
              <Product
                key={i}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FirstDrop;
