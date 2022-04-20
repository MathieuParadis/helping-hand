// CONFIG IMPORTS
import React from 'react';

const EditProfileModal = () => {
  const editProfileModal = document.querySelector(".edit-profile-modal");

  const closeEditProfileModal = () => {
    editProfileModal.style.visibility = "hidden";
    document.querySelector("body").classList.remove("clicked");
  }

  return (
    <div className="edit-profile-modal">
      <div className="edit-profile-modal-overlay"></div>
      <div className="edit-profile-modal-white-bg">
        <div className="edit-profile-modal-content d-flex flex-column justify-content-between p-3 p-sm-4 p-md-5">
          <div>
            Edit profile modal
          </div>
          <button className="btn button-danger button-chat p-1" onClick={() => closeEditProfileModal()}>Cancel</button>

        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;