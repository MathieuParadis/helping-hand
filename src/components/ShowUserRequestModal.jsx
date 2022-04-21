// CONFIG IMPORTS
import React from 'react';

const ShowUserRequestModal = ({request, setOpenEditModal, setMarkRequestAsFulfilled}) => {
  const closeShowUserRequestModal = () => {
    const showUserRequestModal = document.querySelector(".show-user-request-modal");
    showUserRequestModal.style.visibility = "hidden";
    document.querySelector("body").classList.remove("clicked");
  }

  return (
    <div className="show-user-request-modal">
      <div className="show-user-request-modal-overlay"></div>
      <div className="show-user-request-modal-white-bg">

        {request && (
            <div className="show-user-request-modal-content d-flex flex-column justify-content-between p-4 p-md-5">
              <p className="close-button pointer h4 text-secondary" onClick={() => closeShowUserRequestModal()}>x</p>
              <div>
                <h2 className="text-primary fw-bold mb-5">{request.request.title}</h2>
                <p className="mb-4"><strong>Requester: </strong>{request.requester.first_name} {request.requester.last_name}</p>
                <p className="mb-4"><strong>Type: </strong>{request.request.type}</p>
                <p className="mb-4"><strong>Location: </strong>{request.request.location}</p>
                <p className="mb-4"><strong>Description: </strong>{request.request.description}</p>
              </div>
              <div className="d-flex flex-column flex-md-row mt-4">
                <button className="btn button-primary button-modal me-0 me-md-2 mb-2 mb-md-0 p-1" onClick={() => setOpenEditModal(request)}>Edit request</button>
                <button className="btn button-outline-primary button-modal ms-0 ms-md-2 p-1" onClick={() => setMarkRequestAsFulfilled(request)}>Mark as fulfilled</button>
              </div>
            </div>
          )}

      </div>
    </div>
  );
};

export default ShowUserRequestModal;