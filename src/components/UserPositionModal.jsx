// CONFIG IMPORTS
import React, { useEffect, useState, useContext } from 'react';

// CONTEXT IMPORTS
import FlashContext from './Context/FlashContext';
import UserContext from './Context/UserContext';

// DATA IMPORTS
import baseURL from '../data/BaseURL';

const UserPositionModal = () => {
  const { setFlash } = useContext(FlashContext);
  const { user, setUser } = useContext(UserContext);

  const { id, position } = user;

  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");

  // const closeUserPositionModal = () => {
  //   const userPositionModal = document.querySelector(".user-position-modal");
  //   userPositionModal.style.visibility = "hidden";
  //   document.querySelector("body").classList.remove("clicked");
  // }

  const sharePosition = (e) => {
    e.preventDefault();
    
    var form_data = new FormData();
 
    var position = JSON.stringify({lat: 100, lng: 122});
    form_data.append('position_attributes', position);


    const url = `${baseURL}/users/${id}`;
    
    const token = localStorage.getItem('jwt_token');

    fetch(url, {
      method: "PUT",
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      body: form_data,
    })
    .then(response => {
      // console.log(response);
      return response.json()
    })
    .then(response => {
      // console.log(response);
      if (response.user) {
        localStorage.setItem('user', JSON.stringify(response.user));
        console.log(response)
        setUser(response.user);
        setFlash({
          type: 'success',
          message: "Profile updated successfully",
          display: true,
        })
      } else {
        console.log(response)
        setFlash({
          type: 'danger',
          message: response.error,
          display: true,
        })
      }
      // closeEditProfileModal();
    })
    .catch(error => {
      // closeEditProfileModal();
      setFlash({
        type: 'danger',
        message: error,
        display: true,
      })
    })
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
    const modalTitle = document.querySelector(".user-position-modal-title");
    modalTitle.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    scrollTopComponent();
  }, []);

  return (
    <div className="user-position-modal">
      <div className="user-position-modal-overlay"></div>
      <div className="user-position-modal-white-bg">
        <div className="user-position-modal-content d-flex flex-column justify-content-between align-items-center w-100 p-4 p-md-5">
          <h2 className="user-position-modal-title text-primary fw-bold mb-5">Set up your position/location</h2>
          <div className="form-container d-flex flex-grow-1 w-100">
            <form onSubmit={sharePosition} className="d-flex flex-column justify-content-between w-100">
              <div>
                <div className="input mb-3">
                  <label htmlFor="title" className="mb-1">Title&nbsp;<small className="caption">(50 characters max)</small></label>
                  {/* <input type="text" className="form-control" id="title" aria-describedby="title input field" placeholder="Title" minLength="2" maxLength="50" value={title} onChange={(e) => setTitle(e.target.value)} required /> */}
                </div>

                <div className="geo-position-section d-flex flex-column my-4">
                  <h5 className="mb-2">Geographical coordinates</h5>
                  <div className="d-flex flex-column flex-md-row mb-0 mb-md-3">
                    <div className="input mb-3 mb-md-0 me-0 me-md-2">
                      <label htmlFor="latitude" className="mb-1">Latitude</label>
                      <input type="number" className="form-control" id="latitude" aria-describedby="latitude input field" placeholder="Latitude" value={lat} onChange={(e) => setLat(e.target.value)} required />
                    </div>
                    <div className="input mb-3 mb-md-0 ms-0 ms-md-2">
                      <label htmlFor="longitude" className="mb-1">Longitude</label>
                      <input type="number" className="form-control" id="longitude" aria-describedby="longitude input field" placeholder="Longitude" value={long} onChange={(e) => setLong(e.target.value)} required />
                    </div>
                  </div>
                  <button type="reset" className="btn button-outline-primary button-w150 p-1" onClick={() => getPosition()}>Use my position</button>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-md-center mt-4">
                <button type="submit" className="btn button-success button-modal me-0 me-md-2 mb-3 mb-md-0 p-1">Share position</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPositionModal;