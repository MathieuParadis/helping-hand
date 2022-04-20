// CONFIG IMPORTS
import React from 'react';

const NewUserRequestModal = () => {
  const closeNewUserRequestModal = () => {
    const newUserRequestModal = document.querySelector(".new-user-request-modal");
    newUserRequestModal.style.visibility = "hidden";
    document.querySelector("body").classList.remove("clicked");
  }

  return (
    <div className="new-user-request-modal">
      <div className="new-user-request-modal-overlay"></div>
      <div className="new-user-request-modal-white-bg">
        <div className="new-user-request-modal-content d-flex flex-column justify-content-between p-3 p-sm-4 p-md-5">
          <div>
            New user request modal
          </div>
          <button className="btn button-danger button-chat p-1" onClick={() => closeNewUserRequestModal()}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default NewUserRequestModal;