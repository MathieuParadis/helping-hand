// CONFIG IMPORTS
import React from 'react';
import { NavLink } from 'react-router-dom';

// ASSETS IMPORTS
import signup_pattern from '../../assets/images/signup_pattern.svg';
import auth_logo from '../../assets/logos/auth_logo.svg';
import profile_icon from '../../assets/logos/profile_logo.svg';
import mail_icon from '../../assets/logos/mail_logo.svg';
import lock_icon from '../../assets/logos/lock_logo.svg';

const Signup = () => {
  const SignupPostRequest = (e) => {
    alert("Signing up");
  }

  return (
    <div className="signup signup-bg">
      <div class="container d-flex justify-content-center align-items-center">
        <div class="box box-shadow border-radius-5 d-flex m-3">
          <div className="box-left d-none d-md-flex flex-column justify-content-center align-items-center col-md-3 pe-md-3">
            <img src={signup_pattern} alt="sign up pattern illustration" className="pattern" />
          </div>
          <div className="box-right d-flex flex-column justify-content-center col-12 col-md-9 p-3">
            <img src={auth_logo} alt="authentification logo" className="auth-logo align-self-center mb-2" />
            <h2 className="text-center pb-4 mb-5">Sign up</h2>
            <div className="form-container">
              <form onSubmit={SignupPostRequest}>
                <div className="d-flex mb-0 mb-md-3">
                  <div class="input mb-3 mb-md-0">
                    <label htmlFor="first_name" className="mb-1">First name</label>
                    <input type="text" className="form-control" id="first-name" aria-describedby="first_name input field" placeholder="First name" required />
                    <img src={profile_icon} alt="profile_icon" className="profile-icon" />
                  </div>
                  <div class="input mb-3 mb-md-0">
                    <label htmlFor="last_name" className="mb-1">Email</label>
                    <input type="text" className="form-control" id="last-name" aria-describedby="last_name input field" placeholder="Last name" required />
                    <img src={profile_icon} alt="profile_icon" className="profile-icon" />
                  </div>
                </div>
                <div class="input mb-3">
                  <label htmlFor="email" className="mb-1">Email</label>
                  <input type="email" className="form-control" id="email" aria-describedby="email input field" placeholder="Email" required />
                  <img src={mail_icon} alt="mail_icon" className="mail-icon" />
                </div>
                <div class="input mb-4">
                  <label htmlFor="password" className="mb-1">Password</label>
                  <input type="password" className="form-control" id="password" aria-describedby="email input field" placeholder="Password" required />
                  <img src={lock_icon} alt="lock_icon" className="lock-icon" />
                </div>
                <button type="submit" className="btn button-primary w-100 text-white mt-3" id="login-btn">Create account</button>
              </form>
            </div>
            <div className=" d-flex flex-column justify-content-center align-items-center mt-4 text-small">
              <p className="mb-0">Already Registered ?</p>
              <div className="d-flex">
                <p className="mb-0">Click here to login:&nbsp;</p>
                <NavLink exact="true" to="/signin" className=" text-ternary">Log in</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Signup;