// CONFIG IMPORTS
import React, { useEffect, useState, useContext } from 'react';

// CONTEXT IMPORTS
import FlashContext from '../components/Context/FlashContext';

// REACT LOADING IMPORTS
import ReactLoading from 'react-loading';

// COMPONENTS IMPORTS
import EditRequestModal from '../components/EditRequestModal';
import RequestCard from '../components/RequestCard';
import ShowRequestModal from '../components/ShowRequestModal';

// DATA IMPORTS
import baseURL from '../data/BaseURL';

const UserRequests = () => {
  const { setFlash } = useContext(FlashContext);

  const [currentUserRequests, setCurrentUserRequests] = useState('');
  const [filteredCurrentUserRequests, setFilteredCurrentUserRequests] = useState(null);
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

  const closeShowRequestModal = () => {
    const showRequestModal = document.querySelector(".show-request-modal");
    showRequestModal.style.visibility = "hidden";
    document.querySelector("body").classList.remove("clicked");
  }

  const toggleRequestStatusCaption = () => {
    const toggleLink = document.querySelector('a.toggle-link');
    toggleLink.classList.toggle('link-clicked');

    const requestStatusCaption = document.querySelector('ul.request-status-caption');
    requestStatusCaption.classList.toggle('hidden-section');  
  }

  const markRequestAsFulfilled = (request) => {
    setCurrentUserRequest(request);

    const { id } = request

    const data = {
      status: "fulfilled"
    };

    const url = `${baseURL}/requests/${id}`;
    const token = localStorage.getItem('jwt_token');

    fetch(url, {
      method: "PUT",
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      // console.log(response);
      return response.json();
    })
    .then(response => {
      // console.log(response);
      closeShowRequestModal();
      if (response.message) {
        setFlash({
          type: 'success',
          message: 'Request marked as fulfilled',
          display: true,
        });
      } else {
        setFlash({
          type: 'danger',
          message: response.error,
          display: true,
        })
      }
    })
    .catch(error => {
      // console.log(error);
      closeShowRequestModal();
      setFlash({
        type: 'danger',
        message: error,
        display: true,
      })
    })
  }

  const republishRequest = (request) => {
    setCurrentUserRequest(request);

    const { id } = request

    const data = {
      status: "in_progress",
      expiry_date: parseInt(Date.now() / 1000, 10) + (86400*3)
    };

    const url = `${baseURL}/requests/${id}`;
    const token = localStorage.getItem('jwt_token');

    fetch(url, {
      method: "PUT",
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      // console.log(response);
      return response.json();
    })
    .then(response => {
      // console.log(response);
      closeShowRequestModal();
      if (response.message) {
        setFlash({
          type: 'success',
          message: 'Request republished successfully',
          display: true,
        });
      } else {
        setFlash({
          type: 'danger',
          message: response.error,
          display: true,
        })
      }
    })
    .catch(error => {
      // console.log(error);
      closeShowRequestModal();
      setFlash({
        type: 'danger',
        message: error,
        display: true,
      })
    })
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

  const getCurrentUserRequests = () => {
    const url = `${baseURL}/user-requests`;
    const token = localStorage.getItem('jwt_token');

    fetch(url, {
      method: "GET",
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
    })
    .then(response => {
      // console.log(response)
      return response.json()
    })
    .then(response => {
      // console.log(response)
      setCurrentUserRequests(response)
    })
    .catch(errors => {
      // console.log(errors)
      setFlash({
        type: 'danger',
        message: "An error occured, please try again",
        display: true,
      })
    })
  }

  const filterRequests = (keyword) => {
    const tabs = document.querySelectorAll(".tab")
    const tabAll = document.querySelector("#all");
    const tabInProgress = document.querySelector("#in-progress");
    const tabExpired = document.querySelector("#expired");
    const tabFulfilled = document.querySelector("#fulfilled");

    [...tabs].map((tab) => tab.classList.remove('active-tab'));

    switch(keyword) {
      case 'all':
        setFilteredCurrentUserRequests(currentUserRequests);
        tabAll.classList.add('active-tab');
        break;
      case 'in progress':
        let requestsInProgress = currentUserRequests.filter((request) => request.status == 'in progress');
        setFilteredCurrentUserRequests(requestsInProgress);
        tabInProgress.classList.add('active-tab');
        break;
      case 'expired':
        let requestsExpired = currentUserRequests.filter((request) => request.status == 'expired');
        setFilteredCurrentUserRequests(requestsExpired);
        tabExpired.classList.add('active-tab');
        break;
      case 'fulfilled':
        let requestsFulfilled = currentUserRequests.filter((request) => request.status == 'fulfilled');
        setFilteredCurrentUserRequests(requestsFulfilled);
        tabFulfilled.classList.add('active-tab');
        break;
      default:
        setFilteredCurrentUserRequests(currentUserRequests);
        tabAll.classList.add('active-tab');
    }
  };

  closeMenus();
  
  useEffect(() => {
    getCurrentUserRequests();
  }, [currentUserRequests]);

  useEffect(() => {
    if (!filteredCurrentUserRequests) {
      filterRequests('all');
    }
  }, [currentUserRequests]);

  useEffect(() => {
    closeMenus();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ShowRequestModal request={currentUserRequest} setOpenEditModal={openEditRequestModal} setMarkRequestAsFulfilled={markRequestAsFulfilled} setRepublishRequest={republishRequest} />
      <EditRequestModal request={currentUserRequest} />
      <div className="user-requests">
        <div className="d-flex justify-content-center mx-0 w-100">
          <div className="d-flex flex-column align-items-center my-3 py-3 w-100">
            <h1 className="text-primary text-center fw-bold pb-3 pb-md-4">My requests</h1>
            <button className="btn button-w150 button-outline-primary" id="signup-btn" onClick={(e) => openNewRequestModal()}>Request help</button>
            <div className="caption d-flex flex-column flex-md-row align-self-start my-4">
              <div className="d-flex align-items-center my-2 pe-md-5">
                <span className="me-2" id="material"></span><p className="h5 m-0">Material need</p>
              </div>
              <div className="d-flex align-items-center my-2">
                <span className="me-2" id="service"></span><p className="h5 m-0">Punctual service</p>
              </div>
            </div>
            <div className="d-flex flex-column align-self-start mb-3">
              <div className="d-flex align-items-baseline mb-2">
                <h5 className="m-0">Request status:&#160;</h5>
                <a className="pointer m-0 toggle-link" onClick={(e) => toggleRequestStatusCaption()}>See more</a>
              </div>
              <ul className="request-status-caption hidden-section">
                <li className="mb-2"><strong>In progress:</strong> Requests that have been published or republished within the last 72 hours</li>
                <li className="mb-2"><strong>Expired:</strong> Requests that have been published for over 3 days and that have not been fulfilled</li>
                <li className="mb-2"><strong>Fulfilled:</strong> Requests that have been marked as fulfilled, either by the volunteer, or by the author of the request</li>
                <li className="list-unstyled fst-italic mb-2">Important notice: In order to avoid requests that last forever, and for clarity purpose, once 5 different users have contacted you, the request is no longer displayed on the map. Similarly, after 3 days, if your request is not fulfilled yet, it expires. However you always have the possibility to republish it. Though, once a request is marked as fulfilled, it cannot be republished anymore.</li>
              </ul>
            </div>
            <div className="tabs-area d-flex flex-column align-items-center w-100 pb-3">
              <ul className="row row-cols-md-2 row-cols-md-4 p-0 w-100">
                <li className="tab list-unstyled my-0 py-2 h4 text-center pointer col-6 col-md-3 border-bottom-prim" id="all" onClick={(e) => filterRequests('all')}>All</li>
                <li className="tab list-unstyled my-0 py-2 h4 text-center pointer col-6 col-md-3 border-bottom-prim border-left-prim" id="in-progress" onClick={(e) => filterRequests('in progress')}>In progress</li>
                <li className="tab list-unstyled my-0 py-2 h4 text-center pointer col-6 col-md-3 border-bottom-prim border-left-md-prim" id="expired" onClick={(e) => filterRequests('expired')}>Expired</li>
                <li className="tab list-unstyled my-0 py-2 h4 text-center pointer col-6 col-md-3 border-bottom-prim border-left-prim" id="fulfilled" onClick={(e) => filterRequests('fulfilled')}>Fulfilled</li>
              </ul>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4 d-flex justify-content-center pt-2 w-100">
                { filteredCurrentUserRequests ?
                  // 3 cases: not fetch yet => display Loading component
                  //          no request => displays sentence no request here yet
                  //          requests fetched => displays requests in cards
                  (
                    filteredCurrentUserRequests.length > 0 ?
                    (
                      filteredCurrentUserRequests.map((request) => {
                        return (
                          <RequestCard 
                            request={request} 
                            setOpenShowModal={openShowRequestModal} 
                            setOpenEditModal={openEditRequestModal}
                            setMarkRequestAsFulfilled={markRequestAsFulfilled}
                            setRepublishRequest={republishRequest}
                            key={request.id} 
                          />
                        )
                      })
                    ) :
                    (
                      <p className="w-100 text-center pt-5 mt-5 h5">You do not have any request here for the moment</p>
                    )
                  ) : 
                  ( 
                    <div className="d-flex justify-content-center align-items-center w-100 p-3">
                      <ReactLoading type={"spinningBubbles"} color={"#358597"} height={'10%'} width={'10%'} />
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRequests;