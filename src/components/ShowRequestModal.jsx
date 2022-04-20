// CONFIG IMPORTS
import React, {useState, useEffect} from 'react';

const ShowRequestModal = ({request}) => {
  const modal = document.querySelector(".show-request-modal");

  const closeModal = () => {
    modal.style.visibility = "hidden";
    document.querySelector("body").classList.remove("clicked");
  }

  window.onclick = (event) => {
    event.target === document.querySelector('.modal-overlay') &&
    event.target !== document.querySelector('.modal-content') &&
    closeModal();
  };

  const openChat = () => {
    alert("opening chat");
  }

  return (
    <div className="show-request-modal">
      <div className="modal-overlay"></div>
      <div className="modal-white-bg">
        {request && (
          <div className="modal-content d-flex flex-column justify-content-between p-3 p-sm-4 p-md-5">
            <div>
              <h2 className="text-primary fw-bold mb-5">{request.request.title}</h2>
              <p className="mb-4"><strong>Requester: </strong>{request.requester.first_name} {request.requester.last_name}</p>
              <p className="mb-4"><strong>Type: </strong>{request.request.type}</p>
              <p className="mb-4"><strong>Location: </strong>{request.request.location}</p>
              <p className="mb-4"><strong>Description: </strong>{request.request.description}</p>
            </div>
            <button className="btn button-primary button-chat p-1" onClick={() => openChat()} >Volunteer</button>

          </div>
        )}
      </div>
    </div>
  );
};

export default ShowRequestModal;