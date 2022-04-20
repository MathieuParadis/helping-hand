// CONFIG IMPORTS
import React from 'react';

const ShowUserRequestModal = ({request}) => {
  const closeShowUserRequestModal = () => {
    const showUserRequestModal = document.querySelector(".show-user-request-modal");
    showUserRequestModal.style.visibility = "hidden";
    document.querySelector("body").classList.remove("clicked");
  }

  return (
    <div className="show-user-request-modal">
      <div className="show-user-request-modal-overlay"></div>
      <div className="show-user-request-modal-white-bg">
        <div className="show-user-request-modal-content d-flex flex-column justify-content-between p-3 p-sm-4 p-md-5">
          <div>
            Show user request modal
            {request.request.title}
          </div>
          <button className="btn button-danger button-chat p-1" onClick={() => closeShowUserRequestModal()}>Cancel</button>

        </div>
      </div>
    </div>
  );
};

export default ShowUserRequestModal;