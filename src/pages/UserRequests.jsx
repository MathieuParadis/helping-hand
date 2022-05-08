// CONFIG IMPORTS
import React, { useState, useEffect } from 'react';

// COMPONENTS IMPORTS
import EditRequestModal from '../components/EditRequestModal';
import RequestCard from '../components/RequestCard';
import ShowRequestModal from '../components/ShowRequestModal';

// DATA IMPORTS
import requests from '../data/Requests';

const UserRequests = () => {
  const [currentUserRequest, setCurrentUserRequest] = useState('');

  const openNewRequestModal = (e) => {
    const newRequestModal = document.querySelector(".new-request-modal");
    const showRequestModal = document.querySelector(".show-request-modal");
    const editRequestModal = document.querySelector(".edit-request-modal");

    newRequestModal.style.visibility = 'visible';
    showRequestModal.style.visibility = 'hidden';
    editRequestModal.style.visibility = 'hidden';
    document.querySelector("body").classList.add("clicked");
  }

  const openShowRequestModal = (request) => {
    setCurrentUserRequest(request);

    const newRequestModal = document.querySelector(".new-request-modal");
    const showRequestModal = document.querySelector(".show-request-modal");
    const editRequestModal = document.querySelector(".edit-request-modal");

    newRequestModal.style.visibility = 'hidden';
    showRequestModal.style.visibility = 'visible';
    editRequestModal.style.visibility = 'hidden';
    document.querySelector("body").classList.add("clicked");
  }

  const openEditRequestModal = (request) => {
    setCurrentUserRequest(request);

    const newRequestModal = document.querySelector(".new-request-modal");
    const showRequestModal = document.querySelector(".show-request-modal");
    const editRequestModal = document.querySelector(".edit-request-modal");

    newRequestModal.style.visibility = 'hidden';
    showRequestModal.style.visibility = 'hidden';
    editRequestModal.style.visibility = 'visible';
    document.querySelector("body").classList.add("clicked");
  }

  const markRequestAsFulfilled = (request) => {
    setCurrentUserRequest(request);
    alert(request.request.title + " marked as fulfilled");
  }

  const closeAllMenus = () => {
    const menus = document.querySelectorAll("div.dropdown-menu-options-request-card");
    const menusArray = [...menus];
    menusArray.map(menu => menu.style.visibility = 'hidden');
  }

  const closeMenus = () => {
    // closing menus on click anywhere on the screen except on menus and menu-dropdown-buttons
    window.onclick = (event) => {
      const dropdownButtons = document.querySelectorAll("button.button-dropdown");
      const dropdownButtonsArray = [...dropdownButtons];
      const menus = document.querySelectorAll("div.dropdown-menu-options-request-card");
      const menusArray = [...menus];
    
      ![...dropdownButtonsArray].includes(event.target) &&
      ![...menusArray].includes(event.target) &&
      closeAllMenus();
    }
  };

  closeMenus();

  useEffect(() => {
    closeMenus();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ShowRequestModal request={currentUserRequest} setOpenEditModal={openEditRequestModal} setMarkRequestAsFulfilled={markRequestAsFulfilled} />
      <EditRequestModal request={currentUserRequest} />
      <div className="requests">
        <div className="container d-flex justify-content-center mx-0 w-100">
          <div className="d-flex flex-column align-items-center my-3 py-3 w-100">
            <h1 className="text-primary text-center fw-bold pb-3 pb-md-4">My requests</h1>
            <button className="btn button-w150 button-outline-primary" id="signup-btn" onClick={(e) => openNewRequestModal()}>Request help</button>
            <div className="caption d-flex flex-column flex-md-row align-self-start my-4 ps-3">
              <div className="d-flex align-items-center my-2 pe-md-5">
                <span className="me-2" id="material"></span><p className="h5 m-0">Material need</p>
              </div>
              <div className="d-flex align-items-center my-2">
                <span className="me-2" id="service"></span><p className="h5 m-0">Punctual service</p>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4 d-flex justify-content-center w-100">
              { 
                requests.map((request) => {
                  return (
                    <RequestCard 
                      request={request} 
                      setOpenShowModal={openShowRequestModal} 
                      setOpenEditModal={openEditRequestModal}
                      setMarkRequestAsFulfilled={markRequestAsFulfilled}
                      key={request.request.title} 
                    />
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRequests;