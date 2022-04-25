// CONFIG IMPORTS
import React, {useEffect, useState, useRef} from 'react';
import { NavLink } from 'react-router-dom';

// ASSETS IMPORTS
import pattern1 from '../../assets/images/pattern1.svg';
import auth_logo from '../../assets/logos/auth_logo.svg';
import profile_icon from '../../assets/logos/profile_logo.svg';
import mail_icon from '../../assets/logos/mail_logo.svg';
import lock_icon from '../../assets/logos/lock_logo.svg';
import plus_icon from '../../assets/logos/plus_logo.svg';


const Signup = () => {
  const hiddenFileInput = useRef(null);
  const [id_card, setId_card] = useState(null);


  const handleClick = e => {
    hiddenFileInput.current.click();
  };

  const getFileName = (file) => {
    const indexSlash = file.lastIndexOf("/");
    const indexBackSlash = file.lastIndexOf("\\");
    file = file.slice(indexSlash + 1).slice(indexBackSlash + 1);

    const array = file.split(".");
    const fileName = array[0] + "." + array[array.length-1];
    return fileName;
  }

  const handleChange = () => {
    const labelHiddenFileInput = document.querySelector("#labelHiddenFileInput");
    labelHiddenFileInput.textContent =  getFileName(id_card);
  }
  
  const SignupPostRequest = (e) => {
    alert("Signing up");
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="signup bg1 margin-mobile">
      <div className="container d-flex justify-content-center align-items-center mx-0 w-100">
        <div className="box box-shadow border-radius-5 d-flex my-3">
          <div className="box-left d-none d-md-flex flex-column justify-content-center align-items-center col-md-3 pe-md-3">
            <img src={pattern1} alt="sign up pattern illustration" className="pattern" />
          </div>
          <div className="box-right d-flex flex-column justify-content-center col-12 col-md-9 p-3">
            <img src={auth_logo} alt="authentification logo" className="auth-logo align-self-center mb-2" />
            <h2 className="text-center pb-md-4 mb-5">Sign up</h2>
            <div className="form-container">
              <form onSubmit={SignupPostRequest} className="d-flex flex-column justify-content-center">
                <div className="d-flex flex-column flex-md-row mb-0 mb-md-3">
                  <div className="input mb-3 mb-md-0 me-0 me-md-2">
                    <label htmlFor="first_name" className="mb-1">First name</label>
                    <input type="text" className="form-control" id="first-name" aria-describedby="first_name input field" placeholder="First name" required />
                    <img src={profile_icon} alt="profile_icon" className="profile-icon" />
                  </div>
                  <div className="input mb-3 mb-md-0 ms-0 ms-md-2">
                    <label htmlFor="last_name" className="mb-1">Last name</label>
                    <input type="text" className="form-control" id="last-name" aria-describedby="last_name input field" placeholder="Last name" required />
                    <img src={profile_icon} alt="profile_icon" className="profile-icon" />
                  </div>
                </div>
                <div className="file-input mb-3">
                  <label htmlFor="ID" className="mb-1">ID&nbsp;<small className="caption">(jpeg, png only)</small></label>
                  <div className="d-flex align-items-center">
                    <img src={plus_icon} alt="plus_icon" className="plus-icon pointer" onClick={handleClick} />
                    <p className="m-0 ps-3" id="labelHiddenFileInput">No file chosen</p>
                  </div>
                  <input type="file" className="" id="hiddenFileInput" aria-describedby="file input field" onInput={(e) => setId_card(e.target.value)} onChange={(e) => handleChange()} accept="image/png, image/jpeg" ref={hiddenFileInput} />
                </div>
                <div className="input mb-3">
                  <label htmlFor="email" className="mb-1">Email</label>
                  <input type="email" className="form-control" id="email" aria-describedby="email input field" placeholder="Email" required />
                  <img src={mail_icon} alt="mail_icon" className="mail-icon" />
                </div>
                <div className="d-flex flex-column flex-md-row mb-0 mb-md-4">
                  <div className="input mb-3 mb-md-0 me-0 me-md-2">
                    <label htmlFor="password" className="mb-1">Password</label>
                    <input type="password" className="form-control" id="password" aria-describedby="password input field" placeholder="Password" required />
                    <img src={lock_icon} alt="lock_icon" className="lock-icon" />
                  </div>
                  <div className="input mb-4 mb-md-0 ms-0 ms-md-2">
                    <label htmlFor="password" className="mb-1">Password confirmation</label>
                    <input type="password" className="form-control" id="password-confirmation" aria-describedby="password input field" placeholder="Password" required />
                    <img src={lock_icon} alt="lock_icon" className="lock-icon" />
                  </div>
                </div>
                <button type="submit" className="btn button-primary button-w200 border-radius-50 text-white align-self-center mt-4" id="signup-btn">Create account</button>
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