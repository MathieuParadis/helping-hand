// CONFIG IMPORTS
import React, { useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';

// CONTEXT IMPORTS
import FlashContext from '../../components/Context/FlashContext';

// ASSETS IMPORTS
import forgotten_password_illustration from '../../assets/images/forgotten_password_illustration.svg';
import auth_logo from '../../assets/logos/auth_logo.svg';
import mail_icon from '../../assets/logos/mail_logo.svg';

// CONSTANTS IMPORTS
import API_ROOT from '../../constants/index';

const ForgottenPassword = () => {
  const { setFlash } = useContext(FlashContext);

  const sendResetPasswordInstructionsRequest = (e) => {
    e.preventDefault();
    const email_add = document.querySelector('#email').value;

    const data = {
      email: email_add,
    };

    const url = `${API_ROOT}/forgotten-password`;

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
  }
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="forgotten-password bg1 margin-mobile">
      <div className="container d-flex justify-content-center align-items-center mx-0 w-100">
        <div className="box box-shadow border-radius-5 p-3 d-flex my-3">
          <div className="box-left d-none d-md-flex flex-column justify-content-center align-items-center col-md-6 pe-md-3">
            <img src={forgotten_password_illustration} alt="Forgotten password illustration" className="illustration" />
          </div>
          <div className="box-right d-flex flex-column justify-content-center col-12 col-md-6 ps-md-3">
            <img src={auth_logo} alt="authentification logo" className="auth-logo align-self-center mb-2" />
            <h2 className="text-center pb-md-4 mb-5">Forgot your<br></br>password?</h2>            
            <div className="form-container">
              <form onSubmit={sendResetPasswordInstructionsRequest} className="d-flex flex-column justify-content-center">
                <div className="input mb-3">
                  <input type="email" className="form-control" id="email" aria-describedby="email input field" placeholder="Your email" required />
                  <img src={mail_icon} alt="mail_icon" className="mail-icon" />
                </div>
                <button type="submit" className="btn button-primary button-w290 border-radius-50 text-white align-self-center mt-4" id="reset-pw-btn">Send reset password instructions</button>
              </form>
            </div>
            <div className=" d-flex flex-column justify-content-center align-items-center mt-4 text-small">
              <NavLink exact="true" to="/signin" className="mb-2 text-ternary">Log in</NavLink>
              <NavLink exact="true" to="/signup" className="text-ternary">Sign up</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgottenPassword;