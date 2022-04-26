// CONFIG IMPORTS
import React from 'react';

// COMPONENTS IMPORTS
import DropdownMenuOptionsRequestCard from './DropdownMenuOptionsRequestCard';

const RequestCard = ({request, setOpenShowModal, setOpenEditModal, setMarkRequestAsFulfilled}) => {
  const toggleMenuRequestCard = () => {
    const menuRequestCard = document.querySelector("#" + request.requester.last_name + "> div.dropdown-menu-options-request-card");
    
    if (menuRequestCard.style.visibility === 'visible') {
      closeAllMenus();

    } else {
      closeAllMenus();
      menuRequestCard.style.visibility = 'visible';
    }
  }

  const closeAllMenus = () => {
    const menus = document.querySelectorAll("div.dropdown-menu-options-request-card");
    const menusArray = [...menus];
    menusArray.map(menu => menu.style.visibility = 'hidden');
  }

  return (
    <div className="request-card">
      <div className={`card-content ${request.request.type}-request-card d-flex flex-column justify-content-between p-3`}>
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
            <DropdownMenuOptionsRequestCard 
              request={request} 
              setOpenEditModal={setOpenEditModal} 
              setMarkRequestAsFulfilled={setMarkRequestAsFulfilled}
            />
            <button className="btn button-outline-primary button-dropdown w-100 h-100 p-1" onClick={(e) => toggleMenuRequestCard()}>
              More options
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
