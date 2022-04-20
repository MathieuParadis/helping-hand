// CONFIG IMPORTS
import React from 'react';

const ModifyCredentialsModal = () => {
  const closeModifyCredentialsModal = () => {
    const modifyCredentialsModal = document.querySelector(".modify-credentials-modal");
    modifyCredentialsModal.style.visibility = "hidden";
    document.querySelector("body").classList.remove("clicked");
  }

  return (
    <div className="modify-credentials-modal">
      <div className="modify-credentials-modal-overlay"></div>
      <div className="modify-credentials-modal-white-bg">
        <div className="modify-credentials-modal-content d-flex flex-column justify-content-between p-3 p-sm-4 p-md-5">
          <div>
            Modify credentials modal
          </div>
          <button className="btn button-danger button-chat p-1" onClick={() => closeModifyCredentialsModal()}>Cancel</button>

        </div>
      </div>
    </div>
  );
};

export default ModifyCredentialsModal;