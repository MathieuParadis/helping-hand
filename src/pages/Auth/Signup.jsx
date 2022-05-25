// CONFIG IMPORTS
import React, { useEffect, useState, useRef, useContext } from 'react';
import { NavLink } from 'react-router-dom';

// CONTEXT IMPORTS
import AuthContext from '../../components/Context/AuthContext';
import FlashContext from '../../components/Context/FlashContext';
import UserContext from '../../components/Context/UserContext';

// ASSETS IMPORTS
import pattern1 from '../../assets/images/pattern1.svg';
import auth_logo from '../../assets/logos/auth_logo.svg';
import profile_icon from '../../assets/logos/profile_logo.svg';
import mail_icon from '../../assets/logos/mail_logo.svg';
import lock_icon from '../../assets/logos/lock_logo.svg';
import plus_icon from '../../assets/logos/plus_logo.svg';

// CONSTANTS IMPORTS
import { API_ROOT } from '../../constants/index';

const Signup = () => {
  const { setAuthenticated } = useContext(AuthContext);
  const { setFlash } = useContext(FlashContext);
  const { setUser } = useContext(UserContext);
  const hiddenFileInput = useRef(null);
  const [idCardFile, setIdCardFile] = useState(null);
  const [idCardFileName, setIdCardFileName] = useState(null);
  const [idCardFileType, setIdCardFileType] = useState(null);

  const acceptedFileTypes = ['pdf', 'png', 'jpg', 'jpeg'];

  const register = (e) => {
    e.preventDefault();

    const fname = document.querySelector('#first-name').value;
    const lname = document.querySelector('#last-name').value;
    const email_add = document.querySelector('#email').value;
    const pw = document.querySelector('#password').value;
    const pw_confirmation = document.querySelector('#password-confirmation').value;

    var form_data = new FormData();
    form_data.append('first_name', fname);
    form_data.append('last_name', lname);
    form_data.append('email', email_add);
    form_data.append('password', pw);
    form_data.append('password_confirmation', pw_confirmation);

    if (idCardFileName) {
      if ( acceptedFileTypes.includes(idCardFileType)) {
        form_data.append('id_card', idCardFile, idCardFile.name);

        const url = `${API_ROOT}/signup`;

        fetch(url, {
          method: "POST",
          mode: 'cors',
          headers: {
            'Accept': 'application/json',
          },
          body: form_data,
        })
        .then(response => {
          // console.log(response);
          return response.json()
        })
        .then(response => {
          // console.log(response);
          if (response.user) {
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
            const errors = response.error;
            // console.log(errors);
            const arrayErrors = [];
            Object.keys(errors).map(function(key, index) {
              arrayErrors.push(`${key} ${errors[key][0]}`)
              return true
            })
            const errorMessage = arrayErrors.join(" | ");
            setFlash({
              type: 'danger',
              message: errorMessage,
              display: true,
            })
          }
        })
        .catch(errors =>{
          // console.log(errors);
          setFlash({
            type: 'danger',
            message: errors,
            display: true,
          })
        })
      } else {
        setFlash({
          type: 'danger',
          message: "The file type you uploaded is incorrect",
          display: true,
        })
      }
    } else {
      setFlash({
        type: 'danger',
        message: "File with your ID card is missing",
        display: true,
      })
    }
  }

  const emptyFormFields = () => {
    document.querySelector('#email').value = "";
    document.querySelector('#password').value = "";
    document.querySelector('#password-confirmation').value = "";
  }

  const handleClick = e => {
    hiddenFileInput.current.click();
  };

  const handleChange = () => {
    if (idCardFile && idCardFile.name) {
      const labelHiddenFileInput = document.querySelector("#labelHiddenFileInput");
      labelHiddenFileInput.textContent = idCardFile.name;
      setIdCardFileName(idCardFile.name);
      setIdCardFileType(idCardFile.name.split(".").slice(-1)[0].toLowerCase());
    }
  }

  useEffect(() => {
    handleChange();
  }, [idCardFile]);

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
              <form onSubmit={register} className="d-flex flex-column justify-content-center" id="signupForm">
                <div className="d-flex flex-column flex-md-row mb-0 mb-md-3">
                  <div className="input mb-3 mb-md-0 me-0 me-md-2">
                    <label htmlFor="first_name" className="mb-1">First name</label>
                    <input type="text" className="form-control" id="first-name" aria-describedby="first_name input field" placeholder="First name" minLength="2" maxLength="100" required />
                    <img src={profile_icon} alt="profile_icon" className="profile-icon" />
                  </div>
                  <div className="input mb-3 mb-md-0 ms-0 ms-md-2">
                    <label htmlFor="last_name" className="mb-1">Last name</label>
                    <input type="text" className="form-control" id="last-name" aria-describedby="last_name input field" placeholder="Last name" minLength="2" maxLength="100" required />
                    <img src={profile_icon} alt="profile_icon" className="profile-icon" />
                  </div>
                </div>
                <div className="file-input mb-3">
                  <label htmlFor="ID" className="mb-1">ID&nbsp;<small className="caption">(.jpg, .png, and .pdf only)</small></label>
                  <div className="d-flex align-items-center">
                    <img src={plus_icon} alt="plus_icon" className="plus-icon pointer" onClick={handleClick} />
                    <p className="m-0 ps-3" id="labelHiddenFileInput">No file chosen</p>
                  </div>
                  <input type="file" className="" id="hiddenFileInput" aria-describedby="file input field" onInput={(e) => setIdCardFile(e.target.files[0])} onChange={(e) => handleChange()} accept="image/png, image/jpeg, application/pdf" ref={hiddenFileInput} />
                </div>
                <div className="input mb-3">
                  <label htmlFor="email" className="mb-1">Email</label>
                  <input type="email" className="form-control" id="email" aria-describedby="email input field" placeholder="Email" required />
                  <img src={mail_icon} alt="mail_icon" className="mail-icon" />
                </div>
                <div className="d-flex flex-column flex-md-row mb-0 mb-md-4">
                  <div className="input mb-3 mb-md-0 me-0 me-md-2">
                    <label htmlFor="password" className="mb-1">Password&nbsp;<small className="caption">(6 characters min)</small></label>
                    <input type="password" className="form-control" id="password" aria-describedby="password input field" placeholder="Password" minLength="6" required />
                    <img src={lock_icon} alt="lock_icon" className="lock-icon" />
                  </div>
                  <div className="input mb-4 mb-md-0 ms-0 ms-md-2">
                    <label htmlFor="password" className="mb-1">Password confirmation</label>
                    <input type="password" className="form-control" id="password-confirmation" aria-describedby="password input field" placeholder="Password" minLength="6" required />
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