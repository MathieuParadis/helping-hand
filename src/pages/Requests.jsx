// CONFIG IMPORTS
import React, {useEffect} from 'react';

// COMPONENTS IMPORTS
import MaterialRequestCard from '../components/MaterialRequestCard';
import ServiceRequestCard from '../components/ServiceRequestCard';

// DATA IMPORTS
import requests from '../data/Requests';

const Requests = () => {
  const openNewRequestModal = (e) => {
    alert("opening new request modal");
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="requests bg2 margin-mobile">
      <div class="container d-flex justify-content-center">
        <div class="box border-radius-5 d-flex flex-column align-items-center p-3 my-3">
          <h1 className="text-primary text-center fw-bold pb-3 pb-md-4">My Requests</h1>
          <button className="profile-button btn button-w150 button-outline-primary" id="signup-btn" onClick={(e) => openNewRequestModal()}>Request help</button>
          <div className="caption d-flex align-self-start my-5">
            <span className="me-2" id="material"></span><p className="pe-5 h5">Material need</p>
            <span className="ms-5 me-2" id="service"></span><p className="h5">Punctual service</p>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 py-4">
            { 
              requests.map((request) => {
                return (
                  request.request.type === "material" ? <MaterialRequestCard /> : <ServiceRequestCard />
                )
              })
            }
          </div>

        </div>
      </div>
    </div>
  );
};

export default Requests;