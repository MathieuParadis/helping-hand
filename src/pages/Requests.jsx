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
    <div className="requests">
      <div class="container d-flex justify-content-center w-100">
        <div class="d-flex flex-column align-items-center my-3 py-3 w-100">
          <h1 className="text-primary text-center fw-bold pb-3 pb-md-4">My Requests</h1>
          <button className="btn button-w150 button-outline-primary" id="signup-btn" onClick={(e) => openNewRequestModal()}>Request help</button>
          <div className="caption d-flex flex-column flex-md-row align-self-start my-4">
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
                  request.request.type === "material" ? <MaterialRequestCard request={request} /> : <ServiceRequestCard request={request} />
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