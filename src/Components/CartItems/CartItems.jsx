import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContex";
import { Link, useNavigate } from "react-router-dom";

const CartItems = () => {
  const navigate = useNavigate();

  const {
    getTotalCartAmount,
    all_product,
    cartItems,
    removeFromCart,
    addToCart,
    removeAllFromCart,
  } = useContext(ShopContext);

  return (
    <section className="Cart-item-section">
      <h3 className="section-cart-item-title">Your Cart</h3>
      <div className="Cartitems">
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div className="Cartitems-container">
                <div className="cart-itemsformat">
                  <Link to={`../product/${e.id}`}>
                    <img
                      //onClick={()=> navigate('')}
                      src={e.image}
                      className="cart-icon-product-icon"
                      alt=""
                    />
                  </Link>
                  <div className="cart-info">
                  <p className="total-span-flex"><span className="total-span">Product Name</span>{e.name}</p>
                  <p className="total-span-flex"><span className="total-span">Price</span>₱{e.price}</p>
                  <div className="quant-btn">
                    <button className="count">{cartItems[e.id]} </button>
                    <div className="quan-count">
                      <button
                        onClick={() => {
                          addToCart(e.id);
                        }}
                      >
                        +
                      </button>
                      <button
                        onClick={() => {
                          removeFromCart(e.id);
                        }}
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <p className="total-span-flex"><span className="total-span">Total</span>₱{e.price * cartItems[e.id]}</p>
                  </div>
                  <i
                    onClick={() => {
                      removeAllFromCart(e.id);
                    }}
                    className="fa-solid fa-trash"
                  ></i>
                </div>
                <span className="line2"></span>
              </div>
            );
          }
          return null;
        })}
        <div className="cartitems-down">
          {getTotalCartAmount() > 0 ? (
            <div className="total-items-container">
              <h1>Cart Totals</h1>
              <div className="total-items">
                <p>Subtotal</p>
                <p>₱{getTotalCartAmount()}</p>
              </div>
              <span className="line"></span>
              <div className="total-items">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <span className="line"></span>
              <div className="total-items">
                <h3>Total</h3>
                <h3>₱{getTotalCartAmount()}</h3>
              </div>
            </div>
          ) : (
            <h1 className="Empty-cart">YOUR CART IS EMPTY</h1>
          )}
          <div className="Buttons">
            <button className="con-shop" onClick={() => navigate("../Shop")}>
              CONTINUE SHOPPING
            </button>
            {getTotalCartAmount() > 0 ? (
              <button onClick={()=> navigate('../Checkout')}>PROCEED TO CHECKOUT</button>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItems;
