// CONFIG IMPORTS
import React from 'react';

// ASSETS IMPORTS
import mail_icon from '../assets/logos/mail_logo.svg';
import lock_icon from '../assets/logos/lock_logo.svg';

const ModifyCredentialsModal = () => {
  const closeModifyCredentialsModal = () => {
    const modifyCredentialsModal = document.querySelector(".modify-credentials-modal");
    modifyCredentialsModal.style.visibility = "hidden";
    document.querySelector("body").classList.remove("clicked");
  }

  const postModifyCredentialsRequest = () => {
    alert("submitting changes");
  }

  const deleteAccountRequest = () => {
    alert("deleting account");
  }

  return (
    <div className="modify-credentials-modal">
      <div className="modify-credentials-modal-overlay"></div>
      <div className="modify-credentials-modal-white-bg">
        <div className="modify-credentials-modal-content d-flex flex-column justify-content-between align-items-center w-100 p-4 p-md-5">
          <h2 className="text-primary fw-bold mb-5">Change my credentials</h2>
          <div className="form-container d-flex flex-grow-1 w-100">
            <form onSubmit={postModifyCredentialsRequest} className="d-flex flex-column justify-content-between w-100">
              <div>
                <div className="input mb-3">
                  <label htmlFor="email" className="mb-1">Email</label>
                  <input type="email" className="form-control" id="email" aria-describedby="email input field" placeholder="Email" required />
                  <img src={mail_icon} alt="mail_icon" className="mail-icon" />
                </div>
                <div className="input mb-3">
                  <label htmlFor="password" className="mb-1">Password</label>
                  <input type="password" className="form-control" id="password" aria-describedby="password input field" placeholder="Password" required />
                  <img src={lock_icon} alt="lock_icon" className="lock-icon" />
                </div>
                <div className="input mb-3">
                  <label htmlFor="password" className="mb-1">Password confirmation</label>
                  <input type="password" className="form-control" id="password-confirmation" aria-describedby="password input field" placeholder="Password" required />
                  <img src={lock_icon} alt="lock_icon" className="lock-icon" />
                </div>  
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-md-center mt-4">
                <button type="submit" className="btn button-success button-modal me-0 me-md-2 mb-3 mb-md-0 p-1">Confirm changes</button>
                <button className="btn button-warning button-modal ms-0 ms-md-2 p-1" onClick={() => closeModifyCredentialsModal()}>Back</button>
              </div>
            </form>
          </div>
          <div className="d-flex flex-column align-items-center w-100 mt-5">
            <p className="h6 text-center mb-3">Or</p>
            <button className="btn button-danger button-modal p-1" onClick={() => deleteAccountRequest()}>Delete account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModifyCredentialsModal;