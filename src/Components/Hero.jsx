import React from "react";
import "./hero.css";
import sliders from "./Assets/Landing Page Assents/1+Cover+Photo 1.svg";
import Condor1 from "./Assets/Landing Page Assents/CONDOR+1+-+White+-+Top+-+Sides 1.svg";
import Falcon1 from "./Assets/Landing Page Assents/1+TOP+COMPLETE+VIEW+2 1.svg";
import GG100B from "./Assets/Landing Page Assents/COVER+PHOTO 1.svg";
import { Link } from "react-router-dom";
function hero() {
  return (
    <div className="body">
      <div className="imageSlider">
        <img src={sliders} alt="" />
      </div>
      <div className="Contents">
        <div className="contents-header">
          <h1>IT’S TIME FOR THE NEXT LEVEL.</h1>
          <p>
            Introducing the Garuda Gear Second Drop. It’s time for an{" "}
            <span>upgrade.</span>
          </p>
        </div>

        <div className="Second-drop">
          <div className="items item-condor">
            <img src={Condor1} alt="" />
            <div className="item-info">
              <div className="item-name">
                <h1>CONDOR 1</h1>
                <p>(2023)</p>
              </div>
              <p>A Swappable-Side, MMO/RPG/MOBA Ergonomic Gaming Mouse</p>
              <Link
                to={`/product/1`}
                onClick={() => window.scrollTo({ top: 0})}
              >
                <button>Learn more</button>
              </Link>
            </div>
          </div>

          <div className="line"></div>

          <div className="item-grid">
            <div className="items">
              <img className="image" src={Falcon1} alt="" />
              <div className="item-info">
                <div className="item-name">
                  <h1>FALCON 1</h1>
                  <p>(December 2023)</p>
                </div>
                <p>
                  A Dual-Mode, Swappable-Shell, RGB, Lightweight Gaming Mouse
                </p>
                <Link
                  to={`/product/2`}
                  onClick={() =>
                    window.scrollTo({ top: 0})
                  }
                >
                  <button>Learn more</button>
                </Link>
              </div>
            </div>

            <div className="items">
              <img src={GG100B} alt="" />
              <div className="item-info">
                <div className="item-name">
                  <h1>GG100B</h1>
                  <p>(January 2023)</p>
                </div>
                <p>
                  A Triple-Mode, RGB, Hot-Swappable, Pre-Modded, Compact 96%
                  Mechanical Keyboard
                </p>
                <Link
                  to={`/product/3`}
                  onClick={() =>
                    window.scrollTo({ top: 0})
                  }
                >
                  <button>Learn more</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default hero;
