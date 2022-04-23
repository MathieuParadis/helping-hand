// CONFIG IMPORTS
import React from 'react';

const NewUserRequestModal = () => {
  const closeNewUserRequestModal = () => {
    const newUserRequestModal = document.querySelector(".new-user-request-modal");
    newUserRequestModal.style.visibility = "hidden";
    document.querySelector("body").classList.remove("clicked");
  }

  const createRequest = () => {
    alert("creating new request");
  }

  return (
    <div className="new-user-request-modal">
      <div className="new-user-request-modal-overlay"></div>
      <div className="new-user-request-modal-white-bg">


        <div className="new-user-request-modal-content d-flex flex-column justify-content-between align-items-center w-100 p-4 p-md-5">
          <h2 className="text-primary fw-bold mb-5">New request</h2>
          <div className="form-container d-flex flex-grow-1 w-100">
            <form onSubmit={createRequest} className="d-flex flex-column justify-content-between w-100">
              <div>
                <div className="input mb-3">
                  <label htmlFor="title" className="mb-1">Title&nbsp;<small className="caption">(50 characters max)</small></label>
                  <input type="text" className="form-control" id="title" aria-describedby="title input field" placeholder="Title" maxLength="50" required />
                </div>
                <div className="input mb-3">
                  <label htmlFor="location" className="mb-1">Location</label>
                  <input type="text" className="form-control" id="location" aria-describedby="Location input field" placeholder="Location" required />
                </div>
                <div className="input mb-3">
                  <label htmlFor="location" className="mb-1">Location</label>
                  <input type="text" className="form-control" id="location" aria-describedby="Location input field" placeholder="Location" required />
                </div>
                <div className="input mb-3">
                  <label htmlFor="description" className="mb-1">Description&nbsp;<small className="caption">(400 characters max)</small></label>
                  <textarea type="text" className="form-control" id="description" aria-describedby="Description input field" maxLength="400" rows="5" placeholder="Explain precisely what your need is here...." required />
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-md-center mt-4">
                <button type="submit" className="btn button-success button-modal me-0 me-md-2 mb-3 mb-md-0 p-1">Update profile</button>
                <button className="btn button-warning button-modal ms-0 ms-md-2 p-1" onClick={() => closeNewUserRequestModal()}>Back</button>
              </div>
            </form>
          </div>
        </div>





      </div>
    </div>
  );
};

export default NewUserRequestModal;