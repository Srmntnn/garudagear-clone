import React, { useState } from "react";
import "./contents.css";
import { Link, useNavigate } from "react-router-dom";
import Condor1 from "./Assets/Landing Page Assents/Condor1.svg";
import Falcon1 from "./Assets/Landing Page Assents/Group 14.png";
import GG100B from "./Assets/Landing Page Assents/Group 10.png";
import GG68B from "./Assets/Landing Page Assents/Group 12.png";
import Osprey_product from "./Assets/Landing Page Assents/OSPREY1.png";
import Falcon1_product from "./Assets/Landing Page Assents/Falcon1.svg";
import Gg68_product from "./Assets/Landing Page Assents/gg68b-colors 3.png";
import GG68B_info from "./Assets/Landing Page Assents/GG68B-FEATURES 1.svg";
import GG68B_jet_black from "./Assets/Landing Page Assents/GG68B-JET_BLACK.svg";
import GG68B_white from "./Assets/Landing Page Assents/GG68B-WHITE.svg";
import GG68B_barebones from "./Assets/Landing Page Assents/GG68B-BAREBONES.svg";
//import GG68B_cover from './Assets/Landing Page Assents/sQtEFD-1 2.svg'
const bodyEl = document.getElementsByTagName("body")[0];
const Contents = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    if (click) {
      bodyEl.classList.remove("overflow-hidden");
    } else {
      bodyEl.classList.add("overflow-hidden");
      window.scrollTo({ top: 0 }); // Scroll to the top of the screen
    }
  };

  const navigate = useNavigate;
  return (
    <div className="product-backgroud">
      <div className="Content-section">
        <h1>CONDOR 1</h1>
        <div className="product-cover-1">
          <div className="product-image-info">
            <img loading="lazy" src={Condor1} alt="" />
            <div className="products-information">
              <div className="prod-info-title">
                <h1>A SWAPPABLE-SIDE, MMO/RPG/MOBA ERGONOMIC GAMING MOUSE</h1>
                <p>
                  Get the ulitimate advantage with the CONDOR 1 MOBA/MMO Gaming
                  Mouse. Gain the ability to swap between 8 & 14 button modes
                  and between ergonomic or sleek side shapes while also
                  customizing every click, button and macro with it’s software
                  suite. Experience elevated performance, while gaming in
                  comfort for hours with it’s ergonomic shape. Adapt to any game
                  with the Condor 1 now.
                </p>

                <p className="product-price">₱1195</p>
              </div>
              <div className="buttons">
                <div className="line">l</div>
                <div className="shop-laz">
                  <Link
                    to="https://shopee.ph/GARUDA-GEAR-CONDOR-1-MOBA-MMO-Gaming-Mouse-i.776410927.18677676521"
                    target="_Blank"
                  >
                    <button className="btn-3">Shopee</button>
                  </Link>
                  <Link
                    to="https://www.lazada.com.ph/products/garuda-gear-condor-1-mobammo-gaming-mouse-i3699340851-s19464921855.html?spm=a2o4l.10450891.0.0.535940b7r809bW&priceCompare=skuId%3A19464921855%3Bsource%3Alzd-shop-center%3Bsn%3A2101781e17039404307705987e3ec4%3BunionTrace%3A2101781e17039404307705987e3ec4%3BoriginPrice%3A49250%3BvoucherPrice%3A49250%3BdisplayPrice%3A49250%3BsinglePromotionId%3A900000021291629%3BsingleToolCode%3ApromPrice%3BvoucherPricePlugin%3A1%3BbuyerId%3A0%3Btimestamp%3A1703940430848&search=store"
                    target="_Blank"
                  >
                    <button className="btn-4">Lazada</button>
                  </Link>
                </div>
              </div>

              <Link
                to={`/product/1`}
                onClick={() => {
                  handleClick();
                }}
              >
                <p className="info-link">Learn more</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="Content-section">
        <h1>HAWK 1</h1>
        <div className="product-cover-2">
          <div className="product-image-info">
            <img loading="lazy" src={Falcon1} alt="" />
            <div className="products-information">
              <div className="prod-info-title">
                <h1>THE HAWK 1</h1>
                <p>
                  ADAPTABLE FOR ANY PLAY. Introducing the Garuda Gear Hawk. A
                  wireless, swappable shell, RGB Programmable gaming mouse.
                </p>

                <p>
                  Lightweight, swappable shell, macro & button custom
                  programming, and dual mode connection make it versatile for
                  any play-style. Make it light and breezy with a honeycomb
                  shell or slick and firm with a solid shell. Whatever the
                  scenario, the Hawk 1 has got you covered. Elevate your game
                  with the Hawk 1 now.
                </p>

                <p className="product-price">₱865</p>
              </div>
              <div className="buttons">
                <div className="line">l</div>
                <div className="shop-laz">
                  <Link
                    to="https://shopee.ph/GARUDA-HAWK-1-WIRELESS-SWAPPABLE-SHELL-RECHARGABLE-LIGHTWEIGHT-GAMING-MOUSE-i.776410927.21967736611"
                    target="_Blank"
                  >
                    <button className="btn-3">Shopee</button>
                  </Link>
                  <Link
                    to="https://www.lazada.com.ph/products/i3481123218.html"
                    target="_Blank"
                  >
                    <button className="btn-4">Lazada</button>
                  </Link>
                </div>
              </div>

              <Link
                to={`/product/2`}
                onClick={() => {
                  handleClick();
                }}
              >
                <p className="info-link">Learn more</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="Content-section">
        <h1>GG100B</h1>
        <div className="product-cover-3">
          <div className="product-image-info">
            <img loading="lazy" src={GG100B} alt="" />
            <div className="products-information">
              <div className="prod-info-title">
                <h1>A COMPACT 96% KEYBOARD</h1>
                <p>
                  Meet the GG100B, our most complete, feature packed, and
                  utilitarian compact mechanical keyboard yet. Boasting a 96%
                  compact form factor with a numpad, full f-key rows and
                  navigation keys, the GG100B is our most versatile board yet.
                  Add in triple mode connection, Full RGB profiling, 5-pin
                  hot-swap, extra media and function keys plus pre-lubbed stabs,
                  a silicone dampener and what more could you want in your daily
                  driver? The GG100B is the perfect keyboard for work, play and
                  everything in between. Buy yours now.
                </p>

                <p className="product-price">₱1999</p>
              </div>
              <div className="buttons">
                <div className="line">l</div>
                <div className="shop-laz">
                  <Link
                    to="https://shopee.ph/GARUDA-GEAR-GG100-(SMOKE-BLACK)-Tri-Mode-Wireless-Hot-Swappable-98-Mechanical-Keyboard-i.776410927.23918439648?xptdk=50d9e563-7259-4001-8833-57cf14c1e957"
                    target="_Blank"
                  >
                    <button className="btn-3">Shopee</button>
                  </Link>
                  <Link
                    to="https://www.lazada.com.ph/shop/garuda-gear/?path=promotion-41019-0.htm&tab=promotion"
                    target="_Blank"
                  >
                    <button className="btn-4">Lazada</button>
                  </Link>
                </div>
              </div>

              <Link
                to={`/product/3`}
                onClick={() => {
                  handleClick();
                }}
              >
                <p className="info-link">Learn more</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="Content-section">
        <h1>GG68B</h1>
        <div className="product-cover-4">
          <div className="product-image-info">
            <img loading="lazy" src={GG68B} alt="" />
            <div className="products-information">
              <div className="prod-info-title">
                <h1>GG68B - SMOKE BLACK</h1>
                <p>
                  A KEYBOARD AS HOT AND ALLURING AS SMOKE. Introducing the GG68B
                  in it's new color way, SMOKE BLACK. Made of durable
                  Poly-carbonate plastic, it is sure to stand out. The GG68B is
                  our feature-packed, 65% Triple-Mode Connection, Wireless,
                  5-Pin Hotswappable, Full RGB Mechanical Keyboard.
                </p>
                <p className="product-price">Starts at ₱1695</p>
              </div>
              <div className="buttons">
                <div className="line">l</div>
                <div className="shop-laz">
                  <Link
                    to="https://shopee.ph/GARUDA-GEAR-GG68B-(ICE-WHITE)-Tri-Mode-Wireless-Hot-Swappable-65-Mechanical-Keyboard-i.776410927.18017588936?xptdk=dc38ed50-05a6-43d1-a71c-93860a4b9f37"
                    target="_Blank"
                  >
                    <button className="btn-3">Shopee</button>
                  </Link>
                  <Link
                    to="https://www.lazada.com.ph/shop/garuda-gear/?path=promotion-41019-0.htm&tab=promotion"
                    target="_Blank"
                  >
                    <button className="btn-4">Lazada</button>
                  </Link>
                </div>
              </div>

              <p className="info-link">Learn more</p>
            </div>
          </div>
        </div>

        <section className="first-drop">
          <div className="first-drop-title">
            <h1>IT'S TIME FOR AN UPGRADE</h1>
            <p>Reignite excitement with Garuda Gear.</p>
          </div>

          <div className="first-drop-products">
            <div className="product-1">
              <img loading="lazy" src={Falcon1_product} alt="" />
              <p>
                Falcon 1<i class="fa-solid fa-angle-right"></i>
              </p>
            </div>
            <div className="product-2">
              <img loading="lazy" src={Gg68_product} alt="" />
              <p>
                GG68B<i class="fa-solid fa-angle-right"></i>
              </p>
            </div>
            <div className="product-3">
              <img loading="lazy" src={Osprey_product} alt="" />
              <p>
                OSPREY 1<i class="fa-solid fa-angle-right"></i>
              </p>
            </div>
          </div>

          <div className="first-drop-buttons">
            <Link to="./Shop">
              <button
                onClick={() => {
                  handleClick();
                }}
                className="buy-now-btn"
              >
                Shop now
              </button>
            </Link>
            <p>or</p>
            <div className="sub-button">
              <Link
                className="Social-Link-Btn"
                to="https://www.lazada.com.ph/shop/garuda-gear/?path=promotion-41019-0.htm&tab=promotion"
                target="Blank"
              >
                <button className="Lazada-btn">
                  Buy now <span>Lazada</span>
                </button>
              </Link>
              <Link
                className="Social-Link-Btn"
                to="https://shopee.ph/garudagearph"
                target="_Blank"
              >
                <button className="Shopee-btn">
                  Buy now <span>Shopee</span>
                </button>
              </Link>
            </div>
          </div>

          <p className="show-more-link">
            Show more<i class="fa-solid fa-angle-right"></i>
          </p>
        </section>

        <section className="GGB68">
          <div className="product-specs">
            <h1>GARUDA GG68B</h1>
            <img className="spec-img" src={GG68B_info} alt="" />

            <div className="GG68B-variants">
              <div className="GG68B-product-variant">
                <img src={GG68B_jet_black} alt="" />
                <p>Jet Black</p>
              </div>

              <div className="GG68B-product-variant">
                <img src={GG68B_barebones} alt="" />
                <p>Barebones(Jet Black & Ice White)</p>
              </div>

              <div className="GG68B-product-variant">
                <img src={GG68B_white} alt="" />
                <p>Ice White</p>
              </div>
            </div>

            <div className="first-drop-buttons ">
              <Link to="./Shop">
                <button
                  onClick={() => {
                    handleClick();
                  }}
                  className="buy-now-btn"
                >
                  Shop now
                </button>
              </Link>
              <p>or</p>
              <div className="sub-button">
                <Link
                  className="Social-Link-Btn"
                  to="https://www.lazada.com.ph/shop/garuda-gear/?path=promotion-41019-0.htm&tab=promotion"
                  target="Blank"
                >
                  <button className="Lazada-btn">
                    Buy now <span>Lazada</span>
                  </button>
                </Link>
                <Link
                  className="Social-Link-Btn"
                  to="https://shopee.ph/garudagearph"
                  target="_Blank"
                >
                  <button className="Shopee-btn">
                    Buy now <span>Shopee</span>
                  </button>
                </Link>
              </div>
            </div>

            <p className="show-more-link">
              Learn more<i class="fa-solid fa-angle-right"></i>
            </p>
          </div>
        </section>

        <section className="mouse-section">
          <div className="mouse-section-container">
            <div className="mouse-name-img">
              <h1>OSPREY 1</h1>
              <img src={Osprey_product} alt="" />
            </div>
            <div className="mouse-descriptions">
              <h1 className="Title">GLIDE THROUGH, NO STRINGS ATTACHED.</h1>
              <p className="osprey-info">
                The perfect lightweight gaming mouse for gamers who want to go
                completely wireless. Wireless 2.4GHz mode, RGB Profiling, a
                lightweight honeycomb design, plus a rechargeable battery and
                what more could you ask for? Start your gaming journey with the
                Osprey 1 and soar beyond your limits.
              </p>
              <p className="Product-price">₱545</p>
            </div>
          </div>

          <div className="first-drop-buttons mouse-btn">
            <Link to="./Shop">
              <button
                onClick={() => {
                  handleClick();
                }}
                className="buy-now-btn"
              >
                Buy now
              </button>
            </Link>
            <p>or</p>
            <div className="sub-button">
              <Link
                className="Social-Link-Btn"
                to="https://www.lazada.com.ph/shop/garuda-gear/?path=promotion-41019-0.htm&tab=promotion"
                target="Blank"
              >
                <button className="Lazada-btn">
                  Buy now <span>Lazada</span>
                </button>
              </Link>
              <Link
                className="Social-Link-Btn"
                to="https://shopee.ph/garudagearph"
                target="_Blank"
              >
                <button className="Shopee-btn">
                  Buy now <span>Shopee</span>
                </button>
              </Link>
            </div>
          </div>

          <p className="show-more-link">
            Learn more<i class="fa-solid fa-angle-right"></i>
          </p>

          <div className="mouse-section-container falcon">
            <div className="mouse-name-img">
              <h1>FALCON 1</h1>
              <img src={Falcon1_product} alt="" />
            </div>
            <div className="mouse-descriptions">
              <h1 className="Title">
                CUSTOMIZE YOUR PLAY, YOUR WAY.CUSTOMIZE YOUR PLAY, YOUR WAY.
              </h1>
              <p className="osprey-info">
                The ultimate entry level gaming mouse for gamers who want to
                customize their mouse to fit their way of play. It features
                software to program every aspect of your mouse - from the
                buttons, RGB lights to custom macro functions. You will be able
                to customize your mouse for any game in any situation. Soar
                beyond limits with the Falcon 1.
              </p>
              <p className="Product-price">₱435</p>
            </div>
          </div>

          <div className="first-drop-buttons mouse-btn">
            <Link to="./Shop">
              <button
                onClick={() => {
                  handleClick();
                }}
                className="buy-now-btn"
              >
                Buy now
              </button>
            </Link>
            <p>or</p>
            <div className="sub-button ">
              <Link
                className="Social-Link-Btn"
                to="https://www.lazada.com.ph/shop/garuda-gear/?path=promotion-41019-0.htm&tab=promotion"
                target="Blank"
              >
                <button className="Lazada-btn">
                  Buy now <span>Lazada</span>
                </button>
              </Link>
              <Link
                className="Social-Link-Btn"
                to="https://shopee.ph/garudagearph"
                target="_Blank"
              >
                <button className="Shopee-btn">
                  Buy now <span>Shopee</span>
                </button>
              </Link>
            </div>
          </div>

          <p className="show-more-link">
            Learn more<i class="fa-solid fa-angle-right"></i>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Contents;
