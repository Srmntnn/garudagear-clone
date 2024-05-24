import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContex";
import { Link } from "react-router-dom";
import "./Checkout.css";

const Checkout = (props) => {
  const {
    all_product,
    cartItems,
    removeFromCart,
    addToCart,
    removeAllFromCart,
  } = useContext(ShopContext);

  return (
    <section className="Cart-item-section">
      <h3 className="section-cart-item-title">Check Out</h3>
      <div className="Cartitems">
        <div className="fill-out-form">
          <form action="#">
            <div className="name-last">
              <div className="group-form">
                <input
                  className="checkOutInput"
                  type="text"
                  name="Firstname"
                  id="Firstname"
                  required
                />
                <label className="checkOutLabel" htmlFor="Firstname">
                  Firstname
                </label>
              </div>
              <div className="group-form">
                <input
                  className="checkOutInput"
                  type="text"
                  name="Lastname"
                  id="Lastname"
                  required
                />
                <label className="checkOutLabel" htmlFor="Firstname">
                  Lastname
                </label>
              </div>
            </div>
            <div className="group-form">
              <input
                className="checkOutInput"
                type="text"
                name="Country"
                id="Country"
                required
              />
              <label className="checkOutLabel" htmlFor="Firstname">
                Country
              </label>
            </div>
            <div className="group-form">
              <input
                className="checkOutInput"
                type="text"
                name="Streetadd"
                id="Streetadd"
                required
              />
              <label className="checkOutLabel" htmlFor="Firstname">
                Street Address
              </label>
            </div>
            <div className="group-form">
              <input
                className="checkOutInput"
                type="text"
                name="Town"
                id="Town"
                required
              />
              <label className="checkOutLabel" htmlFor="Firstname">
                Town / City
              </label>
            </div>
            <div className="group-form">
              <input
                className="checkOutInput"
                type="text"
                name="Zipcode"
                id="Zipcode"
                required
              />
              <label className="checkOutLabel" htmlFor="Firstname">
                Zip Code
              </label>
            </div>
            <div className="group-form">
              <input
                className="checkOutInput"
                type="text"
                name="number"
                inputMode="number"
                id="number"
                required
              />
              <label className="checkOutLabel" htmlFor="Firstname">
                Number
              </label>
            </div>
            <div className="group-form">
              <input
                className="checkOutInput"
                type="text"
                name="email"
                id="email"
                required
              />
              <label className="checkOutLabel" htmlFor="Firstname">
                Email Address
              </label>
            </div>
          </form>
        </div>
      <div className="checkOut-itemsformat-container">
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              
                <div className="checkOut-itemsformat">
                  <p>{e.name}</p>
                  <span className="line"></span>
                  <p>₱{e.price}</p>
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
                  <p>{e.price * cartItems[e.id]}</p>
                  <i
                    onClick={() => {
                      removeAllFromCart(e.id);
                    }}
                    class="fa-solid fa-trash"
                  ></i>
                </div>
              
            );
          }
          return null;
        })}
        </div>
        <h1 className="Order-title">YOUR ORDER(S)</h1>
        <div className="check-out-items-down">
          <div className="Order-container">
            {all_product.map((e) => {
              if (cartItems[e.id] > 0) {
                return (
                  <>
                    <table>
                      <tr>
                        <th>Product</th>
                        <th>Total</th>
                      </tr>
                      <tr>
                        <td>
                          {e.name} x {cartItems[e.id]}
                        </td>
                        <td>₱{e.price}</td>
                      </tr>
                      <tr>
                        <td>Subtotal</td>
                        <td>₱{e.price * cartItems[e.id]}</td>
                      </tr>
                      <tr>
                        <td>Shipping</td>
                        <td>Free</td>
                      </tr>
                      <tr>
                        <td>Total</td>
                        <td>₱{e.price * cartItems[e.id]}</td>
                      </tr>
                    </table>
                    <Link to="../Shop"
                    className="Link-btn">
                      <button
                        onClick={() => {
                          removeAllFromCart(e.id);
                          alert("Thank You, For Purchasing!");
                        }}
                      >
                        PLACE ORDER
                      </button>
                    </Link>
                  </>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
