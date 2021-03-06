// CONFIG IMPORTS
import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router';

// CONTEXT IMPORTS
import FlashContext from '../../components/Context/FlashContext';

// ASSETS IMPORTS
import reset_password_illustration from '../../assets/images/reset_password_illustration.svg';
import auth_logo from '../../assets/logos/auth_logo.svg';
import mail_icon from '../../assets/logos/mail_logo.svg';
import lock_icon from '../../assets/logos/lock_logo.svg';

// CONSTANTS IMPORTS
import { API_ROOT } from '../../constants/index';

const ResetPassword = () => {
  const { setFlash } = useContext(FlashContext);
  const { tokenSlug } = useParams();

  const resetPassword = (e) => {
    e.preventDefault();

    const email_add = document.querySelector('#email').value;
    const pw = document.querySelector('#password').value;

    const data = {
      email: email_add,
      password: pw,
      token: tokenSlug,
    };

    const url = `${API_ROOT}/reset-password`;

    fetch(url, {
      method: "POST",
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(response => {
      if (response.message ) {
        setFlash({
          type: 'success',
          message: response.message,
          display: true,
        });
        emptyFormFields();
      } else {
        setFlash({
          type: 'danger',
          message: response.error,
          display: true,
        })
      }
    })
    .catch(error =>{
      setFlash({
        type: 'danger',
        message: error,
        display: true,
      })
    })
  }

  const emptyFormFields = () => {
    document.querySelector('#email').value = "";
    document.querySelector('#password').value = "";
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="reset-password d-flex justify-content-center align-items-center bg1 margin-mobile">
      <div className="container d-flex justify-content-center align-items-center mx-0 w-100">
        <div className="box box-shadow border-radius-5 p-3 d-flex flex-row-reverse my-3">
          <div className="box-left d-none d-md-flex flex-column justify-content-center align-items-center col-md-6 ps-md-3">
            <img src={reset_password_illustration} alt="Reset password illustration" className="illustration" />
          </div>
          <div className="box-right d-flex flex-column justify-content-center col-12 col-md-6 pe-md-3">
            <img src={auth_logo} alt="authentification logo" className="auth-logo align-self-center mb-2" />
            <h2 className="text-center pb-md-4 mb-5">Reset your<br></br>password</h2>
            <div className="form-container">
              <form onSubmit={resetPassword} className="d-flex flex-column justify-content-center">
                <div className="input mb-3">
                  <label htmlFor="email" className="mb-1">Email</label>
                  <input type="email" className="form-control" id="email" aria-describedby="email input field" placeholder="Your email" required />
                  <img src={mail_icon} alt="mail_icon" className="mail-icon" />
                </div>
                <div className="input mb-4">
                  <label htmlFor="password" className="mb-1">New password</label>
                  <input type="password" className="form-control" id="password" aria-describedby="password input field" placeholder="Your new password" minLength="6" required />
                  <img src={lock_icon} alt="lock_icon" className="lock-icon" />
                </div>
                <button type="submit" className="btn button-primary button-w200 border-radius-50 text-white align-self-center mt-4" id="reset-pw-btn">Reset password</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;