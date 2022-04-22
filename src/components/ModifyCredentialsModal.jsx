// CONFIG IMPORTS
import React from 'react';

const ModifyCredentialsModal = () => {
  const closeModifyCredentialsModal = () => {
    const modifyCredentialsModal = document.querySelector(".modify-credentials-modal");
    modifyCredentialsModal.style.visibility = "hidden";
    document.querySelector("body").classList.remove("clicked");
  }

  const postModifyCredentialsRequest = () => {
    alert("submitting changes");
  }

  return (
    <div className="modify-credentials-modal">
      <div className="modify-credentials-modal-overlay"></div>
      <div className="modify-credentials-modal-white-bg">
        <div className="modify-credentials-modal-content d-flex flex-column justify-content-between align-items-center w-100 p-4 p-md-5">


          <div>
            <h2 className="text-primary fw-bold mb-5">Modify credentials</h2>


          </div>

          <div className="d-flex flex-column flex-md-row mt-4">
            <button className="btn button-success button-modal me-0 me-md-2 mb-2 mb-md-0 p-1" onClick={() => postModifyCredentialsRequest()}>Confirm changes</button>
            <button className="btn button-warning button-modal ms-0 ms-md-2 p-1" onClick={() => closeModifyCredentialsModal()}>Back</button>
          </div>

          <div>
            <button className="btn button-danger button-modal p-1" onClick={() => closeModifyCredentialsModal()}>Delete account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModifyCredentialsModal;