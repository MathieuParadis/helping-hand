// CONFIG IMPORTS
import React, {useState, useEffect} from 'react';

// COMPONENTS IMPORTS
import EditUserRequestModal from '../components/EditUserRequestModal';
import MaterialRequestCard from '../components/MaterialRequestCard';
import ServiceRequestCard from '../components/ServiceRequestCard';
import ShowUserRequestModal from '../components/ShowUserRequestModal';

// DATA IMPORTS
import requests from '../data/Requests';

const UserRequests = () => {
  const [currentUserRequest, setCurrentUserRequest] = useState('');

  const openNewUserRequestModal = (e) => {
    const newUserRequestModal = document.querySelector(".new-user-request-modal");
    const showUserRequestModal = document.querySelector(".show-user-request-modal");
    const editUserRequestModal = document.querySelector(".edit-user-request-modal");

    newUserRequestModal.style.visibility = 'visible';
    showUserRequestModal.style.visibility = 'hidden';
    editUserRequestModal.style.visibility = 'hidden';
    document.querySelector("body").classList.add("clicked");
  }

  const openShowUserRequestModal = (request) => {
    setCurrentUserRequest(request);

    const newUserRequestModal = document.querySelector(".new-user-request-modal");
    const showUserRequestModal = document.querySelector(".show-user-request-modal");
    const editUserRequestModal = document.querySelector(".edit-user-request-modal");

    newUserRequestModal.style.visibility = 'hidden';
    showUserRequestModal.style.visibility = 'visible';
    editUserRequestModal.style.visibility = 'hidden';
    document.querySelector("body").classList.add("clicked");
  }

  const openEditUserRequestModal = (request) => {
    setCurrentUserRequest(request);

    const newUserRequestModal = document.querySelector(".new-user-request-modal");
    const showUserRequestModal = document.querySelector(".show-user-request-modal");
    const editUserRequestModal = document.querySelector(".edit-user-request-modal");

    newUserRequestModal.style.visibility = 'hidden';
    showUserRequestModal.style.visibility = 'hidden';
    editUserRequestModal.style.visibility = 'visible';
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
      <ShowUserRequestModal request={currentUserRequest} setOpenEditModal={openEditUserRequestModal} setMarkRequestAsFulfilled={markRequestAsFulfilled} />
      <EditUserRequestModal request={currentUserRequest} />
      <div className="user-requests">
        <div className="container d-flex justify-content-center w-100">
          <div className="d-flex flex-column align-items-center my-3 py-3 w-100">
            <h1 className="text-primary text-center fw-bold pb-3 pb-md-4">My requests</h1>
            <button className="btn button-w150 button-outline-primary" id="signup-btn" onClick={(e) => openNewUserRequestModal()}>Request help</button>
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
                    request.request.type === "material" ? 
                    <MaterialRequestCard 
                      request={request} 
                      setOpenShowModal={openShowUserRequestModal} 
                      setOpenEditModal={openEditUserRequestModal} 
                      setMarkRequestAsFulfilled={markRequestAsFulfilled} 
                      key={request.request.title} 
                    /> : 
                    <ServiceRequestCard 
                      request={request} 
                      setOpenShowModal={openShowUserRequestModal} 
                      setOpenEditModal={openEditUserRequestModal}
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