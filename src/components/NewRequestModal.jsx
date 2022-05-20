// CONFIG IMPORTS
import React, { useEffect, useState, useContext } from 'react';

// CONTEXT IMPORTS
import FlashContext from './Context/FlashContext';

// DATA IMPORTS
import baseURL from '../data/BaseURL';

const NewRequestModal = () => {
  const { setFlash } = useContext(FlashContext);

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");  
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [description, setDescription] = useState("");

  const closeNewRequestModal = () => {
    const newRequestModal = document.querySelector(".new-request-modal");
    newRequestModal.style.visibility = "hidden";
    document.querySelector("body").classList.remove("clicked");
    emptyFormFields();
    scrollTopComponent();
  }

  const createRequest = (e) => {
    e.preventDefault();

    const data = {
      title: title,
      request_type: type,
      location: location,
      lat: lat,
      lng: long,
      description: description
    };

    const url = `${baseURL}/requests`;
    const token = localStorage.getItem('jwt_token');

    fetch(url, {
      method: "POST",
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(response => {
      if (response.message) {
        setFlash({
          type: 'success',
          message: response.message,
          display: true,
        })
      } else {
        const errors = response.error;
        console.log(errors);
        const arrayErrors = [];
        Object.keys(errors).map(function(key, index) {
          arrayErrors.push(`${key} ${errors[key][0]}`)
          return true
        })
        const errorMessage = arrayErrors.join(" | ");
        setFlash({
          type: 'danger',
          message: errorMessage,
          display: true,
        })
      }
      console.log(response)
      closeNewRequestModal();
    })
    .catch(errors => {
      closeNewRequestModal();
      console.log(errors)
      setFlash({
        type: 'danger',
        message: "An error occured, please try again",
        display: true,
      })
    })
  }

  const emptyFormFields = () => {
    setTitle("");
    setType("");
    setLocation("");
    setLat("");
    setLong("");
    setDescription("");
  }

  const getPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
    } else {
      alert("Your browser does not support this functionality");
    }
  }

  const scrollTopComponent = () => {
    const modalTitle = document.querySelector(".new-request-modal-title");
    modalTitle.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    scrollTopComponent();
  }, []);

  return (
    <div className="new-request-modal">
      <div className="new-request-modal-overlay"></div>
      <div className="new-request-modal-white-bg">
        <div className="new-request-modal-content d-flex flex-column justify-content-between align-items-center w-100 p-4 p-md-5">
          <h2 className="new-request-modal-title text-primary fw-bold mb-5">New request</h2>
          <div className="form-container d-flex flex-grow-1 w-100">
            <form onSubmit={createRequest} className="d-flex flex-column justify-content-between w-100">
              <div>
                <div className="input mb-3">
                  <label htmlFor="title" className="mb-1">Title&nbsp;<small className="caption">(50 characters max)</small></label>
                  <input type="text" className="form-control" id="title" aria-describedby="title input field" placeholder="Title" minLength="2" maxLength="50" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="input my-3 d-flex flex-column">
                  <label htmlFor="type" className="mb-1">Type</label>
                  <select className="select-form-control" value={type} onChange={(e) => setType(e.target.value)} required>
                    <option value="" className="text-primary" disabled="disabled">-- Please choose a type --</option>
                    <option value='material'>Material</option>
                    <option value='service'>Service</option>
                  </select>
                </div>
                <div className="input my-3">
                  <label htmlFor="location" className="mb-1">Location</label>
                  <input type="text" className="form-control" id="location" aria-describedby="Location input field" placeholder="Location" minLength="2" maxLength="50" value={location} onChange={(e) => setLocation(e.target.value)} required />
                </div>
                <div className="geo-position-section d-flex flex-column my-4">
                  <h5 className="mb-2">Geographical coordinates</h5>
                  <div className="d-flex flex-column flex-md-row mb-0 mb-md-3">
                    <div className="input mb-3 mb-md-0 me-0 me-md-2">
                      <label htmlFor="latitude" className="mb-1">Latitude&nbsp;<small className="caption">[-90; +90]°</small></label>
                      <input type="number" className="form-control" id="latitude" aria-describedby="latitude input field" min="-90" max="90" step="0.00001" placeholder="Latitude" value={lat} onChange={(e) => setLat(e.target.value)} required />
                    </div>
                    <div className="input mb-3 mb-md-0 ms-0 ms-md-2">
                      <label htmlFor="longitude" className="mb-1">Longitude&nbsp;<small className="caption">[-180; +180]°</small></label>
                      <input type="number" className="form-control" id="longitude" aria-describedby="longitude input field" min="-180" max="180" step="0.00001" placeholder="Longitude" value={long} onChange={(e) => setLong(e.target.value)} required />
                    </div>
                  </div>
                  <button type="reset" className="btn button-outline-primary button-w150 p-1" onClick={() => getPosition()}>Use my position</button>
                </div>
                <div className="input my-4">
                  <label htmlFor="description" className="mb-1">Description&nbsp;<small className="caption">(300 characters max)</small></label>
                  <textarea type="text" className="form-control" id="description" aria-describedby="Description input field" minLength="10" maxLength="300" rows="5" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Explain precisely what your need is here...." required />
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-md-center mt-4">
                <button type="submit" className="btn button-success button-modal me-0 me-md-2 mb-3 mb-md-0 p-1">Create request</button>
                <button type="reset" className="btn button-warning button-modal ms-0 ms-md-2 p-1" onClick={() => closeNewRequestModal()}>Back</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRequestModal;