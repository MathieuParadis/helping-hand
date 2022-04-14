// CONFIG IMPORTS
import React from 'react';
import { NavLink } from 'react-router-dom';

// ASSETS IMPORTS
import login_pattern from '../../assets/images/login_pattern.svg';
import login_logo from '../../assets/logos/login_logo.svg';
import mail_icon from '../../assets/logos/mail_logo.svg';
import lock_icon from '../../assets/logos/lock_logo.svg';

const Signin = () => {
  const LoginPostRequest = (e) => {
    alert("reset password request");
  }

  return (
    <div className="signin">
      <div class="container d-flex justify-content-center align-items-center">
        <div class="box box-shadow border-radius-5 d-flex">
          <div className="box-left d-none d-md-flex flex-column justify-content-center align-items-center col-md-6 pe-md-3">
            <img src={login_pattern} alt="sign in pattern illustration" className="pattern" />
          </div>
          <div className="box-right d-flex flex-column justify-content-center col-12 col-md-6 ps-md-3">
            <h2 className="text-center pb-4 mb-5">Forgot your<br></br>password?</h2>
            <div className="form-container">
              <form onSubmit={LoginPostRequest}>
                <div class="input mb-3">
                  <input type="email" className="form-control" id="email" aria-describedby="email input field" placeholder="Your email" required />
                  <img src={mail_icon} alt="mail_icon" className="mail-icon" />
                </div>
                <button type="submit" className="btn button-primary w-100 text-white mt-3" id="reset-pw-btn">Send reset password instructions</button>
              </form>
            </div>
            <div className=" d-flex flex-column justify-content-center align-items-center mt-4">
              <NavLink exact="true" to="/signin" className="mb-2 text-ternary">Log in</NavLink>
              <NavLink exact="true" to="/signup" className="text-ternary">Sign up</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;