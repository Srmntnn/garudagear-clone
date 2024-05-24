import React from "react";
import "./ProductGallert.css";

//Images
import Productimage1 from "../../Assets/ProductGallery/1+FRONT+BOTH+1 1.png";
import Productimage2 from "../../Assets/ProductGallery/Color+Palette+-+CMYK 3.png";
import Productimage3 from "../../Assets/ProductGallery/7+TOP+TOGETHER 1.png";
import Productimage4 from "../../Assets/ProductGallery/6+White+Top+Shells+1 1.png";
import Productimage5 from "../../Assets/ProductGallery/3+WHITE+-+HOT+SWAP 1.png";
import Productimage6 from "../../Assets/ProductGallery/2+BLACK+FRONT 1.png";
import Productimage7 from "../../Assets/ProductGallery/6+White+Top+Shells+1 2.png";
import Productimage8 from "../../Assets/ProductGallery/6+White+Top+Shells+1 3.png";
import Productimage9 from "../../Assets/ProductGallery/6+White+Top+Shells+1 4.png";
import Productimage10 from "../../Assets/ProductGallery/3+WHITE+-+HOT+SWAP 2.png";
import Productimage11 from "../../Assets/ProductGallery/6+White+Top+Shells+1 5.png";
import Productimage12 from "../../Assets/ProductGallery/3+WHITE+-+HOT+SWAP 3.png";
import Productimage13 from "../../Assets/ProductGallery/3+WHITE+-+HOT+SWAP 5.png";
import Productimage14 from "../../Assets/ProductGallery/3+WHITE+-+HOT+SWAP 4.png";
import Productimage15 from "../../Assets/ProductGallery/3+WHITE+-+HOT+SWAP 6.png";
import Productimage16 from "../../Assets/ProductGallery/3+WHITE+-+HOT+SWAP 7.png";
import Productimage17 from "../../Assets/ProductGallery/3+WHITE+-+HOT+SWAP 8.png";
import Productimage18 from "../../Assets/ProductGallery/3+WHITE+-+HOT+SWAP 10.png";
import Productimage19 from "../../Assets/ProductGallery/3+WHITE+-+HOT+SWAP 9.png";
import Productimage20 from "../../Assets/ProductGallery/3+WHITE+-+HOT+SWAP 11.png";
import Productimage21 from "../../Assets/ProductGallery/3+WHITE+-+HOT+SWAP 12.png";
import Productimage22 from "../../Assets/ProductGallery/6+White+Top+Shells+1 6.png";
import Productimage23 from "../../Assets/ProductGallery/6+White+Top+Shells+1 8.png";
import Productimage24 from "../../Assets/ProductGallery/6+White+Top+Shells+1 7.png";
import Productimage25 from "../../Assets/ProductGallery/3+WHITE+-+HOT+SWAP 13.png";


const ProductGallery = () => {
  return (
    <>
      <section>
        <div className="grid-gallery">
          <div className="column">
            <div className="photo">
              <img src={Productimage1} alt="" />
            </div>
            <div className="photo">
              <img src={Productimage4} alt="" />
            </div>
            <div className="photo">
              <img src={Productimage7} alt="" />
            </div>
            <div className="photo">
              <img src={Productimage9} alt="" />
            </div>
            <div className="photo">
              <img src={Productimage12} alt="" />
            </div>
            <div className="photo">
              <img src={Productimage15} alt="" />
            </div>
            <div className="photo">
              <img src={Productimage18} alt="" />
            </div>
            <div className="photo">
              <img src={Productimage21} alt="" />
            </div>
            <div className="photo">
              <img src={Productimage23} alt="" />
            </div>
          </div>

          <div className="column">
            <div className="photo">
              <img src={Productimage2} alt="" />
            </div>
            <div className="photo">
              <img src={Productimage5} alt="" />
            </div>
            <div className="photo">
              <img src={Productimage10} alt="" />
            </div>
            <div className="photo">
              <img src={Productimage13} alt="" />
            </div>
            <div className="photo">
              <img src={Productimage16} alt="" />
            </div>
            <div className="photo">
              <img src={Productimage19} alt="" />
            </div>
            <div className="photo">
              <img src={Productimage22} alt="" />
            </div>
            <div className="photo">
              <img src={Productimage24} alt="" />
            </div>
          </div>

          <div className="column">
            <div className="photo">
              <img src={Productimage3} alt="" />
            </div>

            <div className="photo">
              <img src={Productimage6} alt="" />
            </div>
            <div className="photo">
              <img src={Productimage8} alt="" />
            </div>
            <div className="photo">
              <img src={Productimage11} alt="" />
            </div>
            <div className="photo">
              <img src={Productimage14} alt="" />
            </div>
            <div className="photo">
              <img src={Productimage17} alt="" />
            </div>
            <div className="photo">
              <img src={Productimage20} alt="" />
            </div>
            <div className="photo">
              <img src={Productimage23} alt="" />
            </div>
            <div className="photo">
              <img src={Productimage25} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductGallery;
