// CONFIG IMPORTS
import React from 'react';

const ShowRequestModal = ({request}) => {
  const showRequestModal = document.querySelector(".show-request-modal");

  const closeShowRequestModal = () => {
    showRequestModal.style.visibility = "hidden";
    document.querySelector("body").classList.remove("clicked");
  }

  const openChat = () => {
    alert("opening chat");
  }

  return (
    <div className="show-request-modal">
      <div className="show-request-modal-overlay"></div>
      <div className="show-request-modal-white-bg">
        {request && (
          <div className="show-request-modal-content d-flex flex-column justify-content-between p-4 p-md-5">
            <p className="close-button pointer h4 text-secondary" onClick={() => closeShowRequestModal()}>x</p>
            <div>
              <h2 className="text-primary fw-bold mb-5">{request.request.title}</h2>
              <p className="mb-4"><strong>Requester: </strong>{request.requester.first_name} {request.requester.last_name}</p>
              <p className="mb-4"><strong>Type: </strong>{request.request.type}</p>
              <p className="mb-4"><strong>Location: </strong>{request.request.location}</p>
              <p className="mb-4"><strong>Description: </strong>{request.request.description}</p>
            </div>
            <button className="btn button-primary button-volunteer mt-4 p-1" onClick={() => openChat()} >Volunteer</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowRequestModal;