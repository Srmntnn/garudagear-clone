import React, { useContext, useState } from "react";
import "./navbar.css";
import logo from "../Assets/Landing Page Assents/Risorsa+7gg 1.svg";
import profile_icon from "../Assets/Landing Page Assents/Profile Icon.svg";
import cart_icon from "../Assets/Landing Page Assents/Cart icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContex";
import { AuthContext } from "../../Context/AuthProvider";
import Profile from "../Profile/Profile";

const bodyEl = document.getElementsByTagName("body")[0];
export const Navbar = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const userlogout = async () => {
    try {
      await logOut();
      navigate("./");
    } catch (error) {}
  };

  const [activeNav, setActiveNav] = useState(false);
  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 100) {
      setActiveNav(true);
    } else {
      setActiveNav(false);
    }
  });

  const { user } = useContext(AuthContext);
  console.log(user);

  const [click, setClick] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);
  const handleClick = () => {
    setClick(!click);
    if (click) {
      bodyEl.classList.remove("overflow-hidden");
    } else {
      bodyEl.classList.add("overflow-hidden");
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the screen
    }
  };
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className={activeNav ? "nav-section" : ""}>
        <div className="navbar">
          <div className="nav-logo">
            <Link
              to="/"
              onClick={() => {
                handleClick();
                closeMobileMenu();
              }}
            >
              <img src={logo} alt="" />
            </Link>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <Link
              onClick={() => {
                handleClick();
                closeMobileMenu();
              }}
              style={{ color: "#E9EAEA" }}
              to="/"
            >
              <li>Home</li>
            </Link>
            <Link
              onClick={() => {
                handleClick();
                closeMobileMenu();
              }}
              style={{ color: "#E9EAEA" }}
              to="/Shop"
            >
              <li>Products</li>
            </Link>
            <Link
              onClick={() => {
                handleClick();
                closeMobileMenu();
              }}
              style={{ color: "#E9EAEA" }}
              to="/driverspage"
            >
              <li>Drivers</li>
            </Link>
            <Link
              onClick={() => {
                handleClick();
                closeMobileMenu();
              }}
              style={{ color: "#E9EAEA" }}
              to="/faqspage"
            >
              <li>FAQs</li>
            </Link>

            <div className="ham-fixed-socials">
              <Link
                className="Link"
                to="https://www.facebook.com/GarudaGearPH/"
                target="_Blank"
              >
                <i class="fa-brands fa-facebook-f"></i>
              </Link>
              <Link
                className="Link"
                to="https://www.instagram.com/garudagearph/"
                target="_Blank"
              >
                <i class="fa-brands fa-instagram"></i>
              </Link>
              <Link
                className="Link"
                to="https://www.tiktok.com/@garudagear"
                target="_Blank"
              >
                <i class="fa-brands fa-tiktok"></i>
              </Link>
            </div>
          </ul>

          <div className="nav-icons">
            {user ? (
              <button
                onClick={() => {
                  userlogout();
                }}
                className="Logout-btn"
              >
                {" "}
                <Profile user={user} />
              </button>
            ) : (
              <Link
                onClick={() => {
                  handleClick();
                  closeMobileMenu();
                }}
                to="/LoginSignup"
              >
                <img className="profiles" src={profile_icon} alt="" />
              </Link>
            )}

            <div className="nav-cart">
              <Link
                onClick={() => {
                  handleClick();
                  closeMobileMenu();
                }}
                to="/Cart"
              >
                <img src={cart_icon} alt="" />
              </Link>
              <div className="nav-count-cart">{getTotalCartItems()}</div>
            </div>
            <Link onClick={closeMobileMenu} to="/Shop">
              <button className="bn-btn">SHOP NOW</button>
            </Link>

            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
          </div>
        </div>
      </nav>
      <div className="fixed-socials-container">
        <div className="fixed-socials">
          <Link
            className="Link"
            to="https://www.facebook.com/GarudaGearPH/"
            target="_Blank"
          >
            <i class="fa-brands fa-facebook-f"></i>
          </Link>
          <Link
            className="Link"
            to="https://www.instagram.com/garudagearph/"
            target="_Blank"
          >
            <i class="fa-brands fa-instagram"></i>
          </Link>
          <Link
            className="Link"
            to="https://www.tiktok.com/@garudagear"
            target="_Blank"
          >
            <i class="fa-brands fa-tiktok"></i>
          </Link>
        </div>
      </div>
    </>
  );
};
