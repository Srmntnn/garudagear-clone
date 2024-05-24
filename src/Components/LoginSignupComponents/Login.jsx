import React, { useContext, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { getAuth } from "firebase/auth";
import "./loginsignup.css";
import { AuthContext } from "../../Context/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginIllustration from "../../Components/Assets/undraw_login_re_4vu2.svg";
import Googlelogo from '../Assets/Google__G__logo.svg.png'

const title = "login";
const BtnTxt = "Login";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { signUpWithGmail, login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    //console.log(form)
    const email = form.email.value;
    const password = form.password.value;
    //console.log(email, password)
    login(email, password)
      .then((result) => {
        const user = result.user;
        alert("Welcome!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMsg = error.Message;
        setErrorMessage("Please provide valid email & password.");
      });
  };

  const handleSignup = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMsg = error.Message;
        setErrorMessage("Please provide valid email & password.");
      });
  };

  return (
    <div className="login-container">
      <h3 className="title">{title}</h3>

      <div className="container">
        <div className="illus-cont">
          <img className="ill-image" src={loginIllustration} alt="" />
        </div>

        <div className="account-wrapper">
          <h3 className="account-title">{title}</h3>
          <form className="account-form" onSubmit={handleLogin} action="">
            <div className="form-group-container">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="input"
                  autocomplete="off"
                />
                <label htmlFor="email" className="label">
                  Email Address
                </label>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  className="input"
                />
                <label htmlFor="password" className="label">
                  Password
                </label>
              </div>
            </div>

            <div className="error-message">
              {" "}
              {errorMessage && <div className="Error-msg">{errorMessage}</div>}
            </div>

            <div className="form-group1">
              <div className="checkbox">
                <input type="checkbox" name="Remeber" id="remember" />
                <label htmlFor="remember">Remember Me</label>
              </div>
              <Link to="/Forgotpass" style={{fontFamily: 'Poppins', color: '#31419A', fontSize: '0.9rem'}}>Forget Password</Link>
            </div>
            <div className="form-group">
              <button className="Login-btn">
                <span>{BtnTxt}</span>
              </button>
            </div>
          </form>

          <div className="account-bottom">
            <span>
              Don't have an Account? <Link className="signup-link" to="../Signup">Sign up</Link>
            </span>
            <span className="or">or</span>
            <button className="Google-btn" onClick={handleSignup}>Continue with <img src={Googlelogo} alt="" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
