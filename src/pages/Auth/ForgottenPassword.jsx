// CONFIG IMPORTS
import React from 'react';

// ASSETS IMPORTS
import forgotten_password_illustration from '../../assets/images/forgotten_password_illustration.svg';

const ForgottenPassword = () => {
  const postResetPasswordRequest = (e) => {
    alert("reset password request");
  }

  return (
    <div className="forgotten-password">
      <div class="container d-flex justify-content-center align-items-center">
        <div class="box box-shadow border-radius-5 p-3 d-flex">
          <div className="box-left d-none d-md-block pe-md-3">
            <img src={forgotten_password_illustration} alt="Forgotten password illustration" className="illustration" />
          </div>
          <div className="box-right ps-md-3">
            <h2 className="text-center pb-4">Forgot your<br></br>password?</h2>

          <div className="form-container">
            <form onSubmit={postResetPasswordRequest}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="email input field" placeholder="" required />
              </div>
              <div className="mt-4">
                <button type="submit" className="btn button-primary w-100 text-white mb-3" id="register_btn">Submit proposal</button>
              </div>
            </form>
          </div>





          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgottenPassword;