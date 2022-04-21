// CONFIG IMPORTS
import React from 'react';

const EditUserRequestModal = ({request}) => {
  const closeEditUserRequestModal = () => {
    const editUserRequestModal = document.querySelector(".edit-user-request-modal");
    editUserRequestModal.style.visibility = "hidden";
    document.querySelector("body").classList.remove("clicked");
  }

  return (
    <div className="edit-user-request-modal">
      <div className="edit-user-request-modal-overlay"></div>
      <div className="edit-user-request-modal-white-bg">
        <div className="edit-user-request-modal-content d-flex flex-column justify-content-between p-3 p-sm-4 p-md-5">
          <div>
            {request && (
              <>
                <h2>Edit user request modal</h2>
                <p>{request.request.title}</p>
              </>
            )}
          </div>
          <button className="btn button-danger button-chat p-1" onClick={() => closeEditUserRequestModal()}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditUserRequestModal;