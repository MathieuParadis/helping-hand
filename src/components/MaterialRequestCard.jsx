import React from 'react';

// COMPONENTS IMPORTS
import DropdownMenuOptionsRequestCard from '../components/DropdownMenuOptionsRequestCard';

const MaterialRequestCard = ({request, setOpenModal}) => {
  const openMenuRequestCard = () => {
    let menuRequestCard = document.querySelector("#" + request.requester.last_name + "> div.dropdown-menu-options-request-card");
    menuRequestCard.style.visibility = 'visible';
    alert(menuRequestCard.textContent);
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
            <button className="btn button-primary w-100 h-100 p-1" onClick={() => setOpenModal(request)}>See details</button>
          </div>
          <div>
            <button className="btn button-outline-primary button-dropdown w-100 h-100 p-1" id={request.requester.last_name} onClick={(e) => openMenuRequestCard()}>
              More options
              <DropdownMenuOptionsRequestCard request={request.request} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialRequestCard;
