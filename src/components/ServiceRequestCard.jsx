import React from 'react';

const ServiceRequestCard = ({request, setOpenShowModal, setOpenEditModal}) => {
  return (
    <div className="request-card">
      <div className="card-content service-request-card d-flex flex-column justify-content-between p-3">
        <div>
          <h3 className="text-center mb-3">{request.request.title}</h3>
          <p><strong>Type:</strong> {request.request.type}</p>
          <p><strong>Published on:</strong> 2022-04-17</p>
          <p><strong>Status:</strong> {request.request.status}</p>
        </div>
        <div className="row row-cols-2 g-2">
          <div>
            <button className="btn button-primary w-100 h-100 p-1" onClick={() => setOpenShowModal(request)}>See details</button>
            <button className="btn button-primary w-100 h-100 p-1" onClick={() => setOpenEditModal(request)}>Edit</button>

          </div>
          <div>
            <button className="btn button-outline-primary w-100 h-100 p-1">More options</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceRequestCard;
