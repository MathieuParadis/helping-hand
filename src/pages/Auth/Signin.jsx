// CONFIG IMPORTS
import React from 'react';
import { NavLink } from 'react-router-dom';

// ASSETS IMPORTS
import pattern1 from '../../assets/images/pattern1.svg';
import auth_logo from '../../assets/logos/auth_logo.svg';
import mail_icon from '../../assets/logos/mail_logo.svg';
import lock_icon from '../../assets/logos/lock_logo.svg';

const Signin = () => {
  const LoginPostRequest = (e) => {
    alert("Signing in");
  }

  return (
    <div className="signin bg1 margin-mobile">
      <div class="container d-flex justify-content-center align-items-center">
        <div class="box box-shadow border-radius-5 d-flex flex-row-reverse my-3">
          <div className="box-left d-none d-md-flex flex-column justify-content-center align-items-center col-md-6 ps-md-3">
            <img src={pattern1} alt="sign in pattern illustration" className="pattern" />
          </div>
          <div className="box-right d-flex flex-column justify-content-center col-12 col-md-6 p-3">
            <img src={auth_logo} alt="authentification logo" className="auth-logo align-self-center mb-2" />
            <h2 className="text-center pb-md-4 mb-5">Welcome back!</h2>
            <div className="form-container">
              <form onSubmit={LoginPostRequest} className="d-flex flex-column justify-content-center">
                <div class="input mb-3">
                  <label htmlFor="email" className="mb-1">Email</label>
                  <input type="email" className="form-control" id="email" aria-describedby="email input field" placeholder="Email" required />
                  <img src={mail_icon} alt="mail_icon" className="mail-icon" />
                </div>
                <div class="input mb-4">
                  <label htmlFor="password" className="mb-1">Password</label>
                  <input type="password" className="form-control" id="password" aria-describedby="password input field" placeholder="Password" required />
                  <img src={lock_icon} alt="lock_icon" className="lock-icon" />
                </div>
                <button type="submit" className="btn button-primary button-w200 text-white align-self-center mt-4" id="login-btn">Login</button>
              </form>
            </div>
            <div className=" d-flex flex-column justify-content-center align-items-center mt-4 text-small">
              <div className="mb-2 d-flex">
                <p className="mb-0">Don't have an account? -&nbsp;</p>
                <NavLink exact="true" to="/signup" className=" text-ternary">Sign up</NavLink>
              </div>
              <NavLink exact="true" to="/forgotten-password" className=" text-ternary">Forgot your password?</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;