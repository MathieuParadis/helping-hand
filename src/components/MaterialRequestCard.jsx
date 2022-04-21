// CONFIG IMPORTS
import React from 'react';

// COMPONENTS IMPORTS
import DropdownMenuOptionsRequestCard from '../components/DropdownMenuOptionsRequestCard';

const MaterialRequestCard = ({request, setOpenShowModal, setOpenEditModal}) => {
  const toggleMenuRequestCard = () => {
    let menuRequestCard = document.querySelector("#" + request.requester.last_name + "> div.dropdown-menu-options-request-card");

    if (menuRequestCard.style.visibility === 'visible') {
      menuRequestCard.style.visibility = 'hidden';
    } else {
      menuRequestCard.style.visibility = 'visible';
    }
  }

  return (
    <div className="request-card">
      <div className="card-content material-request-card d-flex flex-column justify-content-between p-3">
        <div>
          <h3 className="text-center mb-3">{request.request.title}</h3>
          <p><strong>Type:</strong> {request.request.type}</p>
          <p><strong>Published on:</strong> 2022-04-07</p>
          <p><strong>Status:</strong> {request.request.status}</p>
        </div>
        <div className="row row-cols-2 g-2">
          <div>
            <button className="btn button-primary w-100 h-100 p-1" onClick={() => setOpenShowModal(request)}>See details</button>
          </div>
          <div className="dropdown" id={request.requester.last_name}>
            <DropdownMenuOptionsRequestCard request={request} setOpenEditModal={setOpenEditModal} />
            <button className="btn button-outline-primary button-dropdown w-100 h-100 p-1" onClick={(e) => toggleMenuRequestCard()}>
              More options
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialRequestCard;
