import React, { useContext, useState } from "react";
import Cookies from "js-cookie";
import "./loginpage.css";
import Sidebar from "../sidebar/sidebar";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/user/auth/login", {
        email,
        password,
      });
      if (res && res.data) {
        console.log(res.data);
        if (res.data) {
          Cookies.set("token", res.data.accesstoken, { expires: 7 });
          window.location.href = "/";
        } else {
          alert("you must be admin to enter");
        }
      } else {
        alert("Failed to fetch data from the server");
      }
    } catch (err) {
      if (err.response) {
        console.log(err.response.data.msg);
        alert(err.response.data.msg);
      } else {
        console.log(err);
        alert("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <>
      <div className="LoginPage">
        <div className="login-page">
          <div className="login-form-section">
            <h1>Welcome Back</h1>
            <p>Enter your email and password to sign in</p>
            <form onSubmit={handleSubmit} role="form">
              <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  aria-label="Email"
                  aria-describedby="email-addon"
                  onChange={e=>setEmail(e.target.value)}
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Your password"
                  aria-label="Password"
                  aria-describedby="password-addon"
                  onChange={e=>setPassword(e.target.value)}
                />
              </div>
              <div className="remember-me">
                <input type="checkbox" id="rememberMe"/>
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <button type="submit">SIGN IN</button>
            </form>
            <div className="login-footer">
              Don't have an account? <a href="/signup">Sign up</a>
            </div>
          </div>
          <div
            className="branding-section"
            style={{ backgroundImage: `url(./images/Bg2.png)` }}
          >
            <img
              src="./images/login.png"
              alt="Optilearn Education"
              className="branding-logo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
