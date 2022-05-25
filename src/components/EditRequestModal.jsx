// CONFIG IMPORTS
import React, { useEffect, useState, useContext } from 'react';

// CONTEXT IMPORTS
import FlashContext from '../components/Context/FlashContext';

// CONSTANTS IMPORTS
import { API_ROOT } from '../constants/index';

const EditRequestModal = ({request}) => {
  const { setFlash } = useContext(FlashContext);

  let id = ""
  let title = "";
  let request_type = "";
  let description = "";
  let location = "";
  let lat = 0;
  let lng = 0;

  if (request) {
    ({ id, title, request_type, description, location, lat, lng } = request)
  }

  const [requestTitle, setRequestTitle] = useState(title);
  const [requestType, setRequestType] = useState(request_type);
  const [requestDescription, setRequestDescription] = useState(description);
  const [requestLocation, setRequestLocation] = useState(location);
  const [latitude, setRequestLatitude] = useState(lat);
  const [longitude, setRequestLongitude] = useState(lng);

  const closeEditRequestModal = () => {
    const editRequestModal = document.querySelector(".edit-request-modal");
    editRequestModal.style.visibility = "hidden";
    document.querySelector("body").classList.remove("clicked");
    scrollTopComponent();
    setFields();
  }

  const updateRequest = (e) => {
    e.preventDefault();

    const data = {
      title: requestTitle,
      request_type: requestType,
      location: requestLocation,
      lat: latitude,
      lng: longitude,
      description: requestDescription
    };

    const url = `${API_ROOT}/requests/${id}`;
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
      closeEditRequestModal();
      if (response.message) {
        setFlash({
          type: 'success',
          message: response.message,
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
      closeEditRequestModal();
      setFlash({
        type: 'danger',
        message: error,
        display: true,
      })
    })
  }

  const getPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setRequestLatitude(Math.round(position.coords.latitude * 100000) / 100000);
          setRequestLongitude(Math.round(position.coords.longitude * 100000) / 100000);
        },
        function (error) {
            alert(error.code + ": " + error.message);
        },
        {
          enableHighAccuracy: true,
          maximumAge: 10000,
          timeout: 5000
        }
      );
    } else {
      alert("Your browser does not support this functionality");
    }
  }

  const scrollTopComponent = () => {
    const modalTitle = document.querySelector(".edit-request-modal-title");
    modalTitle.scrollIntoView({ behavior: 'smooth' });
  }

  const setFields = () => {
    setRequestTitle(title);
    setRequestType(request_type);
    setRequestDescription(description);
    setRequestLocation(location);
    setRequestLatitude(lat);
    setRequestLongitude(lng);
  }

  useEffect(() => {
    setFields();
  }, [request]);
  
  useEffect(() => {
    scrollTopComponent();
  }, [request]);

  return (
    <div className="edit-request-modal">
      <div className="edit-request-modal-overlay"></div>
      <div className="edit-request-modal-white-bg">
        <div className="edit-request-modal-content d-flex flex-column justify-content-between align-items-center w-100 p-4 p-md-5">
          <h2 className="edit-request-modal-title text-primary text-center fw-bold mb-5">Edit request</h2>
          {request && (
            <div className="form-container d-flex flex-grow-1 w-100">
              <form onSubmit={updateRequest} className="d-flex flex-column justify-content-between w-100">
                <div>
                  <div className="input mb-3">
                    <label htmlFor="title" className="mb-1">Title&nbsp;<small className="caption">(50 characters max)</small></label>
                    <input type="text" className="form-control" id="title" aria-describedby="title input field" placeholder="Title" maxLength="50" value={requestTitle} onChange={(e) => setRequestTitle(e.target.value)} required />
                  </div>
                  <div className="input my-3 d-flex flex-column">
                    <label htmlFor="type" className="mb-1">Type</label>
                    <select className="select-form-control" value={requestType} onChange={(e) => setRequestType(e.target.value)}>
                      {
                        requestType == 'material' ? 
                        (
                          <>
                            <option value='material'>Material</option>
                            <option value='service'>Service</option>
                          </>
                        ) : 
                        (
                          <>
                            <option value='service'>Service</option>
                            <option value='material'>Material</option>
                          </>
                        )
                      }
                    </select>
                  </div>
                  <div className="input my-3">
                    <label htmlFor="location" className="mb-1">Location</label>
                    <input type="text" className="form-control" id="location" aria-describedby="Location input field" placeholder="Location" value={requestLocation} onChange={(e) => setRequestLocation(e.target.value)} required />
                  </div>
                  <div className="geo-position-section d-flex flex-column my-4">
                    <h5 className="mb-2">Geographical coordinates</h5>
                    <div className="d-flex flex-column flex-md-row mb-0 mb-md-3">
                      <div className="input mb-3 mb-md-0 me-0 me-md-2">
                        <label htmlFor="latitude" className="mb-1">Latitude&nbsp;<small className="caption">[-90; +90]°</small></label>
                        <input type="number" className="form-control" id="latitude" aria-describedby="latitude input field" min="-90" max="90" step="0.00001" placeholder="Latitude" value={latitude} onChange={(e) => setRequestLatitude(e.target.value)} required />
                      </div>
                      <div className="input mb-3 mb-md-0 ms-0 ms-md-2">
                        <label htmlFor="longitude" className="mb-1">Longitude&nbsp;<small className="caption">[-180; +180]°</small></label>
                        <input type="number" className="form-control" id="longitude" aria-describedby="longitude input field" min="-180" max="180" step="0.00001" placeholder="Longitude" value={longitude} onChange={(e) => setRequestLongitude(e.target.value)} required />
                      </div>
                    </div>
                    <button type="reset" className="btn button-outline-primary button-w150 p-1" onClick={() => getPosition()}>Use my position</button>
                  </div>
                  <div className="input my-4">
                    <label htmlFor="description" className="mb-1">Description&nbsp;<small className="caption">(300 characters max)</small></label>
                    <textarea type="text" className="form-control" id="description" aria-describedby="Description input field" maxLength="300" rows="5" placeholder="Explain precisely what your need is here...." value={requestDescription} onChange={(e) => setRequestDescription(e.target.value)} required />
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-md-center mt-4">
                  <button type="submit" className="btn button-success button-modal me-0 me-md-2 mb-3 mb-md-0 p-1">Update request</button>
                  <button type="reset" className="btn button-warning button-modal ms-0 ms-md-2 p-1" onClick={() => closeEditRequestModal()}>Back</button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditRequestModal;