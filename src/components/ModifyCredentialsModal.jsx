// CONFIG IMPORTS
import React, { useEffect, useState, useContext } from 'react';

// CONTEXT IMPORTS
import AuthContext from './Context/AuthContext';
import FlashContext from './Context/FlashContext';
import UserContext from './Context/UserContext';

// ASSETS IMPORTS
import mail_icon from '../assets/logos/mail_logo.svg';
import lock_icon from '../assets/logos/lock_logo.svg';

// CONSTANTS IMPORTS
import API_ROOT from '../constants/index';

const ModifyCredentialsModal = () => {
  const { setAuthenticated } = useContext(AuthContext);
  const { setFlash } = useContext(FlashContext);
  const { user, setUser } = useContext(UserContext);
  const { id, email } = user;

  const [modalOpen, setModalOpen] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [emailAdd, setEmailAdd] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const closeModifyCredentialsModal = () => {
    const modifyCredentialsModal = document.querySelector(".modify-credentials-modal");
    modifyCredentialsModal.style.visibility = "hidden";
    document.querySelector("body").classList.remove("clicked");
    setEmailAdd(email);
    setLoaded(false); 
    setModalOpen(false);
    emptyFormFields();
  }

  const modifyCredentials = (e) => {
    e.preventDefault();

    if (pwdCorrect()) {
      const data = {
        email: emailAdd,
        password: password,
        password_confirmation: passwordConfirmation,
      };

      const url = `${API_ROOT}/users/${id}`;
      const token = localStorage.getItem('jwt_token');

      fetch(url, {
        method: "PUT",
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify(data),
      })
      .then(response => {
        return response.json()
      })
      .then(response => {
        if (response.user) {
          localStorage.setItem('user', JSON.stringify(response.user));
          setUser(response.user);
          setFlash({
            type: 'success',
            message: "Credentials updated successfully",
            display: true,
          })
        } else {
          console.log(response)
          setFlash({
            type: 'danger',
            message: response.error,
            display: true,
          })
        }
        closeModifyCredentialsModal();
      })
      .catch(error => {
        closeModifyCredentialsModal();
        setFlash({
          type: 'danger',
          message: error,
          display: true,
        })
      })
    } else {
      alert("Pasword and password confirmation must be the same");
    }
  }
  
  const deleteAccount = () => {
    if (window.confirm("You are about to delete your account. \n \nAre you sure?")) {
      const url = `${API_ROOT}/users/${id}`;
      const token = localStorage.getItem('jwt_token');

      fetch(url, {
        method: "DELETE",
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
      })
      .then(response => response.json())
      .then(response => {
        if (response.message) {
          localStorage.clear();
          setAuthenticated(false);
          setUser({});
          setFlash({
            type: 'success',
            message: response.message,
            display: true,
          });
        } else {
          setFlash({
            type: 'danger',
            message: response.error,
            display: true,
          })
        }
        closeModifyCredentialsModal();
      })
      .catch(error => {
        closeModifyCredentialsModal();
        setFlash({
          type: 'danger',
          message: error,
          display: true,
        })
      })
    }
  }

  const pwdCorrect = () => {
    if (password.length > 0) {
      if (password === passwordConfirmation) {
        return true;
      } else {
        return false;
      }
    } else {
      return true
    }
  };

  const emptyFormFields = () => {
    setPassword("");
    setPasswordConfirmation("");
  }

  const scrollTopComponent = () => {
    const modalTitle = document.querySelector(".modify-credentials-modal-title");
    modalTitle.scrollIntoView();
  }

  useEffect(() => {
    if (user.email && !loaded) {
      setEmailAdd(user.email);
      setLoaded(true);    
    }
  }, [user, loaded]);

  useEffect(() => {
    if (user) {
      scrollTopComponent();
      setModalOpen(true);
    }
  }, [modalOpen]);

  return (
    <div className="modify-credentials-modal">
      <div className="modify-credentials-modal-overlay"></div>
      <div className="modify-credentials-modal-white-bg">
        <div className="modify-credentials-modal-content d-flex flex-column justify-content-between align-items-center w-100 p-4 p-md-5">
          <h2 className="modify-credentials-modal-title text-primary text-center fw-bold mb-5">Change my credentials</h2>
          <div className="form-container d-flex flex-grow-1 w-100">
            <form onSubmit={modifyCredentials} className="d-flex flex-column justify-content-between w-100">
              <div>
                <div className="input mb-3">
                  <label htmlFor="email" className="mb-1">Email</label>
                  <input type="email" className="form-control" id="email" aria-describedby="email input field" placeholder="Email" value={emailAdd} onChange={(e) => setEmailAdd(e.target.value)} required />
                  <img src={mail_icon} alt="mail_icon" className="mail-icon" />
                </div>
                <div className="input my-3">
                  <label htmlFor="password" className="mb-1">New password*</label>
                  <input type="password" className="form-control" id="password" aria-describedby="password input field" placeholder="Password" minLength="6" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  <img src={lock_icon} alt="lock_icon" className="lock-icon" />
                  <small className="fst-italic">6 characters minimum</small>
                </div>
                <div className="input my-3">
                  <label htmlFor="password" className="mb-1">Confirm new password</label>
                  <input type="password" className="form-control" id="password-confirmation" aria-describedby="password input field" placeholder="Password" minLength="6" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                  <img src={lock_icon} alt="lock_icon" className="lock-icon" />
                </div>
                <p>* Leave blank if you do not wish to change it</p>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-md-center mt-4">
                <button type="submit" className="btn button-success button-modal me-0 me-md-2 mb-3 mb-md-0 p-1">Confirm changes</button>
                <button type="reset" className="btn button-warning button-modal ms-0 ms-md-2 p-1" onClick={() => closeModifyCredentialsModal()}>Back</button>
              </div>
            </form>
          </div>
          <div className="d-flex flex-column align-items-center w-100 mt-5">
            <p className="h6 text-center mb-3">Or</p>
            <button className="btn button-danger button-modal p-1" onClick={() => deleteAccount()}>Delete account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModifyCredentialsModal;