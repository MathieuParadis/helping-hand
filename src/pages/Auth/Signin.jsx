// CONFIG IMPORTS
import React, { useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';

// CONTEXT IMPORTS
import AuthContext from '../../components/Context/AuthContext';
import FlashContext from '../../components/Context/FlashContext';
import UserContext from '../../components/Context/UserContext';

// ASSETS IMPORTS
import pattern1 from '../../assets/images/pattern1.svg';
import auth_logo from '../../assets/logos/auth_logo.svg';
import mail_icon from '../../assets/logos/mail_logo.svg';
import lock_icon from '../../assets/logos/lock_logo.svg';

// DATA IMPORTS
import baseURL from '../../data/BaseURL';

const Signin = () => {
  const { setAuthenticated} = useContext(AuthContext);
  const { setFlash } = useContext(FlashContext);
  const { setUser } = useContext(UserContext);

  const login = (e) => {
    e.preventDefault();
    const email_add = document.querySelector('#email').value;
    const pw = document.querySelector('#password').value;

    const data = {
      email: email_add,
      password: pw
    };

    const url = `${baseURL}/signin`;

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
      if (response.user ) {
        localStorage.setItem('jwt_token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));

        setAuthenticated(true);
        setUser(response.user);
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
    <div className="signin bg1 margin-mobile">
      <div className="container d-flex justify-content-center align-items-center mx-0 w-100">
        <div className="box box-shadow border-radius-5 d-flex flex-row-reverse my-3">
          <div className="box-left d-none d-md-flex flex-column justify-content-center align-items-center col-md-6 ps-md-3">
            <img src={pattern1} alt="sign in pattern illustration" className="pattern" />
          </div>
          <div className="box-right d-flex flex-column justify-content-center col-12 col-md-6 p-3">
            <img src={auth_logo} alt="authentification logo" className="auth-logo align-self-center mb-2" />
            <h2 className="text-center pb-md-4 mb-5">Welcome back!</h2>
            <div className="form-container">
              <form onSubmit={login} className="d-flex flex-column justify-content-center">
                <div className="input mb-3">
                  <label htmlFor="email" className="mb-1">Email</label>
                  <input type="email" className="form-control" id="email" aria-describedby="email input field" placeholder="Email" required />
                  <img src={mail_icon} alt="mail_icon" className="mail-icon" />
                </div>
                <div className="input mb-4">
                  <label htmlFor="password" className="mb-1">Password</label>
                  <input type="password" className="form-control" id="password" aria-describedby="password input field" placeholder="Password" required />
                  <img src={lock_icon} alt="lock_icon" className="lock-icon" />
                </div>
                <button type="submit" className="btn button-primary button-w200 border-radius-50 text-white align-self-center mt-4" id="login-btn">Login</button>
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