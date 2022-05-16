// CONFIG IMPORTS
import React from 'react';

// COMPONENTS IMPORTS
import DropdownMenuOptionsRequestCard from './DropdownMenuOptionsRequestCard';

// ASSETS IMPORTS
import expired_banner from '../assets/images/expired_banner.svg';
import fulfilled_banner from '../assets/images/fulfilled_banner.svg';

const RequestCard = ({request, setOpenShowModal, setOpenEditModal, setMarkRequestAsFulfilled}) => {
  const toggleMenuRequestCard = () => {
    const menuRequestCard = document.querySelector("#R" + request.id + "> div.dropdown-menu-options-request-card");
    
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
      <div className={`card-content ${request.request_type}-request-card d-flex flex-column justify-content-between p-3 overflow-hidden`}>
        { request.status == 'expired' && (<img src={expired_banner} alt="expired banner image" className="banner" />) }
        { request.status == 'fulfilled' && (<img src={fulfilled_banner} alt="fulfilled banner image" className="banner" />) }
        <div className="overflow-hidden">
          <h3 className="text-center mb-3">{request.title}</h3>
          <p><strong>Type:</strong> {request.request_type}</p>
          <p><strong>Published on:</strong> {request.publish_date}</p>
          <p><strong>Status:</strong> {request.status}</p>
        </div>
        <div className="row row-cols-2 g-2">
          <div>
            <button className="btn button-primary w-100 h-100 p-1" onClick={() => setOpenShowModal(request)}>See details</button>
          </div>
          <div className="dropdown" id={`R${request.id}`}>
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
