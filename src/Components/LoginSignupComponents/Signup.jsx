import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./loginsignup.css";
import { AuthContext } from "../../Context/AuthProvider";
import loginIllustration from "../Assets/undraw_login_re_4vu2.svg";
import Googlelogo from '../Assets/Google__G__logo.svg.png'

const title = "Signup";
const BtnTxt = "Signup";

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const { signUpWithGmail, createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

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

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    //console.log(email, password, confirmPassword)

    if (password !== confirmPassword) {
      setErrorMessage(
        "Password doesn't match, Please provide a correct password!"
      );
    } else {
      setErrorMessage("");
      createUser(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert("Accoung Created Succesfully");
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.log(error.message);
          alert(`${error.message}`);
        });
    }
  };

  return (
    <div className="signup-container">
      <h3 className="title">{title}</h3>

      <div className="container">
        <div className="illus-cont">
          <img className="ill-image" src={loginIllustration} alt="" />
        </div>

        <div className="account-wrapper">
          <h3 className="account-title">{title}</h3>
          <form className="account-form" onSubmit={handleRegister} action="">
          <div className="form-group-container">
              <div className="form-group">
                <input
                  type="name"
                  name="name"
                  id="name"
                  required
                  className="input"
                  autocomplete="off"
                />
                <label htmlFor="name" className="label">
                  Name
                </label>
              </div>

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

              <div className="form-group">
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  required
                  className="input"
                />
                <label htmlFor="confirmPassword" className="label">
                  Confirm Password
                </label>
              </div>
            </div>
            
            <div>
              {" "}
              {errorMessage && <div className="Error-msg">{errorMessage}</div>}
            </div>

            <div className="form-group">
              <button className="signup-btn">
                <span>{BtnTxt}</span>
              </button>
            </div>
          </form>

          <div className="account-bottom">
            <span>
              Don't have an Account? <Link className="signup-link" to="../Login">Login</Link>
            </span>
            <span className="or">or</span>
            <button className="Google-btn" onClick={handleSignup}>Continue with <img src={Googlelogo} alt="" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
