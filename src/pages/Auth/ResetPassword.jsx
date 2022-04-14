// CONFIG IMPORTS
import React from 'react';
import { NavLink } from 'react-router-dom';

// ASSETS IMPORTS
import reset_password_illustration from '../../assets/images/reset_password_illustration.svg';
import auth_logo from '../../assets/logos/auth_logo.svg';
import mail_icon from '../../assets/logos/mail_logo.svg';
import lock_icon from '../../assets/logos/lock_logo.svg';

const ResetPassword = () => {
  const postResetPasswordRequest = (e) => {
    alert("reset password request");
  }
  return (
    <div className="reset-password">
      <div class="container d-flex justify-content-center align-items-center">
        <div class="box box-shadow border-radius-5 p-3 d-flex flex-row-reverse my-3">
          <div className="box-left d-none d-md-flex flex-column justify-content-center align-items-center col-md-6 ps-md-3">
            <img src={reset_password_illustration} alt="Reset password illustration" className="illustration" />
          </div>
          <div className="box-right d-flex flex-column justify-content-center col-12 col-md-6 pe-md-3">
            <img src={auth_logo} alt="authentification logo" className="auth-logo align-self-center mb-2" />
            <h2 className="text-center pb-md-4 mb-5">Reset your<br></br>password</h2>
            <div className="form-container">
              <form onSubmit={postResetPasswordRequest}>
                <div class="input mb-3">
                  <label htmlFor="email" className="mb-1">Email</label>
                  <input type="email" className="form-control" id="email" aria-describedby="email input field" placeholder="Your email" required />
                  <img src={mail_icon} alt="mail_icon" className="mail-icon" />
                </div>
                <div class="input mb-4">
                  <label htmlFor="password" className="mb-1">New password</label>
                  <input type="password" className="form-control" id="password" aria-describedby="email input field" placeholder="Your new password" required />
                  <img src={lock_icon} alt="lock_icon" className="lock-icon" />
                </div>
                <button type="submit" className="btn button-primary w-100 text-white mt-3" id="reset-pw-btn">Reset password</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>



  );
};

export default ResetPassword;