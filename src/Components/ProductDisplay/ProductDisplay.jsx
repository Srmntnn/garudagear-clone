import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContex";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import "./ProductD.css";
import { Link } from "react-router-dom";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <section className="productdisplay-container">
      <div className="productdisplay">
        <div className="product-shits">
          <img loading="lazy" src={product.image} alt="" />
          <div className="products-info">
            <h1>{product.name}</h1>
            <p className="price">₱{product.price}</p>
            <div className="line"></div>
            <p>{product.desc}</p>
          </div>
        </div>
        <div className="btns-container">
          <div className="btons">
            {user ? (
              <button
                className="ambot1"
                onClick={() => {
                  addToCart(product.id);
                  navigate("../Checkout");
                }}
              >
                BUY NOW
              </button>
            ) : (
              <button
                className="ambot1"
                onClick={() => {
                  navigate("../Login");
                }}
              >
                BUY NOW
              </button>
            )}

            {user ? (
              <button
                className="ambot1"
                onClick={() => {
                  addToCart(product.id);
                }}
              >
                ADD TO CART
              </button>
            ) : (
              <button
                className="ambot1"
                onClick={() => {
                  navigate("../Login");
                }}
              >
                ADD TO CART
              </button>
            )}
          </div>

          <p className="or">Or check out here</p>

          <div className="social-shop">
            <Link className="Social-Link-Btn"  to="https://www.lazada.com.ph/shop/garuda-gear/?path=promotion-41019-0.htm&tab=promotion" target="_Blank">
              <button>
                <p>Buy now</p>
                <p>Lazada</p>
              </button>
            </Link>
            <Link className="Social-Link-Btn" to="https://shopee.ph/garudagearph" target="_Blank">
              <button>
                <p>Buy now</p>
                <p>Shopee</p>
              </button>
            </Link>
            <Link className="Social-Link-Btn" to="https://www.tiktok.com/@garudagear" target="_Blank">
              <button>
                <p>Buy now</p>
                <p>Tiktok</p>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="description">
        <h1>Description</h1>
        <img src={product.cover1} alt="" />
        <img src={product.cover2} alt="" />
        <img src={product.cover3} alt="" />
        <img src={product.cover4} alt="" />
        <img src={product.cover5} alt="" />
        <img src={product.cover6} alt="" />
        <img src={product.cover7} alt="" />
      </div>
    </section>
  );
};

export default ProductDisplay;
